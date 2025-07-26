import React from 'react';
import StarIcon from '../icons/StarIcon.jsx';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Software Engineer',
      quote:
        "ResumeXpert made it so easy to create a polished resume that I'm proud of. I got more interview calls within a week!",
      avatar: 'https://picsum.photos/seed/sarah/50/50',
    },
    {
      name: 'Michael Chen',
      title: 'Product Manager',
      quote:
        'The AI suggestions were a game-changer. It helped me phrase my accomplishments in a much more impactful way.',
      avatar: 'https://picsum.photos/seed/michael/50/50',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Recent Graduate',
      quote:
        'As a recent graduate, I was lost. The templates gave me a great starting point, and I landed my first job thanks to my new resume.',
      avatar: 'https://picsum.photos/seed/emily/50/50',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Users Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
