import {GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_FAILURE, GET_EMPLOYEES_REQUEST} from './GetDataAction';

const initState = {
    isLoading: false,
    isLoaded: false,
    isFailure: false,
    error: null,
    data: [],
}

export const employeesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES_REQUEST:
            return {
                ...initState,
                isLoading: true,
            }
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                data: [...action.payload],
            }
        case GET_EMPLOYEES_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isFailure: true,
                error: action.payload
            }
        }
        default:
            return state;
    }
};