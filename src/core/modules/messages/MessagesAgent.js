export class MessagesAgent {
    constructor() {
        this.queue = [];
        this.container = null;
        this.init();
    }

    init() {
        this.container = document.querySelector('#horizon-messages');
        if (!this.container) {
            console.warn('[MessagesAgent] Container #horizon-messages not found - component not mounted.');
        }
    }

    success(msg) {
        this._add('success', msg);
    }

    warning(msg) {
        this._add('warning', msg);
    }

    error(msg) {
        this._add('error', msg);
    }

    info(msg) {
        this._add('info', msg);
    }

    _add(type, text) {
        const id = `msg-${Date.now()}`;
        const node = document.createElement('div');
        node.textContent = `${type.toUpperCase()}: ${text}`; // ← чітке повідомлення

        if (this.container) {
            this.container.appendChild(node); // ← просто вставляється як div з текстом
        }

        this.queue.push({id, type, text});
    }
}