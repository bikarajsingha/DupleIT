import React, { useState } from "react";
import { Typography, Container, Grid, Card, CardMedia } from "@material-ui/core";

import useStyles from '../styles';

import video from '../videos/Rainy Day [short 30 sec animation].mp4';

import DialogVideo from '../components/Dialog';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const cards = [1,2,3,4,5,6,7,8,9]
const Home = () => {
    const classes = useStyles();
    
    const [state, setState] = useState(false);

    const openVideo = () => {
        setState(true)
    };
    const handleClose = () => {
        setState(false)
    }

    const handleOnMouseEnter = (e) => {
        e.currentTarget.play();
    }
    const handleOnMouseOut = (e) => {
        e.currentTarget.currentTime = 0;
        e.currentTarget.pause();
    }

    return(
        <>
            <Navbar show={true}/>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h3" align="center" color="textPrimary" className={classes.gutterBottom}>
                            Trending videos
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Welcome, help yourself with the trending videos we have!
                        </Typography>
                    </Container>
                </div>
                <div className={classes.body}>
                    <Container maxWidth="lg" className={classes.cardGrid}>
                        <Grid container spacing={2}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} className={classes.gridItem} onClick={openVideo}>
                                    <Card className={classes.card}>
                                        <CardMedia className={classes.cardMedia}
                                            component="video"
                                            src={video}
                                            onMouseEnter={handleOnMouseEnter}
                                            onMouseOut={handleOnMouseOut}
                                            muted={true}
                                        />
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </main>
            <Footer />
            <DialogVideo open={state} close={handleClose} video={video}/>
        </>
    )
};

export default Home;