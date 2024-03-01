import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Effectpp1 = () => {
  function MyComponent() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //   function handleClick() {
    //     setCount((prevCount) => prevCount + 1);
    //   }
    //   document.addEventListener("click", handleClick);
    //   return () => {
    //     document.removeEventListener("click", handleClick);
    //   };
    // }, []);
    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

  const Functiontimer = () => {
    const [second, setSecond] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setSecond((prevalue) => prevalue + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <div>
        <p>second = {second}</p>
      </div>
    );
  };
  function WindowSizeTracker() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
      <div>
        <p>Window Width: {windowSize.width}</p>
        <p>Window Height: {windowSize.height}</p>
      </div>
    );
  }
  function QuoteComponent() {
    const [text, setText] = useState();

    useEffect(() => {
      fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setText(data[0].text);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const fetchNewQuote = () => {
      fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setText(data[0].text);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div>
        <p>{text}</p>
        <button
          className="border rounded p-2 m-1 bg-blue-400"
          onClick={fetchNewQuote}
        >
          Fetch New Quote
        </button>
      </div>
    );
  }

  const Sortsearch = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState();
    const [sort, setSort] = useState();
    useEffect(() => {
      const fetchdata = () => {
        fetch(`https://api.example.com/graphql?filter=${filter}&sort=${sort}`)
          .then((Response) => Response.json())
          .then((data) => setData(data));
      };
    }, [filter, sort]);

    return (
      <div className="flex border justify-center items-center gap-4 mt-4">
        <input
          className="bg-gray-300"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <select onChange={(event) => setSort(event.target.value)} name="" id="">
          <option value="">sort by</option>
          <option value="">name</option>
          <option value="">date</option>
        </select>
        <ul>
          {data.map((item) => (
            <li>
              ky={item.id} {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const RandomImageComponent = () => {
    const [image, setImage] = useState("");
    useEffect(() => {
      const fetchImage = () => {
        fetch("https://api.example.com/image")
          .then((response) => response.json())
          .then((data) => setImage(data.url));
      };
      const interval = setInterval(() => {
        fetchImage();
      }, 5000);
      fetchImage();
      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        <img src="{image}" alt="Random Image" />
      </div>
    );
  };

  function WeatherApp() {
    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = "bbb1789ea05c9c025c294b6a7fa3ef7a";

    useEffect(() => {
    if(!cityName) return;

      console.log("useEffect");
      async function fetchWeatherData() {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
          );
          if(!response.ok) {
            throw new Error(response.statusText);
          }
          const json = await response.json();
          console.log(json);
          setWeatherData(json);
          setError(null);
        } catch (error) {
          setError(error.message);
          setWeatherData(null);
        }
      }
      fetchWeatherData();
    }, [cityName]);

    function handleCityNameChange(event) {
      setCityName(event.target.value);
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      if (!cityName) {
        return;
      }
      fetchWeatherData();
    }
    // function fetchWeatherData() {
    //   async function fetchData() {
    //     try {
    //       const response = await fetch(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    //       );
    //       if (!response.ok) {
    //         throw new Error(response.statusText);
    //       }
    //       const json = await response.json();
    //       setWeatherData(json);
    //       setError(null);
    //     } catch (error) {
    //       setError(error.message);
    //       setWeatherData(null);
    //     }
    //   }
    //   fetchData();
    // }
    return (
      <div className="m-4 p-2 bg-blue-300 gap-4">
        <h1 className="font-bold flex justify-center">Weather App</h1>
        <form onSubmit={handleFormSubmit}>
          <label className="m-4 p-2 font-semibold" htmlFor="city-name-input">Enter a city name:</label>
          <input
            type="text"
            id="city-name-input"
            value={cityName}
            onChange={handleCityNameChange}
          />
          <button  className="m-4 border rounded px-4 py-2 bg-blue-500 text-white" type="submit">Search</button>
        </form>
        {error && <p>{error}</p>}
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>{weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* <MyComponent /> */}
      {/* <Functiontimer/> */}
      {/* <WindowSizeTracker/> */}
      {/* <QuoteComponent/> */}
      {/* <Sortsearch/> */}
      {/* <RandomImageComponent/> */}
      <WeatherApp />
    </div>
  );
};

export default Effectpp1;
