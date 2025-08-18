export const RegistryLayoutScheme = {
    page_404: {
        primary_structure: ``,
        layout: ["Page404"],
        config: {
            Page404: {title: '404. Page not found'},
        },
    },
    guide: {
        primary_structure: `
            <div class="container" id="guide-container"></div>
            <div class="container" id="entries-list" style="display: none"></div>
            <div class="container" id="edit-entry" style="display: none;"></div>
            <div class="container" id="add-entry" style="display: none;"></div>
            <div id="horizon-messages" style="display: none"></div>
        `,
        layout: [
            "GuideMain", "GuideNavigation", "GuideMenuItem", "GuideDescription",
            "CodeBlock", "AddEntry", "EntriesList", "EditEntry"
        ],
        config: {
            GuideMain: {
                title: "Horizon Dynamic UI",
                name: "title",
            },
        },
        linkHref: ["https://unpkg.com/prismjs/themes/prism.css"],
        scriptSrc: ["https://unpkg.com/prismjs/prism.js", "https://unpkg.com/prismjs/components/prism-javascript.min.js"],
    },
    welcome_view: {
        primary_structure: `
                <main>
                  <section id="welcome-block"></section>
                </main>
            `,
        layout: [
            "WelcomeView", "QuickDocs", "CodeBlock",
            "ExamplesList", "AddEntry", "EntriesList",
            "EditEntry", "Footer",
        ],
        config: {
            WelcomeView: {
                title: "Horizon Dynamic UI",
                subtitle: "Your scene-driven front-end engine",
                version: "v0.1.19 Beta",
                tagline: "Pure JS. No build. Host-ready.",
                CTA: {label: "Get Started with Horizon", link: "#guide"},
            },
            QuickDocs: {
                links: [
                    {label: "📘 What is Horizon?", href: "#guide"},
                    {label: "🚀 Creating Your First Scene", href: "#first-scene"},
                    {label: "🧩 Component Structure", href: "#components"}
                ]
            },
            CodeBlock: {
                codeSnippets: {
                    example_js: {
                        title: 'example_js',
                        language: "js",
                        content: `const msg = "Hello Horizon";`
                    },
                    example_html: {
                        title: 'example_html',
                        language: "html",
                        content: `<div id="app"></div>`
                    }
                }
            },
        },
        linkHref: ["https://unpkg.com/prismjs/themes/prism.css"],
        scriptSrc: ["https://unpkg.com/prismjs/prism.js", "https://unpkg.com/prismjs/components/prism-javascript.min.js"],
    }
}