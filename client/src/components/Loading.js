import React from 'react';
import '../styles/Loading.css';

const Loading = ({name}) => (
    <div className="loading-wrapper">
        <svg class="loading__spinner" viewBox="25 25 50 50">
            <circle class="loading__spinner-path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
        </svg>
    </div>
);

export default Loading;