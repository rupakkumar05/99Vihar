import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const About = () => {
  return (
    <motion.section
      className="py-5"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <motion.div
        className="container px-3 px-md-5 text-center"
        variants={fadeUp}
      >
        <h1 className="mb-4 orangeText">About Us</h1>

        <p>
          Founded in 2019, <strong>99Vihar.in</strong> is one of India’s
          fastest-growing digital platforms for real estate. Whether you're
          looking to buy, sell, or advertise properties, we offer a seamless and
          secure experience tailored for today’s real estate needs.
        </p>

        <p>
          Our mission is to simplify property transactions through technology,
          transparency, and trust. With thousands of verified listings across
          100+ cities, we connect property buyers, sellers, agents, and
          developers — all in one place.
        </p>

        <h4 className="mt-4">What You Can Do on 99Vihar.in</h4>
        <ul className="list-unstyled mb-4">
          <li>• Discover verified residential and commercial properties</li>
          <li>• List your property for sale or rent with ease</li>
          <li>
            • Promote your real estate business with premium advertising tools
          </li>
          <li>• Explore custom microsites for real estate projects</li>
          <li>• Get expert support for smarter property decisions</li>
        </ul>

        <h4 className="mt-4">Why 99Vihar.in Stands Out</h4>
        <ul className="list-unstyled">
          <li>
            <strong>Trusted Listings:</strong> 5000+ active properties in 100+
            cities
          </li>
          <li>
            <strong>Agent & Developer Friendly:</strong> Tools to maximize your
            reach
          </li>
          <li>
            <strong>Affordable Promotions:</strong> Microsites, featured
            listings, banners, and more
          </li>
          <li>
            <strong>Growing Community:</strong> Trusted by individual sellers,
            agents, and developers
          </li>
        </ul>

        <p className="mt-4">
          At <strong>99Vihar.in</strong>, we’re redefining how India discovers
          real estate — through smart technology, reliable information, and a
          user-first approach. Whether you’re a first-time buyer or a seasoned
          agent, your journey starts here.
        </p>

        <hr className="my-5" />

        <h1 className="mb-4 orangeText">Our Vision</h1>
        <p>
          At <strong>99Vihar.in</strong>, our vision is to{" "}
          <strong>revolutionize the way India experiences real estate</strong>{" "}
          by creating a smarter, more transparent, and accessible property
          ecosystem for all.
        </p>
        <ul className="list-unstyled">
          <li>
            • <strong>Empower Every Indian</strong> to find their dream property
          </li>
          <li>
            • <strong>Bridge the gap</strong> between traditional and modern
            real estate
          </li>
          <li>
            • <strong>Build a trusted platform</strong> for all stakeholders
          </li>
          <li>
            • <strong>Expand access</strong> across every city and town
          </li>
          <li>
            • <strong>Ensure transparency, speed, and security</strong> in every
            transaction
          </li>
        </ul>

        <p>
          We believe that a well-informed buyer and a well-connected seller are
          the keys to a successful real estate journey — and we’re here to make
          that possible.
        </p>

        <hr />

        <h1 className="mb-4 orangeText">खुशहाल ग्राहक रजिस्ट्री के बाद</h1>
        <p>
          हमारे कई खुशहाल ग्राहक रजिस्ट्री पूरी होने के बाद अपने नए प्लॉट में एक
          बेहतर जीवन की शुरुआत कर चुके हैं। रजिस्ट्री प्रक्रिया पूरी करने के
          बाद, हमारे सैकड़ों संतुष्ट ग्राहक अब अपने सपनों का घर बनाने की दिशा
          में आगे बढ़ चुके हैं।
        </p>
        <p>
          रजिस्ट्री के बाद हमारे ग्राहक निश्चिंत होकर अपने नए प्लॉट का लाभ उठा
          रहे हैं — यही हमारे कामयाबी की असली पहचान है।
        </p>
        <hr />
        {/* Embedded Video Section */}
        <div className="responsive-video mt-5">
          <iframe
            src="https://www.youtube.com/embed/Bnarj44Gc8Q?autoplay=1&mute=1&loop=1&playlist=Bnarj44Gc8Q"
            title="99Vihar Showcase"
            allow="autoplay; encrypted-media "
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
