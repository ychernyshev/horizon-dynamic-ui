import {useHighlight} from "../core/helpers/useHighlight.js";

export const CodeBlock = {
    mount(params = {}) {
        const container = document.getElementById("code-block");

        if (!container) {
            console.warn("[CodeBlock] Container #code-block not found - component not mounted.");
            return;
        }

        const {codeSnippets = {}} = params;

        container.innerHTML = Object.entries(codeSnippets)
            .map(([key, snippet]) => `
                <div class="card p-3 mb-3">
                    <h6 class="text-info mb-2">${snippet.title}</h6>
                    <pre class="line-numbers bg-white">
                        <code class="language-${snippet.language}">
                            ${snippet.content.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
                        </code>
                    </pre>
                </div>
            `).join("");

        setTimeout(() => {
            if (window.Prism && Prism.highlightAll) {
                useHighlight();
            }
        }, 300);
    }
}