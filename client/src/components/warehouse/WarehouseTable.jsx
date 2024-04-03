import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import WarehouseItem from './WarehouseItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function WarehouseTable({ warehouses }) {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Current Storage</TableCell>
                        <TableCell>Capacity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {warehouses.map(warehouse => (
                        <WarehouseItem
                            key={warehouse.id}
                            warehouse={warehouse}
                        />
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default WarehouseTable;