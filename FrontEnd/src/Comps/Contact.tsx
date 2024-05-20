import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Follow the details below</p>
            <div>
                <MapContainer center={[40.7128, -74.0060]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[40.7128, -74.0060]}>
                        <Popup>
                            KisanSetu<br /> DTU,Kisan Setu
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Contact;
