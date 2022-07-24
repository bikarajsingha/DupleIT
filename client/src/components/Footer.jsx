import { Typography } from "@material-ui/core";
import useStyles from '../styles';

const Footer = () => {
    const classes = useStyles();
    
    return (
        <>
            <footer className={classes.footer}>
                <Typography variant='h5' align="center" gutterBottom>
                    Thank you for watching!
                </Typography>
                <Typography variant='subtitle1' align="center">
                    Be sure to visit us again we upload videos every single day
                </Typography>
            </footer>
        </>
    );
};

export default Footer;