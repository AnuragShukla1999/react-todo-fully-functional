import React from 'react'
import { Toaster } from 'react-hot-toast'
import PageTitle from './components/PageTitle'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

const App = () => {
  return (
    <>
        <div className="container mx-auto px-4 py-8">
        <PageTitle>Todo List</PageTitle>
        <div className="flex flex-col items-center">
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  )
}

export default App