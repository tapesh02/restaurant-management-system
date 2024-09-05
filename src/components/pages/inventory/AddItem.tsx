import {
    Button,
    Dialog,
    DialogTitle, DialogActions, DialogContent, TextField, IconButton
} from "@mui/material";
import { MdCancel } from "react-icons/md";
import React from "react"


interface AddItemProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    showForm: boolean;
}

const AddItem = (props: AddItemProps) => {
    const { setShowForm, showForm } = props;
    return (
        <>

            <Dialog
                onClose={() => setShowForm(false)}
                aria-labelledby="customized-dialog-title"
                fullWidth
                maxWidth="sm"
                open={showForm}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Add Item
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => setShowForm(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8
                    }}
                >
                    <MdCancel />
                </IconButton>
                <DialogContent dividers >
                    <form >
                        <TextField
                            style={{ width: "100%", margin: "5px" }}
                            type="text"
                            label="Name*"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{ width: "100%", margin: "5px" }}
                            type="number"
                            label="Quntity*"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{ width: "100%", margin: "5px" }}
                            type="number"
                            label="Price*"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            style={{ width: "100%", margin: "5px" }}
                            type="string"
                            label="Category*"
                            variant="outlined"
                        />
                        <br />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary"  autoFocus onClick={() => setShowForm(false)}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddItem;