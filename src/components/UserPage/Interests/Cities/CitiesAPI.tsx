import { useEffect, useState } from 'react';

import { CityProps } from '../../../../types/UserPage/userPage.types';
import LoadingElement from '../../../PrivateRout/LoadingElement';

function CitiesAPI() {
  const [citiesList, setCitiesList] = useState<CityProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'http://api.geonames.org/searchJSON?username=ksuhiyp&country=pl&maxRows=1000&style=SHORT',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const cities = (data.geonames as CityProps[]).map((city) => ({
          name: city.name,
        }));

        setCitiesList(cities);
      } catch (error) {
        setError('Error occurred please try again later');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  if (isLoading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>{error}</div>;
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
