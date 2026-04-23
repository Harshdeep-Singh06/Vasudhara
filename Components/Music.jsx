import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

function MusicButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.log("Audio play blocked until user interacts", err);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);

    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="
          fixed z-[10000]
          top-8 right-10
          md:top-auto md:right-6 md:bottom-6
          w-10 h-10 md:w-12 md:h-12
          rounded-full
          bg-white/50 text-black
          flex items-center justify-center
          shadow-lg transition hover:scale-105
        "
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}

export default MusicButton;