import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    // this.props === { songs: state.songs }
    return <div>SongList</div>;
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





export default connect(mapStateToProps)(SongList);
