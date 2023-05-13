/**
 * @title CustomInput
 * @description Componente que renderiza un input
 * @version 1.0.0
 * @since 07/02/2021
 * @author Carlos Emilio Blanco Lopez
 */

import { TextField } from '@mui/material';
import { ErrorMessage } from 'formik';
import { CustomInputProps } from '../interfaces/interfaces';

const CustomInput = ({ name, label, errors, value, onChange, type }: CustomInputProps) => {
    return (
        <TextField
            fullWidth
            style={{ marginBottom: 25 }}
            InputLabelProps={{ shrink: true }}
            type={type || 'text'}
            inputProps={{ maxLength: type === 'number' ? 10 : undefined }}
            id={name}
            name={name}
            label={label}
            variant="outlined"
            error={Boolean(errors)}
            onChange={onChange}
            value={value}
            helperText={<ErrorMessage name={name} component="div" className="error-message" />}
        />
    )
}

export default CustomInput