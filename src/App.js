import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './component/navbar.jsx'
import SignUp  from './component/register.jsx';
import Login from './component/login.jsx'
import About from './component/about.jsx'
import Error from './component/error.jsx'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/SignUp' element={<SignUp />}> </Route>
    <Route path='/Login' element={<Login />}> </Route>
    <Route path='/' element={<Nav />}> </Route>
    <Route path='/About' element={<About />}> </Route>
    <Route path='/*' element={<Error />}> </Route>
    </Routes>
   
    </BrowserRouter>
    
    //  <Nav/>
  );
}

export default App;
