import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error  = useRouteError()
    console.log(error)
    return (
        <div className='text-2xl text-center'>
            404 not found
        </div>
    );
};

export default ErrorPage;