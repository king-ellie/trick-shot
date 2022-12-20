import React from 'react';

function PageFooter() {
    const sendUserToInstagram = () => {
        window.location.href="https://www.instagram.com/trickshotsforgirlsonly/"
    }

    return (
        <div className="page-footer">
            <h4>See this trick shot on other platforms:</h4>

            <button onClick={sendUserToInstagram}>Instagram</button>
        </div>
    )
}

export default PageFooter