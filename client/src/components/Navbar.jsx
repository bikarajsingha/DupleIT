import { CssBaseline, Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Link } from 'react-router-dom';
import useStyles from '../styles';

const Navbar = ({show}) => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar className={classes.navbarSpacing}>
                    <Link to='/' className={classes.logo}>
                        <AllInclusiveIcon className={classes.icon}/>
                        <Typography variant='h6'>
                                WatchForever
                        </Typography>
                    </Link>
                    {show? 
                    <Link to='/user/sign-up' className={classes.link}>
                        <Button variant="outlined" style={{color: 'white', borderColor: 'white'}}>LOG-IN</Button>
                    </Link>: 
                    ''
                    }
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;