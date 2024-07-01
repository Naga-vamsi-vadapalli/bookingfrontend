import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingHistory.css'; // Import BookingHistory.css for styling

const BookingHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  // Fetch booking history on component mount
  useEffect(() => {
    fetchBookingHistory();
  }, []);

  const fetchBookingHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appointments/history');
      setAppointments(response.data);
    } catch (err) {
      console.error('Error fetching booking history:', err);
      setError('Error fetching booking history. Please try again later.');
    }
  };

  return (
    <div className="booking-history-container">
      <h2>Booking History</h2>
      {error && <p className="error">{error}</p>}
      <div className="appointment-list">
        {appointments.length === 0 && <p>No appointments found.</p>}
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-item">
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;
