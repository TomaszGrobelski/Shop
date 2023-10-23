import { useEffect, useState } from "react";

interface City {
  name: string;
  // inne pola, które są obecne w obiekcie miasta
}

function CitiesAPI() {
  const [citiesList, setCitiesList] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://api.geonames.org/searchJSON?username=ksuhiyp&country=pl&maxRows=1000&style=SHORT")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was failed");
        }
        return res.json();
      })
      .then((data) => {
        const cities = (data.geonames as any[]).map((city) => ({ name: city.name })) as City[];
        setCitiesList(cities);
        setIsLoading(false); // Ustawia stan isLoading na false po pobraniu danych
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false); // Ustawia stan isLoading na false w przypadku błędu
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {citiesList.map((city, index) => (
          <li key={index}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesAPI;
