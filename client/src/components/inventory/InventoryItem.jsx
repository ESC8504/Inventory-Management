import { TableCell, TableRow, IconButton, TextField, Select, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmDialog from '../../utils/ConfirmDialog';
import WarningDialog from '../../utils/WarningDialog';

function InventoryItem({ productItem, productEdited}) {

    const [categories, setCategories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);

    // for some reason, the warehouse and category contexts are not working here, had to use useState and useEffect here
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_URL}/warehouse/all`)
            .then(res => setWarehouses(res.data))
            .catch(err => console.log(err));
    },[]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_URL}/category/all`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => console.log(err));
    }, []);


    const inventoryInfo = productItem.inventory[0];

    const [isEdited, setIsEdited] = useState(false);
    const [editedInventory, setEditedInventory] = useState({
        name: productItem.name,
        manufacturer: productItem.manufacturer,
        partNumber: productItem.partNumber,
        quantity: inventoryInfo.quantity,
        price: productItem.price,
        categoryId: productItem.category.id,
        warehouseId: inventoryInfo.warehouse.id
    });

    const handleEdit = () => setIsEdited(true);

    const handleCancel = () => {
        setIsEdited(false);
        setEditedInventory({
            name: productItem.name,
            manufacturer: productItem.manufacturer,
            partNumber: productItem.partNumber,
            quantity: inventoryInfo.quantity,
            price: productItem.price,
            categoryId: productItem.category.id,
            warehouseId: inventoryInfo.warehouse.id
        });
    }

    const [warningOpen, setWarningOpen] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');

    const handleSave = () => {
        axios.put(`${import.meta.env.VITE_REACT_URL}/product/update/${productItem.id}`, {
            name: editedInventory.name,
            manufacturer: editedInventory.manufacturer,
            partNumber: editedInventory.partNumber,
            price: Number(editedInventory.price),
            categoryId: editedInventory.categoryId,
            quantity: Number(editedInventory.quantity),
            warehouseId: editedInventory.warehouseId
        })
            .then(res => {
                setIsEdited(false);
                productEdited();
                setErrorMessages('');
            })
            .catch(err => {
                console.log(err)
                setErrorMessages(err.response.data)
                setWarningOpen(true);
            });
    }

    const [confirmOpen, setConfirmOpen] = useState(false);

    const handleDelete = () => {
        setConfirmOpen(true);
    }

    const handleConfirm = () => {
        axios.delete(`${import.meta.env.VITE_REACT_URL}/product/delete/${productItem.id}`)
            .then(res => {
                setConfirmOpen(false);
                productEdited();
            })
            .catch(err => console.log(err));
    }

    return (
        <TableRow>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedInventory.name}
                        onChange={e => setEditedInventory({ ...editedInventory, name: e.target.value })}
                        fullWidth
                    />
                ) : (productItem.name)}
            </TableCell>
            <TableCell>
                {isEdited ? (
                    <Select
                        value={editedInventory.categoryId}
                        onChange={e => setEditedInventory({ ...editedInventory, categoryId: e.target.value })}
                    >
                        {categories.map(category => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                ) : (productItem.category.name)}
            </TableCell>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedInventory.manufacturer}
                        onChange={e => setEditedInventory({ ...editedInventory, manufacturer: e.target.value })}
                    />
                ) : (productItem.manufacturer)}
            </TableCell>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedInventory.partNumber}
                        onChange={e => setEditedInventory({ ...editedInventory, partNumber: e.target.value })}
                    />
                ) : (productItem.partNumber)}
            </TableCell>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedInventory.quantity}
                        onChange={e => setEditedInventory({ ...editedInventory, quantity: e.target.value })}
                    />
                ) : (inventoryInfo.quantity)}
            </TableCell>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedInventory.price}
                        onChange={e => setEditedInventory({ ...editedInventory, price: e.target.value })}
                    />
                ) : (`$${productItem.price}`)}
            </TableCell>
            <TableCell>{inventoryInfo.warehouse.name}</TableCell>
            <TableCell>
                {isEdited ? (
                    <>
                        <IconButton onClick={handleSave}>
                            <SaveIcon />
                        </IconButton>
                        <IconButton onClick={handleCancel}>
                            <CancelIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <IconButton onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                )}
            </TableCell>
            <ConfirmDialog
                open={confirmOpen}
                handleConfirm={handleConfirm}
                handleClose={() => setConfirmOpen(false)}
                title="Delete Product"
                content="Are you sure you want to delete this product?"
            />
            <WarningDialog
                open={warningOpen}
                handleClose={() => setWarningOpen(false)}
                title="Error"
                content={errorMessages}
            />
        </TableRow>
    )
}

export default InventoryItem;