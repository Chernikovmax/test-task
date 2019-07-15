import {combineReducers} from 'redux';
import {employeesReducer} from './employeesList';
import {employeeReducer} from './employeeDetails/';

export const rootReducer = combineReducers({
    employeesList: employeesReducer,
    employeeDetails: employeeReducer,
});