import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booking.css'; // Import Booking.css for styling

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [appointments, setAppointments] = useState([]);

  // Fetch existing appointments on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appointments');
      setAppointments(response.data);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setError('Error fetching appointments. Please try again later.');
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    // Validation: Ensure date and time are not empty
    if (!date || !time) {
      setError('Please select both date and time.');
      return;
    }

    // Check for clash with existing appointments
    const isClash = appointments.some(appt => appt.date === date && appt.time === time);
    if (isClash) {
      setError('Appointment clashes with existing booking.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/booking', {
        date,
        time,
      });
      console.log(response.data); // Log response data from backend
      setSuccessMessage('Appointment booked successfully!');
      // Clear form inputs after successful booking
      setDate('');
      setTime('');
      setError('');
      // Refresh list of appointments after booking
      fetchAppointments();
    } catch (err) {
      console.error('Booking error:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Error booking appointment. Please try again later.');
      }
    }
  };

  return (
    <div className="booking-container">
      <h2>Book Appointment</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleBooking}>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Booking;
