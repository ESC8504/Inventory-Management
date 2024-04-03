import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import WarehouseItem from './WarehouseItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function WarehouseTable({ warehouses, warehouseEdited }) {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Current Storage</TableCell>
                        <TableCell>Capacity</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {warehouses.map(warehouse => (
                        <WarehouseItem
                            key={warehouse.warehouseId}
                            warehouse={warehouse}
                            warehouseEdited={warehouseEdited}
                        />
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default WarehouseTable;