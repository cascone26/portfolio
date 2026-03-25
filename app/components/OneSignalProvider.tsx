'use client';

import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

export default function OneSignalProvider({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID || '',
      serviceWorkerParam: { scope: '/' },
      allowLocalhostAsSecureOrigin: true,
    });
  }, []);

  return <>{children}</>;
}
