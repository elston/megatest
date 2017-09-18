import React from 'react'
import PropTypes from 'prop-types'
// ...
import Hello from './Hello'


const getUsers = () => ['Den', 'Leha']

// ...
class App extends React.Component {

  // ..
  render() {
    // ..
    const users = getUsers()
    // ..
    return (
      <div>
        <p>Привет пацаны!</p>
        <Hello users={users} />
      </div>
    )
  }
}

export default App