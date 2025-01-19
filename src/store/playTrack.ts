import { create } from "zustand";

interface StoreState {
  selectedTrackId: number | null;
  setSelectedTrackId: (trackId: number) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedTrackId: null,
  setSelectedTrackId: (trackId) => set({ selectedTrackId: trackId }),
}));

export default useStore;
