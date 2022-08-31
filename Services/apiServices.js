import axios from "axios";

export const requestHttp = async (url) => {
    const response = await axios.get(url)
    return response.data     
}