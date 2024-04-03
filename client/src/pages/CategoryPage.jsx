import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CategoryTable from '../components/category/CategoryTable';
import AddCategoryModal from '../utils/AddCategoryModal';

function CategoryPage() {
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8283/category/all')
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));
    }, [reload]);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleReload = () => setReload(!reload);

    return (
        <div>
            <h1>Categories</h1>
            <Button startIcon={<AddIcon />} onClick={handleModalOpen}>Add Category</Button>
            <CategoryTable
                categories={categories}
                categoryEdited={handleReload}
            />
            <AddCategoryModal open={isModalOpen} handleClose={handleModalClose} categoryAdded={handleReload}/>
        </div>
    )
}

export default CategoryPage;