import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  strokeWidth: 1.5,
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 24 24",
};

export const HomeIcon = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const ChartBarIcon = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const DocumentTextIcon = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export const CogIcon = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.008 1.11-1.227l.11-.044a2.25 2.25 0 012.872.261l.16.299c.406.757.96 1.408 1.62 1.944l.21.17c.542.438 1.235.53 1.83.253l.248-.113a2.25 2.25 0 012.381 3.26l-.16.326c-.24.49-.418.996-.525 1.513l-.044.22c-.12.603.013 1.23.364 1.743l.178.267c.417.625.474 1.424.143 2.112l-.184.397a2.25 2.25 0 01-2.95 1.56l-.253-.114c-.588-.266-1.26-.266-1.848 0l-.253.114a2.25 2.25 0 01-2.95-1.56l-.184-.397c-.33-.688-.274-1.487.143-2.112l.178-.267c.351-.513.484-1.14.364-1.743l-.044-.22c-.107-.517-.285-1.023-.525-1.513l-.16-.326a2.25 2.25 0 012.38-3.26l.248.113c.596.277 1.288.185 1.83-.253l.21-.17c.66-.536 1.214-1.187 1.62-1.944l.16-.299a2.25 2.25 0 012.872-.261l.11.044c.55.219 1.02.685 1.11 1.227m-5.404 4.06c0 2.06-1.68 3.72-3.75 3.72s-3.75-1.66-3.75-3.72 1.68-3.72 3.75-3.72 3.75 1.66 3.75 3.72z" />
  </svg>
);

export const LogoutIcon = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
);

export const XIcon = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const MenuIcon = ({className}) => (
    <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const UserCircleIcon = ({className}) => (
    <svg {...iconProps} className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
    </svg>
);

export const PencilAltIcon = ({className}) => (
    <svg {...iconProps} className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
    </svg>
);

export const UsersIcon = ({className}) => (
    <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm6 0h-1v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-6-6h-1a6 6 0 00-6 6" />
    </svg>
);

export const ClockIcon = ({className}) => (
    <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const CurrencyDollarIcon = ({className}) => (
    <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 11 12 11h-2.5a2 2 0 00-2 2V14a2 2 0 002 2h2.5m-3-6v-1.25a2.5 2.5 0 012.5-2.5h.096c.642 0 1.25.214 1.75.597m-3.652 8.252l.004-.004" />
    </svg>
);

export const CheckCircleIcon = ({className}) => (
    <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);