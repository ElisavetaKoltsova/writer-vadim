import MainSection from './components/MainSection/MainSection';
import Menu from './components/Menu/Menu';
import React from 'react';
import WorkList from './components/Works/WorkList';
import Biography from './components/Biography/Biography';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Book from './components/Book/Book';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const openModal = (book) => {
    setCurrentBook(book);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <React.Fragment>
      <Menu />
      <MainSection />
      <WorkList onModalOpen={openModal} />
      {
        modalIsOpen
        ? <Book onClose={closeModal} book={currentBook} />
        : ''
      }
      <Biography />
      <Footer />
      {
        modalIsOpen
        ? <Book onClose={closeModal} book={currentBook} />
        : ''
      }
    </React.Fragment>
  );
}

export default App;
