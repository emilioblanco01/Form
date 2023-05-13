/**
 * @title App.tsx
 * @description Componente principal de la aplicación
 * @version 1.0.0
 * @since 07/02/2021
 * @author Carlos Emilio Blanco Lopez
 */

import React from 'react';
import { Formik, Form } from 'formik';
import CustomInput from './components/CustomInput';
import { initialValues, validationSchema } from './formik/formik';
import { FormValues } from './interfaces/interfaces';
import CustomButton from './components/Button';
import Swal from 'sweetalert2';

// Styles for App component
import { useStyles } from './styles/form.styles';

// App component

const App: React.FC = () => {
  const classes = useStyles();

  /**
   * @function handleSubmit
   * @description Función que se ejecuta al enviar el formulario
   * @param values Valores del formulario
   * @returns void
   */
  
  const handleSubmit = (values: FormValues) => {
    Swal.fire({
      title: '¡Gracias por registrarte!',
      html: 
        `Favor de validar tus datos: </br></br>` + 
        `<p>Nombre: ${values.name}</p>` +
        `<p>Apellido Paterno: ${values.ApellidoPaterno}</p>` +
        `<p>Apellido Materno: ${values.ApellidoMaterno}</p>` +
        `<p>Teléfono: ${values.phone}</p>` +
        `<p>Email: ${values.email}</p>` +
        `</br></br>En breve nos pondremos en contacto contigo`,

      icon: 'success',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  // Render

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 20 }}>Formulario</h1>
      <main className={classes.main}>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          {({ errors, values, handleChange }) => (
            <Form className={classes.form}>
              <CustomInput
                name="name"
                label="Nombre"
                errors={errors.name}
                value={values.name}
                onChange={(value) => {
                  if (value.target.value.match(/^[a-zA-Z\s]*$/)) {
                    handleChange(value);
                  }
                }
                }
              />
              <CustomInput
                name="ApellidoPaterno"
                label="Apellido Paterno"
                errors={errors.ApellidoPaterno}
                value={values.ApellidoPaterno}
                onChange={
                  (value) => {
                    if (value.target.value.match(/^[a-zA-Z\s]*$/)) {
                      handleChange(value);
                    }
                  }
                }
              />
              <CustomInput
                name="ApellidoMaterno"
                label="Apellido Materno"
                errors={errors.ApellidoMaterno}
                value={values.ApellidoMaterno}
                onChange={
                  (value) => {
                    if (value.target.value.match(/^[a-zA-Z\s]*$/)) {
                      handleChange(value);
                    }
                  }
                }
              />
              <CustomInput
                name="phone"
                label="Teléfono"
                errors={errors.phone}
                value={values.phone}
                onChange={(value) => {
                  if (value.target.value.match(/^[0-9]*$/)) {
                    handleChange(value);
                  }
                }}
              />
              <CustomInput
                name="email"
                label="Correo electrónico"
                errors={errors.email}
                value={values.email}
                onChange={handleChange}
              />
              <CustomButton />
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default App;
