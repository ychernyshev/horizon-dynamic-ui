export function renderTemplate(template, config) {
  return template.replace(/\{(\w+)\}/g, (_, key) => config[key] || '');
}
