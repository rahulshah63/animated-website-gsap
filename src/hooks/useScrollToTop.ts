import { useEffect } from 'react';

function useScrollToTop() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Add an event listener for when the page is loaded or refreshed
    window.addEventListener('beforeunload', scrollToTop);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

  return null; 
}

export default useScrollToTop;
