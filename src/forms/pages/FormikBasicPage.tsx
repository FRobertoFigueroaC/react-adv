
// import '../styles/styles.css'

export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
        <span>This field is required</span>
        
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
        
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
