import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiAward, FiClock, FiShield, FiTrendingUp, FiStar, FiCheckCircle } = FiIcons;

const Home = () => {
  const stats = [
    { number: '5000+', label: 'Healthcare Professionals', icon: FiUsers },
    { number: '500+', label: 'Healthcare Facilities', icon: FiHeart },
    { number: '15+', label: 'Years of Experience', icon: FiAward },
    { number: '24/7', label: 'Support Available', icon: FiClock },
  ];

  const services = [
    {
      title: 'Registered Nurses',
      description: 'Skilled RNs for all specialties including ICU, ER, Med-Surg, and more.',
      icon: FiHeart,
    },
    {
      title: 'Licensed Practical Nurses',
      description: 'Experienced LPNs for long-term care, assisted living, and medical facilities.',
      icon: FiUsers,
    },
    {
      title: 'Certified Nursing Assistants',
      description: 'Compassionate CNAs providing quality patient care and assistance.',
      icon: FiShield,
    },
    {
      title: 'Travel Nursing',
      description: 'Flexible travel assignments across the country with competitive benefits.',
      icon: FiTrendingUp,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson, RN',
      role: 'ICU Nurse',
      content: 'iCare101 helped me find the perfect position that matches my skills and schedule. The support team is amazing!',
      rating: 5,
    },
    {
      name: 'Memorial Hospital',
      role: 'HR Director',
      content: 'We\'ve been working with iCare101 for 3 years. They consistently provide qualified, professional nurses.',
      rating: 5,
    },
    {
      name: 'Michael Chen, LPN',
      role: 'Long-term Care',
      content: 'The application process was smooth and I was placed quickly. Great communication throughout.',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
                Connecting Healthcare <span className="text-accent-300">Professionals</span> with Quality Opportunities
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Your trusted partner in healthcare staffing. We match qualified nurses with leading healthcare facilities nationwide, ensuring quality care and career growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/nurses"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  Apply as a Nurse
                </Link>
                <Link
                  to="/employers"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  Request Staff
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professionals"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
              Our Staffing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive healthcare staffing services to meet the diverse needs of medical facilities and healthcare professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 font-heading mb-6">
                Why Choose iCare101?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're more than just a staffing agency. We're your partners in building a successful healthcare career and maintaining quality patient care.
              </p>
              <div className="space-y-4">
                {[
                  'Rigorous screening and credentialing process',
                  'Competitive compensation and benefits',
                  '24/7 support and assistance',
                  'Flexible scheduling options',
                  'Career development opportunities',
                  'Nationwide placement opportunities'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-accent-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from healthcare professionals and facilities who trust iCare101
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold font-heading mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're a healthcare professional looking for your next opportunity or a facility in need of qualified staff, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/nurses"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Join Our Team
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;