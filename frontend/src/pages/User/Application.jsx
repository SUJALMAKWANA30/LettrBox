import React from 'react';
import Header from '../../components/User/Header';

const templates = [
  {
    title: 'Leave Application',
    content: `Respected Sir/Madam,\n\nI am writing to request leave from [Start Date] to [End Date] due to [Reason].\n\nSincerely,\n[Your Name]`
  },
  {
    title: 'Bonafide Certificate',
    content: `Respected Sir/Madam,\n\nI am a student of [Department]. Please issue a Bonafide Certificate for [Purpose].\n\nSincerely,\n[Your Name]`
  },
  {
    title: 'Extension Request',
    content: `Respected Sir/Madam,\n\nI request an extension for my project due to [Reason]. Kindly allow [New Date].\n\nSincerely,\n[Your Name]`
  }
];

const recentApplications = [
  {
    title: 'Leave for Family Function',
    preview: 'I am writing to request leave from 1st to 3rd August due to a family event...',
    time: 'Opened 26 Jul 2025'
  },
  {
    title: 'Certificate for Internship',
    preview: 'Please issue a Bonafide Certificate as it’s required by the internship firm...',
    time: 'Opened 25 Jul 2025'
  }
];

function Application() {
  const handleTemplateClick = (title) => {
    alert(`You selected: ${title}\n(Navigate or open editor as per logic)`);
  };

  return (
    <>
      <Header />

      <section className="w-[95%] max-w-7xl mx-auto py-10 font-sans">
        {/* Templates Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Templates</h2>
        <div className="flex flex-wrap gap-8 mb-16">
          {/* Blank Document */}
          <div onClick={() => handleTemplateClick('Blank Document')} className="cursor-pointer">
            <div className="w-[200px] h-[250px] bg-white border border-gray-300 hover:shadow-md transition-shadow flex items-center justify-center">
              <span className="text-purple-600 text-6xl font-bold">+</span>
            </div>
            <div className="mt-2 w-full">
              <h4 className="text-sm font-medium text-gray-900 truncate text-left">Blank Document</h4>
              <p className="text-xs text-gray-500 text-left">Untitled</p>
            </div>
          </div>

          {/* Templates */}
          {templates.map((template, index) => (
            <div key={index} onClick={() => handleTemplateClick(template.title)} className="cursor-pointer">
              <div className="w-[200px] h-[250px] bg-gradient-to-br from-purple-100 to-orange-100 border border-gray-300 hover:shadow-md transition-shadow"></div>
              <div className="mt-2 w-full">
                <h4 className="text-sm font-medium text-gray-900 truncate text-left">{template.title}</h4>
                <p className="text-xs text-gray-500 text-left">Template</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Applications Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Recent Applications</h2>
        <div className="flex flex-wrap gap-8 pb-20">
          {recentApplications.map((app, index) => (
            <div key={index} onClick={() => handleTemplateClick(app.title)} className="cursor-pointer">
              <div className="w-[200px] h-[250px] bg-gray-100 border border-gray-300 hover:shadow-md transition-shadow"></div>
              <div className="mt-2 w-full">
                <h4 className="text-sm font-medium text-gray-900 truncate text-left">{app.title}</h4>
                <p className="text-xs text-gray-500 text-left">{app.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Application;
