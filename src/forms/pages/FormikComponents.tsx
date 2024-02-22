
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikComponents = () => {


  return (
    <div>
      <h1>Formik Components</h1>
      <Formik 
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: '',
          }}
          onSubmit={ (values: FormValues) => {
            console.log(values)
          }}
          validationSchema={
            Yup.object({
              firstName: Yup.string()
                            .max(15, "Must be less than 15 characters")
                            .required("This field is required"),
              lastName: Yup.string()
                            .max(15, "Must be less than 15 characters")
                            .required("This field is required"),
                            email: Yup.string()
                            .email("This format is not valid as email")
                            .required("This field is required"),
              jobType: Yup.string()
                          .notOneOf(['0'], "This field is required")
                          .required("This field is required"),
              terms: Yup.boolean()
                        .oneOf([true], "You must accept aour terms and conditions")
            })}>
        { (formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName"/>
            <ErrorMessage name="firstName" component="span"/>
            
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName"/>
            <ErrorMessage name="lastName" component="span"/>
            
            <label htmlFor="email">Email</label>
            <Field type="text" name="email"/>
            <ErrorMessage name="email" component="span"/>
            
            <label htmlFor="jobType">Job</label>
            <Field as="select" name="jobType">
              <option value="0">Select an option</option>
              <option value="1">Software Developer</option>
              <option value="2">Bussines Analyst</option>
              <option value="3">Project Manager</option>
            </Field>
            <ErrorMessage name="jobType" component="span"/>

            <label htmlFor="terms" className="check-label">
              <Field type="checkbox" name="terms"/>
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span"/>

            <button type="submit">
              Submit
            </button>
          </Form>)
        }
      </Formik>
    </div>
  )
}
