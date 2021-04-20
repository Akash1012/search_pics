import React, { useEffect, useRef, useState } from 'react'

const ImageCard = (props) => {

    const [span, setSpan] = useState(0);
    const imgRef = useRef(null);

    useEffect(() => {
        imgRef.current.addEventListener('load', setSpans);
    }, [])

    const setSpans = () => {
        const height = imgRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        setSpan(spans);

    }

    const { src } = props;
    return (
        <div style={{ gridRowEnd: `span ${span}` }}>
            <img ref={imgRef} src={src} alt="Image" />
        </div>
    )
}

export default ImageCard