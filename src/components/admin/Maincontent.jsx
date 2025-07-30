import React from 'react';
import { ClockIcon, CurrencyDollarIcon, UsersIcon, CheckCircleIcon } from './icons.jsx';

const StatCard = ({ icon, title, value, change, changeColor }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
    <div className="bg-indigo-100 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h2>
      <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
      <p className={`text-sm mt-1 ${changeColor}`}>{change}</p>
    </div>
  </div>
);

const MainContent = () => {
  const applications = [
    { id: 1, applicant: 'Alex Johnson', avatar: 'https://picsum.photos/id/1011/100/100', service: 'College Essay Review', date: '2024-07-28', status: 'In Review', statusColor: 'blue', assigned: 'Dr. Emily Carter' },
    { id: 2, applicant: 'Maria Garcia', avatar: 'https://picsum.photos/id/1012/100/100', service: 'Scholarship Essay', date: '2024-07-28', status: 'Pending', statusColor: 'yellow', assigned: 'Unassigned' },
    { id: 3, applicant: 'James Smith', avatar: 'https://picsum.photos/id/1013/100/100', service: 'Resume/CV Editing', date: '2024-07-27', status: 'Completed', statusColor: 'green', assigned: 'Dr. Ben Hanson' },
    { id: 4, applicant: 'Patricia Williams', avatar: 'https://picsum.photos/id/1014/100/100', service: 'Personal Statement', date: '2024-07-26', status: 'Completed', statusColor: 'green', assigned: 'Dr. Emily Carter' },
  ];

  const statusBadge = {
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
  }

  return (
    <main className="flex-1 p-4 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
      <p className="text-white mb-8">Welcome back! Here's an overview of the portal's activity.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<ClockIcon className="w-8 h-8 text-yellow-500" />}
          title="Pending Applications"
          value="72"
          change="+5 from yesterday"
          changeColor="text-green-500"
        />
        <StatCard 
          icon={<CurrencyDollarIcon className="w-8 h-8 text-green-500" />}
          title="Total Revenue"
          value="$15,670"
          change="+$1.2k this week"
          changeColor="text-green-500"
        />
        <StatCard 
          icon={<UsersIcon className="w-8 h-8 text-blue-500" />}
          title="Active Writers"
          value="28"
          change="2 online now"
          changeColor="text-gray-500"
        />
        <StatCard 
          icon={<CheckCircleIcon className="w-8 h-8 text-indigo-500" />}
          title="Completed This Month"
          value="154"
          change="-3% from last month"
          changeColor="text-red-500"
        />
      </div>

      <div className="mt-10 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Applications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full responsive-table">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">View</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 md:divide-y-0">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td data-label="Applicant" className="px-6 py-4 whitespace-nowrap applicant-cell">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={app.avatar} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{app.applicant}</div>
                      </div>
                    </div>
                  </td>
                  <td data-label="Service" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.service}</td>
                  <td data-label="Submitted" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                  <td data-label="Assigned To" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.assigned}</td>
                  <td data-label="Status" className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusBadge[app.statusColor]}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium action-cell">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default MainContent;