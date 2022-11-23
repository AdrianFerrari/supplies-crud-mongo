import { useContext, createContext, useState, useEffect } from "react";
import { getSuppliesRequests } from "../utils/api";

const suppliesContext = createContext();

export function useSupplies() {
    return useContext(suppliesContext);
}

function SuppliesContainer({ children }) {
    const [supplies, setSupplies] = useState([]);

    async function getSupplies() {
        const dataObject = await getSuppliesRequests();
        setSupplies(dataObject.data);
    }

    useEffect(() => {
        getSupplies();
    }, []);

    return (
        <suppliesContext.Provider value={{ supplies, getSupplies }}>
            {children}
        </suppliesContext.Provider>
    );
}

export default SuppliesContainer;
