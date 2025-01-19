"use client";
import useStore from "@/store/playTrack";
import React from "react";

const SpotifyIframe = () => {
  // Get the selected track ID from the Zustand store
  const { selectedTrackId } = useStore();

  return (
    <div className="flex justify-center items-center mt-6">
      {selectedTrackId ? (
        <div className="relative w-full max-w-[400px] rounded-xl overflow-hidden shadow-lg bg-black/40 p-2">
          <iframe
            src={`https://open.spotify.com/embed/track/${selectedTrackId}`}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-white text-lg">Select a track to play</p>
          <div className="mt-4 text-gray-500">
            <p>Click on a track from the playlist to start listening</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyIframe;
