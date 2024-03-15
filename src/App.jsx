import React from 'react'
import { Toaster } from 'react-hot-toast'
import PageTitle from './components/PageTitle'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

const App = () => {
  return (
    <>
        <div className="container">
          <PageTitle/>
          <div>
             <AppHeader/>
             <AppContent/>
          </div>
        </div>
        <Toaster
          position='bottom-right'
          toastOptions={{
             style: {
              fontSize: '1.4rem',
             },
          }}
        />
    </>
  )
}

export default App