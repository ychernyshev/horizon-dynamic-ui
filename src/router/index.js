import {Dispatcher} from "../core/helpers/useDispatcher.js";

export function init(app) {
    app.routing.add("page_404", () => {
        app.sceneManager.mountScene("page_404");
    });

    app.routing.add("guide", () => {
        app.sceneManager.mountScene("guide");
    });

    app.routing.add("welcome", () => {
        app.sceneManager.mountScene("welcome_view");
    });

    app.routing.add("quickdocs", () => {
        app.sceneManager.mountScene("quick_docs");
    });

    app.routing.init();
    app.localStorage.init();
    // app.dispatcher.init();
    // const defaultTheme = localStorage.getItem("theme") || "light";
    // app.dispatcher.set("theme", defaultTheme);
    // app.sceneManager.init();
}