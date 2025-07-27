export class Dispatcher {
    constructor(storage = window.localStorage) {
        this.storage = storage;
        this.listeners = {};
    }

    init() {
    }

    set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        this.emit(key, value);
    }

    get(key) {
        const item = this.storage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    subscribe(key, callback) {
        if (!this.listeners[key]) this.listeners[key] = [];
        this.listeners[key].push(callback);
    }

    emit(key, value) {
        if (this.listeners[key]) {
            this.listeners[key].forEach(cb => cb(value));
        }
    }
}

export const dispatcher = new Dispatcher();
