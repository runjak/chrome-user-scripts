console.log("Hello Fiona. Let us burn down some AI 🔥");

window.setInterval(() => {
  document.querySelectorAll(".acronym-highlight").forEach((node) => {
    node.removeAttribute("style");
  });

  document
    .querySelectorAll('[aria-label="AI"]')
    .forEach((node) => node.remove());

  document
    .querySelectorAll('[aria-label="Quick comments"]')
    .forEach((node) => node.remove());

  document
    .querySelectorAll(
      '[data-testid="issue-smart-request-summary.ui.ai-container"]'
    )
    .forEach((node) => node.remove());

  document
    .querySelectorAll('[data-testid="atlassian-intelligence-toolbar-button"]')
    .forEach((node) => node.remove());

  document
    .querySelectorAll('[data-testid="contextual-pulse-none"]')
    .forEach((node) => node.remove());
}, 500);
