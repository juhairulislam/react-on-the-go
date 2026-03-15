import React from 'react';
import './Country.css'

const Country = ({country}) => {

    const handlerEvent = ()=>{
        console.log('btn clicked')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} km^2 : {country.area.area > 30000? 'Big Country' : 'Samll Country'}</p>
            <button onClick={handlerEvent}>Visited</button>
            
        </div>
    );
};

export default Country;