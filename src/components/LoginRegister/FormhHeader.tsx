import { FormHeaderProps } from '../../types/Login&Register/login&register.types';
import { Form, FormContainer, FormFlexBox, FormTitle } from '../../styles/LoginRegister/FormhHeader.styles';

function FormhHeader({ onSubmit, h1, children }: FormHeaderProps) {
  return (
    <FormContainer>
      <FormFlexBox>
        <Form onSubmit={onSubmit}>
          <FormTitle>{h1}</FormTitle>
          {children}
        </Form>
      </FormFlexBox>
    </FormContainer>
  );
}

export default FormhHeader;
