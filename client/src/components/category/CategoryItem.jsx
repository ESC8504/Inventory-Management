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
                        <IconButton >
                            <DeleteIcon />
                        </IconButton>
                    </>
                )}
            </TableCell>
        </TableRow>
    )
}

export default CategoryItem;