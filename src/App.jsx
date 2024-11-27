import React, { useState } from "react";

// Validation function
const validate = (data) => {
  if (!data.name || data.name.length < 3) {
    alert("Ism kamida 3 ta belgidan iborat bo'lishi kerak.");
    return false;
  }

  if (!data.email || !data.email.includes("@")) {
    alert("Email '@' ni o'z ichiga olishi kerak.");
    return false;
  }

  if (!data.address || data.address.length < 5) {
    alert("Manzil kiritilmadi yoki juda qisqa.");
    return false;
  }

  if (!data.contact || !data.contact.startsWith("998") || data.contact.length !== 12) {
    alert("Telefon raqam '998' bilan boshlanishi va 12 ta belgidan iborat bo'lishi kerak.");
    return false;
  }

  if (!data.zipCode || isNaN(data.zipCode)) {
    alert("Zip Code faqat raqamlardan iborat bo'lishi kerak.");
    return false;
  }

  if (!data.vatNumber || isNaN(data.vatNumber) || data.vatNumber.length < 4) {
    alert("VAT raqami faqat raqamlardan iborat bo'lishi va kamida 4 ta belgidan iborat bo'lishi kerak.");
    return false;
  }

  return true;
};

export default function App() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    zipCode: "",
    vatNumber: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  // Form input handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate(formValues)) {
      return;
    }

    setSubmittedData((prevData) => [...prevData, formValues]);

    // Reset form values after submission
    setFormValues({
      name: "",
      email: "",
      address: "",
      contact: "",
      zipCode: "",
      vatNumber: "",
    });
  };

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[600px]">
        <h1 className="text-left text-black text-2xl font-semibold mb-10">
          Edit Address
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">Name</span>
              </div>
              <input
                className="input input-bordered w-full bg-white border border-[#E3E3E3] p-3 rounded-lg"
                name="name"
                type="text"
                placeholder="Ismingizni kiriting"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">Email</span>
              </div>
              <input
                className="input input-bordered w-full bg-white border border-[#E3E3E3] p-3 rounded-lg"
                name="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text text-[#2A2941]">Billing Address</span>
            </div>
            <input
              className="input input-bordered bg-white border border-[#E3E3E3] p-3 rounded-lg h-24 w-full"
              name="address"
              type="text"
              placeholder="Manzilni kiriting"
              value={formValues.address}
              onChange={handleInputChange}
            />
          </label>
          <div className="flex justify-between items-center">
            <label className="form-control mb-4">
              <div className="label">
                <span className="label-text text-[#2A2941]">Contact</span>
              </div>
              <input
                className="input input-bordered bg-white border border-[#E3E3E3] p-3 rounded-lg w-[269px]"
                name="contact"
                type="text"
                placeholder="998XXXXXXXXX"
                value={formValues.contact}
                onChange={handleInputChange}
              />
            </label>
            <select className="bg-white border border-[#E3E3E3] rounded-lg p-3 mt-1 w-[269px] text-left">
              <option value="eng">ENG</option>
              <option value="rus">RUS</option>
              <option value="ozb">O'ZB</option>
            </select>
          </div>
          <div className="flex justify-between items-center gap-4">
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-[#2A2941]">Zip code</span>
              </div>
              <input
                className="input input-bordered bg-white border border-[#E3E3E3] p-3 rounded-lg w-[269px]"
                name="zipCode"
                type="text"
                placeholder="0000"
                value={formValues.zipCode}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text text-[#2A2941]">VAT Number</span>
              </div>
              <input
                className="input input-bordered bg-white border border-[#E3E3E3] p-3 rounded-lg w-[269px]"
                name="vatNumber"
                type="text"
                placeholder="0000"
                value={formValues.vatNumber}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-[289px]"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mt-10">
        {submittedData.map((data, index) => (
          <div key={index} className="mt-4 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Submitted Data {index + 1}:</h2>
            <p>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Address:</strong> {data.address}
            </p>
            <p>
              <strong>Contact:</strong> {data.contact}
            </p>
            <p>
              <strong>Zip Code:</strong> {data.zipCode}
            </p>
            <p>
              <strong>VAT Number:</strong> {data.vatNumber}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
