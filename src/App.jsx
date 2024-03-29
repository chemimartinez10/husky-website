import React from "react"
import Nav from "./components/nav/index"
import Header from "./components/header/index"
import Footer from "./components/footer/index"
import About from "./components/about/index"
import Contact from "./components/contact/index"
import Experience from "./components/experience/index"
import Portfolio from "./components/portfolio/index"
import Games from "./components/games/index"
import Services from "./components/services/index"
import Team from "./components/team/index"
import Testimonials from "./components/testimonials/index"
import Switch from "./components/switch"
import { ThemeContextProvider } from "./context/Context"
import './App.css'
import Development from "./components/development"
import Product from "./components/product"

function App() {
	return (
		<>
			<ThemeContextProvider>
				<Switch />
				<Header />
				<Nav />
				<Product/>
				<Development/>
				<Experience />
				<Portfolio />
				<Games/>
				<Services />
				<About />
				<Team />
				<Testimonials />
				<Contact />
				<Footer />
			</ThemeContextProvider>
		</>
	)
}

export default App
