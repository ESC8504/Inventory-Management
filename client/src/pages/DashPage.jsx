// import { useWarehouse } from '../context/warehouseContext';
import SearchBar from '../components/SearchBar';
import InventoryTable from '../components/InventoryTable';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function DashPage() {
    // const { selectedWarehouse } = useWarehouse();
    const [inventory, setInventory] = useState([]);
    const [products, setProducts] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8283/product/all`)
            .then(res => setInventory(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSearchChange = (q) => {
        setSearch(q);
    }
    return (
        <div>
            <h1>Warehouse Inventory</h1>
            <SearchBar />
            <Button startIcon={<AddIcon />}>Add Product</Button>
            <InventoryTable
                inventory={inventory}
            />
        </div>
    )
}

export default DashPage;