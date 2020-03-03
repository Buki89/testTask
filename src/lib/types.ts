export interface ClientInfoState {
  name: string;
  email: string;
  phone: string;
  agreement: boolean;
  property: string;
  county: string;
  district: string;
}

export enum ClientInfoActions {
  addLocation = "ADD_LOCATION",
  addProperty = "ADD_PROPERTY",
  addContact = "ADD_CONTACT"
}

export type Actions =
  | {
      type: ClientInfoActions.addLocation;
      payload: {
        county: string;
        district: string;
      };
    }
  | {
      type: ClientInfoActions.addProperty;
      payload: {
        property: string;
      };
    }
  | {
      type: ClientInfoActions.addContact;
      payload: {
        name: string;
        email: string;
        phone: string;
        agreement: boolean;
      };
    };
