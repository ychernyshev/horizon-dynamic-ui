export class Routing {
    constructor() {
        this.routes = {};
    }

    add(path, renderFunction) {
        this.routes[path] = renderFunction;
    }

    init() {
        window.addEventListener("hashchange", () => this.handleRoute());
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash.slice(1);
        const route = this.routes[hash];

        if(route) {
            route();
        } else {
            this.routes["page_404"]?.();
        }
    }

    navigate(path) {
        window.location.hash = path;
    }
}