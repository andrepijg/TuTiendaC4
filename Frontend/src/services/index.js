import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export async function obtenerTiendas() {
    try {
        const response = await axios({
            url: baseUrl+'tiendas',
            method: 'GET'
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function obtenerProductos() {
    try {
        const response = await axios({
            url: baseUrl+'productos',
            method: 'GET'
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

