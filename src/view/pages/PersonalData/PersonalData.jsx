import React from 'react';
import header from '../../../assets/img/Header Logo.png';
import './style.css';
import PersonalDataForm from '../../layout/PersonalDataForm/PersonalDataForm';
import { Link } from 'react-router-dom';

const PersonalData = (props) => {
    return (
        <div className='personal-data-container'>
            <header>
                <div className="container">
                    <Link to="/"><img src={header} alt='header' /></Link>
                </div>
            </header>
            <PersonalDataForm />
        </div>
    );
};

export default PersonalData;