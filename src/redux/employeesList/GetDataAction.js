export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';
export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';

const getEmployeesSuccess = (data) => ({
    type: GET_EMPLOYEES_SUCCESS,
    payload: data.employees,
});

const getEmployeesFailure = (err) => ({
    type: GET_EMPLOYEES_FAILURE,
    payload: err,
});

const getEmployeesRequest = () => ({
    type: GET_EMPLOYEES_REQUEST,
});

export const getEmployeesData = () => (dispatch) => {
    dispatch(getEmployeesRequest());
    fetch('http://vm3mk.mocklab.io/employees/')
         .then(data => data.json())
         .then(data => dispatch(getEmployeesSuccess(data)))
         .catch(err => dispatch(getEmployeesFailure(err)))
};