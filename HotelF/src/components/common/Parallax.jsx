import React from "react"
import { Container } from "react-bootstrap"

const Parallax = () => {
	return (
		<div className="parallax mb-5">
			<Container className="text-center px-5 py-5 justify-content-center">
				<div className="animated-texts bounceIn">
					<h1>
					Expérimentez la meilleure hospitalité à <span className="hotel-color">Best Hotel</span>
					</h1>
					<h3>Nous offrons les meilleurs services pour tous vos besoins</h3>
				</div>
			</Container>
		</div>
	)
}

export default Parallax
