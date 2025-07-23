export function useHighlight() {
    if (window.Prism && typeof Prism.highlightAll === "function") {
        Prism.highlightAll();
    } else {
        console.warn("[useHighlight] Prism не доступний або ще не завантажений");
    }
}