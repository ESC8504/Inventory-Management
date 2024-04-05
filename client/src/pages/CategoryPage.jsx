import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Box, Typography, Toolbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CategoryTable from '../components/category/CategoryTable';
import AddCategoryModal from '../utils/AddCategoryModal';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

function CategoryPage() {
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_URL}/category/all`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    }, [reload]);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleReload = () => setReload(!reload);

    return (
        <div>
            <Toolbar />
            <Box sx={{ marginBottom: 2, marginTop:2 }}>
                <Typography variant="h5">
                    Category Management
                </Typography>
            </Box>
            <Button startIcon={<AddCircleOutlineRoundedIcon />} onClick={handleModalOpen}>Add Category</Button>
            <CategoryTable
                categories={categories}
                categoryEdited={handleReload}
            />
            <AddCategoryModal open={isModalOpen} handleClose={handleModalClose} categoryAdded={handleReload}/>
        </div>
    )
}

export default CategoryPage;