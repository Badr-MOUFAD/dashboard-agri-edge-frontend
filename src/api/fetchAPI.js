import axios from "axios";

// import mappins to ids
import mappingYearUniIds from "../mappingDB/year_uni_ids";
import mappingYearMultiIds from "../mappingDB/year_multi_ids";
import mappingCentroidsIds from "../mappingDB/centroids_ids";

const URL = "https://api.jsonstorage.net/v1/json";

export function fetchRegionsUni(cropYear) {
  return axios.get(`${URL}/${mappingYearUniIds[cropYear]}`);
}

export function fetchRegionsMulti(cropYear) {
  return axios.get(`${URL}/${mappingYearMultiIds[cropYear]}`);
}

export function fetchCentroids(lat, lon) {
  return axios.get(`${URL}/${mappingCentroidsIds[`${lat};${lon}`]}`);
}
