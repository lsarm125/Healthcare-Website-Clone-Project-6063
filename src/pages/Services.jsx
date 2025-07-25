import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiClock, FiShield, FiTrendingUp, FiAward, FiCheckCircle, FiTarget } = FiIcons;

const Services = () => {
  const services = [
    {
      title: 'Temporary Staffing',
      description: 'Short-term staffing solutions to cover immediate needs, sick leave, or vacation coverage.',
      icon: FiClock,
      features: [
        'Same-day placement available',
        'Flexible assignment duration',
        'All nursing specialties covered',
        'Pre-screened professionals',
        '24/7 on-call support'
      ],
      benefits: [
        'Immediate coverage for staffing gaps',
        'No long-term commitments',
        'Cost-effective solution',
        'Maintain patient care standards'
      ]
    },
    {
      title: 'Travel Nursing',
      description: 'Long-term assignments (13+ weeks) for experienced nurses seeking adventure and growth.',
      icon: FiTrendingUp,
      features: [
        '13-26 week assignments',
        'Housing assistance provided',
        'Competitive compensation packages',
        'Licensure support',
        'Career development opportunities'
      ],
      benefits: [
        'Explore new locations',
        'Gain diverse experience',
        'Higher compensation rates',
        'Professional growth opportunities'
      ]
    },
    {
      title: 'Permanent Placement',
      description: 'Direct hire solutions connecting facilities with nurses for long-term employment.',
      icon: FiUsers,
      features: [
        'Comprehensive candidate screening',
        'Skills and cultural fit assessment',
        'Interview coordination',
        'Placement guarantee period',
        'Ongoing support during transition'
      ],
      benefits: [
        'Reduced recruitment costs',
        'Access to passive candidates',
        'Thorough vetting process',
        'Long-term staffing stability'
      ]
    },
    {
      title: 'Per Diem Staffing',
      description: 'Flexible, on-call nursing staff for variable census and unexpected needs.',
      icon: FiShield,
      features: [
        'On-demand availability',
        'No minimum hour requirements',
        'Facility-specific orientation',
        'Competitive hourly rates',
        'Quick response times'
      ],
      benefits: [
        'Ultimate scheduling flexibility',
        'Cost control for facilities',
        'Experienced, adaptable staff',
        'Reduced overtime costs'
      ]
    }
  ];

  const specialties = [
    { name: 'Intensive Care Unit (ICU)', demand: 'High' },
    { name: 'Emergency Department', demand: 'High' },
    { name: 'Medical/Surgical', demand: 'Medium' },
    { name: 'Labor & Delivery', demand: 'High' },
    { name: 'Operating Room', demand: 'Medium' },
    { name: 'Pediatrics', demand: 'Medium' },
    { name: 'Oncology', demand: 'High' },
    { name: 'Telemetry', demand: 'Medium' },
    { name: 'Long-term Care', demand: 'High' },
    { name: 'Home Health', demand: 'Medium' },
    { name: 'Psychiatric/Mental Health', demand: 'High' },
    { name: 'Rehabilitation', demand: 'Low' }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We assess your specific staffing needs and requirements.'
    },
    {
      step: '2',
      title: 'Candidate Sourcing',
      description: 'Our team identifies qualified professionals from our extensive network.'
    },
    {
      step: '3',
      title: 'Screening & Verification',
      description: 'Comprehensive background checks, skills assessment, and credential verification.'
    },
    {
      step: '4',
      title: 'Placement & Onboarding',
      description: 'Seamless placement with full orientation and ongoing support.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-accent-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold font-heading mb-6">Our Healthcare Staffing Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive staffing solutions designed to meet the diverse needs of healthcare facilities and nursing professionals nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Complete Staffing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency coverage to long-term placements, we provide flexible staffing options that adapt to your needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-accent-500" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-3">
                            <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-primary-500" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={index === 0 
                      ? "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      : index === 1 
                      ? "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      : index === 2 
                      ? "https://images.unsplash.com/photo-1631217872822-5edd4cc41a5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      : "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={service.title}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Nursing Specialties We Cover</h2>
            <p className="text-xl text-gray-600">
              We provide qualified professionals across all major nursing specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center"
              >
                <h3 className="font-medium text-gray-900">{specialty.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  specialty.demand === 'High' ? 'bg-red-100 text-red-800' :
                  specialty.demand === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {specialty.demand} Demand
                </span>
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
            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Our Staffing Process</h2>
            <p className="text-xl text-gray-600">
              A streamlined approach to ensure quality placements every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
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

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 font-heading mb-6">
                Quality Assurance & Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We maintain the highest standards in healthcare staffing through rigorous screening, ongoing monitoring, and continuous improvement.
              </p>
              <div className="space-y-4">
                {[
                  'Comprehensive background checks and drug screening',
                  'License verification and credential validation',
                  'Skills competency assessments',
                  'Reference checks from previous employers',
                  'Ongoing performance monitoring and feedback',
                  'Compliance with all state and federal regulations',
                  'Joint Commission and CMS standards adherence',
                  'Continuous education and training programs'
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
                alt="Quality assurance"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
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
              Ready to Partner with iCare101?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you need immediate staffing support or long-term workforce solutions, we're here to help you maintain exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/employers"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Request Staff
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;