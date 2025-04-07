import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CountrySelect from './components/CountrySelect';
import CountryCarousel from './components/CountryCarousel';
import CountryDishes from './components/CountryDishes';
import Loading from './components/Loading';
import dbase from './dbase.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);



  const handleCountryChange = (countryName) => {
    const country = countries.find((c) => c.name === countryName);
    console.log('Seçilen ülke:', countryName);
    setSelectedCountry(country);
  };

    useEffect(() => {
    setTimeout(() => {
      setCountries(dbase);
      setSelectedCountry(dbase[0]);
      setLoading(false); // Veriler yüklenince loading kapanıyor
    }, ); // Simüle etmek için 1 saniye gecikme verdik
  }, []);

  if (loading) return <Loading />; // Veriler yüklenirken loading gösteriyoruz

  return (
    <div className='main-container'>
      <Header />
      <CountrySelect countries={countries} onChange={handleCountryChange} />
      {selectedCountry && (
        <>
          <CountryCarousel landscapes={selectedCountry.landscapes} />
          <CountryDishes dishes={selectedCountry.dishes} />
        </>
      )}
    </div>
  );
}

export default App;
