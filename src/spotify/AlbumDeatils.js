import React from 'react';
import {useParams} from 'react-router-dom'

function AlbumDeatils() {
    const {id} = useParams();
    return (
        <div>
            <h1>AlbumDeatils are : {id}</h1>
        </div>
    );
}

export default AlbumDeatils;