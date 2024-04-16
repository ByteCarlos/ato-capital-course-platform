import React from 'react';
import header from '../../../assets/img/Header Logo.png';
import './style.css';
import PersonalDataForm from '../../layout/PersonalDataForm/PersonalDataForm';

const PersonalData = (props) => {
    return (
        <div className='personal-data-container'>
            <header>
                <div className="container">
                    <a href="#"><img src={header} /></a>
                </div>
            </header>
            <PersonalDataForm />
        </div>
    );
};

export default PersonalData;