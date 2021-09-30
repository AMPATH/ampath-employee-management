import BaseUrl from './Resource';
export const getEmployeeProfile = async () => {
  return await fetch(BaseUrl + `search?pfnumber=1234`)
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

export const getTimesheet = async () => {
  return await fetch(BaseUrl + `timesheet?pfnumber=1234`)
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

export type Employee = {
  name: string;
  pfNumber: number;
  age: number;
  gender: string;
  email: string;
  telephone: string;
};
