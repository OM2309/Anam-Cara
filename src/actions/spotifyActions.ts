import axios from "axios";
import { getSpotifyAccessToken } from "@/service/spotifyService";

export const getSpotifyPlaylistById = async (playlistId: string) => {
  const accessToken = await getSpotifyAccessToken();
  try {
    const response = await axios.get(
      `${process.env.SPOTIFY_BASE_URL}/${playlistId}`,
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
