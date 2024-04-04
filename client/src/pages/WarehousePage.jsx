import { useEffect, useState } from 'react';
import axios from 'axios';
import WarehouseTable from '../components/warehouse/WarehouseTable';
import AddWarehouseModal from '../utils/AddWarehouseModal';
import { Button, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';


function WarehousePage() {
    const [warehouses, setWarehouses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8283/warehouse/storage-info')
            .then(res => setWarehouses(res.data))
            .catch(err => console.log(err));
    }, [reload]);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleReload = () => setReload(!reload);

    return (
        <div>
            <Box sx={{ marginBottom: 2, marginTop:2 }}>
                <Typography variant="h5">
                    Warehouse Management
                </Typography>
            </Box>
            <Button startIcon={<AddCircleOutlineRoundedIcon />} onClick={handleModalOpen} >Add Warehouse</Button>
            <WarehouseTable
                warehouses={warehouses}
                warehouseEdited={handleReload}
            />
            <AddWarehouseModal open={isModalOpen} handleClose={handleModalClose} warehouseAdded={handleReload}/>
        </div>
    )
}

export default WarehousePage;