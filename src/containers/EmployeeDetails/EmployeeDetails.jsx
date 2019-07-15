import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getEmployeeData } from '../../redux/employeeDetails';
import { DownloadSpinner } from '../../components/downloadSpinner';
import './EmployeeDetails.css';

class EmployeeDetails extends Component {
    componentDidMount() {
        console.log(this.props)
        const { employeeDetailsRequest, match: { params: { employeeId } } } = this.props;
        employeeDetailsRequest(employeeId);
    }

    componentDidUpdate() {
        console.log(this.props.employeeInfo);
    }
    render() {
        const { employeeInfo: { isLoaded, data } } = this.props;

        if (!isLoaded) return (
            <div className="spinner-wrapper">
                <DownloadSpinner />
                <h2>Загрузка данных с сервера...</h2>
            </div>
        );

        return (
            <div>
                <div className="employee-details">
                    <img className="employee-details__photo" src={data.photo} alt=""></img>
                    <div className="employee-details__description">
                        <span className="employee-details__text">Имя: {data.firstName}</span>
                        <hr />
                        <span className="employee-details__text">Фамилия: {data.lastName}</span>
                        <hr />
                        <span className="employee-details__text">Должность: {data.position}</span>
                        <hr />
                        <section className="employee-details__text">
                            Адрес: {data.address.postalCode}, г.{data.address.city}, {data.address.streetAddress}
                        </section>
                        <hr />
                    </div>
                </div>
                <div className="comments">
                    {/* {comments} */}
                </div>
            </div>
        );
    }
}

{/* {data.map(item => {
                    return <EmployeeCard
                        key={item.id}
                        employeeId={item.id}
                        photo={item.photo}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        position={item.position}
                    />
                })} */}

const mapStateToProps = state => ({
    employeeInfo: state.employeeDetails
});

const mapDispatchToProps = {
    employeeDetailsRequest: getEmployeeData,
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);