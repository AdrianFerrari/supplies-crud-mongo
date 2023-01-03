import React, { useState } from "react";
import { postSuppliesRequests } from "../utils/api";
import "./styles/form.css";
import { useSupplies } from "../context/suppliesContext";

function SuppliesFormPost() {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
    });
    const { getSupplies } = useSupplies();

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

    async function handleSubmit(event) {
        event.preventDefault();
        await postSuppliesRequests(formData);
        await getSupplies();
        setFormData(() => ({name:"", number:""}))
    }

    return (
        <div className="supplies-form">
            <h1>Supply Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Name: </label>
                <input
                    id="nombre"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="number">Amount: </label>
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
            </form>
        </div>
    );
}

export default SuppliesFormPost;
