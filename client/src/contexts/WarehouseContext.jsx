import { createContext, useContext, useState } from 'react';

const WarehouseContext = createContext();

export const useWarehouse = () => useContext(WarehouseContext);

export const WarehouseProvider = ({ children }) => {
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    return (
        <WarehouseContext.Provider value={{ selectedWarehouse, setSelectedWarehouse }}>
            {children}
        </WarehouseContext.Provider>
    )
}