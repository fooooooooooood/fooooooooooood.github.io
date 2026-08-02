import fs from 'fs';
import path from 'path';

export function getAllLyrics() {
  const lyricsDir = path.join(process.cwd(), 'content', 'lyrics');
  if (!fs.existsSync(lyricsDir)) return [];
  
  const files = fs.readdirSync(lyricsDir);
  return files.filter(f => f.endsWith('.txt')).map(file => {
    const content = fs.readFileSync(path.join(lyricsDir, file), 'utf8');
    const name = file.replace('.txt', '');
    return { name, content };
  });
}
