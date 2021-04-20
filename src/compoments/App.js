import React, { useState } from 'react';

import SearchBar from './searchBar';
import unsplash from './unsplash';
import ImageList from './imageList';

const App = () => {
    const [images, setImage] = useState([]);

    const onSearchSubmit = async (term) => {
        console.log("Term", term)
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        setImage(response.data.results);
    }

    return (
        <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App