import { useEffect, useState } from 'react';

interface City {
  name: string;
}

function CitiesAPI() {
  const [citiesList, setCitiesList] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'http://api.geonames.org/searchJSON?username=ksuhiyp&country=pl&maxRows=1000&style=SHORT',
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was failed');
        }
        return res.json();
      })
      .then((data) => {
        console.log(typeof data.geonames);
        const cities = (data.geonames as City[]).map((city) => ({
          name: city.name,
        })) as City[];
        setCitiesList(cities);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
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
