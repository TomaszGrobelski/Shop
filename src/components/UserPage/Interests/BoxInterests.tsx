import { AiOutlinePlusCircle } from 'react-icons/ai';

import { BoxInterestsProps } from '../../../types/UserPage/userPage.types';
import { InterestBox, InterestButton, InterestContainer } from '../../../styles/UserPage/BoxInterests.styles';

function BoxInterests({ interest, modalVisibility, setModalVisibility }: BoxInterestsProps) {
  const modalClick = () => {
    setModalVisibility(!modalVisibility);
  };
  return (
    <div>
      <InterestContainer>
        <InterestBox>
          <InterestButton onClick={modalClick}>
            <AiOutlinePlusCircle size={22} />
            <p>Add {interest}</p>
          </InterestButton>
        </InterestBox>
      </InterestContainer>
    </div>
  );
}

export default BoxInterests;
