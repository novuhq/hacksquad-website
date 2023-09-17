import React, { useState, useEffect } from 'react';

const Topfab = () => {
  const [showFab, setShowFab] = useState(false);

  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleScroll() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (scroll > 200) setShowFab(true);
    else setShowFab(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showFab && (
        <button className="fab-btn" onClick={goTop}>
          {' '}
          <span>&uarr;</span>{' '}
        </button>
      )}
    </>
  );
};

export default Topfab;
