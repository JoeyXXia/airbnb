import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div className='app'>
      <div className="header">
        <h1>header</h1>
        <div className="page">
          {  useRoutes(routes)}
        </div>
      </div>
    </div>
  )
})

export default App