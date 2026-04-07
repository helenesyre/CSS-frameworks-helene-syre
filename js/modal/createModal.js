const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const onMindOpenBtn = document.getElementById("onMindOpenBtn");
const closeBtn = document.getElementById("closeBtn");
const postBtn = document.getElementById("postBtn");
const modalBackground = document.getElementById("createModal");
const postContent = document.getElementById("post-content");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
onMindOpenBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  postContent.value = "";
});
postBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  postContent.value = "";
});

// Close when clicking outside the modal content
modal.addEventListener("click", (event) => {
  if (event.target === modalBackground) {
    modal.classList.add("hidden");
    postContent.value = "";
  }
});
