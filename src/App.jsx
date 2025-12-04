
// import { Link, Route, Routes } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import BasicForm from './form-validation/BasicForm'
// import LoginPage from './LoginPage'
// import Items from './react-keys/Items'
// import RealWorld from './react-keys/RealWorld'
// import Navbar from './nested-routing/Navbar'
// import Home from './nested-routing/pages/Home'
// import About from './nested-routing/pages/About'
// import Services from './nested-routing/pages/Services'
// import WebDev from './nested-routing/pages/services/WebDev'
// import AppDev from './nested-routing/pages/services/AppDev'
// import Designs from './nested-routing/pages/services/Designs'
// // import ProductPage from './dynamic-routing/example/ProductPage'
// import ProductDetails from './dynamic-routing/example/ProductDetails'
// import Product from './dynamic-routing/Products'
// import ProductDetails from './dynamic-routing/ProductDetails'
// import Home from './react-router-dom/Home'
// import About from './react-router-dom/about'
// import Profile from './functional-components/hooks/use-context/user-list/profile'
// import { UserProvider } from './functional-components/hooks/use-context/user-list/UserContext'
// import PropsFc from './functional-components/PropsFc'
// import State from './functional-components/State'
// import BasicFn from './functional-components/BasicFn'
// import Fruits from './embeding-expression/fruits'
// // import CallingFunction from './embeding-expression/CallingFunction'
// // import Basic from './embeding-expression/basic'
// // import Conditional from './embeding-expression/Conditional'
// // import Some from './embeding-expression/Some'

// import ShoppingApp from "./redux/shopping cart with redux toolkit/ShoppingApp"
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthApp from './authentication-app/AuthApp';
import { BrowserRouter } from 'react-router-dom';

// import { Provider } from "react-redux"
// import { store } from "./redux/store/store"
// import CounterApp from "./redux/CounterApp"

// import CartApp from "./context/CartApp"

// import { CartContext, CartProvider } from "./context/CartContext"
// import CartItem from "./context/CartItem"

// import ShoppingCart from "./reducers/ShoppingCart"

// import Counter from "./reducers/Counter"

// import AxiosDelete from "./Axios/AxiosDelete"

// import AxiosGet from "./Axios/AxiosGet"
// import AxiosPost from "./Axios/AxiosPost"
// import AxiosPut from "./Axios/AxiosPut"
// 

// import NormalForm from "./form-validation/NormalForm"

function App() {
  

  return (
    <>
      {/*----------- embedding-expression------------ */}
     {/* <Basic/> */}
     {/* <Some/> */}
      {/* <CallingFunction/> */}
      {/* <Conditional/> */}
{/* <Fruits/> */}

{/* -----functional component--- */}

{/* <BasicFn/> */}
{/* <State/> */}
     {/* <PropsFc/> */}

     {/* 2.profile name change */}
     {/* <UserProvider>
      <Profile/>
     </UserProvider> */}

     {/* ----react-router-dom---- */}
     {/* <div>
      <nav>
        <Link to='/'>Home</Link>|
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
      </Routes>
     </div>
 */}
{/*----------------- dynamic--routing--- */}
{/* <Routes>
<Route path='/' element={<Product/>}/>
<Route path='/products/:id'element={<ProductDetails/>}/>
</Routes> */}

{/* ------dynamic routing example */}


{/* <Routes>
  <Route path='/' element={<ProductPage/>}/>
  <Route path='/products/:id'  element={<ProductDetails/>}/>
</Routes> */}


{/* ----------------nested-routing--------------- */}

{/* <Navbar/>
<Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  {/* nested routes starts here */}
{/*   
    <Route  path='/services' element={<Services/>}>
    <Route path='web-dev' element={<WebDev/>}/>
    <Route path='app-dev'element={<AppDev/>}/>
    <Route path='design' element={<Designs/>}/>

      </Route>  */}

  
{/* </Routes> */} 

{/* ---------------react keys-------- */}
{/* <Items/> */}
{/* <RealWorld/> */}
{/* <LoginPage/> */}

{/* -----------------form-validation------------ */}

{/* <BasicForm/> */}
{/* <NormalForm/> */}
{/* <Crud/> */}
{/* -----------------------axios */}
{/* <AxiosGet/> */}
{/* <AxiosPost/> */}
{/* <AxiosPut/> */}
{/* <AxiosDelete/> */}

{/* -------------------usereducer--------- */}
{/* <Counter/> */}
{/* <ShoppingCart/> */}
{/* -------------context--------- */}
{/* <CartProvider>
  
  
  
</CartProvider> */}
{/* <CartApp/> */}


{/* ------------redux---------------- */}
{/* <Provider store={store}>
<CounterApp/>
</Provider> */}

{/* <ShoppingApp/> */}

<AuthApp/>



    </>
  )
}

export default App


// -----class-components----

// import React, { Component } from 'react'
// import Unmount from './class-components/life-cycle-methods/Unmount'
// // import Updating from './class-components/life-cycle-methods/Updating'
// // import Parent from './class-components/props'
// // import Mount from './class-components/life-cycle-methods/Mount'
// // import State from './class-components/State'
// // import BasicClass from './class-components/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//        {/* <BasicClass/>  */}
//        {/* <State/> */}
//        {/* <Mount/> */}
//        {/* <Props/> */}
//        {/* <Updating/> */}
//        <Unmount/>
       
//       </>
//     )
//   }
// }


