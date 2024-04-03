import {useState} from 'react';
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

function AddCategoryModal({ open, handleClose, categoryAdded }) {

        const [formData, setFormData] = useState({
            name: ''
        });

        const handleChange = e => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }

        const handleSubmit = () => {
            axios.post('http://localhost:8283/category/add', {
                name: formData.name
            })
                .then(res => {
                    console.log(res.data);
                    handleClose();
                    categoryAdded();
                })
                .catch(err => console.log(err));
        }

        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-category-modal"
                aria-describedby="add-category-modal"
            >
                <Box sx={style}>
                    <Typography id="add-category-modal" variant="h6" sx={{ color: 'text.secondary'}}>Add New Category</Typography>
                    <TextField margin="dense" name="name" label="Name" value={formData.name} onChange={handleChange} />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button onClick={handleSubmit} variant="contained">Submit</Button>
                    </Box>
                </Box>
            </Modal>
        )

}

const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '16px',
    border: '0px solid #000',
    boxShadow: 10,
    p: 8,
  };

export default AddCategoryModal;