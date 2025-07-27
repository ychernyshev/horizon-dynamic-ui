import { DebugCatch } from "./DebugCatch.js";

export function DebugView() {
  const { error, warn, info, log } = DebugCatch.debugLogs;

  document.open();
  document.write(`
    <html>
      <head>
        <title>🛠Horizon Dynamic UI Debugger</title>
        <style>
          body {
            font-family: monospace;
            font-size: 1rem;
            padding: 2rem;
            color: #e0e0e0;
          }
          h1 {
            color: #FF6B6B;
          }
          .section {
            margin-top: 2rem;
          }
          .msg {
            background: #1e1e1e;
            padding: 0.5rem;
            border-radius: 5px;
            margin-top: 0.5rem;
            white-space: pre-wrap;
            border-left: 4px solid;
          }
          .error { border-color: #FF6B6B; }
          .warn  { border-color: #FFD166; }
          .info  { border-color: #00BFFF; }
          .log   { border-color: #888; }
        </style>
      </head>
      <body class="bg-gray-100">
        <h1>📋 Horizon Dynamic UI Debugger</h1>

        ${renderSection("error", error)}
        ${renderSection("warn", warn)}
        ${renderSection("info", info)}
        ${renderSection("log", log)}
      </body>
    </html>
  `);
  document.close();
}

function renderSection(label, entries) {
  if (!entries.length) return "";
  return `
    <div class="section">
      <h2>${label.toUpperCase()} [${entries.length}]</h2>
      ${entries.map(msg => `<div class="msg ${label}">${escapeHtml(msg)}</div>`).join("")}
    </div>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
