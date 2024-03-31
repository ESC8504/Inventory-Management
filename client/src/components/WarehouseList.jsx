import { useEffect, useState } from 'react';
import axios from 'axios';
import { useWarehouse } from '../contexts/WarehouseContext';
import { Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);
    const { selectedWarehouse, setSelectedWarehouse } = useWarehouse();

    useEffect(() => {
        axios.get('http://localhost:8283/warehouse/all')
            .then(res => {
                setWarehouses(res.data)
                setSelectedWarehouse(res.data[0].id)
        })
            .catch(err => console.log(err));
    }, []);

    return (
        <FormControl>
            <InputLabel id="warehouse-label">Warehouse</InputLabel>
            <Select
                labelId="warehouse-label"
                id="warehouse"
                value={selectedWarehouse}
                onChange={e => setSelectedWarehouse(e.target.value)}
            >
                {warehouses.map(warehouse => (
                    <MenuItem key={warehouse.id} value={warehouse.id}>{warehouse.location}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default WarehouseList;