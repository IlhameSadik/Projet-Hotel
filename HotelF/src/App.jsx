import { useState } from 'react'
import AddRoom from './components/room/AddRoom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"

import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ExistingRooms from './components/room/ExistingRooms'
import EditRoom from './components/room/EditRoom'
import Home from './components/home/Home'
import RoomCard from './components/room/RoomCard'

import NavBar from './components/layout/NavBar'
import RoomListing from './components/room/RoomListing'



function App() {
 
 return (
    <div>
       	<Router>
		     <NavBar/>
					<Routes>
					    <Route path="/" element={<Home/>} />
						<Route path="/existing-rooms" element={<ExistingRooms/>} />
						<Route path="/add-room" element={<AddRoom/>} />
						<Route path="/edit-room/:roomId"  element={<EditRoom/>} />
                        <Route path="/"  element={<RoomCard/>} />
						<Route path="/browse-all-rooms" element={<RoomListing />} />

					</Routes>
				</Router>
        </div> 
  )
}

export default App
