
// import './App.css'
// // import CallingFunction from './embeding-expression/CallingFunction'
// // import Basic from './embeding-expression/basic'
// // import Conditional from './embeding-expression/Conditional'
// // import Some from './embeding-expression/Some'

// function App() {
  

//   return (
//     <>
//      {/*----------- embedding-expression------------ */}
//      {/* <Basic/> */}
//      {/* <Some/> */}
//      {/* <CallingFunction/> */}
//      {/* <Conditional/> */}

     
//     </>
//   )
// }

// export default App


// -----class-components----

import React, { Component } from 'react'
import State from './class-components/State'
// import BasicClass from './class-components/BasicClass'

export default class App extends Component {
  render() {
    return (
      <>
       {/* <BasicClass/>  */}
       <State/>
       
      </>
    )
  }
}


