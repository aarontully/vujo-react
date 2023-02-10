import axios from 'axios';
import moment from "moment";

const dbPath = 'https://vujo-186fe-default-rtdb.firebaseio.com/';

// POST Notebook
export const createNotebook = async (notebook) => {
    try {
        const response = await axios.post(`${dbPath}notebooks.json`, notebook);
        console.log(response);
        const id = response.data.name;
        await axios.patch(`${dbPath}/notebooks/${id}.json`, {
            id: id,
        })
    } catch (error) {
        console.log(error);
    }
};

// GET notebooks
export const getAllNotebooks = async () => {
    try {
        const response = await axios.get(`${dbPath}notebooks.json`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// UPDATE notebook
export const updateNotebook = async (selectedNotebook) => {
    try {
        const response = await axios.patch(`${dbPath}notebooks/${selectedNotebook.id}.json`, {
            title: selectedNotebook.title,
        })
    } catch (error) {
        console.log(error);
    }
}

// CREATE Page
export const createPage = async (page) => {
    try {
        const response = await axios.post(`${dbPath}pages.json`, page);
        const name = response.data.name;
        await axios.patch(`${dbPath}pages/${name}.json`, {
            id: name,
        });
    } catch (error) {
        console.log(error);
    }
}

// GET page
export const getPage = async (selectedPage) => {
    try {
        const response = await axios.get(`${dbPath}pages.json`);
        console.log(response);
        const pages = response.data;
        const filteredPage = Object.values(pages).filter(page => page.id === selectedPage.id);
        console.log(filteredPage);
        return filteredPage;
    } catch (error) {
        console.log(error);
    }
}

// GET pages
export const getPages = async (notebook) => {
    try {
        const response = await axios.get(`${dbPath}pages.json`)
        const pages = response.data;
        const filteredPages = Object.values(pages).filter(page => {
            return page.notebookId === notebook.id;
        })
        return filteredPages;
    } catch (error) {
        console.error(error);
    }
}

// UPDATE page
export const updatePage = async (selectedPage) => {
    try {
        const date = Date.now();
        const response = await axios.patch(`${dbPath}pages/${selectedPage.id}.json`, {
            content: selectedPage.content,
            title: selectedPage.title,
            updatedAt: moment(date).format("Do MMM YY"),
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}
