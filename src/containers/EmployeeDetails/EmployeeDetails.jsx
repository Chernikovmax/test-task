import React, {Component} from 'react';
import { connect } from 'react-redux';

class EmployeeDetails extends Component {
    render() {
        return (
            <div>
                <h1>SAMPLE!</h1>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);