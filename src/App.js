import './App.css';

import { Formik, Field, Form } from "formik";
import { Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import CreateOrder from "./pages/CreateOrder";
import EditOrder from "./pages/EditOrder";
import ListOfOrders from "./pages/ListOfOrders";
import OrderDetails from "./pages/OrderDetails";
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createorder' element={<CreateOrder/>}/>
        <Route path='/editorder' element={<EditOrder/>}/>
        <Route path='/listoforder' element={<ListOfOrders/>}/>
        <Route path='/orderdetails' element={<OrderDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
