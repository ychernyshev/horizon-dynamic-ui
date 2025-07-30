export class Dispatcher {
    constructor(storage = window.localStorage, prefix = "horizon:") {
        this.storage = storage;
        this.prefix = prefix;
        this.listeners = {};
    }

    _key(key) {
        return `${this.prefix}${key}`;
    }

    set(key, value) {
        this.storage.setItem(this._key(key), JSON.stringify(value));
        this.emit(key, value);
    }

    get(key) {
        const item = this.storage.getItem(this._key(key));
        return item ? JSON.parse(item) : null;
    }

    clear(key) {
        this.storage.removeItem(this._key(key));
        this.emit(key, null);
    }

    subscribe(key, callback) {
        if (!this.listeners[key]) this.listeners[key] = [];
        this.listeners[key].push(callback);
    }

    unsubscribe(key, callback) {
        if (!this.listeners[key]) return;
        this.listeners[key] = this.listeners[key].filter(fn => fn !== callback);
    }

    emit(key, value) {
        if (this.listeners[key]) {
            this.listeners[key].forEach(cb => cb(value));
        }
    }

    hydrate(key) {
        const value = this.get(key);
        if (value !== null) this.emit(key, value);
    }
}

// dispatcher.renderPolicy = {
//     entriesList: false,
//     showEntry: false,
//     editEntry: true
// };


export const dispatcher = new Dispatcher();
