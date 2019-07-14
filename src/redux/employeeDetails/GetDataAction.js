export const GET_EMPLOYEE_DATA_SUCCESS = 'GET_EMPLOYEE_DATA_SUCCESS';
export const GET_EMPLOYEE_DATA_FAILURE = 'GET_EMPLOYEE_DATA_FAILURE';
export const GET_EMPLOYEE_DATA_REQUEST = 'GET_EMPLOYEE_DATA_REQUEST';

const getEmployeeSuccess = (data) => ({
    type: GET_EMPLOYEE_DATA_SUCCESS,
    payload: data,
});

const getEmployeeFailure = (err) => ({
    type: GET_EMPLOYEE_DATA_FAILURE,
    payload: err,
});

const getEmployeeRequest = () => ({
    type: GET_EMPLOYEE_DATA_REQUEST,
});

export const getEmployeeData = (employeeId) => (dispatch) => {
    dispatch(getEmployeeRequest());
    fetch(`http://vm3mk.mocklab.io/employee-details/${employeeId}`)
         .then(data => data.json())
         .then(data => dispatch(getEmployeeSuccess(data)))
         .catch(err => dispatch(getEmployeeFailure(err)))
};