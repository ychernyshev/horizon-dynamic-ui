export const SceneDispatcher = {
  listeners: {},
  store: {},
  log: [],

  set(key, value) {
    this.store[key] = value;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  },

  get(key) {
    if (key in this.store) return this.store[key];

    try {
      const item = localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        this.store[key] = parsed;
        return parsed;
      }
    } catch (e) {}
    return null;
  },

  dispatch(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(fn => fn(data));
    }
  },

  subscribe(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
};
