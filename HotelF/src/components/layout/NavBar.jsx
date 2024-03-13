import React, { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
	const [showAccount, setShowAccount] = useState(false)

	const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

	const isLoggedIn = localStorage.getItem("token")
	const userRole = localStorage.getItem("userRole")

	return (
		<nav className="navbar  bg-body-tertiary px-5 shadow mt-0  pb-2 pt-1 sticky-top">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					<span className="c">BestHotel</span>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to={"/browse-all-rooms"}>
								Listes des chambres
							</NavLink>
						</li>

							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to={"/admin"}>
									Admine
								</NavLink>
							</li>
						
					</ul>

					<ul className="d-flex navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to={"/find-booking"}>
							Trouver ma réservation
							</NavLink>
						</li>

						
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
