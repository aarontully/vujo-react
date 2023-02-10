import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import PagesNav from "./components/PagesNav";
import { getAllNotebooks, getPages } from './utilities/firebaseService';

function App() {
  const [selectedNotebook, setSelectedNotebook] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [notebooks, setNotebooks] = useState([]);
  const [pages, setPages] = useState([]);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    fetchNotebooks();
  }, []);

  const fetchNotebooks = async () => {
    const notebooks = await getAllNotebooks();
    setNotebooks(notebooks ? Object.values(notebooks) : []);
  }

  const handleNotebookSelection = (notebook) => {
    setSelectedNotebook(notebook);
    fetchPages(notebook);
  };

  const fetchPages = async (selectedNotebook) => {
    const pages = await getPages(selectedNotebook);
    setPages(pages ? Object.values(pages) : []);
  }

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="app">
      <Header characterCount={characterCount} wordCount={wordCount}/>
      <Nav notebooks={notebooks} onNotebookSelection={handleNotebookSelection} selectedNotebook={selectedNotebook} fetchNotebooks={fetchNotebooks} fetchPages={fetchPages} />
      <PagesNav selectedNotebook={selectedNotebook} onPageSelect={handlePageSelect} selectedPage={selectedPage} pages={pages} />
      <Main selectedPage={selectedPage} setCharacterCount={setCharacterCount} setWordCount={setWordCount} />
    </div>
  );
}

export default App;
