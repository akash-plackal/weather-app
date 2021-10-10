import React, { Fragment } from 'react';

import Header from '../Header';
import Error from '../Error';
import Form from '../Form/Form';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = value => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            <div className={`${styles.box} position-relative`}>
                {!isLoading && <Form searchSubmit={onSubmit} />}
                {isError && <Error message={isError} />}
                {isLoading && <Loader />}
            </div>
            {forecast && <Forecast />}
        </Fragment>
    );
};

export default Page;
