import React from 'react';
import { connect } from 'react-redux';
import { getEmployeesData } from '../../redux/employeesList';
import {DownloadSpinner} from '../../components/downloadSpinner';
import {EmployeeCard} from '../../components/employeeCard';
import {Link} from 'react-router-dom';

import './EmployeesList.css';

class EmployeesList extends React.Component {

  componentDidMount() {
    const { employeesListRequest } = this.props;
    employeesListRequest();
  }

  componentDidUpdate() {
    console.log(this.props.employeesList);
  }

  render() {
    const { employeesList: { isLoaded, data } } = this.props;

    if (!isLoaded) return (
      <div className="spinner-wrapper">
        <DownloadSpinner />
        <h2>Загрузка данных с сервера...</h2>
      </div>
    );

    return (
      <div className="employees">
        {data.map(item => {
          return <EmployeeCard
            key={item.id}
            photo={item.photo}
            firstName={item.firstName}
            lastName={item.lastName}
            position={item.position}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employeesList: state.employeesList
});

const mapDispatchToProps = {
  employeesListRequest: getEmployeesData,
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);