import { useAssets } from "../helpers/useAssets.js";

import { LayoutRegistry } from './RegistryLayoutScheme.js';

// Page imports
import { Page_404_View } from "../../pages/reports/Page_404_View.js";
import { WelcomeScene } from "../../pages/WelcomeScene.js";

// Components
import { QuickDocs } from "../../pages/docs/QuickDocs.js";
import { CodeBlock } from "../../components/CodeBlock.js";
import { ExamplesList } from "../../components/ExamplesList.js";
import { Footer } from "../../components/Footer.js";

export class PanelManager {
    const
    ComponentMap = {
        Page404: Page_404_View,
        WelcomeView: WelcomeScene,
        QuickDocs,
        CodeBlock,
        ExamplesList,
        Footer,
    };

    constructor() {
        this.root = document.getElementById("app");
    };

    mountScene(sceneName) {
        const scene = LayoutRegistry[sceneName];
        if (!scene) {
            this.mountScene("page_404");
        }

        useAssets(sceneName);

        this.root.innerHTML = scene.primary_structure || "";

        requestAnimationFrame(() => {
            scene.layout.forEach(name => {
                this.mountComponent(name, scene.config[name] || {});
            });
        });
    }

    mountComponent(name, config) {
        const component = this.ComponentMap[name];
        if(component?.mount) {
            component.mount(config);
        }
    }
}