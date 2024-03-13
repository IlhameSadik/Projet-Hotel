import React, { useState } from "react"
import moment from "moment"
import { cancelBooking, getBookingByConfirmationCode } from "../utils/ApiFunctions"

const FindBooking = () => {
	const [confirmationCode, setConfirmationCode] = useState("")
	const [error, setError] = useState(null)
	const [successMessage, setSuccessMessage] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [bookingInfo, setBookingInfo] = useState({
		id: "",
		bookingConfirmationCode: "",
		room: { id: "", roomType: "" },
		roomNumber: "",
		checkInDate: "",
		checkOutDate: "",
		guestName: "",
		guestEmail: "",
		numOfAdults: "",
		numOfChildren: "",
		totalNumOfGuests: ""
	})

	const emptyBookingInfo = {
		id: "",
		bookingConfirmationCode: "",
		room: { id: "", roomType: "" },
		roomNumber: "",
		checkInDate: "",
		checkOutDate: "",
		guestName: "",
		guestEmail: "",
		numOfAdults: "",
		numOfChildren: "",
		totalNumOfGuests: ""
	}
	const [isDeleted, setIsDeleted] = useState(false)

	const handleInputChange = (event) => {
		setConfirmationCode(event.target.value)
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault()
		setIsLoading(true)

		try {
			const data = await getBookingByConfirmationCode(confirmationCode)
			setBookingInfo(data)
			setError(null)
		} catch (error) {
			setBookingInfo(emptyBookingInfo)
			if (error.response && error.response.status === 404) {
				setError(error.response.data.message)
			} else {
				setError(error.message)
			}
		}

		setTimeout(() => setIsLoading(false), 2000)
	}

	const handleBookingCancellation = async (bookingId) => {
		try {
			await cancelBooking(bookingInfo.id)
			setIsDeleted(true)
			setSuccessMessage("La réservation a été annulée avec succès !")
			setBookingInfo(emptyBookingInfo)
			setConfirmationCode("")
			setError(null)
		} catch (error) {
			setError(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setIsDeleted(false)
		}, 2000)
	}

	return (
		<>
			<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
    <h2 className="text-center mb-4">Trouver Ma Réservation</h2>
    <form onSubmit={handleFormSubmit} className="">
        <div className="input-group mb-3">
            <input
                className="in p" 
                type="text"
                id="confirmationCode"
                name="confirmationCode"
                value={confirmationCode}
                onChange={handleInputChange}
                placeholder=""
            />
            <div className="input-group-append in ">
                <button type="submit" className="btn btn-info p-3 m-0">
                    Trouver une réservation
                </button>
            </div>
        </div>
    </form>

				{isLoading ? (
					<div>
						<div class="spinner-border text-info" role="status">
                           <span class="sr-only"></span>
                    </div></div>
				) : error ? (
					<div className="text-danger">Erreur: {error}</div>
				) : bookingInfo.bookingConfirmationCode ? (
					<div className="col-md-6 mt-4 mb-5  main ">
						<h3 className="hdes">Information de réservation</h3>
						<p className="text-success">Code de Confirmation : {bookingInfo.bookingConfirmationCode}</p>
						<p>Numéro de chambre: {bookingInfo.room.id}</p>
						<p>Type du chambre: {bookingInfo.room.roomType}</p>
						<p>
							Date départ :{" "}
							{moment(bookingInfo.checkInDate).subtract(1, "month").format("MMM Do, YYYY")}
						</p>
						<p>
						    Date d'arrivée:{" "}
							{moment(bookingInfo.checkInDate).subtract(1, "month").format("MMM Do, YYYY")}
						</p>
						<p>Nom complet: {bookingInfo.guestName}</p>
						<p>Email : {bookingInfo.guestEmail}</p>
						<p>Adultes: {bookingInfo.numOfAdults}</p>
						<p>Enfants: {bookingInfo.numOfChildren}</p>
						<p>Total d'invités: {bookingInfo.totalNumOfGuests}</p>

						{!isDeleted && (
							<button
								onClick={() => handleBookingCancellation(bookingInfo.id)}
								className="btn btn-danger">
								Annuler la réservation
							</button>
						)}
					</div>
				) : (
					<div>Trouver une réservation....</div>
				)}

				{isDeleted && <div className="alert alert-success mt-3 fade show">{successMessage}</div>}
			</div>
		</>
	)
}

export default FindBooking
