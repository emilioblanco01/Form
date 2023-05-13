import * as Yup from 'yup';
import { FormValues } from '../interfaces/interfaces';

/**
 * Validación de formulario con Yup
 * @type {Yup.ObjectSchema}
 * @property {string} name Nombre
 * @property {string} ApellidoPaterno Apellido Paterno
 * @property {string} ApellidoMaterno Apellido Materno
 * @property {string} phone Teléfono
 * @property {string} email Correo electrónico
 */

export const validationSchema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Solo se aceptan letras').required('El nombre es requerido'),
    ApellidoPaterno: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Solo se aceptan letras').required('El apellido paterno es requerido'),
    ApellidoMaterno: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Solo se aceptan letras').required('El apellido materno es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'El número de teléfono debe contener 10 dígitos')
        .required('El número de teléfono es requerido'),
});

/**
 * Valores iniciales del formulario
 * @type {FormValues}
 * @property {string} name Nombre
 * @property {string} ApellidoPaterno Apellido Paterno
 * @property {string} ApellidoMaterno Apellido Materno
 * @property {string} phone Teléfono
 * @property {string} email Correo electrónico
 */

export const initialValues: FormValues = {
    name: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    phone: '',
    email: '',
  };