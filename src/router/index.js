import {Dispatcher} from "../core/helpers/useDispatcher.js";

export function init(app) {
    app.routing.add("welcome", () => {
        app.panelManager.mountScene("welcome_view")
    });

    app.routing.add("quickdocs", () => {
        app.panelManager.mountScene("quick_docs")
    });

    app.routing.add("page_404", () => {
        app.panelManager.mountScene("page_404");
    });

    app.routing.init();
    app.dispatcher.init();
    app.localStorage.init();
    Dispatcher.set("theme", localStorage.getItem("theme") || "light");
    app.renderLayout();
    app.panelManager.init();
}