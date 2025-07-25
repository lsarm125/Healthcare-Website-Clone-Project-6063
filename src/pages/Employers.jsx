import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiClock, FiShield, FiTrendingUp, FiCheckCircle, FiStar, FiHeart, FiAward } = FiIcons;

const Employers = () => {
  const [formData, setFormData] = useState({
    facilityName: '',
    contactName: '',
    email: '',
    phone: '',
    facilityType: '',
    staffingNeeds: '',
    urgency: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const benefits = [
    {
      title: 'Pre-Screened Professionals',
      description: 'All our nurses undergo rigorous background checks, skills assessments, and credential verification.',
      icon: FiShield,
    },
    {
      title: 'Quick Placement',
      description: 'Average placement time of 48-72 hours for urgent staffing needs.',
      icon: FiClock,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to address any staffing concerns or emergencies.',
      icon: FiUsers,
    },
    {
      title: 'Quality Assurance',
      description: 'Ongoing performance monitoring and feedback to ensure consistent quality care.',
      icon: FiStar,
    },
  ];

  const services = [
    {
      title: 'Temporary Staffing',
      description: 'Short-term assignments to cover staff shortages, vacations, or sick leave.',
      features: ['Immediate availability', 'Flexible duration', 'All specialties covered']
    },
    {
      title: 'Travel Nursing',
      description: 'Long-term assignments (13+ weeks) for ongoing staffing needs.',
      features: ['Experienced professionals', 'Housing assistance provided', 'Competitive packages']
    },
    {
      title: 'Permanent Placement',
      description: 'Direct hire solutions for long-term staffing requirements.',
      features: ['Thorough candidate matching', 'Guarantee period included', 'Reduced hiring costs']
    },
  ];

  const testimonials = [
    {
      facility: 'St. Mary\'s Medical Center',
      contact: 'Jennifer Walsh, CNO',
      quote: 'iCare101 has been our trusted staffing partner for over 5 years. Their nurses are professional, skilled, and integrate seamlessly with our team.',
    },
    {
      facility: 'Regional Healthcare System',
      contact: 'Dr. Michael Torres, CMO',
      quote: 'The quality of nurses provided by iCare101 is exceptional. They understand our needs and consistently deliver outstanding professionals.',
    },
    {
      facility: 'Community Hospital',
      contact: 'Sarah Johnson, HR Director',
      quote: 'Fast response times and excellent communication. iCare101 helps us maintain quality patient care even during staffing challenges.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-accent-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold font-heading mb-6">
                Healthcare Staffing Solutions for Your Facility
              </h1>
              <p className="text-xl mb-8">
                Partner with iCare101 to access qualified, pre-screened healthcare professionals ready to maintain your standard of excellent patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#request-form"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  Request Staff Now
                </a>
                <a
                  href="#services"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  View Services
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
              Why Healthcare Facilities Choose iCare101
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the critical importance of quality staffing in healthcare and deliver solutions that meet your highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Our Staffing Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to your facility's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-accent-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get the staff you need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {step: '1', title: 'Submit Request', description: 'Tell us about your staffing needs and requirements'},
              {step: '2', title: 'Candidate Matching', description: 'We identify qualified professionals from our network'},
              {step: '3', title: 'Interview & Selection', description: 'Review candidates and make your selection'},
              {step: '4', title: 'Placement & Support', description: 'Staff placement with ongoing support and monitoring'},
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
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
              Trusted by Healthcare Facilities
            </h2>
            <p className="text-xl text-gray-600">
              See what our partner facilities say about working with iCare101
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.facility}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Request Staff Today</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll contact you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="facilityName" className="block text-sm font-medium text-gray-700 mb-2">
                    Facility Name *
                  </label>
                  <input
                    type="text"
                    id="facilityName"
                    name="facilityName"
                    required
                    value={formData.facilityName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 mb-2">
                    Facility Type *
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    required
                    value={formData.facilityType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select facility type</option>
                    <option value="hospital">Hospital</option>
                    <option value="nursing-home">Nursing Home</option>
                    <option value="assisted-living">Assisted Living</option>
                    <option value="clinic">Clinic</option>
                    <option value="home-health">Home Health</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select urgency</option>
                    <option value="immediate">Immediate (24-48 hours)</option>
                    <option value="urgent">Urgent (1 week)</option>
                    <option value="standard">Standard (2-4 weeks)</option>
                    <option value="future">Future planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="staffingNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                  Staffing Needs *
                </label>
                <textarea
                  id="staffingNeeds"
                  name="staffingNeeds"
                  required
                  rows={4}
                  value={formData.staffingNeeds}
                  onChange={handleChange}
                  placeholder="Please describe your staffing requirements (positions, specialties, shift preferences, duration, etc.)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional details or special requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-accent-700 transition-colors"
              >
                Submit Staff Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Employers;