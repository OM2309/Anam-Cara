import axios, { AxiosResponse } from "axios";

const SPOTIFY_CLIENT_ID: string =
  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
const SPOTIFY_CLIENT_SECRET: string =
  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || "";

// Instead of throwing an error, we'll handle missing credentials more gracefully
const checkCredentials = () => {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    console.error("Missing Spotify API credentials in environment variables");
    return false;
  }
  return true;
};

let spotifyToken: string | null = null;
let tokenExpiry: number = 0;

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const fetchSpotifyAccessToken = async (): Promise<string> => {
  if (!checkCredentials()) {
    throw new Error("Spotify credentials not properly configured");
  }

  const auth: string = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response: AxiosResponse<SpotifyTokenResponse> = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, expires_in } = response.data;
    spotifyToken = access_token;
    tokenExpiry = Date.now() + expires_in * 1000;

    return spotifyToken;
  } catch (error) {
    console.error("Error fetching Spotify access token:", error);
    throw new Error("Failed to fetch Spotify access token");
  }
};

export const getSpotifyAccessToken = async (): Promise<string> => {
  if (spotifyToken && Date.now() < tokenExpiry) {
    return spotifyToken;
  }
  return await fetchSpotifyAccessToken();
};
