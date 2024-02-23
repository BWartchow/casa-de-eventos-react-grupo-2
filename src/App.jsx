import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login/login"
import Homepage from "./pages/Homepage/homepage"
import Contact from "./pages/Contact/contact"
import EventsList from "./pages/EventsList/eventsList"
import EventDetails from "./pages/EventDetails/eventDetails"
import AddEvent from "./pages/AddEvent/addEvent"
import Signup from "./pages/Signup/signup"

import "./index.css"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Homepage />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/admin"
					element={<EventsList />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/event/:id"
					element={<EventDetails />}
				/>
				<Route
					path="/add-event"
					element={<AddEvent />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
