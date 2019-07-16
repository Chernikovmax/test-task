import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EmployeeCard.css';

export class EmployeeCard extends Component  {

    render() { 
        const { photo, employeeId, firstName, lastName, position, isShort} = this.props;
        
        return (
            <Link to={`/employee-details/${employeeId}`} 
                className={isShort ? "employee-shortmod" : "employee"}
            >
                <img 
                    className={isShort ? "employee__photo-short" : "employee__photo"} 
                    src={photo} 
                    alt=""
                />
                <div className={isShort ? "employee__description-short" : "employee__description"}>
                    <span 
                        className={isShort ? "employee__text-short" : "employee__text"}
                    >
                        Имя: {firstName}
                    </span>

                    <span 
                        className={isShort ? "employee__text-short" : "employee__text"}
                    >
                        Фамилия: {lastName}
                    </span>

                    <span 
                        className={isShort ? "employee__text-short" : "employee__text"}
                    >
                        Должность: {position}
                    </span>
                </div>
            </Link>
        );
    }
}