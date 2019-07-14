import React, {Component} from 'react';
import './EmployeeCard.css';

export class EmployeeCard extends Component  {
    render() { 
        const {photo, id, firstName, lastName, position} = this.props;
        return (
            <div key={id} className="employee">
                <img className="employee__photo" src={photo} alt=""></img>
                <div className="employee__description">
                    <span className="employee__text">Имя: {firstName}</span>
                    <hr className="employee__line" />
                    <span className="employee__text">Фамилия: {lastName}</span>
                    <hr className="employee__line" />
                    <span className="employee__text">Должность: {position}</span>
                </div>
            </div>
        );
    }
}