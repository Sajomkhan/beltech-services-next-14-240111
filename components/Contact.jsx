"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Image from "next/image";
import { Loader } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_xwv4gp7",
        "template_5ply797",
        form.current,
        "IyCRsM1LVFLJYIHIy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setInputValues({
            from_name: "",
            from_email: "",
            message: "",
          });
          toast("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <section id="Contact">
      <div className="wrapper w-full px-4">
        <h1 className="text-3xl font-bold text-center ">Contact Us</h1>
        <div className="text-center md:text-start my-8 pl-0 md:pl-36">
          <p className="underline font-semibold">Address:</p>
          {/* ----------------Address---------------- */}
          <p>Kawnia Main Street, Barisal Sadar,</p>
          <p>Barisal, Bangladesh</p>
          <p>Email: sajomkhan@gmail.com</p>
          <p>Mobile: 01911977375</p>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-12 md:gap-16">
          {/* -------------Image Div----------------- */}
          <div className="h-full object-cover">
            <Image
              className=""
              src="/assets/contact.png"
              width={500}
              height={500}
              alt="Image"
            />
          </div>

          {/* ------------Message Form---------------- */}
          <div className="max-w-[500px] flex flex-col gap-7 text-sm lg:text-base px-2">
            <p className="text-lg primary_text ">
              Do you have any messages? Feel free to get in touch!
            </p>
            {/* -------------------Input Form------------------------- */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                name="from_name"
                value={inputValues.from_name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="outline-none shadow-md rounded-lg py-3 px-4"
                required
              />
              <input
                type="email"
                name="from_email"
                value={inputValues.from_email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="outline-none shadow-md rounded-lg py-3 px-4"
                required
              />
              <textarea
                rows={6}
                name="message"
                value={inputValues.message}
                onChange={handleInputChange}
                placeholder="Write message"
                className="outline-none shadow-md rounded-lg py-3 px-4"
                required
              />
              {/* -------------------Submit Button-------------------- */}
              <button
                disabled={loading}
                className="btn_primary w-fit disabled:cursor-not-allowed mt-3"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    Wait <Loader color="#f5d45c" className="animate-spin" />
                  </span>
                ) : (
                  "Send Message 👋"
                )}
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
