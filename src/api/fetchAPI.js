import axios from "axios";

// import mappins to ids
import mappingYearUniIds from "../mappingDB/years_uni_ids";
import mappingYearMultiIds from "../mappingDB/years_multi_ids";
import mappingCentroidsIds from "../mappingDB/centroids_ids";

const URL = "https://api.jsonstorage.net/v1/json";

export function fetchRegionsUni(cropYear) {
  return axios.get(`${URL}/${mappingYearUniIds[cropYear]}`);
}

export function fetchRegionsMulti(cropYear) {
  return axios.get(`${URL}/${mappingYearMultiIds[cropYear]}`);
}

export async function fetchCentroids(lat, lon) {
  const lon_ = String(lon).slice(0, String(lon).length - 1);
  const lastDigit = String(lon).slice(-1);
  const id = `${lat};${lon_}`;

  // select suitable id
  for (let i of [lastDigit, 7, 9, 3, 8, 0, 1, 2, 4, 5, 6]) {
    try {
      const res = await axios.get(`${URL}/${mappingCentroidsIds[`${id}${i}`]}`);

      return res;
    } catch {}
  }

  return axios.get(`${URL}/${mappingCentroidsIds[`${lat};${lon}`]}`);
}
