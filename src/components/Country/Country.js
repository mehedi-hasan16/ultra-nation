import React from 'react';
import './Country.css'

const Country = (props) => {
//    console.log(props)
    const {name,population,flags,region}=props.country;
    const handleAddCountry= props.handleAddCountry;
    
    return (
        <div className='element-style'>
            <img src={flags.png} alt="this is flag" />
            <h4>Country Name: {name.common}</h4>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;