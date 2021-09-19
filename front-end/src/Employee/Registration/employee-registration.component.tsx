import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import dayjs from 'dayjs';
import {
  Button,
  TextInput,
  DatePicker,
  DatePickerInput,
  RadioButton,
  RadioButtonGroup,
  Column,
} from 'carbon-components-react';
import './employee-registration.scss';
import { formValues } from './employee-registration-types';
import { validationSchema } from './validation/employee-registration-validation';
import { EmployeeRegistrationFormProps } from './employee-registration-types';

export const EmployeeRegistrationForm: React.FC = () => {
  const onFormSubmit = (
    values: EmployeeRegistrationFormProps,
    helpers: FormikHelpers<EmployeeRegistrationFormProps>,
  ) => {
    helpers.setSubmitting(true);
    console.log('Values', values);
  };

  return (
    <Formik validationSchema={validationSchema} initialValues={formValues} onSubmit={onFormSubmit}>
      {({ handleChange, setFieldValue, handleBlur, values, touched, errors, isSubmitting }) => (
        <Form className="form">
          <Column>
            <TextInput
              id="firstName"
              name="firstName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="First name"
              value={values.firstName}
              invalid={!!(touched.firstName && errors.firstName)}
              invalidText={errors.firstName}
            />
          </Column>
          <Column>
            <TextInput
              id="middleName"
              name="middleName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="Middle name"
              value={values.middleName}
              invalid={!!(touched.middleName && errors.middleName)}
              invalidText={errors.middleName}
            />
          </Column>
          <Column>
            <TextInput
              id="lastName"
              name="lastName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="Last name"
              value={values.lastName}
              invalid={!!(touched.lastName && errors.lastName)}
              invalidText={errors.lastName}
            />
          </Column>
          <Column>
            <TextInput
              id="idNumber"
              name="idNumber"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="Id number"
              value={values.idNumber}
              invalid={!!(touched.idNumber && errors.idNumber)}
              invalidText={errors.idNumber}
            />
          </Column>
          <Column>
            <DatePicker
              datePickerType="single"
              onChange={([event]) => {
                setFieldValue('dob', dayjs(event).format('MM/DD/YYYY'));
              }}
              onBlur={handleBlur}
              maxDate={dayjs(new Date()).format('MM/DD/YYYY')}
            >
              <DatePickerInput
                id="dob"
                name="dob"
                type="date"
                labelText="Date of birth"
                placeholder="mm/dd/yyyy"
                invalid={!!(touched.dob && errors.dob)}
                invalidText={errors.dob}
              />
            </DatePicker>
          </Column>
          <Column>
            <TextInput
              id="age"
              name="age"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="Age"
              value={values.age}
              invalid={!!(touched.age && errors.age)}
              invalidText={errors.age}
            />
          </Column>
          <Column>
            <TextInput
              id="telephone"
              name="telephone"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="Phone number"
              value={values.telephone}
              invalid={!!(touched.telephone && errors.telephone)}
              invalidText={errors.telephone}
            />
          </Column>
          <Column>
            <TextInput
              id="email"
              name="email"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="Email"
              value={values.email}
              invalid={!!(touched.email && errors.email)}
              invalidText={errors.email}
            />
          </Column>
          <Column>
            <RadioButtonGroup
              name="gender"
              legendText="Choose gender"
              onChange={(event) => {
                setFieldValue('gender', event);
              }}
              defaultSelected="Male"
              valueSelected="Male"
            >
              <RadioButton id="male" key="male" labelText="Male" value="Male" />
              <RadioButton id="female" key="female" labelText="Female" value="Female" />
            </RadioButtonGroup>
          </Column>
          <Column>
            <TextInput
              id="kraPin"
              name="kraPin"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="KRA pin"
              value={values.kraPin}
              invalid={!!(touched.kraPin && errors.kraPin)}
              invalidText={errors.kraPin}
            />
          </Column>
          <Column>
            <TextInput
              id="nssf"
              name="nssf"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="NSSF number"
              value={values.nssf}
              invalid={!!(touched.nssf && errors.nssf)}
              invalidText={errors.nssf}
            />
          </Column>
          <Column>
            <TextInput
              id="nhif"
              name="nhif"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="NHIF number"
              value={values.nhif}
              invalid={!!(touched.nhif && errors.nhif)}
              invalidText={errors.nhif}
            />
          </Column>
          <Column>
            <TextInput
              id="pfNumber"
              name="pfNumber"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="PF number"
              value={values.pfNumber}
              invalid={!!(touched.pfNumber && errors.pfNumber)}
              invalidText={errors.pfNumber}
            />
          </Column>
          <Column>
            <TextInput
              id="salutation"
              name="salutation"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              labelText="Salutation"
              value={values.salutation}
              invalid={!!(touched.salutation && errors.salutation)}
              invalidText={errors.salutation}
            />
          </Column>
          <Column>
            <Button className="submit-btn" disabled={isSubmitting} type="submit">
              Save
            </Button>
          </Column>
        </Form>
      )}
    </Formik>
  );
};
