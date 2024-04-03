import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InventoryItem from './InventoryItem';

function InventoryTable({ inventory, productEdited }) {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Part Number</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Warehouse</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inventory.map(productItem => (
                        <InventoryItem
                            key={productItem.id}
                            productItem={productItem}
                            productEdited={productEdited}
                        />
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default InventoryTable;