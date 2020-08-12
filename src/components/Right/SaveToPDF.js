import React, { useState, forwardRef } from 'react';
import html2canvas from 'html2canvas';
import { PDFViewer, Page, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
// import proxy from 'html2canvas-proxy'

import './Right.scss'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SaveToPDF(props) {
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const useStyles = makeStyles((theme) => ({
    title: {
      marginRight: theme.spacing(2),
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  const handleClickOpen = async () => {
    const input = document.getElementById('canvas');

    const canvas = await html2canvas(input, {
        useCORS: true,
        taintTest: true,
        allowTaint: true,
        proxy: "http://localhost:8001/",
        logging: true
      });
      
    const imgData = canvas.toDataURL('image/png;base64');

    const data = new FormData()
    data.append('file', imgData)
    data.append('upload_preset', 'xdtyzicm')

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/sure-sheets/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    console.log(file.secure_url)

    setPdfUrl(file.secure_url)

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const styles = StyleSheet.create({
    page: {
      backgroundColor: props.canvasColour
    },
    // Mess with this?
    image: {
      objectFit: 'cover',
  }
  });
  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Publish
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="pdf-appBar">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Your Beautiful Sure Sheet
            </Typography>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <PDFViewer>
          <Document>
            <Page height="1100px" width="850px" style={styles.page}>
                <Image src={pdfUrl} style={styles.image}/>
            </Page>
          </Document>
        </PDFViewer>                
      </Dialog>
    </div>
  );
}; 