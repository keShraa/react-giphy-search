import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200.webp`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
