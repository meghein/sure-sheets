import React, { useState, forwardRef } from 'react';
import html2canvas from 'html2canvas';
import { PDFViewer, Page, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import './SaveToPDF.scss'

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
        taintTest: true,
        allowTaint: true,
      });
      
    const imgData = canvas.toDataURL('image/png');

    const data = new FormData()
    data.append('file', imgData)
    data.append('upload_preset', process.env.REACT_APP_PRESET)

    const res = await fetch(
      process.env.REACT_APP_CLOUDINARY,
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
      backgroundColor: props.canvasColour,
      height: '1100px',
      width: '850px'
    },
    image: {
      objectFit: 'cover',
  }
  });
  
  return (
    <div>
      <img id='publish' src='/images/printer.png' alt="Click here to turn your sheet in to a PDF!" onClick={handleClickOpen}/>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className="pdf-appBar">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Your sheet is the sheet!!
            </Typography>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <PDFViewer>
          <Document>
            <Page style={styles.page}>
                <Image src={pdfUrl} style={styles.image}/>
            </Page>
          </Document>
        </PDFViewer>                
      </Dialog>
    </div>
  );
}; 