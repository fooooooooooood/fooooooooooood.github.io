"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Song {
  name: string;
  content: string;
}

export default function LyricsGame({ songs }: { songs: Song[] }) {
  const router = useRouter();
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [songLines, setSongLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [linesShown, setLinesShown] = useState<number>(1);
  const [isRevealed, setIsRevealed] = useState(false);

  // Pick random lyric
  const pickRandom = () => {
    if (!songs || songs.length === 0) return;
    
    const song = songs[Math.floor(Math.random() * songs.length)];
    
    // Split content by lines, trim, and filter out empty lines or structure tags like [Chorus]
    const lines = song.content
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0 && !l.startsWith('['));
    
    if (lines.length === 0) return;

    // Pick a random starting line
    const startIndex = Math.floor(Math.random() * lines.length);
    
    setSongLines(lines);
    setCurrentLineIndex(startIndex);
    setLinesShown(1);
    setCurrentSong(song);
    setIsRevealed(false);
  };

  const showHint = () => {
    if (currentLineIndex + linesShown < songLines.length) {
      setLinesShown(prev => prev + 1);
    }
  };

  useEffect(() => {
    pickRandom();
  }, []);

  if (!currentSong) return null;

  const visibleLines = songLines.slice(currentLineIndex, currentLineIndex + linesShown);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fadeIn max-w-2xl mx-auto w-full px-4">
      {/* Game Card */}
      <div className="w-full bg-white/60 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl p-8 md:p-12 text-center flex flex-col items-center relative overflow-hidden transition-all duration-500">
        
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>

        <div className="mb-10 w-full">
          <p className="text-2xl md:text-3xl font-serif font-medium text-slate-800 italic leading-snug whitespace-pre-wrap">
            "{visibleLines.join('\n')}"
          </p>
        </div>

        {/* Reveal Area */}
        <div 
          className={`transition-all duration-500 transform w-full ${
            isRevealed ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 translate-y-4 h-0 overflow-hidden'
          }`}
        >
          <div className="py-4 border-t border-slate-200/60 w-full mb-6 mt-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Answer</p>
            <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-emerald-800">
              {currentSong.name}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          {!isRevealed ? (
            <>
              {currentLineIndex + linesShown < songLines.length && (
                <button 
                  onClick={showHint}
                  className="px-8 py-4 bg-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-300 transition-transform active:scale-95 shadow-sm"
                >
                  Hint 💡
                </button>
              )}
              <button 
                onClick={() => setIsRevealed(true)}
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-transform active:scale-95 shadow-md shadow-slate-900/20"
              >
                Reveal Answer
              </button>
            </>
          ) : (
            <button 
              onClick={pickRandom}
              className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-transform active:scale-95 shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              Next Lyric <span>🎲</span>
            </button>
          )}
        </div>
      </div>

      {/* End Game Button */}
      <button 
        onClick={() => router.push('/')}
        className="mt-12 text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors"
      >
        Done Playing
      </button>
    </div>
  );
}
