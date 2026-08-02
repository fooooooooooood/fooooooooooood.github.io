import { getAllLyrics } from "@/utils/lyrics";
import LyricsGame from "@/components/LyricsGame";

export default function LyricsPage() {
  const songs = getAllLyrics();

  return (
    <div className="w-full">
      {songs.length > 0 ? (
        <LyricsGame songs={songs} />
      ) : (
        <div className="text-center py-20 animate-fadeIn">
          <p className="text-slate-500 text-lg">
            No lyrics found. Add some `.txt` files to the `content/lyrics` folder to start playing!
          </p>
        </div>
      )}
    </div>
  );
}
