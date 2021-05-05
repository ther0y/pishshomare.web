import React from "react";
import AppHead from "../shared/app-head/app-head";

function MainLayout({ children, title, ...props }) {
  return (
    <div {...props}>
      <AppHead title={title} />
      {children}
    </div>
  );
}

export default MainLayout;
