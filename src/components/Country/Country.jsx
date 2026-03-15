import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [visited, setVisited] = useState(false) ;

    const handlerEvent = ()=>{
       if(visited){
         setVisited(false) ;
       }else{
        setVisited(true)
       }
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} km^2 : {country.area.area > 30000? 'Big Country' : 'Samll Country'}</p>
            <button className={`${visited? 'country-visited' : 'country-non-visited'}`} onClick={handlerEvent}>{visited? 'Visited': 'Not Visited'}</button>
            
        </div>
    );
};

export default Country;