

import React from 'react';

const Greeting = () => {
    return (

        <div className="greeting">
            <div className="greeting-text">
                <p>Good Morning <span>Santhosh</span></p>
                <p>
                    Today You have 9 Application. <br />
                                Also you need to hire 2 new UX Designers, 1 React Native developer
                            </p>
                <button>Read More!</button>
            </div>
            <div className="greeting-image">
                <source srcset="../../image/hrms.png" />
            </div>
        </div>
    );
}

export default Greeting;
