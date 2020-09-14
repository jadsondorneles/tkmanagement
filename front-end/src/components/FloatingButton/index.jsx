import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'

export default () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={'fullWidth'} maxWidth={'md'}>
                <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill out the form to create a task
                    </DialogContentText>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="csutomer"
                                label="Customer"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}