import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  // this.props === { songs: state.songs }
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
              >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props)
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // FUNCTION NAME IS CONVENTION
  // this means we're gonna take our state object which is
  // essentially all of the data inside our Redux store
  // and run some computation on it, which will make our data
  // show up as props inside of our component
  return { songs: state.songs };
};



// since selectSong: selectSong use IDENTICAL words, we can just write
// { selectSong }
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
