import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries]= useState([]) ;
    const [visitedFlags, setVisitedFlags]= useState([])

    const handleVisitedCountries = (country)=>{

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries) ;

    }

    const handleVisitedFlags = (flag) =>{

        const newVisitedFlags = [...visitedFlags,flag] ;
        setVisitedFlags(newVisitedFlags) ;

    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    return (
        <div>
            <h1>Total Country:{countries.length}</h1>
            <h3>Total country visited:{visitedCountries.length} </h3>
            <h4>Total Flags Visited: {visitedFlags.length}</h4>
            <ol>
                {
                    visitedCountries.map(country =><li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
           <div className='countries'>
             {
                countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} key={country.cca3.cca3} country={country} handleVisitedFlags={handleVisitedFlags}></Country>)
            }
           </div>
            
        </div>
    );
};

export default Countries;