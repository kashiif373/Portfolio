import React, { useState } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    emailjs
      .send(
        "service_rd32xoo", // Service ID
        "template_8jiblxd", // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "DKZqbxhYjXZQYmHKx" // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
          setSubmitted(false);
        },
        (error) => {
          console.error("Email send failed:", error.text);
          alert("Failed to send message. Please try again.");
          setSubmitted(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400">
          Contact Me
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {submitted ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Thank you for contacting us!</h3>
              <p>We will get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
