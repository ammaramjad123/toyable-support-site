import { useState, useRef } from "react";
import { Mail, Clock, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS credentials
    const SERVICE_ID = "service_n3mqz4k";
    const TEMPLATE_ID = "template_9pxpxdo";
    const PUBLIC_KEY = "lzo_0DdvL6YPWdnOI";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          // Reset form fields in state and DOM
          form.current.reset();
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-white min-h-screen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-orange tracking-[0.25em] uppercase font-semibold sm:text-xl text-sm">
            CONTACT US
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
            Contact Toyable
          </h2>

          <p className="mt-6 text-base sm:text-lg text-brand-brown/70 leading-relaxed">
            Whether you have a question about the database, Toyable 200,
            subscriptions, or community contributions — we're here to help.
          </p>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-10">

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-brand-orange mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-brand-brown text-lg">
                  Email
                </h4>
                <p className="text-brand-brown/70 mt-1">
                  enquiries@toyable.co.uk
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-start gap-4">
              <Clock className="text-brand-orange mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-brand-brown text-lg">
                  Response Time
                </h4>
                <p className="text-brand-brown/70 mt-1">
                  Usually within 24 hours
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-brand-brown text-lg mb-4">
                Follow Us
              </h4>

              <div className="flex gap-6">
                <a
                  href="https://instagram.com/toyable_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border border-brand-brown/10 hover:border-brand-orange transition duration-300"
                >
                  <Instagram className="text-brand-brown hover:text-brand-orange transition duration-300" size={22} />
                </a>

                <a
                  href="https://x.com/toyable_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border border-brand-brown/10 hover:border-brand-orange transition duration-300"
                >
                  <FaXTwitter
                    className="text-brand-brown hover:text-brand-orange transition duration-300"
                    size={22}
                  />
                </a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="bg-white border border-brand-brown/10 rounded-3xl shadow-xl p-8 sm:p-10">

            {submitted ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-brand-brown">
                  Message Sent ✓
                </h3>
                <p className="mt-4 text-brand-brown/70">
                  Thank you for reaching out. We'll respond within 24 hours.
                </p>
                {/* Optional: Add a button to send another message */}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      message: ""
                    });
                  }}
                  className="mt-8 text-brand-orange hover:text-brand-red transition font-medium"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-8">

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full border border-brand-brown/20 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
                  />
                  <label className="absolute left-4 top-2 text-sm text-brand-brown/60 transition-all peer-focus:text-brand-orange peer-valid:text-xs peer-valid:top-1">
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full border border-brand-brown/20 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
                  />
                  <label className="absolute left-4 top-2 text-sm text-brand-brown/60 transition-all peer-focus:text-brand-orange peer-valid:text-xs peer-valid:top-1">
                    Email Address
                  </label>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="peer w-full border border-brand-brown/20 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
                  />
                  <label className="absolute left-4 top-2 text-sm text-brand-brown/60 transition-all peer-focus:text-brand-orange peer-valid:text-xs peer-valid:top-1">
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full border border-brand-brown/20 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition resize-none"
                  />
                  <label className="absolute left-4 top-2 text-sm text-brand-brown/60 transition-all peer-focus:text-brand-orange peer-valid:text-xs peer-valid:top-1">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-orange text-white py-4 rounded-xl font-semibold text-lg hover:bg-brand-red transition duration-300 shadow-md cursor-pointer disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;