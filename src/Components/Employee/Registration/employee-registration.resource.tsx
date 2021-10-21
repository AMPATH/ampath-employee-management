import { EmployeeRegistrationFormProps } from './employee-registration-types';
const token = localStorage.getItem('token');
const baseUrl = process.env.REACT_APP_URL;

export const saveEmployeeInformation = async (values: EmployeeRegistrationFormProps) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer  ${token}` },
    body: JSON.stringify(values),
  };
  return await fetch(baseUrl + '/employee', requestOptions)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getEmployeeProfile = async (pf) => {
  return await fetch(baseUrl + `/search?pfnumber=${pf}`, {
    headers: {
      Authorization: `Bearer  ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((error: any) => {
      return error;
    });
};
