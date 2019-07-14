import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigation.css';  

export function Navigation() {
    return (
        <NavLink to={"/"} className="link">Вернуться на главную</NavLink> 
    );
}