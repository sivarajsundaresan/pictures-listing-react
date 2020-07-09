import React, { Component } from 'react'
import { connect } from 'react-redux';
import './styles.css';

import { loadImages } from '../../actions';
import Stats from '../stats/Stats';

class ImageList extends Component {

  componentDidMount() {
    this.props.loadImages();
    }

  render() {
    const { images, error, imageStats } = this.props;
    return (
      <div className='content'>
        <div className='grid'>
          {images.map(image => (
            <div key={image.id}>
            <Stats stats={imageStats[image.id]}/>
            <img 
              key={image.id}
              src={image.urls.small}
              alt={image.user.username}  
            />
            </div>
          ))}

          <a onClick={this.props.loadImages}>Load Images</a>
        </div>
        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    )
  }
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
  isLoading,
  images,
  error,
  imageStats
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList);