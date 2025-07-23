export const LayoutRegistry = {
    page_404: {
        primary_structure: ``,
        layout: ["Page404"],
        config: {
            Page404: {title: '404. Page not found'},
        },
    },
    welcome_view: {
        primary_structure: `
                <main>
                  <section id="welcome-block"></section>
                </main>
            `,
        layout: ["WelcomeView", "QuickDocs", "CodeBlock", "ExamplesList", "Footer"],
        config: {
            WelcomeView: {
                title: "Horizon Dynamic UI",
                subtitle: "Your scene-driven front-end engine",
                version: "v0.9.0 Beta",
                tagline: "Pure JS. No build. Host-ready.",
                CTA: "View Documentation → #docs"
            },
            QuickDocs: {
                links: [
                    {label: "📘 What is Horizon?", href: "#docs"},
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