import axios from "axios";
import api from "../api";

async function getAll() {
    const { data } = await axios.get(api.phones);

    return data;
}

async function getById(phoneId) {
    const { data } = await axios.get(`${api.phones}${phoneId}`);

    return data;
}

const phonesServices = { getAll, getById };

export default phonesServices;