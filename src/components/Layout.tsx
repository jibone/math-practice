import { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="h-auto bg-gray-100 pb-5">{children}</div>;
};

export default Layout;
