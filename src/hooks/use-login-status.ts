"use client";
import { useState, useEffect } from 'react';

// Custom hook to check user login status based on a cookie
const useLoginStatus = () => {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(process.env.LOGIN_STATUS_COOKIE!))
      ?.split('=')[1];

    setCookieValue(value!);
  }, []);

  return cookieValue;
}
export default useLoginStatus;
