import { useEffect, useState } from 'react';

import { CityProps } from '../../../../types/UserPage/userPage.types';
import LoadingElement from '../../../PrivateRout/LoadingElement';

function CitiesAPI() {
  const [citiesList, setCitiesList] = useState<CityProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        const cities = (data.geonames as CityProps[]).map((city) => ({
          name: city.name,
        })) as CityProps[];
        setCitiesList(cities);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Error occurred please try again later');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingElement />;
  }

  return (
    <div>
      <ul>
        {citiesList.map((city, index) => (
          <li key={index}>{city.name}</li>
        ))}
      </ul>
      {error}
    </div>
  );
}

export default CitiesAPI;
