import React, { useEffect, useState } from "react"
import { getRoomById, updateRoom } from "../utils/ApiFunctions"
import { Link, useParams } from "react-router-dom"

const EditRoom = () => {
	const [room, setRoom] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const [imagePreview, setImagePreview] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const { roomId } = useParams()

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setRoom({ ...room, photo: selectedImage })
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setRoom({ ...room, [name]: value })
	}

	useEffect(() => {
		const fetchRoom = async () => {
			try {
				const roomData = await getRoomById(roomId)
				setRoom(roomData)
				setImagePreview(roomData.photo)
			} catch (error) {
				console.error(error)
			}
		}

		fetchRoom()
	}, [roomId])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await updateRoom(roomId, room)
			if (response.status === 200) {
				setSuccessMessage("Room updated successfully!")
				const updatedRoomData = await getRoomById(roomId)
				setRoom(updatedRoomData)
				setImagePreview(updatedRoomData.photo)
				setErrorMessage("")
			} else {
				setErrorMessage("Erreur de modification")
			}
		} catch (error) {
			console.error(error)
			setErrorMessage(error.message)
		}
	}

	return (
		<section>
		<div>
			
			<div className="row d-flex justify-content-center align-items-center vh-100">
				<div className="col-md-8 col-lg-6">
					
					<form className=" main" onSubmit={handleSubmit}>
					<div  className="row mt-2 mb-2">
					<h1 className="hdes">Modification du chambre</h1>
					</div>
					{imagePreview && (
								<img
									src={`data:image/jpeg;base64,${imagePreview}`}
									alt="Room preview"
									style={{ maxWidth: "500px",borderRadius:"50%",overflow:"hidden", maxHeight: "500px" }}
									className="mt-5"
								/>
							)}
							
							<div className="mb-1 mt-2">
							<label htmlFor="photo" className="custom-file-upload">
								Changer la photo
							
							<input
								required
								type="file"
								className="un"
								id="photo"
								name="photo"
								onChange={handleImageChange}
							/>
						</label></div>
						
						<div className="mb-2 mt-1">
							<label htmlFor="roomType" className="form-label hotel-color">
								Type du chambre
							</label>
							<input
								type="text"
								className="un"
								id="roomType"
								name="roomType"
								value={room.roomType}
								onChange={handleInputChange}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="roomPrice" className="form-label hotel-color">
								Prix du chambre
							</label>
							<input
								type="number"
								className="un"
								id="roomPrice"
								name="roomPrice"
								value={room.roomPrice}
								onChange={handleInputChange}
							/>
						</div>

						
							<div className="d-grid gap-2 d-md-flex mt-2">
							<Link to={"/existing-rooms"} className="btn btn-outline-info ml-5">
								Précedent
							</Link>
							<button type="submit" className="btn btn-outline-warning">
								Modifier
							</button>
						</div>
					</form>
					{successMessage && (
						<div className="alert alert-success" role="alert">
							{successMessage}
						</div>
					)}
					{errorMessage && (
						<div className="alert alert-danger" role="alert">
							{errorMessage}
						</div>
					)}
				</div>
			</div>
		</div>
		</section>
	)
}
export default EditRoom
