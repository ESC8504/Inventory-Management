import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function WarehouseSelector( {selectedWarehouse, onSelectWarehouse} ) {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_URL}/warehouse/all`)
            .then(res => {
                setWarehouses(res.data)
        })
            .catch(err => console.log(err));
    }, []);

    return (
        <FormControl>
            <InputLabel id="warehouse-select"></InputLabel>
            <Select
                labelId="warehouse-select"
                value={selectedWarehouse}
                onChange={e => {
                    onSelectWarehouse(e.target.value)
                }}
                displayEmpty
                defaultValue=""
                sx={{
                    height: 39,
                    width: 270,
                }}
                MenuProps={{
                    PaperProps: {
                        style: {
                            width: 270,
                        },
                    },
                }}
            >
                <MenuItem value="all">All Warehouse</MenuItem>
                {warehouses.map(warehouse => (
                    <MenuItem key={warehouse.id} value={warehouse.id}>{warehouse.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default WarehouseSelector;
