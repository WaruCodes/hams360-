import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Added useNavigate for the back button
import './NotificationDetails.css';

const NotificationDetails = () => {
    const { id } = useParams();
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();  // useNavigate hook for navigation

    useEffect(() => {
        // In a real app, you might fetch this from an API based on the `id`
        const notificationData = {
            1: { title: 'New Message', content: 'You have a new message from Admin.' },
            2: { title: 'System Update', content: 'The system will be down for maintenance at 12:00 AM.' },
            3: { title: 'Alert', content: 'Your account has been logged in from a new device.' },
        };

        setNotification(notificationData[id]);
    }, [id]);

    if (!notification) return <div>Loading...</div>;

    const handleBack = () => {
        navigate('/notifications');  // Navigate back to the notifications list
    };

    return (
        <div className="content-container">
            <div className="background-wrapper">
                <div className="notification-detail">
                    <h2>{notification.title}</h2>
                    <p>{notification.content}</p>
                    <button className="back-button" onClick={handleBack}>
                        Back to Notifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationDetails;
