import { useEffect, useRef } from 'react';

export default function useClickOutside(callback) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = e => {
      if (!ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [callback]);
  return ref;
}
