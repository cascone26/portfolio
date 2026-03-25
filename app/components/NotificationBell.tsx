'use client';

import OneSignal from 'react-onesignal';

export default function NotificationBell() {
  const handleClick = () => {
    OneSignal.Notifications.requestPermission();
  };

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        aria-label="Enable notifications"
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Enable notifications
      </span>
    </div>
  );
}
