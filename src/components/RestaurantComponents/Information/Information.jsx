import React from "react";
import tracking from "../../../assets/Tracking.png";
import clock from "../../../assets/Clock-operational.png";
import verified from "../../../assets/ID Verified.png";
import "./Information.css";

function Information() {
  const scheduleDeliveryData = {
    schedule: {
      Monday: [
        { start: "12:00 AM", end: "3:00 AM," },
        { start: "8:00 AM", end: "3:00 AM" },
      ],
      Tuesday: [{ start: "8:00 AM", end: "3:00 AM" }],
      Wednesday: [{ start: "8:00 AM", end: "3:00 AM" }],
      Thursday: [{ start: "8:00 AM", end: "3:00 AM" }],
      Friday: [{ start: "8:00 AM", end: "3:00 AM" }],
      Saturday: [{ start: "8:00 AM", end: "3:00 AM" }],
      Sunday: [{ start: "8:00 AM", end: "12:00 AM" }],
    },
    estimatedDeliveryTime: "20 min",
  };

  const contactData = {
    contact: {
      message:
        "If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.",
      phone: "+934443-43",
      website: "http://mcdonalds.uk/",
    },
  };

  const operationalData = {
    Monday: "8:00 AM–3:00 AM",
    Tuesday: "8:00 AM–3:00 AM",
    Wednesday: "8:00 AM–3:00 AM",
    Thursday: "8:00 AM–3:00 AM",
    Friday: "8:00 AM–3:00 AM",
    Saturday: "8:00 AM–3:00 AM",
    Sunday: "8:00 AM–3:00 AM",
  };

  return (
    <div className="information">
      <div className="information-container">
        <div className="white-information">
          <div className="wi-first">
            <span>
              <img src={tracking} alt="tracking" /> Delivery information
            </span>
            {Object.keys(scheduleDeliveryData.schedule).map((day) => (
              <div key={day}>
                <span className="wif-day">{day}: </span>
                {scheduleDeliveryData.schedule[day].map((timeSlot, index) => (
                  <span key={index} className="wif-time">
                    {timeSlot.start} - {timeSlot.end}
                  </span>
                ))}
              </div>
            ))}
            <span className="wif-day">Estimated time until delivery: </span>
            <span className="wif-time">{scheduleDeliveryData.estimatedDeliveryTime}</span>
          </div>
          <div className="wi-second">
            <p>
              <img src={verified} alt="sda" />
              Contact information
            </p>
            <p>{contactData.contact.message}</p>
            <p>
              <strong>Phone: </strong>
              <p>{contactData.contact.phone}</p>
            </p>
            <p>
              <strong>Website: </strong>
              <p>{contactData.contact.website}</p>
            </p>
          </div>
        </div>
        <div className="black-information">
          <p>
            <img src={clock} alt="clock" /> Operational Times
          </p>
          <div className="bi-times">
            {Object.entries(operationalData).map(([day, hours]) => (
              <p className="bit-daytime" key={day}>
                <strong>{day}:</strong> {hours}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
