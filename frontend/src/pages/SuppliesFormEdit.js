import React, { useState, useEffect } from "react";
import { editSuppliesRequests } from "../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useSupplies } from "../context/suppliesContext";
import "./styles/form.css";

function SuppliesFormEdit() {
    const { getSupplies } = useSupplies();
    const location = useLocation();
    const navigate = useNavigate();
    const { name, number, _id } = location.state;
    const [formData, setFormData] = useState({ name: "", number: 0 });

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    useEffect(() => {
        setFormData(() => ({ name: name, number: number }));
    }, [_id, name, number]);

    async function handleSubmit(event) {
        event.preventDefault();
        await editSuppliesRequests(formData, _id);
        await getSupplies();
        navigate("/");
    }

    return (
        <div className="supplies-form">
            <h1>Edit Form</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre: </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="number">Cantidad: </label>
                <input
                    id="number"
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                />
                <button className="form-btn" type="submit">
                    Submit
                </button>
                <div className="nav-back" onClick={() => navigate(-1)}>
                    &#11013;back
                </div>
            </form>
        </div>
    );
}

export default SuppliesFormEdit;
