const url = process.env.REACT_APP_URL;
export const getAllEmployees = async () => {
  return await fetch(url + `/AllEmployees`)
    .then((response) => {
      return response.json();
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};
export type Employee = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: string;
  dob: string;
  age: number;
  telephone: string;
  email: string;
  gender: string;
  kraPin: string;
  nssf: number;
  nhif: number;
  pfNumber: number;
  salutation: string;
};
