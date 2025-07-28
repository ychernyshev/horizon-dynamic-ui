[україномовна версія](CHANGELOG.md)

# 📦 Changelog — Horizon Dynamic UI

> Horizon is a JavaScript micro-framework for building dynamic UI without build tools, backend, or npm.  
> 
> *“Let`s go improvise on your stage”*

---

## [0.1.6] — 2025-07-23

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

## [0.1.7] - 2025.07.26

### Added
- Core `Dispatcher` for operations: `.dispatch()`, `.subscribe()`, `.get()`, `.set()`, `.fetch()`
- Foundational scene lifecycle structure with initial support for `onMount()`
- Delegated scene mounting via `SceneEngine.js` (`SceneManager.mountScene()`)
- Declarative template rendering mechanism via `renderTemplate.js`

### Changed
- `PanelManager` → `SceneManager`: now the main orchestrator of scene lifecycle
- Scene registration logic moved from `SceneManager.js` → `SceneRegistry.js`
- `LayoutRegistry.js` → `LayoutRegistryScheme.js` for structured layout schemas
- `ComponentRegistry.js` → `LayoutRegistryComponents.js` for tracking UI components

### Notes
- `SceneManager` listens for the `"go"` command from the scene via `onMount()` before triggering the Dispatcher
- HTML rendering within scenes is now initialized through the `template()` call, enabling declarative scene structure  
  The previous scene definition approach using  
  `mount(params = {}) { container.innerHTML = `\`...\` `}`  
  remains available as an alternative way to build scenes

  ---

## [0.1.9] - 2025-07-28

### ✨ Dispatcher Updates
- Added support for `clear`, `unsubscribe`, and `hydrate` listeners
- Enhanced flexibility and control across components

### 📝 Notes Module
- Implemented entry creation and rendering from `localStorage`
- UI dynamically reflects stored data without manual reload

  ---