import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataProvider } from './components/context/DataContext'
import PruebaRouter from './components/PruebaRouter'
//redux  
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <div className='container'>
        <PruebaRouter /> 
      </div>
    </DataProvider>
  </React.StrictMode>
)
