import { ClientInfoState, ClientInfoActions, Actions } from "../../lib/types";

const initialState: ClientInfoState = {
  name: "",
  email: "",
  phone: "",
  agreement: false,
  property: "",
  county: "",
  district: ""
};

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case ClientInfoActions.addLocation:
      return {
        ...state,
        county: action.payload.county,
        district: action.payload.district
      };
    case ClientInfoActions.addProperty:
      return {
        ...state,
        property: action.payload.property
      };
    case ClientInfoActions.addContact:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        agreement: action.payload.agreement
      };
    default:
      return state;
  }
};
