import { useField, ErrorMessage } from "formik"


interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x:string]: any;
}

export const MyTextInput = ({label, ...props}: Props) => {

  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input type="text" { ...field } { ...props} />
      <ErrorMessage name={props.name} component='span'/>
      {/* {
        meta.touched && meta.error && (
          <span>{meta.error}</span>
        )
      } */}
    </>
  )
}
