[україномовна версія](CHANGELOG.md)

# 📦 Changelog — Horizon Dynamic UI

> Horizon is a JavaScript micro-framework for building dynamic UI without build tools, backend, or npm.  
> 
> *“Let`s go improvise on your stage”*

---

## 🗓️ Version 1.0.0 — Opening Scene *(July 2025)*

### 🔧 Core Refactor
- Separated framework logic from the Postman 4 template
- Established an independent core for Horizon Dynamic UI

### 🎭 Scene Architecture
- Introduced three-layer model: `structure`, `layout`, `config`
- Renamed all components from `View` to `Scene` to align with Horizon’s philosophy of UI as stage-driven

### 🧩 WelcomeScene — The First Scene
- Hero block with `title`, `subtitle`, `tagline`, and `CTA`
- Gallery of example cards (`ExamplesBlock`)
- Code showcase section (`code-block`) with syntax highlighting and line numbers
- Footer with logo, MIT license, author credit, and current year

### 📁 Helpers
- `useAssets.js` — injects scripts and styles from the scene registry
- `useHighlight.js` — activates Prism syntax highlighting after HTML insertion
- Created `core/helpers/` directory to organize framework-level functions
- Added `helpers/README.md` explaining philosophy and purpose of each helper

### 🎨 Code Highlighting
- Integrated Prism.js with `line-numbers` plugin
- Introduced `codeSnippets` format for managing multiple code blocks
- Developed `CodeBlock.js` component to render dynamic code and trigger highlighting

### 📘 Documentation & Identity
- Drafted official repository description:  
  *"Horizon Dynamic UI is a JavaScript micro-framework for building dynamic, declarative web interfaces without the need for a backend or build tools..."*
- Chose MIT License for open-source distribution
- Added footer banner: *Built with Horizon Dynamic UI · Improvise on your own stage*

---

## ⏭️ Next Steps

- Add `version.js` for centralized version management
- Create `DocsIntroScene` — a visual introduction to Horizon’s philosophy
- Prepare `Scenes.md`, `DeveloperExperience.md`, `Why Horizon.md`
- Develop additional helpers: `useCopy()`, `useFont()`, `useSEO()`

---