import React, {useEffect,useState} from "react";
import './styles.css'

function UseEffect() {
    const [country, setCountry] = useState("");
    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [date, setDate] = useState(0);
  
    useEffect(() => {
      fetch(`https://covid19.mathdro.id/api/countries/${country}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.confirmed !== undefined) {
            setConfirmed(data.confirmed.value);
            setRecovered(data.recovered.value);
            setDeaths(data.deaths.value);
            setDate(data.lastUpdate.substring(0, 10));
          }
        });
    });
  
    function handleSubmit(event) {
      event.preventDefault();
      setCountry(event.target.countryName.value);
    }
  
    return (
      <div>
        <h1>COVID</h1>
        <form action="" onSubmit={handleSubmit}>
          <input name="countryName" type="text" />
        </form>
        <div className="wrapper">
          <div>Confimed: {confirmed} </div>
          <div>Recovered: {recovered} </div>
          <div>Deaths: {deaths} </div>
          <div>Last Update: {date} </div>
        </div>
      </div>
    );
  }
  
  export default UseEffect;