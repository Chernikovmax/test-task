export const GET_EMPLOYEE_DATA_SUCCESS = 'GET_EMPLOYEE_DATA_SUCCESS';
export const GET_EMPLOYEE_DATA_FAILURE = 'GET_EMPLOYEE_DATA_FAILURE';
export const GET_EMPLOYEE_DATA_REQUEST = 'GET_EMPLOYEE_DATA_REQUEST';

export const POST_EMPLOYEE_COMMENT_SUCCESS = 'POST_EMPLOYEE_COMMENT_SUCCESS';
export const POST_EMPLOYEE_COMMENT_FAILURE = 'POST_EMPLOYEE_COMMENT_FAILURE';
export const POST_EMPLOYEE_COMMENT_REQUEST = 'POST_EMPLOYEE_COMMENT_REQUEST';

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


const postEmployeeCommentSuccess = (data) => ({
    type: POST_EMPLOYEE_COMMENT_SUCCESS,
    payload: data,
});

const postEmployeeCommentFailure = (err) => ({
    type: POST_EMPLOYEE_COMMENT_FAILURE,
    payload: err,
});

const postEmployeeCommentRequest = () => ({
    type: POST_EMPLOYEE_COMMENT_REQUEST,
});

export const getEmployeeData = (employeeId) => (dispatch) => {
    dispatch(getEmployeeRequest());
    fetch(`http://vm3mk.mocklab.io/employee-details/${employeeId}`)
         .then(data => data.json())
         .then(data => dispatch(getEmployeeSuccess(data)))
         .catch(err => dispatch(getEmployeeFailure(err)))
};

export const postEmployeeComment = ({employeeId, title, text, phone}) => (dispatch) => {
    dispatch(postEmployeeCommentRequest());
    fetch(`http://vm3mk.mocklab.io/comments/`, { method: "POST", body: JSON.stringify({ employeeId, title, text, phone})})
        .then(() => dispatch(postEmployeeCommentSuccess({ employeeId, title, text, phone })))
        .catch(err => dispatch(postEmployeeCommentFailure(err)))
};