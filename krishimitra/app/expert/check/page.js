"use client";
import { useState } from "react";

export default function ViewAppointments() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const res = await fetch("/api/farmer/appointment", {
      method: "POST",
      body: JSON.stringify({ advisorName: "Dr. Sharma" }), // change this dynamically later
    });
    const data = await res.json();
    if (data.success) {
      setAppointments(data.appointments);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Appointments</h2>
      <button
        onClick={fetchAppointments}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Load Appointments
      </button>
      <ul className="space-y-3">
        {appointments.map((appt) => (
          <li
            key={appt._id}
            className="border p-3 rounded bg-gray-100"
          >
            <p><strong>Farmer:</strong> {appt.farmerName}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
            <p><strong>Reason:</strong> {appt.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
