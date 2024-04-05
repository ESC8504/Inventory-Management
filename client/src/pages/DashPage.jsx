import SearchBar from '../utils/SearchBar';
import InventoryTable from '../components/inventory/InventoryTable';
import AddProductModal from '../utils/AddProductModal';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Box, Typography, Toolbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import WarehouseSelector from '../utils/WarehouseSelector';

function DashPage() {
    const [inventory, setInventory] = useState([]);
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [search, setSearch] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [hasSearchTerm, setHasSearchTerm] = useState(false);

    const [selectedWarehouse, setSelectedWarehouse] = useState('all');

    useEffect(() => {
        const endpoint = selectedWarehouse === 'all'
            ? `${import.meta.env.VITE_REACT_URL}/product/all`
            : `${import.meta.env.VITE_REACT_URL}/product/warehouse/${selectedWarehouse}`;
        axios.get(endpoint)
            .then(res => {
                setInventory(res.data)
                setFilteredNames(res.data)
            })
            .catch(err => console.log(err));
    }, [reload, selectedWarehouse]);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleSearchChange = (q) => {
        setSearch(q);
    }

    const handleReload = () => setReload(!reload);


    const handleSearch = (query) => {
        setSearchTerm(query);
        if (query) {
          const filteredResults = inventory.filter((products) => products.name.toLowerCase()
            .includes(query.toLowerCase()));
          setFilteredNames(filteredResults);
          setHasSearchTerm(filteredResults.length === 0);
        } else {
          setFilteredNames(inventory);
          setHasSearchTerm(false);
        }
      };

    return (
        <div>
            <Toolbar />
            <Box sx={{ marginBottom: 2, marginTop:2 }}>
                <Typography variant="h5">
                    Inventory Management
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <SearchBar onSearch={handleSearch}/>
                <Button startIcon={<AddCircleOutlineRoundedIcon />} onClick={handleModalOpen}>Add Product</Button>
                <WarehouseSelector selectedWarehouse={selectedWarehouse} onSelectWarehouse={setSelectedWarehouse} />
            </Box>
            <InventoryTable
                inventory={filteredNames}
                productEdited={handleReload}
            />
            <AddProductModal open={isModalOpen} handleClose={handleModalClose} productAdded={handleReload}/>
    </div>
    )
}

export default DashPage;