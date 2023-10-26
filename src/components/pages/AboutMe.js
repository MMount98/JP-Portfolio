import headshot from "../headshot.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <h3 className="text-7xl text-center mb-6 font-custom"> About Me</h3>
      <div className="flex flex-col items-center md:flex-row">
        <motion.div
          ref={ref}
          className="place-self-center"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <img
            src={headshot}
            alt="Music Producer Jacob Paulson"
            className="w-4/6 shadow-xl my-5 ml-16 rounded-full "
          />
        </motion.div>

        <motion.div
          ref={ref}
          className="text-lg space-y-4"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <div className="text-2xl m-8 md:mr-48">
            <p>
              I am a music producer and mixing engineer based out of Providence,
              Rhode Island. I love making tracks come to life and am open to
              working on any genre. I specialize in making dynamic and modern
              glitch pop music. I am happy to be a part of any project at any
              stage whether I’m taking it from conception to the end or just
              getting that final polish on a track. Let’s make your vision into
              a fully realized song!
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
