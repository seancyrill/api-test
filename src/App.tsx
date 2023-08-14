import { useEffect, useState } from "react";
import "./App.css";
import { CountryDataType } from "./types/CountryDataType";

function App() {
  const [countryData, setCountryData] = useState<CountryDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all").then(
          (res) => res.json()
        );
        setCountryData(response);
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      fetchData();
    };
  }, []);

  return (
    <>
      <main>
        {countryData.map((country) => (
          <p>{country.name.common}</p>
        ))}
      </main>
    </>
  );
}

export default App;
