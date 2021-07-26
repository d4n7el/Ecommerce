export const mapAddressNewOrder = (address) => ({
  title: address.title,
  last_name: address.last_name,
  postal_code: address.postal_code,
  city: address.city,
  state: address.state,
  country: address.country,
  phone: address.phone,
  address: address.address,
});
