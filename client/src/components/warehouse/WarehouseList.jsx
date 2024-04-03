import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function WarehouseList( {selectedWarehouse, onSelectWarehouse} ) {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8283/warehouse/all')
            .then(res => {
                setWarehouses(res.data)
        })
            .catch(err => console.log(err));
    }, []);

    return (
        <FormControl fullWidth>
            <InputLabel id="warehouse-select">Warehouse</InputLabel>
            <Select
                labelId="warehouse-select"
                value={selectedWarehouse}
                onChange={e => onSelectWarehouse(e.target.value)}
                displayEmpty
                defaultValue=""
            >
                {warehouses.map(warehouse => (
                    <MenuItem key={warehouse.id} value={warehouse.id}>{warehouse.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default WarehouseList;