import React from 'react';
import PropTypes from 'prop-types';
import './BlogStyles.css'; // Import to use gradient-text class

export default function Loading({zIndex = 250}) {
    return (
        <div className="loading-container"
        style={{
            position: 'fixed',
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9))',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
            zIndex: zIndex
        }}
        >
            <div 
                className="spinner" 
                style={{
                    width: '50px',
                    height: '50px',
                    border: '4px solid transparent',
                    borderTop: '4px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                    backgroundClip: 'content-box',
                }}
            />
            <p className="loading-p gradient-text" style={{marginTop: '20px'}}>
                Loading, please wait...
            </p>
        </div>
    )
}

Loading.propTypes = {
    zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

// Add a style block for the spin animation
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`
document.head.appendChild(styleSheet);