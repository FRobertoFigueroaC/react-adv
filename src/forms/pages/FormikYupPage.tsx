
import { useFormik } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYup = () => {

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
                    .max(15, "Must be less than 15 characters")
                    .required("This field is required"),
      lastName: Yup.string()
                    .max(15, "Must be less than 15 characters")
                    .required("This field is required"),
      email: Yup.string()
                    .email("This format is not valid as email")
                    .required("This field is required")
    }),
    onSubmit: (values: FormValues) => {
      console.log(values)
    }
  });
  
  return (
    <div>
      <h1>Formik Yup</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text"
               {...getFieldProps('firstName')}/>
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps('lastName')}/>
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        
        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps('email')}/>
        {touched.email && errors.email && <span>{errors.email}</span>}


        { Object.keys(touched).length > 0 && Object.keys(errors).length === 0 &&
          <button type="submit">
            Submit
          </button>
        }
      </form>
    </div>
  )
}
