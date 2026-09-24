import { githubFetch } from "/mnt/drive9/skills/github-integration/reliability.js";

// Fetch all repositories for the authenticated user
const repos = await githubFetch("/user/repos?per_page=100&type=all&sort=updated");

console.log(`\n📦 Found ${repos.length} repositories:\n`);

repos.forEach((repo, index) => {
  const visibility = repo.private ? "🔒 Private" : "🌐 Public";
  const stars = repo.stargazers_count > 0 ? `⭐ ${repo.stargazers_count}` : "";
  const language = repo.language ? `[${repo.language}]` : "";
  
  console.log(`${index + 1}. ${repo.full_name} ${visibility} ${language} ${stars}`);
  console.log(`   ${repo.html_url}`);
  if (repo.description) {
    console.log(`   📝 ${repo.description}`);
  }
  console.log();
});
