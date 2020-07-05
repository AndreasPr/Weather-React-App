import React, {useState, lazy, Suspense} from 'react';
import Spinner from './components/spinner/spinner.component';

const api = {
  key: "64983a533ca7d569f1af501a2d26810f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(response => response.json())
      .then(result =>{ 
          setQuery('');
          setWeather(result);
          console.log(result);
      });
    }
  };



  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 18) ? 'App warm' : 'App') : 'App'}>
      <main>
      {(typeof weather.main != "undefined") ?   ( 
          <div className="weather-container">
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date"> {dateBuilder(new Date())} </div>  
            </div> 
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}℃ </div>
              <div className="weather">{weather.weather[0].main} </div>
            </div> 
          </div>
        ) : ('')}
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} 
          value={query} onKeyPress={search} />
        </div>
        
      </main>
    </div>
  );
}

export default App;
