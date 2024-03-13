import React, { useState } from "react"
import { addRoom } from "../utils/ApiFunctions"
import RoomTypeSelector from "../common/RoomTypeSelector"
import { Link } from "react-router-dom"

const AddRoom = () => {
	const [newRoom, setNewRoom] = useState({
		photo: null,
		roomType: "",
		roomPrice: ""
	})

	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [imagePreview, setImagePreview] = useState("")

	const handleRoomInputChange = (e) => {
		const name = e.target.name
		let value = e.target.value
		if(name === "roomPrice") {
			if (!isNaN(value)) {
				value = parseInt(value)
			} else {
				value = ""
			}
		}
		setNewRoom({ ...newRoom, [name]: value })
	}

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setNewRoom({ ...newRoom, photo: selectedImage })
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
			if (success !== undefined) {
				setSuccessMessage("Une nouvelle chambre a été ajoutée avec succès !")
				setNewRoom({ photo: null, roomType: "", roomPrice: "" })
				setImagePreview("")
				setErrorMessage("")
			} else {
				setErrorMessage("Erreur lors de l'ajout de la nouvelle chambre")
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}

	return (
		<>
			<section  >
				<div className="row d-flex justify-content-center align-items-center vh-100">
					<div className="col-md-8 col-lg-6">
						
						{successMessage && (
							<div className="alert alert-success fade show"> {successMessage}</div>
						)}

						{errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}

						<form className=" main" onSubmit={handleSubmit}>
						<div >
						<div  className="row mt-2 mb-5">
						<h1 className="hdes">Ajouter une nouvelle chambre</h1>
						</div>
								
								{imagePreview && (
									<img
										src={imagePreview}
										alt="Photo de la chambre"
										style={{ maxWidth: "500px",borderRadius:"50%",overflow:"hidden", maxHeight: "500px" }}
										className="mb-3"></img>
								)}
								<br></br>
								 <label htmlFor="photo" className="custom-file-upload">
          Choisir une photo
          <input
            required
            name="photo"
            id="photo"
            type="file"
            className="un"
            onChange={handleImageChange}
          /> </label>

							</div>
							
							<div className="mb-3 ">
								<label htmlFor="roomType">
								<p 
								style={{ color: "#7880f5"}}>Type de chambre</p>
								</label>
								<div>
									<RoomTypeSelector
										handleRoomInputChange={handleRoomInputChange}
										newRoom={newRoom}
									/>
								</div>
							</div>
							<div className="mb-3 ml-8">
								<label htmlFor="roomPrice " className=" ml-8">
								<p 	
								style={{ color: "#7880f5" }}
>prix de la chambre</p>
								</label>
								<input
									placeholder="Prix"
									required
									type="number"
									className="un"
									id="roomPrice"
									name="roomPrice"
									value={newRoom.roomPrice}
									onChange={handleRoomInputChange}
								/>
							</div>

							
							<div className="d-grid gap-2 d-md-flex mt-1 mb-0">
								<Link to={"/existing-rooms"} className="btn btn-outline-info">
								Chambres existantes
								</Link>
								<button type="submit" className="btn btn-outline-primary ml-5">
								Enregistrer la chambre
								</button>
							</div>
							
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default AddRoom
