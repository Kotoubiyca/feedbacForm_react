import React from 'react';
import {ContactUsPage} from './ContactUsPage/ContactUsPage'
import {Header} from './Header'
import {Footer} from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        <ContactUsPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
