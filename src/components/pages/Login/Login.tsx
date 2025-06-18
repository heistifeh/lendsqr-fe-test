import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginLayout } from "../../layouts";
import { Logo } from "../../global/Logo";
import PabloSignIn from "../../../assets/images/pablo-sign-in.png";
import { Button, Input } from "../../interface";
import "../Login/_login.scss";
const Login: React.FC = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <LoginLayout>
      <div className="login">
        <div className="login-image-wrapper">
          <Logo className="login-logo" />
          <div className="login-image-container">
            <img src={PabloSignIn} alt="sign-in illustration" />
          </div>
        </div>
        <div className="login-form">
          <div className="login-form-caption">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <div className="login-form-container">
            <form>
              <div>
                <Input placeholder="Email" border="lg" type="email" />
              </div>
              <div style={{ margin: "1.5rem 0" }}>
                <Input
                  placeholder="Password"
                  border="lg"
                  type={displayPassword ? "text" : "password"}
                  icon={
                    <Button
                      variant="naked"
                      className="password-input-icon"
                      onClick={() => setDisplayPassword(!displayPassword)}
                    >
                      show
                    </Button>
                  }
                />
              </div>
              <Button variant="naked" className="forgot-password-button">
                FORGOT PASSWORD?
              </Button>
              <Button
                type="submit"
                size="lg"
                onClick={() => navigate("/customers/users")}
              >
                log in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
