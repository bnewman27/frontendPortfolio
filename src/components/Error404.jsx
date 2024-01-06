import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="w-full h-80 p-8 text-center text-sky-400 font-puffinRegular">
            <div className="text-8xl">404 Page Not Found</div>
            <div className="text-4xl">haha oopsies lolz, where do you think you're going? HMM?</div>
            <div className="p-8">
            <Link to="/" className="bg-sky-950 animate-pulse hover:ring ring-sky-400 ring-offset-2 ring-offset-dmbg hover:shadow-inner hover:drop-shadow-lg shadow-dms rounded-full text-2xl p-4 hover:bg-sky-800 hover:text-sky-200">Return to Home</Link>
            </div>
            
        </div>
    );
};

export default Error404;
