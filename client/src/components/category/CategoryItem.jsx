import { TableCell, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CategoryItem({ category }) {

    return (
        <TableRow>
            <TableCell>{category.name}</TableCell>
            <TableCell>
                <IconButton >
                    <EditIcon />
                </IconButton>
                <IconButton >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default CategoryItem;