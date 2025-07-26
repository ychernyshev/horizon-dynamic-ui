export const Footer = {
    mount(params = {}) {
        const container = document.getElementById("footer");
        const currentYear = new Date().getFullYear();

        if (!container) {
            console.warn("[Footer] Container #footer not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <footer class="text-center">
              <p>Built with Horizon Dynamic UI · Improvise on your own stage</p>
              <p>
                ${ currentYear }. Developing with 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>
                by <a href="#developer"><b>Yevhenii Chernyshev</b></a> for a simplify coding.
                <a href="https://github.com/ychernyshev/horizon-dynamic-ui/blob/main/LICENSE" target="_blank">MIT License</a>
                </p>
            </footer>
        `
    }
}