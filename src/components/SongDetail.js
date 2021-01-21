import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  // instead of having props you can destructure our 1 property
  // so you avoid writing props.song.title etc
  if (!song) {
    return <div>Select a song!</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }

};

export default connect(mapStateToProps)(SongDetail);
