// Pages
import { Page_404_View } from "../../pages/reports/Page_404_View.js";
import { WelcomeScene } from "../../pages/WelcomeScene.js";

// Components
import { QuickDocs } from "../../pages/guide/QuickDocs.js";
import { CodeBlock } from "../../components/CodeBlock.js";
import { ExamplesList } from "../../components/ExamplesList.js";
import { AddEntry } from "../../components/entry/AddEntry.js";
import { EntriesList } from "../../components/entry/EntriesList.js";
import { EditEntry } from "../../components/entry/EditEntry.js";
import { Footer } from "../../components/Footer.js";

// Guide
import { GuideMain } from "../../pages/guide/GuideMain.js";
import { GuideNavigation } from "../../components/guide/GuideNavigation.js";
import { GuideMenuItem } from "../../components/guide/GuideMenuItem.js";
import { GuideDescription } from "../../components/guide/GuideDescription.js";

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
        EntriesList,
        EditEntry,
        Footer,
        // Guide
        GuideMain,
        GuideNavigation,
        GuideMenuItem,
        GuideDescription,
    });
}