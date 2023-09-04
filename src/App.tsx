import { useEffect, useState } from "react";
import "./App.css";

type dataType = { slip: { id: number; advice: "string" } };

function App() {
  const [countryData, setCountryData] = useState<dataType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice").then(
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
        <h1>{countryData?.slip.advice}</h1>
      </main>
    </>
  );
}

export default App;
