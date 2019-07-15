import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EmployeeCard.css';

export class EmployeeCard extends Component  {
    componentDidMount() {
        console.log(this.props);
    }

    render() { 
        const { photo, employeeId, firstName, lastName, position} = this.props;
        return (
            <Link to={`/employee-details/${employeeId}`} className="employee">
                <img className="employee__photo" src={photo} alt=""></img>
                <div className="employee__description">
                    <span className="employee__text">Имя: {firstName}</span>
                    <hr className="employee__line" />
                    <span className="employee__text">Фамилия: {lastName}</span>
                    <hr className="employee__line" />
                    <span className="employee__text">Должность: {position}</span>
                </div>
            </Link>
        );
    }
}