[українською](MessagesAgentPlans.md)

# 🚀 MessagesAgent Development Roadmap

## 🌱 Current Status
**Implemented:**  
Basic messaging agent with `success` and `error` types, integrated into `AddEntry` scene via LocalStorage.

---

## 🛤️ Development Stages

### 1. Scene-aware Routing
- Contextual message delivery tied to active scenes (e.g. AddEntry, EditEntry, SolarDashboard)
- Automatic cleanup of messages on scene transitions
- Custom message router, decoupled from UI-router

### 2. Reactive Queue & Agent Heartbeat
- Message queue management with prioritization
- TTL (Time to Live) per message
- Heartbeat detection for delivery confirmation or retries

### 3. Component-level Scoping & Targeting
- Scoped delivery: messages delivered only to relevant component targets
- `targetId` support for scene-local routing
- Isolation of notification flows

### 4. Custom Message Types & Appearance
- Support for types: `info`, `warning`, `system`, `debug`
- Configurable display strategy, animations, style themes
- `stacked` and `snackbar` modes

### 5. HorizonLifecycle Integration
- Message hooks for lifecycle phases: `onMount`, `onRender`, `onDispose`
- API support for lifecycle-aware notifications

---

## 🌐 Long-term Vision

### Autonomous Notification Grid
Independent messaging channels for subsystems:
- Horizon UI
- Horizon Solar
- Horizon Analytics

### Debug-as-message
Internal debugging, warnings, and resolutions rendered as messages in the Horizon UI console.

### Feedback Journal
Persistent logging of all messages as a user-interaction archive:
- For UI feedback analysis
- As part of energy or UX diaries

---

