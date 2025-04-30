window.setTimeout(() => {
  console.log("Hello Fiona. Let us burn down some AI 🔥");
  document.querySelectorAll(".acronym-highlight").forEach((node) => {
    node.removeAttribute("style");
  });
  document
    .querySelectorAll('[aria-label="AI"]')
    .forEach((node) => node.remove());
}, 1_000);
