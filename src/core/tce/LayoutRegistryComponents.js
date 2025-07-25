// Pages
import { Page_404_View } from "../../pages/reports/Page_404_View.js";
import { WelcomeScene } from "../../pages/WelcomeScene.js";

// Components
import { QuickDocs } from "../../pages/docs/QuickDocs.js";
import { CodeBlock } from "../../components/CodeBlock.js";
import { ExamplesList } from "../../components/ExamplesList.js";
import { AddEntry } from "../../components/AddEntry.js";
import { Footer } from "../../components/Footer.js";

export class LayoutRegistryComponents {
    static
    ComponentMap = Object.freeze({
        // sceneName
        Page404: Page_404_View,
        WelcomeView: WelcomeScene,
        // componentName
        QuickDocs,
        CodeBlock,
        ExamplesList,
        AddEntry,
        Footer,
    });
}