// Copy a swatch's hex code on click.
const toast = document.querySelector(".toast");
let toastTimer;

function showToast(hex) {
  toast.innerHTML = `Copied <code>${hex}</code>`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers without the async clipboard API
    const field = document.createElement("textarea");
    field.value = text;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

for (const swatch of document.querySelectorAll(".swatch")) {
  const hex = swatch.dataset.hex;
  const name = swatch.querySelector(".swatch-name").textContent;
  const label = swatch.querySelector(".swatch-copy");
  let resetTimer;

  swatch.setAttribute("aria-label", `Copy ${name} hex code ${hex}`);
  swatch.addEventListener("click", async () => {
    if (!(await copyText(hex))) return;
    swatch.classList.add("copied");
    label.textContent = "Copied";
    showToast(hex);
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      swatch.classList.remove("copied");
      label.textContent = "Copy hex";
    }, 1600);
  });
}

// Highlight the section currently in view in the side index.
const sections = [...document.querySelectorAll(".section")];
const tocLinks = [...document.querySelectorAll(".toc a")];

function updateToc() {
  const line = window.innerHeight * 0.35;
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let current = sections[0].id;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= line) current = section.id;
  }
  if (atBottom) current = sections.at(-1).id;

  for (const link of tocLinks) {
    link.setAttribute("aria-current", link.hash === `#${current}` ? "true" : "false");
  }
}

let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateToc();
      ticking = false;
    });
  },
  { passive: true },
);
window.addEventListener("resize", updateToc);
updateToc();
