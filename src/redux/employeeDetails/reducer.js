import {
    GET_EMPLOYEE_DATA_REQUEST, GET_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_FAILURE,
    POST_EMPLOYEE_COMMENT_SUCCESS, POST_EMPLOYEE_COMMENT_FAILURE, POST_EMPLOYEE_COMMENT_REQUEST  
} from './GetDataAction';

const initialState = {
    isLoading: false,
    isLoaded: false,
    isFailure: false,
    isCommentFetching: false,
    isCommentFailure: false,
    error: null,
    data: {},
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_DATA_REQUEST:
            return {
                ...initialState,
                isLoading: true,
            }
        case GET_EMPLOYEE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                data: {...action.payload},
            }
        case GET_EMPLOYEE_DATA_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isFailure: true,
                error: action.payload
            }
        case POST_EMPLOYEE_COMMENT_REQUEST:
            return {
                ...state,
                isCommentFetching: true,
                isCommentFailure: false,

            }
        case POST_EMPLOYEE_COMMENT_SUCCESS:
            return {
                ...state,
                isCommentFetching: false,
                data: {
                    ...state.data,
                    comments: [...action.payload.comments]
                }

            }
        case POST_EMPLOYEE_COMMENT_FAILURE:
            return {
                ...state,
                isCommentFetching: false,
                isCommentFailure: true,
                error: action.payload,
            }

        default:
            return state;
    }
};