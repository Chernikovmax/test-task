import {combineReducers} from 'redux';
import {employeesReducer} from './employeesList';

export const rootReducer = combineReducers({
    employeesList: employeesReducer,
});