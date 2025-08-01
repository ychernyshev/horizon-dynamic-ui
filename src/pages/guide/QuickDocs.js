export const QuickDocs = {
  mount(params = {}) {
    const container = document.getElementById("quick-guide");
    if (!container) return;

    const links = params.links || [];

    container.innerHTML = `
      <div class="card p-4">
        <h5 class="text-info mb-3">📚 Quick Documentation</h5>
        <ul class="list-unstyled">
          ${links.map(link => `<li><a href="${link.href}" class="text-primary">${link.label}</a></li>`).join("")}
        </ul>
      </div>
    `;
  }
};
