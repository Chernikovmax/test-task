import {combineReducers} from 'redux';
import {employeesListReducer} from './employeesList';
import {employeePageReducer} from './employeePage';

export const rootReducer = combineReducers({
    list: employeesListReducer,
    page: employeePageReducer,
});