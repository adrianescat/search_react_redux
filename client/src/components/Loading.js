import React from 'react';
import '../styles/Loading.css';

const Loading = ({name}) => (
    <div className="loading-wrapper">
        <svg className="loading__spinner" viewBox="25 25 50 50">
            <circle className="loading__spinner-path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"></circle>
        </svg>
    </div>
);

export default Loading;