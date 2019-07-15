import { GET_EMPLOYEE_DATA_REQUEST, GET_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_FAILURE  } from './GetDataAction';

const initialState = {
    isLoading: false,
    isLoaded: false,
    isFailure: false,
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
        case GET_EMPLOYEE_DATA_FAILURE: {
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