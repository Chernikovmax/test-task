import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployeeData } from '../../redux/employeeDetails';
import { getEmployeesData } from '../../redux/employeesList';
import { postEmployeeComment } from '../../redux/employeeDetails';
import { DownloadSpinner } from '../../components/downloadSpinner';
import { Comments } from './Comments';
import { EmployeeCard } from '../../components/employeeCard';
import { Slider } from '../../components/Slider';
import './EmployeeDetails.css';

class EmployeeDetails extends Component {
    componentDidMount() {
        const { 
            employeeDetailsRequest, 
            match: { params: { employeeId } },
            employeesList,
            employeesRequest
        } = this.props;

        employeeDetailsRequest(employeeId);

        if (!employeesList.isLoaded) {
            employeesRequest();
        }
    }
    
    componentDidUpdate(prevProps) {
        const { 
            employeeDetailsRequest,
            match: { params: { employeeId } } 
        } = this.props;
        if (employeeId !== prevProps.match.params.employeeId) {
            employeeDetailsRequest(employeeId);
        }
    }

    handleCommentAdding = (comment) => {
        const { 
            postEmployeeComment, 
            employeeInfo: { data }, 
            match: { params: { employeeId } } 
        } = this.props;
        
        postEmployeeComment(employeeId, { ...data, comments: [...data.comments, comment] });
    }

    getEmployeesCards() {
        const {employeesList: {data}} = this.props;
        
        return data.map(item => {
            return (
                <EmployeeCard 
                    key={item.id}
                    employeeId={item.id}
                    photo={item.photo}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    position={item.position}
                    isShort={true}
                />
            );
        })
    }

    render() {
        const { employeeInfo: { isLoaded, data } } = this.props;

        if (!isLoaded) return (
            <div className="spinner-wrapper">
                <DownloadSpinner />
                <h2>Загрузка данных с сервера...</h2>
            </div>
        );        
        const {employeesList} = this.props;

        return (
            <div>
                {(!employeesList.isLoaded) ?
                    <span className="loading-message">Данные загружаются...</span>
                    :
                    <Slider 
                        items={this.getEmployeesCards()}
                    />
                }
                <div className="employee-details">
                    <img className="employee-details__photo" src={data.photo} alt=""></img>
                    <div className="employee-details__description">
                        <span className="employee-details__text">Имя: {data.firstName}</span>
                        <span className="employee-details__text">Фамилия: {data.lastName}</span>
                        <span className="employee-details__text">Должность: {data.position}</span>
                        <section className="employee-details__text">
                            Адрес: {data.address.postalCode}, г.{data.address.city}, {data.address.streetAddress}
                        </section>
                    </div>
                </div>
                <Comments
                    comments={data.comments}
                    onCommentAdded={this.handleCommentAdding}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employeeInfo: state.employeeDetails,
    employeesList: state.employeesList
});

const mapDispatchToProps = {
    employeeDetailsRequest: getEmployeeData,
    postEmployeeComment: postEmployeeComment,
    employeesRequest: getEmployeesData,
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);