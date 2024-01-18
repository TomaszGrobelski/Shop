import { FaUser } from 'react-icons/fa';

import { EmailLabelProps } from '../../types/Login&Register/login&register.types';
import { EmailLabelContainer, UserIconContainer } from '../../styles/LoginRegister/EmailLabel.styles';

function EmailLabel({ children }: EmailLabelProps) {
  return (
    <EmailLabelContainer>
      <UserIconContainer>
        <FaUser />
      </UserIconContainer>
      {children}
    </EmailLabelContainer>
  );
}

export default EmailLabel;
