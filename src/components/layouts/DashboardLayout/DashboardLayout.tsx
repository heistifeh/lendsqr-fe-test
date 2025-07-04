import { useState } from "react";
import DashboardHeader from "../../global/DashboardHeader";
import Sidenav from "../../global/Sidenav";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="dashboard-layout">
      <DashboardHeader menuClick={() => setShowNav(!showNav)} />
      <div className="dashboard-layout-wrapper">
        <Sidenav show={showNav} />
        <div className="dashboard-layout-content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
