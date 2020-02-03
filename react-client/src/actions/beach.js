import { FETCH_BEACHES } from "../constants/beach";

export const fetchBeaches = beaches => ({
  type: FETCH_BEACHES,
  payload: {
    beaches
  }
});
