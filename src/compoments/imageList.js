import React from 'react';

import './imageList.css'
import ImageCard from './imageCard';


const ImageList = (props) => {

    const { images } = props;

    const image = images.map((image) => {
        const { urls, id } = image
        return <ImageCard key={id} src={urls.regular} />
    })
    return (
        <div className='image-list'>
            {image}
        </div>
    )
}


export default ImageList