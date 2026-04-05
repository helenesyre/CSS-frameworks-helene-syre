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
  <nav class="mx-auto flex items-center justify-between">
    <a href="/feed/index.html">${logo}</a>
    <form class="relative" onsubmit="event.preventDefault(); event.target.search.value = '';">
      <i data-lucide="search" class="icon absolute left-3 top-1/2 -translate-y-1/2 text-muted" stroke-width="1.5"></i>
      <input
        type="text"
        placeholder="Search threads..."
        id="search-input"
        name="search"
        aria-label="Search threads"
        class="w-64 rounded-default bg-surface border border-border px-4 py-2.5 pl-10 text-sm text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple"
      />
    </form>
    <ul class="flex items-center space-x-4">
      <li>
        <button class="btn-icon">
          <i data-lucide="bell-ring" class="icon" stroke-width="1.5"></i>
        </button>
      </li>
      <li>
        <a href="/profile/index.html"><img src="../assets/images/profile.jpg" alt="Profile image"
          class="border-purple size-10 rounded-full border object-cover"/></a>
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
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

renderNav();
