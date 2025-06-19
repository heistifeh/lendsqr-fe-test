import Logo from "../Logo";
import { Button, Input,  } from "../../interface";
import {
  BellIcon,
  CaretDown,
  MenuIcon,
  SearchIcon,
  UserCancel,
} from "../../icons";
import Avatar from "../../../assets/images/image.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "../../interface/Popup";
import "./_dashboardHeader.scss";
const DashboardHeader: React.FC<{ menuClick: () => void }> = ({
  menuClick,
}) => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-content">
        <div className="dashboard-header-left">
          <Button variant="naked" className="hamburger" onClick={menuClick}>
            <MenuIcon />
          </Button>
          <Link to="/">
            <Logo className="header-logo" />
          </Link>
          <div className="search-container">
            <Input
              className="search-container-input"
              placeholder="Search for anything"
            />
            <Button className="search-container-btn">
              <SearchIcon />
            </Button>
          </div>
        </div>
        <div className="dashboard-header-right">
          <Button className="docs-link" variant="link">
            Docs
          </Button>
          <BellIcon className="bell-icon" />
          <div className="header-profile">
            <div className="header-profile-img">
              <img src={Avatar} alt="profile img" />
            </div>
            <div className="header-profile-name">
              <span>Adedeji</span>
            </div>
            <Button
              variant="naked"
              className="header-profile-dropdown"
              onClick={() => setPopupOpen(!popupOpen)}
            >
              <CaretDown />
            </Button>
          </div>
          <Popup
            isOpen={popupOpen}
            onClose={() => setPopupOpen(false)}
            className="header-profile-popup"
          >
            <Button
              variant="naked"
              className="popup-btn"
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => navigate("/login")}
            >
              <UserCancel />
              <span style={{ marginLeft: "0.5rem" }}>Back to login</span>
            </Button>
          </Popup>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
