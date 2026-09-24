import { githubFetch } from "/mnt/drive9/skills/github-integration/reliability.js";

const repos = await githubFetch("/user/repos?per_page=11&type=all");
console.log(JSON.stringify(repos.map(r => ({
  name: r.name,
  full_name: r.full_name,
  private: r.private,
  html_url: r.html_url
})), null, 2));