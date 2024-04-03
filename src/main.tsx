import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ArticleContextProvider from './contexts/articleContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArticleContextProvider>
      <App />
    </ArticleContextProvider>
  </React.StrictMode>,
)
