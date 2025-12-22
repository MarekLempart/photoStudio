// src/components/SharedLayout.tsx
import { useState, useEffect, Suspense } from "react";
import { useTheme } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopBottom from "./ScrollToTopBottom";
import { MainWrapper, Spiner } from "../styles/SharedLayoutStyles";
import { LoadingOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const SharedLayout: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 96, color: theme.colors.colTeak }}
      spin
    />
  );

  return (
    <>
      <Header isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      <MainWrapper>
        {isLoading ? (
          <Spiner indicator={antIcon} />
        ) : (
          <Suspense fallback={<Spiner indicator={antIcon} />}>
            <Outlet />
          </Suspense>
        )}
      </MainWrapper>
      <ScrollToTopBottom />
      <Footer />
    </>
  );
};

export default SharedLayout;
