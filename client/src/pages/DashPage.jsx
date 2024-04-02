import SearchBar from '../components/SearchBar';
import InventoryTable from '../components/InventoryTable';
import AddProductModal from '../utils/AddProductModal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function DashPage() {
    const [inventory, setInventory] = useState([]);
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8283/product/all`)
            .then(res => setInventory(res.data))
            .catch(err => console.log(err));
    }, [reload]);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleSearchChange = (q) => {
        setSearch(q);
    }

    const handleReload = () => setReload(!reload);

    return (
        <div>
            <h1>Warehouse Inventory</h1>
            <SearchBar />
            <Button startIcon={<AddIcon />} onClick={handleModalOpen}>Add Product</Button>
            <InventoryTable
                inventory={inventory}
            />
            <AddProductModal open={isModalOpen} handleClose={handleModalClose} productAdded={handleReload}/>
        </div>
    )
}

export default DashPage;