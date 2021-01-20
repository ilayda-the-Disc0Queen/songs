import React from 'react';
import { selectSong } from '../actions'; // if you don't specift it assumes file is index.js
import SongList from './SongList';

const App = () => {
  return (
    <div>
      <SongList/>
    </div>
  );
};

export default App;
