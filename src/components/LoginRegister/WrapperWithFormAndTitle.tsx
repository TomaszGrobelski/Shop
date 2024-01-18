import { WrapperWithFormAndTitleProps } from '../../types/Login&Register/login&register.types';
import { WrapperTitle } from '../../styles/LoginRegister/WrapperWithFormAndTitle.styles';
import { WrapperForm } from '../../styles/LoginRegister/WrapperWithFormAndTitle.styles';
import { WrapperBox } from '../../styles/LoginRegister/WrapperWithFormAndTitle.styles';
import { WrapperContainer } from '../../styles/LoginRegister/WrapperWithFormAndTitle.styles';

function WrapperWithFormAndTitle({ onSubmit, h1, children }: WrapperWithFormAndTitleProps) {
  return (
    <WrapperContainer>
      <WrapperBox>
        <WrapperForm onSubmit={onSubmit}>
          <WrapperTitle>{h1}</WrapperTitle>
          {children}
        </WrapperForm>
      </WrapperBox>
    </WrapperContainer>
  );
}

export default WrapperWithFormAndTitle;
