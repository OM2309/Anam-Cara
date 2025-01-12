import axios from "axios";

// Get your Spotify client credentials from environment variables
const SPOTIFY_CLIENT_ID = "dfddc905cba44715a6d69096097176c2";
const SPOTIFY_CLIENT_SECRET = "924f3f25f1ec427d9c559926b872b59a";

// Helper function to get Spotify access token
const getSpotifyAccessToken = async () => {
  const auth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

export async function GET() {
  try {
    const accessToken = await getSpotifyAccessToken();
    console.log("Access token", accessToken);
    const spotifyResponse = await axios.get(
      "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n ",
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
