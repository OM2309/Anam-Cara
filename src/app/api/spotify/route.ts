import { getSpotifyAccessToken } from "@/service/spotifyService";
import axios from "axios";
export async function GET() {
  try {
    const accessToken = await getSpotifyAccessToken();

    const spotifyResponse = await axios.get(
      "https://api.spotify.com/v1/playlists/3pglrl7LFZjcm0Hfnb4FVz ",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Send Spotify data back to the client
    return new Response(JSON.stringify(spotifyResponse.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching data from Spotify:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Spotify" }),
      { status: 500 }
    );
  }
}
