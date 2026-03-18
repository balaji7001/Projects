import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

export default function Contact() {
    const form = useRef();
    const location = useLocation();

    const GROUP_LINK = "https://chat.whatsapp.com/YOUR_GROUP_LINK";

    // 🔥 Auto open group when coming from Buy button
    useEffect(() => {
        if (location.state?.openGroup) {
        window.open(location.state.groupLink || GROUP_LINK, "_blank");
        }
    }, [location]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.current,
            "YOUR_PUBLIC_KEY"
        )
        .then(() => {
            alert("Message Sent Successfully 🚀");
        })
        .catch(() => {
            alert("Something went wrong.");
        });

        e.target.reset();
    };

    return (
        <section className="text-orange-200 py-32 px-6 md:px-16">
        <Reveal>
            <h2 className="text-4xl font-light mb-16 text-center text-sky-500 flex gap-3 justify-center items-center">
            Let's Work Together
            <img
                src="/Contact.gif"
                alt="Contact"
                className="w-10 h-10 object-contain rounded-3xl"
            />
            </h2>
        </Reveal>

        <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-2xl mx-auto space-y-6"
        >
            <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-[#111] border border-white/10 focus:border-purple-500 outline-none rounded-2xl"
            />

            <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-[#111] border border-white/10 focus:border-purple-500 outline-none rounded-2xl"
            />

            <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-4 bg-[#111] border border-white/10 focus:border-purple-500 outline-none rounded-2xl"
            />

            <button
            type="submit"
            className="w-full py-4 border border-yellow-500 text-yellow-500
            hover:bg-yellow-500 hover:text-black transition duration-500 rounded-2xl"
            >
            Send Message
            </button>
        </form>

        {/* 🔥 Join Group Button */}
        <div className="text-center mt-10">
            <a
            href={GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl transition inline-block"
            >
            👥 Join WhatsApp Group
            </a>
        </div>
        </section>
    );
}