import {Route,Routes, Navigate} from 'react-router-dom'
import React, {useEffect} from "react";
import { Toaster } from 'react-hot-toast';
import Cities from './pages/Cities';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';
import Detail from './pages/Detail';
import {useDispatch,useSelector} from 'react-redux'
import cityActions from './redux/actions/cityActions';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import countryActions from './redux/actions/countryActions';
import userActions from './redux/actions/userActions';


function App() {
	const dispatch = useDispatch()
	const user = useSelector(store => store.userReducer.user)

	useEffect(() => {
		dispatch(cityActions.getCities())
		dispatch(countryActions.getCountries())
		if(localStorage.getItem('token')!==null){
			const token = localStorage.getItem('token')
			dispatch(userActions.verifyToken(token))
		}
	},[])
  return (
    <div className="App flex flex-col min-h-screen">
			<Header/>
	
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/cities" element={<Cities/>} />
				<Route path="/detail/:id" element={<Detail/>} />
				{!user && <Route path="/login" element={<LogIn/>} />}
				{!user && <Route path="/signup" element={<SignUp/>} />}
				<Route path="*" element={ <Navigate to="/" /> } />
			</Routes>
			<Toaster/>
			<Footer />
			
    </div>
  );
}
export default App;