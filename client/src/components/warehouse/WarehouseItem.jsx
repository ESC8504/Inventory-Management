import { TableCell, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function WarehouseItem({ warehouse }) {

    return (
        <TableRow>
            <TableCell>{warehouse.warehouseName}</TableCell>
            <TableCell>{warehouse.warehouseLocation}</TableCell>
            <TableCell>{warehouse.totalQuantity}</TableCell>
            <TableCell>{warehouse.capacity}</TableCell>
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

export default WarehouseItem;