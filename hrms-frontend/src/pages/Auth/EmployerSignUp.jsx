import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";

import EmployerService from './../../services/EmployerService';

export default function EmployerSignUp() {
  return (
    <div>
      <Formik
        initialValues={{
          companyName: "",
          website: "",
          phoneNumber: "",
          email: "",
          password: "",
          passwordConfirmed: "",
          userType: "employer",
          agreed: false,
        }}
        validationSchema={Yup.object({
          companyName: Yup.string().required("Şirket ismi giriniz"),
          website: Yup.string().required("Şirket websitesi giriniz"),
          phoneNumber: Yup.string().required("Telefon numarası giriniz"),
          email: Yup.string().email().required("Email giriniz"),
          password: Yup.string()
            .required("Please Enter your password")
           ,
          passwordConfirmed: Yup.string()
            .required()
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
          agreed: Yup.boolean().required("Şartları kabul etmelisiniz"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          debugger;
          let employerService = new EmployerService();

          let val={
            companyName:values.companyName,
            website:values.website,
            phoneNumber:values.phoneNumber,
            email:values.email,
            password:values.password,
            userType:values.userType,
          }
          employerService
          .createEmployer(val)
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
         


          setTimeout(() => {
            
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleReset,
          handleChange,
          dirty,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Container text>
              <Form.Input
                id="companyName"
                label="Company Name"
                placeholder="Company Name"
                value={values.companyName}
                onChange={handleChange}
              />
              <Form.Input
                label="Website"
                placeholder="Website"
                id="website"
                value={values.website}
                onChange={handleChange}
              />

              <Form.Group widths="equal">
                <Form.Input
                  label="Phone Number"
                  placeholder="Phone Number"
                  id="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <Form.Input
                  label="Email"
                  placeholder="Email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  label="Password"
                  placeholder="Password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <Form.Input
                  label="Repeat Password"
                  placeholder="Password"
                  id="passwordConfirmed"
                  value={values.passwordConfirmed}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Input
                label="User Type"
                placeholder="Employer"
                readOnly
                id="userType"
              />
              <Form.Field>
                <Checkbox
                  label="I agree to the Terms and Conditions"
                  id="agreed"
                  onChange={handleChange}
                />
              </Form.Field>
              <Button
                type="submit"
                color="green"
                disabled={!dirty || isSubmitting}
              >
                Register
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  );
}
