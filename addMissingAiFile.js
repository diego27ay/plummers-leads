const fs = require('fs').promises;
const path = require('path');

(async function addMissingAiFile() {
  const baseDir = path.resolve(__dirname);
  const assetsDir = path.join(baseDir, 'assets', 'images');
  const placeholderName = 'placeholder.ai';
  const placeholderPath = path.join(assetsDir, placeholderName);
  const placeholderLines = [
    '%PDF-1.5',
    '%????',
    '1 0 obj',
    '<< /Type /Catalog /Pages 2 0 R >>',
    'endobj',
    '2 0 obj',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    'endobj',
    '3 0 obj',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>',
    'endobj',
    '4 0 obj',
    '<< /Length 44 >>',
    'stream',
    'BT /F1 24 Tf 100 700 Td (Placeholder AI file) Tj ET',
    'endstream',
    'endobj',
    'xref',
    '0 5',
    '0000000000 65535 f ',
    '0000000010 00000 n ',
    '0000000053 00000 n ',
    '0000000100 00000 n ',
    '0000000178 00000 n ',
    'trailer',
    '<< /Size 5 /Root 1 0 R >>',
    'startxref',
    '260',
    '%%EOF'
  ];
  const placeholderContent = placeholderLines.join('\n');
  const placeholderBuffer = Buffer.from(placeholderContent, 'latin1');

  try {
    await fs.mkdir(assetsDir, { recursive: true });
    const entries = await fs.readdir(assetsDir);
    const aiFiles = entries.filter(f => path.extname(f).toLowerCase() === '.ai');
    if (aiFiles.length === 0) {
      await fs.writeFile(placeholderPath, placeholderBuffer);
      console.log(`Added missing AI file: ${placeholderName}`);
    } else {
      console.log('AI file(s) already present:', aiFiles.join(', '));
    }
  } catch (err) {
    console.error('Error in addMissingAiFile:', err);
    throw err;
  }
})();