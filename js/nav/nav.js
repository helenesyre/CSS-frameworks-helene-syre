import { logo } from "./logo.js";

const publicNav = `
  <nav class="mx-auto flex items-center justify-between text-base">
    ${logo}
    <ul class="flex items-center space-x-4">
      <li><a href="#" class="text-muted">Explore</a></li>
      <li><a href="#" class="text-muted">About</a></li>
      <li>
        <button class="btn-primary">Get started</button>
      </li>
    </ul>
  </nav>
`;

const privateNav = `
  <nav class="mx-auto flex items-center justify-between text-base">
    ${logo}
    <ul class="flex items-center space-x-4">
      <li>
        <button class="btn-icon">
          <i data-lucide="bell-ring" class="icon" stroke-width="1.5"></i>
        </button>
      </li>
      <li>
        <a href="/profile/index.html"><img src="../assets/images/profile.jpg" alt="Profile image"
          class="border-purple size-10 rounded-full border object-cover" /></a>
      </li>
    </ul>
  </nav>
`;

export function renderNav() {
  const navContainer = document.getElementById("nav-container");
  const path = window.location.pathname;

  const isNotAuthPage = path.includes("profile") || path.includes("feed");
  if (isNotAuthPage) {
    navContainer.innerHTML = privateNav;
  } else {
    navContainer.innerHTML = publicNav;
  }
};

renderNav();