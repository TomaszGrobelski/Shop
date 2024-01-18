import { ChangeEvent } from 'react';

import { FormWrapper } from './FormDelivery.styles';
import { FormFlexBox } from './FormDelivery.styles';
import LabelForm from './LabelForm';

interface FormDeliveryProps {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setAddress: (value: string) => void;
  setCity: (value: string) => void;
  setPostalCode: (value: string) => void;
  setEmail: (value: string) => void;
  setPhoneNumber: (value: number | undefined) => void;
}

function FormDelivery({
  setFirstName,
  setLastName,
  setAddress,
  setCity,
  setPostalCode,
  setEmail,
  setPhoneNumber,
}: FormDeliveryProps) {
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numberValue = parseInt(e.target.value, 10);
    if (!isNaN(numberValue)) {
      setPhoneNumber(numberValue);
    } else {
      setPhoneNumber(undefined);
    }
  };

  return (
    <form>
      <FormWrapper>
        <FormFlexBox>
          <LabelForm
            id='firstName'
            title='First Name'
            type='text'
            autoComplite='given-name'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
          <LabelForm
            id='lastName'
            title='Last Name'
            type='text'
            autoComplite='family-name'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
        </FormFlexBox>
        <LabelForm
          id='address'
          title='Address'
          type='text'
          autoComplite='street-address'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAddress(e.target.value)
          }
        />
        <LabelForm
          id='city'
          title='City'
          type='text'
          autoComplite='address-leve12'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCity(e.target.value)
          }
        />
        <LabelForm
          id='postalCode'
          title='Postal Code'
          type='text'
          autoComplite='postal-code'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPostalCode(e.target.value)
          }
        />
        <FormFlexBox>
          <LabelForm
            id='email'
            title='Email'
            type='email'
            autoComplite='email'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <LabelForm
            id='phoneNumber'
            title='Phone Number'
            type='tel'
            autoComplite='tel'
            onChange={handlePhoneNumberChange}
          />
        </FormFlexBox>
      </FormWrapper>
    </form>
  );
}

export default FormDelivery;
