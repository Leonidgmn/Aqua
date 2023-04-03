import './App.css';

import { Formik, Field, Form } from "formik";

function App() {
  return (
    <>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(values) => {
          console.log(`${values.firstName} ${values.lastName} - ${values.email}`)
        }}
      >
        {props => (
          <Form>
            <Field name="firstName" type="text" placeholder="First Name"/>
            <Field name="lastName" type="text" placeholder="Last Name"/>
            <Field name="email" type="email" placeholder="Email" value={props.values.email}/>
            <button type="submit">Submit</button>
        </Form>
        )}
        
      </Formik>
      <Formik
        initialValues={{ phone: "", description: "", color: ""}}
        onSubmit={(values) => {
          console.log(`${values.phone} ${values.description}; color: ${values.color}`)
        }}
      >
        {props => (
          <Form>
            <Field name="phone" type="number" placeholder="+380971234567" value={props.values.phone}/>
            <Field name="description" type="text" placeholder="text"/>
            <Field as="select" name="color">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
            <button type="submit">Submit</button>
            
          </Form>
        )}
      </Formik>


    </>
  );
}

export default App;
