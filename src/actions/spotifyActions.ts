import axios from "axios";
import { getSpotifyAccessToken } from "@/service/spotifyService";

const SPOTIFY_API_BASE_URL: string =
  process.env.SPOTIFY_API_BASE_URL || "https://api.spotify.com/v1";

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: Array<{ url: string }>;
  tracks: {
    total: number;
    items: Array<any>;
  };
}

export const getSpotifyPlaylistById = async (
  playlistId: string
): Promise<SpotifyPlaylist> => {
  const accessToken = await getSpotifyAccessToken();
  try {
    const response = await axios.get(
      `${SPOTIFY_API_BASE_URL}/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Spotify playlist:", error);
    throw new Error("Error fetching Spotify playlist");
  }
};
