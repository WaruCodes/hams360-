import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";  // Importing the home icon from react-icons
import "./Notification.css";

const Notification = () => {
    // Example notifications array
    const [notifications] = useState([
        { id: 1, title: "New Message", content: "You have a new message from Admin." },
        { id: 2, title: "System Update", content: "The system will be down for maintenance at 12:00 AM." },
        { id: 3, title: "Alert", content: "Your account has been logged in from a new device." },
    ]);

    return (
        <div className="content-container">
            <div className="background-wrapper">
                <div className="notification-container">
                    <h2 style={{ color: 'black' }}>Notifications</h2>

                    {/* Home Button with Icon */}
                    <Link to="/" className="home-button">
                        <AiFillHome/>
                    </Link>

                    {/* Notification List */}
                    <div className="notification-list">
                        {notifications.map((notification) => (
                            <div key={notification.id} className="notification-item">
                                <h4>{notification.title}</h4>
                                <p>{notification.content}</p>
                                <Link to={`/notification/${notification.id}`} className="view-details-link">
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
