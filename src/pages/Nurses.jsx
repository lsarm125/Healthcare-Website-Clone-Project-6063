import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiMapPin, FiCalendar, FiHeart, FiTrendingUp, FiShield, FiUsers, FiAward, FiCheckCircle } = FiIcons;

const Nurses = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    license: '',
    specialty: '',
    experience: '',
    availability: '',
    preferredLocation: '',
    resume: null,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and contact you within 48 hours.');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const benefits = [
    {
      title: 'Competitive Pay',
      description: 'Above-market rates with weekly pay and direct deposit options.',
      icon: FiDollarSign,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose assignments that fit your lifestyle and career goals.',
      icon: FiCalendar,
    },
    {
      title: 'Travel Opportunities',
      description: 'Explore new cities and gain diverse clinical experience.',
      icon: FiMapPin,
    },
    {
      title: 'Comprehensive Benefits',
      description: 'Health insurance, 401k, and continuing education support.',
      icon: FiShield,
    },
  ];

  const opportunities = [
    {
      title: 'ICU/Critical Care',
      locations: ['New York, NY', 'Los Angeles, CA', 'Chicago, IL'],
      payRange: '$45-65/hour',
      urgent: true,
    },
    {
      title: 'Emergency Department',
      locations: ['Miami, FL', 'Denver, CO', 'Seattle, WA'],
      payRange: '$42-58/hour',
      urgent: false,
    },
    {
      title: 'Medical/Surgical',
      locations: ['Dallas, TX', 'Phoenix, AZ', 'Atlanta, GA'],
      payRange: '$38-52/hour',
      urgent: true,
    },
    {
      title: 'Labor & Delivery',
      locations: ['Boston, MA', 'Portland, OR', 'Nashville, TN'],
      payRange: '$48-68/hour',
      urgent: false,
    },
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez, RN',
      specialty: 'ICU Nurse',
      quote: 'iCare101 helped me find amazing travel assignments. The support team is incredible and the pay is excellent!',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'David Thompson, RN',
      specialty: 'Emergency Nurse',
      quote: 'I\'ve been working with iCare101 for 2 years. They truly care about their nurses and find great opportunities.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Amanda Foster, LPN',
      specialty: 'Long-term Care',
      quote: 'The flexibility iCare101 offers allowed me to balance work with my family life perfectly.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
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
                Advance Your Nursing Career with iCare101
              </h1>
              <p className="text-xl mb-8">
                Join thousands of healthcare professionals who trust iCare101 for rewarding career opportunities, competitive pay, and exceptional support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply-form"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  Apply Now
                </a>
                <a
                  href="#opportunities"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
                >
                  View Jobs
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nursing professional"
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
              Why Nurses Choose iCare101
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to supporting your career growth and providing the benefits you deserve as a healthcare professional.
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

      {/* Current Opportunities Section */}
      <section id="opportunities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600">
              Explore available positions across the country
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{opportunity.title}</h3>
                  {opportunity.urgent && (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Urgent
                    </span>
                  )}
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{opportunity.locations.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{opportunity.payRange}</span>
                  </div>
                </div>
                <a
                  href="#apply-form"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 font-heading mb-6">
                Requirements & Qualifications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We maintain high standards to ensure quality care and professional success.
              </p>
              <div className="space-y-4">
                {[
                  'Active nursing license (RN, LPN, or CNA)',
                  'Minimum 1 year of recent clinical experience',
                  'Current BLS certification (ACLS/PALS preferred)',
                  'Clean background check and drug screening',
                  'Professional references from previous employers',
                  'Commitment to providing compassionate patient care'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-accent-500" />
                    <span className="text-gray-700">{requirement}</span>
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
                src="https://images.unsplash.com/photo-1631217872822-5edd4cc41a5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nursing credentials"
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from nurses who have advanced their careers with iCare101
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
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.specialty}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Apply Today</h2>
            <p className="text-xl text-gray-600">
              Start your journey with iCare101 - we'll contact you within 48 hours
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
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
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
                  <label htmlFor="license" className="block text-sm font-medium text-gray-700 mb-2">
                    License Type *
                  </label>
                  <select
                    id="license"
                    name="license"
                    required
                    value={formData.license}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select license type</option>
                    <option value="rn">Registered Nurse (RN)</option>
                    <option value="lpn">Licensed Practical Nurse (LPN)</option>
                    <option value="cna">Certified Nursing Assistant (CNA)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                    Specialty/Department *
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    required
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select specialty</option>
                    <option value="icu">ICU/Critical Care</option>
                    <option value="er">Emergency Department</option>
                    <option value="med-surg">Medical/Surgical</option>
                    <option value="labor-delivery">Labor & Delivery</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="oncology">Oncology</option>
                    <option value="telemetry">Telemetry</option>
                    <option value="long-term-care">Long-term Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="immediate">Immediate</option>
                    <option value="2-weeks">2 weeks notice</option>
                    <option value="1-month">1 month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Locations
                </label>
                <input
                  type="text"
                  id="preferredLocation"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  placeholder="e.g., California, Texas, Remote"
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
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your career goals, certifications, or any special skills..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-accent-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Nurses;