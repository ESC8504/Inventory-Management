import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function WarehouseList( {onSelectWarehouse} ) {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8283/warehouse/all')
            .then(res => {
                setWarehouses(res.data)
                setSelectedWarehouse(res.data[0].id)
        })
            .catch(err => console.log(err));
    }, []);

    return (
        <Select
            onChange={e => onSelectWarehouse(e.target.value)}
            displayEmpty
            defaultValue=""
        >
            <MenuItem value="" disabled>Select a Warehouse</MenuItem>
            {warehouses.map(warehouse => (
                <MenuItem key={warehouse.id} value={warehouse.id}>{warehouse.location}</MenuItem>
            ))}
        </Select>
    )
}

export default WarehouseList;