import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "./Header";
import {
    FaClock,
    FaCocktail,
    FaParking,
    FaSnowflake,
    FaTshirt,
    FaUtensils,
    FaWifi
} from "react-icons/fa";

const HotelService = () => {
    return (
        <>
            <div className="mb-2">
                <Header title={"Nos Services"} />

                <Row className="mt-4">
                    <h4 className="text-center">
                        Services à <span className="hotel-color">Best </span>Hôtel
                        <span className="gap-2">
                            <FaClock className="ml-5" /> Réception ouverte 24h/24
                        </span>
                    </h4>
                </Row>
                <hr />

                <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaWifi /> WiFi
                                </Card.Title>
                                <Card.Text>Restez connecté avec un accès Internet haut débit.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaUtensils /> Petit-déjeuner
                                </Card.Title>
                                <Card.Text>Commencez votre journée avec un délicieux buffet de petit-déjeuner.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaTshirt /> Blanchisserie
                                </Card.Title>
                                <Card.Text>Gardez vos vêtements propres et frais avec notre service de blanchisserie.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaCocktail /> Mini-bar
                                </Card.Title>
                                <Card.Text>Dégustez une boisson rafraîchissante ou une collation de notre mini-bar en chambre.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaParking /> Parking
                                </Card.Title>
                                <Card.Text>Garez votre voiture commodément dans notre parking sur place.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaSnowflake /> Climatisation
                                </Card.Title>
                                <Card.Text>Restez au frais et confortable avec notre système de climatisation.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <hr />
        </>
    );
};

export default HotelService;
