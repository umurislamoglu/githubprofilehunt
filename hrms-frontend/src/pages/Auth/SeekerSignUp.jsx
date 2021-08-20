import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";

const SeekerSignUp=({registerSubmit})=> {

  return (
    <div>
      <Formik
      initialValues={{
        firstName:"",
        lastName:"",
        nationalityId:"",
        birthday:"",
        email:"",
        password:"",
        passwordConfirmed: "",
        userType:"seeker",
        agreed: false
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("İsim giriniz"),
        lastName: Yup.string().required("Soyisim giriniz"),
        nationalityId: Yup.string().required("TC No giriniz"),
        birthday: Yup.date().required("Doğğum günü giriniz."),
        email: Yup.string().email().required("Email giriniz"),
        password: Yup.string()
        .required("Please Enter your password"),
        passwordConfirmed: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      agreed: Yup.boolean().required("Şartları kabul etmelisiniz")


      })}
      
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          
        }, 2000);
      }}
      >
  {
       ({
         values,
         errors,
         touched,
         dirty,
         handleChange,
         handleBlur,
         handleSubmit,  
         isSubmitting,
       }) => (
        <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input id="firstName" label="First Name" placeholder="First Name"  value={values.firstName}
                onChange={handleChange} />
          <Form.Input id="lastName" label="Last Name" placeholder="Last Name"  value={values.lastName}
                onChange={handleChange}/>
        </Form.Group>
        
        <Form.Input id="nationalityId" label="Nationality Id" placeholder="Nationality Id"  value={values.nationalityId}
                onChange={handleChange}/>
       
        <Form.Group widths="equal">
          <Form.Input id="birthday" label="Birthday" placeholder="Birthday"  value={values.birthday}
                onChange={handleChange}/>
          <Form.Input id="email" label="Email" placeholder="Email" value={values.email}
                onChange={handleChange} />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input id="password" label="Password" placeholder="Password"  value={values.password}
                onChange={handleChange}/>
          <Form.Input id="passwordConfirmed" label="Repeat Password" placeholder="Password" value={values.passwordConfirmed}
                onChange={handleChange}/>
        </Form.Group>

        <Form.Input id="userType" label="User Type" placeholder="Seeker" readOnly />
      
        <Form.Field>
          <Checkbox id="agreed" label="I agree to the Terms and Conditions" onChange={handleChange}/>
        </Form.Field>
       
        <Button type="submit" color="green" disabled={!dirty || isSubmitting}>
        Register
        </Button>
      </Form>
       )}


      </Formik>
      {/* <Form>
        <Form.Group widths="equal">
          <Form.Input label="First Name" placeholder="First Name" />
          <Form.Input label="Last Name" placeholder="Last Name" />
        </Form.Group>
        
        <Form.Input label="Nationality Id" placeholder="Nationality Id" />
       
        <Form.Group widths="equal">
          <Form.Input label="Birthday" placeholder="Birthday" />
          <Form.Input label="Email" placeholder="Email" />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input label="Password" placeholder="Password" />
          <Form.Input label="Repeat Password" placeholder="Password" />
        </Form.Group>

        <Form.Input label="User Type" placeholder="Seeker" readOnly />
      
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
       
        <Button type="submit" color="green">
        Register
        </Button>
      </Form> */}
    </div>
  );
}
export default SeekerSignUp; 