/**
 * @desc This is the styles file for the Navigation component
 * @param makeStyles - this is a custom hook API for styling
 * @param createStyles - used to create styles with a hook API
 * @param Theme - this is the theme provided to the component
 * @returns the styles for the Navigation component
 */

import { createStyles, makeStyles } from '@mui/styles';
import { theme as themes } from './CommonStyles'

// styles for the Navigation component

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            height: '10%',
            cursor: "pointer",
        },
        main: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            width: '30vw',
            height: '70vh',
            [themes.breakpoints.down('lg')]: {
                width: '80vw',
            }},
    }),
);