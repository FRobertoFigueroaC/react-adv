import { useField,ErrorMessage } from "formik"


interface Props {
  label: string;
  name: string;
  [x:string]: string;
}

export const MyCheckbox = ({label, ...props}: Props) => {

  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>
        <input type="checkbox" { ...field } { ...props}/>
              {label}
      </label>
      <ErrorMessage name={props.name} component='span'/>
      {/* {
        meta.touched && meta.error && (
          <span>{meta.error}</span>
        )
      } */}
    </>
  )
}
