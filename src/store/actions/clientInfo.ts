import { ClientInfoActions, Actions } from "../../lib/types";

export const addLocation = (county: string, district: string): Actions => ({
  type: ClientInfoActions.addLocation,
  payload: {
    county,
    district
  }
});

export const addProperty = (property: string): Actions => ({
  type: ClientInfoActions.addProperty,
  payload: {
    property
  }
});

export const addContact = (
  name: string,
  phone: string,
  email: string,
  agreement: boolean
) => ({
  type: ClientInfoActions.addContact,
  payload: {
    email,
    phone,
    agreement,
    name
  }
});
