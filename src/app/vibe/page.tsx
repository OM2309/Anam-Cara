import { PlaylistAdd } from "@/components/playlist-add";
import SpotifyIframe from "@/components/spotifyIframe";
const Vibe = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <SpotifyIframe />
      </div>
     
          <div className="">
        <PlaylistAdd />
      </div>
    </div>
  );
};

export default Vibe;
