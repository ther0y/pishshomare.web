import React, { FC } from "react";
import AppHead from "../shared/app-head/app-head";

interface MainLayoutProps {
  title?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title, ...props }) => {
  return (
    <div {...props}>
      <AppHead title={title} />
      {children}
    </div>
  );
};

export default MainLayout;
