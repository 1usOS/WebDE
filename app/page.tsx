"use client";

// Library and Modules
import styles from "./page.module.css";
import { useState, useEffect, MouseEvent, ReactNode } from "react";

// Landing Page Components
import ProfileIconBar from "./components/ProfileIconBar";
import ComingSoonBar from "./components/ComingSoonBar";

// Desktop Components
import StatusBar from "./components/StatusBar";
import MenuBar from "./components/MenuBar";
import AppDock from "./components/AppDock";
import DyLand from "./components/DyLand";

// Desktop Apps
import Widget from "./apps/Widget";

export default function Home() {

  //Configuration variables
  const [isDesktop, setIsDesktop] = useState(true);
  const [showDyland, setShowDyland] = useState(true);

  return (
    <main className={styles.main}>

      {/* Top Bar */}
      <div className={styles.topbar}>
          {!isDesktop ? <ComingSoonBar /> : <MenuBar /> /* Top Menu Bar */}
          {showDyland && <DyLand /> /* Dyland */}
          {!isDesktop ? <ProfileIconBar /> : <StatusBar /> /* Top Status Bar */}
      </div>

      {/* Desktop Components */}
      <Widget />

      {/* App Dock */}
      <AppDock />

    </main>
  );
}
