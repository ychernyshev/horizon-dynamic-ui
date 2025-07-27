export const DebugCatch = {
    debugLogs: {
        error: [],
        warn: [],
        info: [],
        log: [],
    },

    init() {
        const originalError = console.error;
        console.error = function (...args) {
            DebugCatch.devLogs.error.push(args.join(" "));
            originalError.apply(console, args);
        };

        const originalWarn = console.warn;
        console.warn = function (...args) {
            DebugCatch.debugLogs.warn.push(args.join(" "));
            originalWarn.apply(console, args);
        };

        const originalInfo = console.info;
        console.info = function (...args) {
            DebugCatch.debugLogs.info.push(args.join(" "));
            originalInfo.apply(console, args);
        };

        const originalLog = console.log;
        console.log = function (...args) {
            DebugCatch.debugLogs.log.push(args.join(" "));
            originalLog.apply(console, args);
        };

        window.onerror = (message, source, lineno, colno, error) => {
            DebugCatch.debugLogs.error.push(`${message} at ${source}:${lineno}:${colno}`);
        };
    },
};
