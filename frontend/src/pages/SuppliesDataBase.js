import React from "react";
import { useSupplies } from "../context/suppliesContext";
import "./styles/table.css";
import { Link } from "react-router-dom";
import { deleteSuppliesRequests } from "../utils/api";

function SuppliesDataBase() {
    const { supplies, getSupplies } = useSupplies();

    const tableHTML = supplies.map((supply, index) => {
        return (
            <tr
                className={index % 2 === 0 ? "tablerow-color" : ""}
                key={supply._id}
            >
                <th>{supply.name}</th>
                <th>{supply.number}</th>
                <th className="table-btn">
                    <Link to="editform" state={supply} className="edit-btn">
                        Edit
                    </Link>
                    <button
                        onClick={() => {
                            deleteSuppliesRequests(supply._id);
                            getSupplies();
                        }}
                        className="delete-btn"
                    >
                        Delete
                    </button>
                </th>
            </tr>
        );
    });

    return (
        <div className="supplies-data-base">
            <header>
                <div className="mongo-logo"></div>
                <h1>MongoDB</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>{tableHTML}</tbody>
            </table>
        </div>
    );
}

export default SuppliesDataBase;
