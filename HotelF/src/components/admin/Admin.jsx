import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaCalendarAlt } from "react-icons/fa";

const Admin = () => {
    return (
        <section className="container mt-5">
            <h2>Bienvenue dans le Panneau d'Administration</h2>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-light ">
                        <div className="card-body">
                        <span className="btn btn-info btn-sm m-2">
                            <FaBed size={48} /> {/* Icône de lit */}/</span>
                            <h5 className="card-title">Gérer les Chambres</h5>
                            <p className="card-text">Accédez à la gestion des chambres existantes.</p>
                            <Link to={"/existing-rooms"} className=" btn btn-hotel">Gérer</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-light">
                        <div className=" card-body">
                        <span className="btn btn-info btn-sm m-2">
												
                            <FaCalendarAlt size={48} /> {/* Icône de calendrier */}
                            </span>
                            <h5 className="card-title">Gérer les Réservations</h5>
                            <p className="card-text">Accédez à la gestion des réservations existantes.</p>
                            <Link to={"/existing-bookings"} className="btn btn-hotel">Gérer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;
