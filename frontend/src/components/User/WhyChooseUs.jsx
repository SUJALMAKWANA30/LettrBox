import React from 'react';
import CheckCircleIcon from '../icons/CheckCircleIcon';

function WhyChooseUs() {
  const features = [
    {
      title: 'AI-Powered Suggestions',
      description: 'Get intelligent suggestions to improve your resume content and make it stand out.',
    },
    {
      title: 'Easy to Use',
      description: 'Our intuitive interface makes resume building a breeze, even for beginners.',
    },
    {
      title: 'Professional Templates',
      description: 'Choose from a library of templates crafted by experts and approved by recruiters.',
    },
    {
      title: 'Download in PDF',
      description: 'Easily download your resume as a high-quality PDF, ready for job applications.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-40 justify-center items-center mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Choose 
              {' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              Us
            </span></h2>
        <div className="flex flex-col lg:flex-row mt-15 items-center justify-between gap-2 lg:gap-8">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-72 h-72 bg-indigo-300 rounded-full opacity-50 blur-2xl"></div>
            <img
              src="https://picsum.photos/id/1015/500/500"
              alt="Person working on a laptop"
              className="rounded-2xl shadow-2xl relative z-5 w-full max-w-md mx-auto lg:mx-0 h-auto"
            />
          </div>
          <div className='text-center lg:text-left mt-4'>
            
            <div className="space-y-15">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 text-blue-600 mt-1">
                    <CheckCircleIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
