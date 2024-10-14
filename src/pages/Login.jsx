import React from "react";
import SignupPage from "./register/SignupPage";
import LoginPage from "./register/LoginPage";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <div className="logo">
        <img
          src="https://my.asos.com/Content/images/asos-logo-2022-93x28.jpg"
          alt="logo"
        />
      </div>
      <div className="register-box">
        <Tabs isFitted variant="enclosed" backgroundColor="white">
          <TabList className="change-btn" mb="1em">
            <Tab>JOIN</Tab>
            <Tab>SIGN IN</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignupPage />
            </TabPanel>
            <TabPanel>
              <LoginPage />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Login;
