import ConfirmDialog from '../../utils/confirmDialog';
import WarningDialog from '../../utils/WarningDialog';
import { TableCell, TableRow, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryItem({ category, categoryEdited }) {

    const [isEdited, setIsEdited] = useState(false);
    const [editedCategoryName, setEditedCategoryName] = useState(category.name);

    const handleEdit = () => setIsEdited(true);

    const handleCancel = () => {
        setIsEdited(false);
        setEditedCategoryName(category.name);
    };

    const handleSave = () => {
        axios.put(`http://localhost:8283/category/update/${category.id}`, {
            name: editedCategoryName
        })
            .then(res => {
                setIsEdited(false);
                categoryEdited();
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
        axios.delete(`http://localhost:8283/category/delete/${category.id}`)
            .then(res => {
                setConfirmOpen(false);
                categoryEdited();
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
                        value={editedCategoryName}
                        onChange={e => setEditedCategoryName(e.target.value)}
                    />
                ) : (category.name)}
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
                        <IconButton onClick={handleDelete} >
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
                title="Delete Category"
                content="Are you sure you want to delete this category?"
            />
        </TableRow>
    )
}

export default CategoryItem;