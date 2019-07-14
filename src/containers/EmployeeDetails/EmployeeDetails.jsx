import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getEmployeeData } from '../../redux/employeeDetails';
import { DownloadSpinner } from '../../components/downloadSpinner';

class EmployeeDetails extends Component {
    componentDidMount() {
        console.log(this.props)
        const { employeeDetailsRequest, match: { params: { employeeId } } } = this.props;
        employeeDetailsRequest(employeeId);
    }

    componentDidUpdate() {
        console.log(this.props.employeesList);
    }
    render() {
        return (
            <div>
                <h1>SAMPLE!</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employeeInfo: state.employeeDetails
});

const mapDispatchToProps = {
    employeeDetailsRequest: getEmployeeData,
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);