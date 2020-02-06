import { FETCH_BEACHES, FETCH_BEACH } from "../constants/beach";

const fetchBeaches = beaches => ({
  type: FETCH_BEACHES,
  payload: {
    beaches
  }
});

const fetchBeach = beach => ({
  type: FETCH_BEACH,
  payload: {
    beach
  }
});

export { fetchBeaches, fetchBeach };
