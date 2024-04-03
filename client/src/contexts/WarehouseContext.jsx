import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WarehouseContext = createContext();

export const useWarehouse = () => useContext(WarehouseContext);

export const WarehouseProvider = ({ children }) => {
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8283/warehouse/all')
            .then(res => setWarehouses(res.data))
            .catch(err => console.log(err));
    },[]);

    return (
        <WarehouseContext.Provider value={{ selectedWarehouse, setSelectedWarehouse, warehouses }}>
            {children}
        </WarehouseContext.Provider>
    )
}