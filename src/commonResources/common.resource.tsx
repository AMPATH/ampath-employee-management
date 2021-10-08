import { useFetch } from '../globals/useFetch';

const url = process.env.REACT_APP_URL;
export const getCounties = async () => {
  return await useFetch(`${url}/county`).then((response) => {
    return response.data;
  });
};
export const getDepartments = async () => {
  return await useFetch(`${url}/department`).then((response) => {
    return response.data;
  });
};
export const getProjects = async () => {
  return await useFetch(`${url}/project`).then((response) => {
    return response.data;
  });
};
export const getPrograms = async () => {
  return await useFetch(`${url}/program`).then((response) => {
    return response.data;
  });
};
export const getSites = async () => {
  return await useFetch(`${url}/site`).then((response) => {
    return response.data;
  });
};
export const getBudgets = async () => {
  return await useFetch(`${url}/budget`).then((response) => {
    return response.data;
  });
};
export const trackEmployees = async () => {
  return await useFetch(`${url}/movement`).then((response) => {
    return response.data;
  });
};
export const getReport = async (param: any) => {
  return await useFetch(
    `${url}/report?department=${param.department}&project=${param.project}&site=${param.site}&budget=${param.budget}&county=${param.county}&status=${param.contractStatus}&program=${param.programArea}`,
  ).then((response) => {
    return response.data;
  });
};
