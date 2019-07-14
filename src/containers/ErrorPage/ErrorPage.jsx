import React from 'react';
import { CrossIcon } from '../../components/icons';

import './ErrorPage.css';

export function ErrorPage() {
    return (
        <div className="error-page">
        <div className="error-page__wrapper">
            <span className="error-page__error-number"><b>404</b></span>
            <CrossIcon/>
            <span className="error-page__title">А такой страницы нет!</span>
        </div>
        </div>
    );
}