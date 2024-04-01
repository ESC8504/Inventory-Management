import { TableCell, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function InventoryItem({ productItem }) {

    const inventoryInfo = productItem.inventory[0];

    return (
        <TableRow>
            <TableCell>{productItem.name}</TableCell>
            <TableCell>{productItem.category.name}</TableCell>
            <TableCell>{productItem.manufacturer}</TableCell>
            <TableCell>{productItem.partNumber}</TableCell>
            <TableCell>{inventoryInfo.quantity}</TableCell>
            <TableCell>${productItem.price}</TableCell>
            <TableCell>{inventoryInfo.warehouse.location}</TableCell>
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

export default InventoryItem;