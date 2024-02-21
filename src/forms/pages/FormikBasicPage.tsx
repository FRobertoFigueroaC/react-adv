
import { useFormik, FormikErrors } from "formik";
import '../styles/styles.css'

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = ({firstName, lastName, email}: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!firstName) {
      errors.firstName = 'This field is required';
    } else if (firstName.trim().length > 15) {
      errors.firstName = 'Must be less than 15 characters';
    }
    if (!lastName) {
      errors.lastName = 'This field is required';
    } else if (lastName.trim().length > 15) {
      errors.lastName = 'Must be less than 15 characters';
    }
    if (!email) {
      errors.email = 'This field is required';
    } else if (!re.test(email)) {
      errors.email = 'Email is not a valid email address'
    }

    return errors
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values: FormValues) => {
      console.log(values)
    }
  });
  
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text"
               name="firstName"
               value={values.firstName}
               onChange={handleChange}
               onBlur={handleBlur}/>
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}/>
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        
        <label htmlFor="email">Email</label>
        <input type="email" name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
        {touched.email && errors.email && <span>{errors.email}</span>}


        { Object.keys(touched).length > 0 && Object.keys(errors).length == 0 &&
          <button type="submit">
            Submit
          </button>
        }
      </form>
    </div>
  )
}
