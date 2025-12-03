// src/store.ts
type Listener = (track: string | null) => void;

interface AudioState {
  currentTrack: string | null;
  isPlaying: boolean;
  listeners: ((state: { currentTrack: string | null; isPlaying: boolean }) => void)[];
}

const audioState: AudioState = {
  currentTrack: null,
  isPlaying: false,
  listeners: [],
};

const notifyListeners = () => {
  for (const listener of audioState.listeners) {
    listener({ currentTrack: audioState.currentTrack, isPlaying: audioState.isPlaying });
  }
};

export const audioPlayer = {
  subscribe(listener: (state: { currentTrack: string | null; isPlaying: boolean }) => void) {
    audioState.listeners.push(listener);
    listener({ currentTrack: audioState.currentTrack, isPlaying: audioState.isPlaying }); // Immediately notify
    return () => { // Unsubscribe function
      const index = audioState.listeners.indexOf(listener);
      if (index > -1) audioState.listeners.splice(index, 1);
    };
  },
  
  setTrack(track: string) {
    if (audioState.currentTrack === track) {
      // If it's the same track, toggle play/pause
      audioState.isPlaying = !audioState.isPlaying;
    } else {
      // If it's a new track, start playing it
      audioState.currentTrack = track;
      audioState.isPlaying = true;
    }
    notifyListeners();
  },

  pause() {
    audioState.isPlaying = false;
    notifyListeners();
  }
};
