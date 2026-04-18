import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      
      gsap.from(".contact-form", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      
      gsap.from(".contact-input", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full md:mt-50 max-w-xl bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-md contact-form"
    >
      <form className="space-y-6">

        <input
          type="text"
          placeholder="Name"
          className="contact-input w-full border-b border-gray-300 py-3 outline-none bg-transparent"
        />

        <input
          type="email"
          placeholder="Email"
          className="contact-input w-full border-b border-gray-300 py-3 outline-none bg-transparent"
        />

        <input
          type="text"
          placeholder="Phone (Optional)"
          className="contact-input w-full border-b border-gray-300 py-3 outline-none bg-transparent"
        />

        <button className="contact-input w-full bg-black text-white py-3 rounded-lg">
          Submit
        </button>

      </form>
    </div>
  );
};

export default ContactForm;