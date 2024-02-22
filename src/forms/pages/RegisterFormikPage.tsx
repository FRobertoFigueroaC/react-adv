
import '../styles/styles.css'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik 
              initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
              }}
              validationSchema={
                Yup.object({
                  name: Yup.string()
                            .max(15, "Must be less than 15 characters")   
                            .min(2, "Must be at least 2 characters")
                            .required("This field is required"),
                  email: Yup.string()
                              .email("Invalid format ")
                              .required("This field is required"),
                  password1: Yup.string()
                              .min(6, "Password must be at least 6 characters")
                              .required("This field is required"),
                  password2: Yup.string()
                              .oneOf([Yup.ref('password1')], 'The passwords don´t match')
                              .required("This field is required"),
                })
              }
              onSubmit={ (values) => {
                console.log(values)
              }}>
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput label="Name"
                          name="name"
                          placeholder="Roberto"/>
              <MyTextInput label="Email" type='email'
                          name="email"
                          placeholder="smth@g.com"/>
              <MyTextInput label="Password" type='password'
                          name="password1"/>
              <MyTextInput label="Confirm Password" type='password'
                          name="password2"/>

              <button type="submit">
                Submit
              </button>              
              <button onClick={handleReset}>
                Reset
              </button>              
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
