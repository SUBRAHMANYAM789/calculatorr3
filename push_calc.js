import { githubFetch } from "/mnt/drive9/skills/github-integration/reliability.js";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const owner = "SUBRAHMANYAM789";
const repo = "calculatorr3";
const branch = "main";
const commitMessage = "Initial commit of calculator project";

async function getRef() {
  const res = await githubFetch(`/repos/${owner}/${repo}/git/ref/heads/${branch}`);
  if (!res.object) {
    // branch may not exist, create it from default branch
    const defaultRef = await githubFetch(`/repos/${owner}/${repo}/git/ref/heads/${branch}`);
    return defaultRef.object.sha;
  }
  return res.object.sha;
}

async function createBlob(content) {
  const res = await githubFetch(`/repos/${owner}/${repo}/git/blobs`, {
    method: "POST",
    body: JSON.stringify({
      content: content,
      encoding: "utf-8"
    })
  });
  return res.sha;
}

async function createTree(baseTreeSha, files) {
  const tree = [];
  for (const f of files) {
    const content = readFileSync(f.fullPath, "utf8");
    const blobSha = await createBlob(content);
    tree.push({ path: f.relativePath, mode: "100644", type: "blob", sha: blobSha });
  }
  const res = await githubFetch(`/repos/${owner}/${repo}/git/trees`, {
    method: "POST",
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: tree
    })
  });
  return res.sha;
}

async function createCommit(parentSha, treeSha) {
  const res = await githubFetch(`/repos/${owner}/${repo}/git/commits`, {
    method: "POST",
    body: JSON.stringify({
      message: commitMessage,
      tree: treeSha,
      parents: [parentSha]
    })
  });
  return res.sha;
}

async function updateRef(newSha) {
  await githubFetch(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
    method: "PATCH",
    body: JSON.stringify({
      sha: newSha,
      force: true
    })
  });
}

function collectFiles(dir, base) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...collectFiles(fullPath, base));
    } else {
      const relativePath = join(base, entry);
      files.push({ fullPath, relativePath });
    }
  }
  return files;
}

(async () => {
  try {
    const baseSha = await getRef();
    const files = collectFiles("calculator", "");
    const treeSha = await createTree(baseSha, files);
    const commitSha = await createCommit(baseSha, treeSha);
    await updateRef(commitSha);
    console.log("Push succeeded. Commit SHA:", commitSha);
  } catch (e) {
    console.error("Error during push:", e);
    process.exit(1);
  }
})();
