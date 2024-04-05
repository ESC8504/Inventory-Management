import { useEffect, useState } from 'react';
import axios from 'axios';
import { useWarehouse } from '../contexts/WarehouseContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function InventoryList() {
    const [inventory, setInventory] = useState([]);
    const { selectedWarehouse } = useWarehouse();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_URL}/inventory/warehouse/${selectedWarehouse}`)
            .then(res => setInventory(res.data))
            .catch(err => console.log(err));
    }, [selectedWarehouse]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inventory.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.product.name}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default InventoryList;