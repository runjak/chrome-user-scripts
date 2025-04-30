console.log("Torching Atlassian AI 🔥");

const removeAll = (selector) => {
  document.querySelectorAll(selector).forEach((node) => node.remove());
};

window.setInterval(() => {
  document.querySelectorAll(".acronym-highlight").forEach((node) => {
    node.removeAttribute("style");
  });

  removeAll('[aria-label="AI"]');
  removeAll('[aria-label="Quick comments"]');
  removeAll('[data-testid="issue-smart-request-summary.ui.ai-container"]');
  removeAll('[data-testid="atlassian-intelligence-toolbar-button"]');
  removeAll('[data-testid="contextual-pulse-none"]');
}, 500);
