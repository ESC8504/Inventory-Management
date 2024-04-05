import {useState} from 'react';
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

function AddWarehouseModal({ open, handleClose, warehouseAdded }) {

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        capacity: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        axios.post(`${import.meta.env.VITE_REACT_URL}/warehouse/add`, {
            name: formData.name,
            location: formData.location,
            capacity: Number(formData.capacity)
        })
            .then(res => {
                console.log(res.data);
                handleClose();
                warehouseAdded();
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-warehouse-modal"
            aria-describedby="add-warehouse-modal"
        >
            <Box sx={style}>
                <Typography id="add-warehouse-modal" variant="h6" sx={{ color: 'text.secondary'}}>Add New Warehouse</Typography>
                <TextField margin="dense" name="name" label="Name" value={formData.name} onChange={handleChange} />
                <TextField margin="dense" name="location" label="Location" value={formData.location} onChange={handleChange} />
                <TextField margin="dense" name="capacity" label="Capacity" value={formData.capacity} onChange={handleChange} />
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



export default AddWarehouseModal;