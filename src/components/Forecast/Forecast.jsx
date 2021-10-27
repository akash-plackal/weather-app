import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import PropTypes from 'prop-types';
import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

const Forecast = ({ forecast }) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between"></Col>
            <CurrentDayDescription forecast={forecast.currentDayDetails} />
            <UpcomingDaysForecast days={forecast.upcomingDays} />
        </Row>
    </Container>
);

Forecast.prototype = {
    Forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;
