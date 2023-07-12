declare global {
  interface Window {
    previousPath: string;
  }
}

window.previousPath = window.previousPath || "";

export {};
