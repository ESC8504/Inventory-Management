import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import CategoryItem from './CategoryItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CategoryTable({ categories, categoryEdited }) {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map(category => (
                        <CategoryItem
                            key={category.id}
                            category={category}
                            categoryEdited={categoryEdited}
                        />
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default CategoryTable;