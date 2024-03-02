import React, { useState, useEffect } from "react"
import { getRoomTypes } from "../utils/ApiFunctions"

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
	const [roomTypes, setRoomTypes] = useState([""])
	const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false)
	const [newRoomType, setNewRoomType] = useState("")

	useEffect(() => {
		getRoomTypes().then((data) => {
			setRoomTypes(data)
		})
	}, [])

	const handleNewRoomTypeInputChange = (e) => {
		setNewRoomType(e.target.value)
	}

	const handleAddNewRoomType = () => {
		if (newRoomType !== "") {
			setRoomTypes([...roomTypes, newRoomType])
			setNewRoomType("")
			setShowNewRoomTypeInput(false)
		}
	}

	return (
		<>
			{roomTypes.length > 0 && (
				<div>
					<select
						required
						className="un"
						name="roomType"
						onChange={(e) => {
							if (e.target.value === "Ajouter Nouveau") {
								setShowNewRoomTypeInput(true)
							} else {
								handleRoomInputChange(e)
							}
						}}
						value={newRoom.roomType}>
						<option value="" >Sélectionnez un type de chambre</option>
						<option value={"Ajouter Nouveau"}>Ajouter Nouveau</option>
						{roomTypes.map((type, index) => (
							<option key={index} value={type}>
								{type}
							</option>
						))}
					</select>
					{showNewRoomTypeInput && (
						<div className="mt-2">
							<div className="input-group">
								<input
									type="text"
									className="un"
									placeholder="Entrer un nouveau type de chambre"
									value={newRoomType}
									onChange={handleNewRoomTypeInputChange}
								/>
								<button className="btn btn-hotel" type="button" onClick={handleAddNewRoomType}>
									Ajouter
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default RoomTypeSelector
