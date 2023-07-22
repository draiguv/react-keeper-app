import React from 'react';

export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright ©️ {currYear}</p>
    </footer>
  );
}
