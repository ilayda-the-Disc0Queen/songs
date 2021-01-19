// Action creator
export const selectSong = song => {
  // Return an action
  return {
    // type is required
    type: 'SONG_SELECTED',
    payload: song
  };
};

// above is called a named export
