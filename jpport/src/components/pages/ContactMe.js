import { useRef, useState } from "react";
import emailjs, { sendForm } from "emailjs-com";
import { motion } from "framer-motion";
import { Input } from "react-daisyui";

export default function ContactMe() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (results) => {
          console.log(results.text);
          setIsSubmitting(false);
          setIsSuccess(true);
          form.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };
    
    
  return (
    <>
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{ delay: .25, type: "tween", duration: .5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
        <div className="card w-full bg-base-100 shadow-xl p-4 ml-0 md:p-8 md:w-3/4 md:ml-48">
          <div className="flex bg-base-300 h-10 rounded-t-lg">
            {/* ... other components */}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="rounded-b-lg shadow bg-base-200">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold">Reach Out!</h2>
                <p className="text-base md:text-lg">Send Me a Message!</p>
              </div>
              <div className="grid gap-4 p-4">
                {/* Name input */}
                <div className="mt-4">
                  <label className="block mb-2 font-bold text-sm md:text-base">Your Name</label>
                  <Input
                    name="from_name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-10 text-lg pl-2 rounded shadow-xl"
                  />
                </div>
                {/* Email input */}
                <div className="mt-4">
                  <label className="block mb-2 font-bold text-sm md:text-base">Your Email</label>
                  <Input
                    name="from_email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-10 text-lg pl-2 rounded shadow-xl"
                  />
                </div>
                {/* Message textarea */}
                <div>
                  <label className="mb-2 block font-bold text-sm md:text-base">
                    What Can I Help You With?
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={3}
                    className="w-full text-lg rounded shadow-xl"
                  />
                </div>
                {/* Submit button */}
                <div className="mt-6">
                  {isSubmitting ? (
                    <button disabled>Loading...</button>
                  ) : (
                    <button
                      className="btn btn-outline rounded-3xl w-full bg-primary font-custom text-3xl hover:bg-warning hover:text-primary"
                      type="submit"
                    >
                      Send
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  </>
  );
}
