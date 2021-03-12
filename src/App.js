import Display from "./components/Display";
import Searchbar from "./components/Searchbar";
import React from 'react'
import SelectorProvider from './context/SelectorContext'
import DataProvider from './context/DataContext'

function App() {

  return (
    <SelectorProvider>
      <DataProvider>
        <div className="app-container">
          <Searchbar />
          <Display />
        </div>
      </DataProvider>
    </SelectorProvider>
  );
}

export default App;
