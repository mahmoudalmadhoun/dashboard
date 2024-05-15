import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const MyImage = (props) => {
    const { image, alt ,className, width ,height ,title } = props
    return (
        <LazyLoadImage
            alt={alt}
            src={image} 
            className={className}
            effect="blur"
            width={width}
            height={height ? height : "yyy"}
            title={title ? title : 'loading'}
            loading="lazy"
           
        />
    )
}

export default MyImage;