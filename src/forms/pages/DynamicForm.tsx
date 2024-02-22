import { Form, Formik } from "formik";
import * as Yup from "yup";

import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from "../components";

const initialValues: {[x:string]: any} = {};
const requiredFields: {[x:string]: any} = {}

for (const element of formJson) {
  initialValues[element.name] = element.value;
  if (!element.validations) continue;

  let schema = Yup.string();
  for (const rule of element.validations) {
    switch (rule.type) {
      case 'required':
        schema = schema.required(rule.message || 'This field is required')
        break;
      case 'minLength':
        schema = schema.min(rule?.value, rule.message || 'This field is required')
        break;
      case 'email':
        schema = schema.email(rule.message || 'This field is required')
        break;
    
      default:
        break;
    }
    // other rules
  }

  requiredFields[element.name] = schema

}

const validationSchema = Yup.object({...requiredFields})



export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={ (values) => {
                console.log(values)
              }}>

        {({handleReset}) => (
          <Form>
            {
              formJson.map(field => {

                const textTypes = ['input', 'text', 'password', 'email'];

                if (textTypes.includes(field.type)) {   
                  return <MyTextInput key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}/>
                } else if (field.type === 'select') {
                  return (
                          <MySelect key={field.name}
                            label={field.label}
                            name={field.name} >
                              <option value="0">Select an Option</option>
                              {
                                field?.options.map(({id, value}) => (
                                  <option value={id} key={id}>{value}</option>
                                ))
                              }

                          </MySelect>
                        )
                }
                return <span>Type {field.type} not supported</span>
              })
            }
            <button type="submit">
              Submit
            </button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}

      </Formik>
    </div>
  )
}
