import { useContext, useEffect, useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { useWarehouse } from '../contexts/WarehouseContext';
import WarehouseList from '../components/warehouse/WarehouseList';

function AddProductModal({ open, handleClose, productAdded }) {
    const { selectedWarehouse, setSelectedWarehouse } = useWarehouse();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        manufacturer: '',
        categoryId: '',
        description: '',
        price: '',
        quantity: '',
        partNumber: '',
        warehouseId: selectedWarehouse
    });

    useEffect(() => {
        axios.get('http://localhost:8283/category/all')
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8283/product/add', {
            name: formData.name,
            manufacturer: formData.manufacturer,
            categoryId: formData.categoryId,
            description: formData.description,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
            partNumber: formData.partNumber,
            warehouseId: formData.warehouseId
        })
            .then(res => {
                console.log(res.data);
                handleClose();
                productAdded();
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-product-modal"
            aria-describedby="add-product-modal"
        >
            <Box sx={style}>
                <Typography id="add-product-modal" variant="h6" sx={{ color: 'text.secondary'}}>Add New Product</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField margin="dense" name="name" label="Name" value={formData.name} onChange={handleChange} />
                    <TextField margin="dense" name="manufacturer" label="Manufacturer" value={formData.manufacturer} onChange={handleChange} />
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField margin="dense" name="description" label="Description" value={formData.description} onChange={handleChange} />
                    <TextField margin="dense" name="price" label="Price" value={formData.price} onChange={handleChange} />
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField margin="dense" name="partNumber" label="Part Number" value={formData.partNumber} onChange={handleChange} />
                    <TextField margin="dense" name="quantity" label="Quantity" value={formData.quantity} onChange={handleChange} />
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center'}}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select name="categoryId" value={formData.categoryId} onChange={handleChange}>
                            {categories.map(category => (
                                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <WarehouseList
                        selectedWarehouse={formData.warehouseId}
                        onSelectWarehouse={value => setFormData({ ...formData, warehouseId: value })} />
                </Box>
                <Box sx={{ display: 'flex'}}>
                    <Button onClick={handleSubmit} variant="contained">Add Product</Button>
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


export default AddProductModal;