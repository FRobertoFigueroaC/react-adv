
import { Formik, Form } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheckbox} from "../components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikAbstract = () => {


  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik 
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: '',
          }}
          onSubmit={ (values) => {
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
                          .notOneOf(['0', '3'], "Invalid option")
                          .required("This field is required"),
              terms: Yup.boolean()
                        .oneOf([true], "You must accept aour terms and conditions")
            })}>
        { (formik) => (
          <Form>
            <MyTextInput label="First Name"
                          name="firstName"
                          placeholder="Roberto"/>
            <MyTextInput label="Last Name"
                          name="lastName"
                          placeholder="Figueroa"/>
            <MyTextInput label="Email"
                          name="email"
                          type="email"
                          placeholder="smth@smth.com" />

            <MySelect label="Job"
                      name="jobType">
              <option value="0">Select an option</option>
              <option value="1">Software Developer</option>
              <option value="2">Bussines Analyst</option>
              <option value="3">Project Manager</option>
            </MySelect>


            <MyCheckbox label="Terms and Conditions" name="terms"/>
  
            <button type="submit">
              Submit
            </button>
          </Form>)
        }
      </Formik>
    </div>
  )
}
