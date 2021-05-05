import React from 'react';

function MainLayout({children, ...props}) {
  return (
      <div {...props}>{children}</div>
  );
}

export default MainLayout;