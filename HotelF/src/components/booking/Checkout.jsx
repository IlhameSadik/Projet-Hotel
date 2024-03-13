import React, { useEffect, useState } from "react"
import BookingForm from "../booking/BookingForm"
import {
	FaUtensils,
	FaWifi,
	FaTv,
	FaWineGlassAlt,
	FaParking,
	FaCar,
	FaTshirt,
	FaSpinner
} from "react-icons/fa"

import { useParams } from "react-router-dom"
import { getRoomById } from "../utils/ApiFunctions"
import RoomCarousel from "../common/RoomCarousel"

const Checkout = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [roomInfo, setRoomInfo] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const { roomId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getRoomById(roomId)
				.then((response) => {
					setRoomInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 1000)
	}, [roomId])

	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-pd-3 mt-5 mb-5">
						{isLoading ? (
							<div>
							<div class="spinner-border text-info" role="status">
							   <span class="sr-only"></span>
						</div></div>
						) : error ? (
							<p>{error}</p>
						) : (
							<div className="room-info">
								<img
									src={`data:image/png;base64,${roomInfo.photo}`}
									alt="Room photo"
									style={{ width: "100%",borderRadius:"6%", height: "300px" }}
								/>
								<table className="table table-bordered mt-3">
									<tbody>

										<tr>
											<th>Type du chambre:</th>
											<td>{roomInfo.roomType}</td>
										</tr>
										<tr>
											<th>Prix par nuit</th>
											<td>{roomInfo.roomPrice}Dh</td>
										</tr>
										<tr>
											<th>Service:</th>
											<td>
												<ul className="list-unstyled">
													<li>
														<FaWifi /> Wifi
													</li>
													<li>
														<FaTv /> Netfilx Premium
													</li>
													<li>
														<FaUtensils /> petit-déjeuner
													</li>
													<li>
														<FaWineGlassAlt /> Rafraîchissements de mini-bar
													</li>
													<li>
														<FaCar />Service de voiture
													</li>
													<li>
														<FaParking /> place de parking
													</li>
													
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</div>
					<div className="booking-form-container">
						<BookingForm />
					</div>
				</div>
			</section>
			<div className="container">
				<RoomCarousel />
			</div>
		</div>
	)
}
export default Checkout
