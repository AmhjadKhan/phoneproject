import React, { useState, useEffect } from "react";
import "./Service.css";
import { ImMobile2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";



const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="service-container bg-gray-100 p-8">
      <h1 className="service-heading text-4xl font-bold mb-4 text-center">
        Our Services
      </h1>
      <div className="ml-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.service_id}
            className="service-item bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-4xl font-semibold mb-2">
              {service.service_name}
            </h2>
            <h2 className="text-left font-semibold mb-2">
              {service.service_lorem} 
            </h2>
            <p className="text-lg ml-4 text-left font-semibold mb-2">
              <ImMobile2 />
              {service.service_number}
            </p>
            <p className="text-lg ml-4  text-left font-semibold mb-2">
                <AiOutlineMail />
              {service.service_email}
            </p>
            <p className="text-lg ml-4  text-left font-semibold">
                <IoLocationOutline />
              {service.shop_address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
