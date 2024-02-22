
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

  const {
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
    name,
    email,
    password1,
    password2
  } = useForm({
    name:'',
    email:'',
    password1: '',
    password2: '',
  })

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={onSubmit}>
        <input type="text" placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
                className={`${name.trim().length <= 0 && 'has-error'}`}/>
        {name.trim().length <= 0 && <span>This field is required</span>}
        <input type="email" placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
                className={`${email.trim().length <= 0 && 'has-error'}`}/>
        {!isValidEmail(email) && <span>The email is not valid</span>}
        <input type="password"  placeholder="Password"
                name="password1"
                value={password1}
                onChange={onChange}
                className={`${password1.trim().length <= 0 && 'has-error'}`}/>
        {password1.trim().length <= 0 && <span>This field is required</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>The password must be more than 6 characters</span>}
        <input type="password"  placeholder="Repeat password"
                name="password2"
                value={password2}
                onChange={onChange}
                className={`${password2.trim().length <= 0 && 'has-error'}`}/>
        {password2.trim().length <= 0 && <span>This field is required</span>}
        {password2 !== password1 && <span>The password is not the same</span>}
        <button type="submit">
          Submit
        </button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  )
}
