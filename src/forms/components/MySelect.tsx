import { useField, ErrorMessage} from "formik"

interface Props {
  label: string;
  name: string;
  // options: Option[];
  [x:string]: string;
}

// interface Option {
//   key: string;
//   value: string;
// }

export const MySelect = ({
  label,
  // options,
  ...props
}: Props) => {

  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select { ...field } { ...props}>
        {/* {
          options.map(option => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))
        } */}

      </select>
      <ErrorMessage name={props.name} component='span'/>
      {/* {
        meta.touched && meta.error && (
          <span>{meta.error}</span>
        )
      } */}
    </>
  )
}

