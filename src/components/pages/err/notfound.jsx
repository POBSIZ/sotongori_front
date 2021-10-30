import React from 'react';
import { hot } from 'react-hot-loader';

const NotFound = () => {
    return (
        <h1 style={{ textAlign: 'center', marginTop: '200px', fontWeight: 'bold', fontSize: '20px' }}>
            404 Not Found
        </h1>
    )
}

export default hot(module)(NotFound);