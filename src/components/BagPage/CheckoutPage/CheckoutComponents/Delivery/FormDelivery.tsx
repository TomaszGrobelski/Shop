import LabelForm from "./LabelForm";

function FormDelivery() {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <LabelForm id="firstName" title="First Name" type="text" autoComplite="given-name" />
          <LabelForm id="lastName" title="Last Name" type="text" autoComplite="family-name" />
        </div>
        <LabelForm id="address" title="Address" type="text" autoComplite="street-address" />
        <LabelForm
          id="address2"
          title="Add Company, C/O, Apt, Suite, Unit"
          type="text"
          autoComplite="street-address2"
        />
        <LabelForm id="city" title="City" type="text" autoComplite="address-leve12" />
        <LabelForm id="postalCode" title="Postal Code" type="text" autoComplite="postal-code" />
        <div className="flex flex-col gap-4 sm:flex-row">
          <LabelForm id="email" title="Email" type="email" autoComplite="email" />
          <LabelForm id="phoneNumber" title="Phone Number" type="tel" autoComplite="tel" />
        </div>
      </div>
    </form>
  );
}

export default FormDelivery;
