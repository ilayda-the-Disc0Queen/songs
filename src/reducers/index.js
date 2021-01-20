import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
  { title: 'No Scrubs', duration: '4:03' },
  { title: 'Body', duration: '3:40' },
  { title: 'Pick Up Your Feelings', duration: '3:23' },
  { title: 'Gabby', duration: '6:10' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
