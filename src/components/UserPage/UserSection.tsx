import {auth} from '../../config/firebase'
import Interests from './Interests/Interests';

function UserSection() {
  const user = auth.currentUser;
  const time= user?.metadata.creationTime?.slice(0,-12);
  const email = user?.email;
  const username= email?.split('@')[0]

  return (
    <div className='p-10 flex flex-col gap-16'>
      <div className='flex items-center gap-5'>
        <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
        <div>
          <h1 className='text-[32px] font-bold'>{username}</h1>
          <p className=' text-gray-500 font-bold'>{time?`Nika Member Since ${time}`:'You are not logged in'}</p>
        </div>
      </div>
      <Interests />
      
    </div>
  );
}

export default UserSection;
