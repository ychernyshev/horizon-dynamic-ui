export const CodeBlockDock = {
    mount(config = {}) {
        const container = document.getElementById('code_block_dock');

        if (!container) {
            console.warn("[CodeBlockDock] Container #code_block_dock not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <section id="code-block"></section>
        `;
    },
    onMount() {},
}