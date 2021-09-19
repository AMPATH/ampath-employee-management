export interface EmployeeRegistrationFormProps {
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: string;
  dob: string;
  age: string;
  telephone: string;
  email: string;
  gender: string;
  kraPin: string;
  nssf: string;
  nhif: string;
  pfNumber: string;
  salutation: string;
}

export const formValues: EmployeeRegistrationFormProps = {
  firstName: '',
  middleName: '',
  lastName: '',
  idNumber: '',
  dob: '',
  age: '',
  telephone: '',
  email: '',
  gender: 'Male',
  kraPin: '',
  nssf: '',
  nhif: '',
  pfNumber: '',
  salutation: '',
};
