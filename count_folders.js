import { githubFetch } from "/mnt/drive9/skills/github-integration/reliability.js";

const owner = "SUBRAHMANYAM789";
const repo = "calculatorr3";

async function main() {
  // Get repo info to find default branch
  const repoInfo = await githubFetch(`/repos/${owner}/${repo}`);
  const defaultBranch = repoInfo.default_branch || "main";
  // Get latest commit SHA on default branch
  const commitInfo = await githubFetch(`/repos/${owner}/${repo}/commits/${defaultBranch}`);
  const commitSha = commitInfo.sha;
  // Get recursive tree
  const treeInfo = await githubFetch(`/repos/${owner}/${repo}/git/trees/${commitSha}?recursive=1`);
  const entries = treeInfo.tree || [];
  const folderSet = new Set();
  for (const entry of entries) {
    if (entry.type === "tree") {
      folderSet.add(entry.path);
    } else if (entry.type === "blob") {
      // also add parent directories of files
      const parts = entry.path.split("/");
      for (let i = 1; i < parts.length; i++) {
        const dir = parts.slice(0, i).join("/");
        folderSet.add(dir);
      }
    }
  }
  // Ensure root counted as a folder if needed
  // folderSet.add(".");
  console.log(JSON.stringify({folderCount: folderSet.size, folders: Array.from(folderSet)}));
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
