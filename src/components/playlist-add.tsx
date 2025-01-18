"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { getSpotifyPlaylistById } from "@/actions/spotifyActions";
import { useQuery } from "@tanstack/react-query";

export function PlaylistAdd() {
  const { data } = useQuery({
    queryKey: ["spotifyPlaylist"],
    queryFn: () => getSpotifyPlaylistById("7b2z6wcfGmxkgGuGO6Jamx"),
  });

  const handlePlayTrack = (track: any) => {
    // Replace the below with your playback logic
    console.log("Playing track:", track.name);
  };

  return (
    <Card className="w-full max-w-md bg-black/30 backdrop-blur-md border-white/10 shadow-2xl rounded-xl overflow-hidden">
      <CardHeader className="space-y-1 pb-4">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 16 16" className="h-6 w-6 text-[#1DB954]">
            <path
              fill="currentColor"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.669 11.538a.498.498 0 01-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 01-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 01.166.686zm.979-2.178a.624.624 0 01-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 01-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 01.206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 11-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 11-.764 1.288z"
            />
          </svg>
          <CardTitle className="text-xl font-bold text-white">
            Import Playlist
          </CardTitle>
        </div>
        <CardDescription className="text-gray-200">
          Paste your Spotify playlist link to import songs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="https://open.spotify.com/playlist/..."
            className="flex-grow bg-black/20 border-white/10 text-white placeholder-gray-300 focus:ring-[#1DB954] focus:border-[#1DB954]"
          />
          <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold transition-colors duration-200">
            Import
          </Button>
        </div>
      </CardContent>

      <div>
        {data?.tracks?.items?.length > 0 ? (
          <div>
            {data.tracks.items.map((item, index: number) => (
              <div
                key={index}
                className="track-item px-4 flex items-center space-x-4 mb-4"
                onClick={() => handlePlayTrack(item.track)}
              >
                <Image
                  src={
                    item.track.album.images[0]?.url ||
                    "/images/default-image.jpg"
                  }
                  alt={`Album art for ${item.track.name}`}
                  width={50}
                  height={50}
                  className="rounded-lg cursor-pointer "
                />
                <div className="flex-col">
                  <h3 className="text-md font-normal">{item.track.name}</h3>
                  <p className="text-xs text-[#D0BCFF]">
                    {item.track.artists
                      .map((artist: any) => artist.name)
                      .join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center mb-4">
            <Image
              src="/images/sleep-cat.gif"
              alt="Cat"
              width={200}
              height={200}
            />
          </div>
        )}
      </div>

      <div className="flex justify-end p-4">
        <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold transition-colors duration-200">
          Invite Friends
          <Share2 />
        </Button>
      </div>
    </Card>
  );
}
