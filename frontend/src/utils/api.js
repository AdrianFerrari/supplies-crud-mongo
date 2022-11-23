import axios from "axios";

export async function getSuppliesRequests() {
    try {
        const response = await axios.get("/supplies");
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

export async function postSuppliesRequests(data) {
    try {
        const response = await axios.post("/supplies", data);
        return console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

export async function editSuppliesRequests(data, id) {
    try {
        const response = await axios.put("/supplies/" + id, data);
        return console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteSuppliesRequests(id) {
    try {
        const response = await axios.delete("/supplies/" + id);
        return console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}
