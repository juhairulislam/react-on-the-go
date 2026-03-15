import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries]= useState([]) ;

    cont handleVisitedCountries = (country)=>{

    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    return (
        <div>
            <h1>This is country:{countries.length}</h1>
            <h3>Total country visited: </h3>
           <div className='countries'>
             {
                countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} key={country.cca3.cca3} country={country}></Country>)
            }
           </div>
            
        </div>
    );
};

export default Countries;