import ConfirmDialog from '../../utils/confirmDialog';
import WarningDialog from '../../utils/WarningDialog';
import { TableCell, TableRow, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WarehouseItem({ warehouse, warehouseEdited }) {

    const [isEdited, setIsEdited] = useState(false);
    const [editedWarehouse, setEditedWarehouse] = useState({
        warehouseName: warehouse.warehouseName,
        warehouseLocation: warehouse.warehouseLocation,
        capacity: warehouse.capacity
    });

    const handleEdit = () => setIsEdited(true);

    const handleCancel = () => {
        setIsEdited(false);
        setEditedWarehouse({
            warehouseName: warehouse.warehouseName,
            warehouseLocation: warehouse.warehouseLocation,
            capacity: warehouse.capacity
        });
    };

    const handleSave = () => {
        axios.put(`http://localhost:8283/warehouse/update/${warehouse.warehouseId}`, {
            name: editedWarehouse.warehouseName,
            location: editedWarehouse.warehouseLocation,
            capacity: Number(editedWarehouse.capacity)
        })
            .then(res => {
                setIsEdited(false);
                warehouseEdited();
            })
            .catch(err => console.log(err));
    }

    const [warningOpen, setWarningOpen] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    const [confirmOpen, setConfirmOpen] = useState(false);

    const handleDelete = () => {
        setConfirmOpen(true);
    }

    const handleConfirm = () => {
        axios.delete(`http://localhost:8283/warehouse/delete/${warehouse.warehouseId}`)
            .then(res => {
                setConfirmOpen(false);
                warehouseEdited();
            })
            .catch(err => {
                setWarningMessage(err.response.data);
                setWarningOpen(true);
                setConfirmOpen(false);
                console.log(err)
            });
    }

    return (
        <TableRow>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedWarehouse.warehouseName}
                        onChange={e => setEditedWarehouse({ ...editedWarehouse, warehouseName: e.target.value })}
                    />
                ) : (warehouse.warehouseName)}
            </TableCell>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedWarehouse.warehouseLocation}
                        onChange={e => setEditedWarehouse({ ...editedWarehouse, warehouseLocation: e.target.value })}
                    />
                ) : (warehouse.warehouseLocation)}
            </TableCell>
            <TableCell>{warehouse.totalQuantity}</TableCell>
            <TableCell>
                {isEdited ? (
                    <TextField
                        size="small"
                        value={editedWarehouse.capacity}
                        onChange={e => setEditedWarehouse({ ...editedWarehouse, capacity: e.target.value })}
                    />
                ) : (warehouse.capacity)}
            </TableCell>
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
            <WarningDialog
                open={warningOpen}
                handleClose={() => setWarningOpen(false)}
                title="Warning"
                content={warningMessage}
            />
            <ConfirmDialog
                open={confirmOpen}
                handleConfirm={handleConfirm}
                handleClose={() => setConfirmOpen(false)}
                title="Delete Warehouse"
                content="Are you sure you want to delete this warehouse?"
            />
        </TableRow>
    )
}

export default WarehouseItem;