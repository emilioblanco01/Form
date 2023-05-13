import { ChangeEventHandler } from "react";

/**
 * @description Interface for FormValues
 * @interface FormValues
 * @property {string} name Nombre
 * @property {string} ApellidoPaterno Apellido Paterno
 * @property {string} ApellidoMaterno Apellido Materno
 * @property {string} phone Teléfono
 * @property {string} email Correo electrónico
 * @export
 */

export interface FormValues {
    name: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    phone: string;
    email: string;
}

/**
 * @description Interface for CustomInputProps
 * @interface CustomInputProps
 * @property {string} name Nombre
 * @property {string} label Etiqueta
 * @property {string} errors Errores
 * @property {string} value Valor
 * @property {string} type Tipo
 * @property {ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>} onChange Evento de cambio
 */


export interface CustomInputProps {
    name: string;
    label: string;
    errors: any;
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    value?: string;
    type?: string;
}