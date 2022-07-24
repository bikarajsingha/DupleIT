import React from "react";
import { Dialog,  Card, CardMedia } from "@material-ui/core";

const DialogVideo = ({ open, close, video }) => {
    return (
        <>
            <Dialog open={open} onClose={close} maxWidth='md'>
                    <Card>
                        <CardMedia 
                            component="video"
                            src={video}
                            controls
                        />      
                    </Card>
            </Dialog>
        </>
    );
};

export default DialogVideo;
