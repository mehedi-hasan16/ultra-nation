import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>setCountries(data))
    .catch(error=>console.log(error))
  },[])

const handleAddCountry = (country) =>{
  const newCart= [...cart, country]
  setCart(newCart);
};

  return (

    <div className="App">
      <h3>Countries You have: {countries.length}</h3>
      <Cart cart={cart}></Cart>
      
        {
          countries.map(element=> <Country country={element} handleAddCountry={handleAddCountry}></Country>)
        }
      
    </div>
  );
}

export default App;
