import WarehouseList from '../components/WarehouseList';
import { useNavigate } from 'react-router-dom';
import { useWarehouse } from '../contexts/WarehouseContext';

function WarehouseSelectionPage() {
    const navigate = useNavigate();
    const { setSelectedWarehouse } = useWarehouse();

    const handleWarehouseSelection = (id) => {
        setSelectedWarehouse(id);
        navigate('/dash');
    }

    return (
        <div>
            <div>Select a Warehouse</div>
            <WarehouseList onSelectWarehouse={handleWarehouseSelection} />
        </div>
    )
}

export default WarehouseSelectionPage;