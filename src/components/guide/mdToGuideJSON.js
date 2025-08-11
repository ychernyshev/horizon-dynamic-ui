async function fetchGuideData() {
  const indexRes = await fetch('/guide_sections/guide_index.json');
  const files = await indexRes.json();

  const guideData = [];

  for (const filename of files) {
    const res = await fetch(`/guide_sections/${filename}`);
    const content = await res.text();
    const lines = content.split('\n').filter(l => l.trim());
    const title = lines[0].replace(/^#\s+/, '');
    const body = lines.slice(1).join('\n');
    guideData.push({
      id: filename.replace('.md', ''),
      title,
      content: body
    });
  }

  localStorage.setItem("guide_data", JSON.stringify(guideData));
  console.log("📦 guide_data записано у localStorage");
}
