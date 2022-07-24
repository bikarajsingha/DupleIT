import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: '5px'
    },
    logo: {
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center'
    },
    navbarSpacing: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        textDecoration: 'none',
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0px 15px 0px'
    },
    body: {
        backgroundColor: "#F2F2F2"
    }
    ,
    gutterBottom: {
        marginBottom: '5px'
    },
    cardGrid: {
        padding: '45px 0px 100px 0px'
    },
    card: {
        height: '100%'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '20px 0px 40px 0px'
    },
    gridItem: {
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.15)',
            transition: 'all 1s'
        }
    }
}));

export default useStyles;