import { config } from '../../Config/config';

export const getAllEmployees = async () => {
  return await fetch(config + `/AllEmployees`)
    .then((response) => {
      return response.json();
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      console.log(error);
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
