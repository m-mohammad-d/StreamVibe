import { useState } from "react";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-dark-6 border-2 border-dark-15 text-white rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className="w-full px-4 py-2 rounded-lg bg-dark-08 border-2 border-dark-15 text-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-50 placeholder:text-grey-60"
          />
        </div>
        <div>
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="w-full px-4 py-2 rounded-lg bg-dark-08 border-2 border-dark-15 text-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-50 placeholder:text-grey-60"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full px-4 py-2 rounded-lg bg-dark-08 border-2 border-dark-15 text-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-50 placeholder:text-grey-60"
          />
        </div>
        <div>
          <label className="block mb-2">Phone Number</label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full px-4 py-2 rounded-lg bg-dark-08 border-2 border-dark-15 text-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-50 placeholder:text-grey-60"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="block mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your Message"
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-dark-08 border-2 border-dark-15 text-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-50 placeholder:text-grey-60"
        ></textarea>
      </div>

      <div className="mt-6 flex items-center">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <label className="ml-2 text-grey-60">
          I agree with Terms of Use and Privacy Policy
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 px-6 py-3 bg-primary-50 text-white font-semibold rounded-lg hover:bg-primary-45 focus:outline-none focus:ring-2 focus:ring-primary-50"
      >
        Send Message
      </button>
    </form>
  );
};

export default SupportForm;
