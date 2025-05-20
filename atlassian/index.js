console.log("Torching Atlassian AI 🔥");

const removeAll = (selector) => {
  document.querySelectorAll(selector).forEach((node) => node.remove());
};

// Extension state
let intervalHandle = null;
let documentIsVisible = document.visibilityState === "visible";

const torch = () => {
  if (documentIsVisible) {
    intervalHandle = window.setInterval(() => {
      document.querySelectorAll(".acronym-highlight").forEach((node) => {
        node.removeAttribute("style");
      });

      removeAll('[aria-label="AI"]');
      removeAll('[aria-label="Quick comments"]');
      removeAll('[data-testid="issue-smart-request-summary.ui.ai-container"]');
      removeAll('[data-testid="atlassian-intelligence-toolbar-button"]');
      removeAll('[data-testid="contextual-pulse-none"]');
      removeAll('[data-testid="contextual-pulse-single"]');
      removeAll('[data-testid="contextual-pulse-double"]');
      removeAll(
        '[data-testid="atlassian-navigation.ui.conversation-assistant.app-navigation-ai-mate"]'
      );
      removeAll('[data-testid="app-navigation-ai-mate"]');
    }, 500);
  } else if (intervalHandle !== null) {
    window.clearInterval(intervalHandle);
    intervalHandle = null;
  }
};

document.addEventListener("visibilitychange", () => {
  documentIsVisible = document.visibilityState === "visible";
  torch();
});

torch();
