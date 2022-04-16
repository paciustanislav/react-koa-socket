
import { useEffect } from 'react'

import { io } from 'socket.io-client'

function App () {

  useEffect( () => {

  }, [] )

  const socket = io( `http://127.0.0.1:4001` )

  const onClick = () => {
    socket.emit( `message`, {
      test: true
    } )
  }

  return (
    <div>
      <button onClick={onClick}>Test</button>
    </div>
  )
}

export default App
