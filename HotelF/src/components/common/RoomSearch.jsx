import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import moment from "moment";
import { getAvailableRooms } from "../utils/ApiFunctions";
import RoomSearchResults from "./RoomSearchResult";
import RoomTypeSelector from "./RoomTypeSelector";

const RoomSearch = () => {
    const [searchQuery, setSearchQuery] = useState({
        checkInDate: moment().format("YYYY-MM-DD"),
        checkOutDate: moment().add(1, "days").format("YYYY-MM-DD"),
        roomType: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [availableRooms, setAvailableRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        const { checkInDate, checkOutDate } = searchQuery;

        if (!moment(checkInDate).isValid() || !moment(checkOutDate).isValid()) {
            setErrorMessage("Please enter valid dates");
            return;
        }

        if (!moment(checkOutDate).isAfter(checkInDate)) {
            setErrorMessage("Check-out date must be after check-in date");
            return;
        }

        setIsLoading(true);

        try {
            const response = await getAvailableRooms(checkInDate, checkOutDate, searchQuery.roomType);
            setAvailableRooms(response.data);
        } catch (error) {
            console.error("Error fetching available rooms:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchQuery({ ...searchQuery, [name]: value });
        setErrorMessage(""); // Clear error message when input changes
    };

    const handleClearSearch = () => {
        setSearchQuery({
            checkInDate: moment().format("YYYY-MM-DD"),
            checkOutDate: moment().add(1, "days").format("YYYY-MM-DD"),
            roomType: ""
        });
        setAvailableRooms([]);
    };

    return (
        <Container className="shadow mt-1 mb-5 py-5">
            <Form onSubmit={handleSearch}>
                <Row className="justify-content-center">
                    <Col xs={12} md={3}>
                        <Form.Group controlId="checkInDate">
                            <Form.Label>Date de départ</Form.Label>
                            <Form.Control
                                type="date"
                                className="in p-2"

                                name="checkInDate"
                                value={searchQuery.checkInDate}
                                onChange={handleInputChange}
                                min={moment().format("YYYY-MM-DD")}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={3}>
                        <Form.Group controlId="checkOutDate">
                            <Form.Label>Date d'arrivée</Form.Label>
                            <Form.Control
                                type="date"
                                className="in p-2"
                                name="checkOutDate"
                                value={searchQuery.checkOutDate}
                                onChange={handleInputChange}
                                min={moment().format("YYYY-MM-DD")}
                            />
                        </Form.Group>
                    </Col>
					
                    <Col xs={12} md={3}>
                        <Form.Group controlId="roomType">
                            <Form.Label>Type du chambre</Form.Label>
                            <div className="d-flex in ">
                                <RoomTypeSelector
                                    handleRoomInputChange={handleInputChange}
                                    newRoom={searchQuery}
                                />
								<br></br>
                <div className="input-group-append in ">
                <button type="submit" className="btn btn-info p-9 m-0">
                    checher
                </button>
            </div>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

            {isLoading ? (
                <p className="mt-4">chargement...</p>
            ) : availableRooms.length ? (
                <RoomSearchResults results={availableRooms} onClearSearch={handleClearSearch} />
            ) : (
                <p className="mt-4">Aucune chambre disponible pour les dates et le type de chambre sélectionnés</p>
            )}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </Container>
    );
};

export default RoomSearch;
