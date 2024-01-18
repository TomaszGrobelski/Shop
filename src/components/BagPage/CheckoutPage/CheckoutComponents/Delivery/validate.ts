export const validate = (
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  postalCode: string,
  email: string,
  phoneNumber: number | undefined,
): boolean => {
  const regex = /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
  const isNameValid = (name: string) => {
    const trimmedName = name.trimEnd();
    return regex.test(trimmedName) && trimmedName.length > 0;
  };
  const firstNameValid = isNameValid(firstName);

  const isSurnameValid = (surname: string) => {
    const trimmedSurname = surname.trimEnd();
    return regex.test(trimmedSurname) && trimmedSurname.length > 0;
  };
  const lastNameValid = isSurnameValid(lastName);

  const isAddressValid = (address: string) => {
    const addressRegex = /^[A-Za-z0-9\s,./-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;

    return addressRegex.test(address) && address.trim().length > 0;
  };
  const addressValid = isAddressValid(address);

  const isCityValid = (city: string) => {
    const trimmedCity = city.trimEnd();
    return regex.test(trimmedCity) && trimmedCity.length > 0;
  };
  const cityValid = isCityValid(city);

  const postalCodeValid = /^\d+[-/]?\d+$/.test(postalCode);
  const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  const phoneNumberValid =
    phoneNumber !== undefined && /^\d{9}$/.test(phoneNumber.toString());

  const isValid =
    firstNameValid &&
    lastNameValid &&
    addressValid &&
    cityValid &&
    postalCodeValid &&
    emailValid &&
    phoneNumberValid;
  return isValid;
};
