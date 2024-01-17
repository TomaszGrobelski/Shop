import { Link } from 'react-router-dom';

import logoNika from '../../images/Logo/logoNika.png';

const Logo = () => {
  return (
    <Link to='/home'>
      <img
        className='max-w-[100px]'
        src={logoNika}
        width={1103}
        height={338}
        alt='Logo'
      />
    </Link>
  );
};

export default Logo;
