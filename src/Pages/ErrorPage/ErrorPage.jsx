import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error  = useRouteError()
    return (
        <div className='text-2xl text-center'>
            {error.message}
        </div>
    );
};

export default ErrorPage;