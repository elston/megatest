import React from 'react'

// ..
class Hello extends React.Component {

  // ...
  render() {

    // ..
    const { users } = this.props
  // ...
    return (
      <div>
        {/*...*/}
        {users.map(user => (
         <p>{user}, поздравляю с днем программиста!! </p>
        ))}

        {/*...*/}
        <p>{users[users.length - 1]}, ты красавчег !!</p>        
        
      </div>
    )
  }
}


export default Hello