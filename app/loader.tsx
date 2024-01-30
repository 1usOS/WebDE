"use client";

// Library and Modules
import styles from "./app.module.css";
import { useState, useEffect, MouseEvent, ReactNode } from "react";

// Apps
import ProfileIconBar from "./apps/ProfileIconBar";
import ComingSoonBar from "./apps/ComingSoonBar";
import StatusBar from "./apps/StatusBar";
import MenuBar from "./apps/MenuBar";
import AppDock from "./apps/AppDock";
import DyLand from "./apps/DyLand";
import Widget from "./apps/Widget";
import Fluid from "./apps/Fluid";

export default function Loader() {

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
      <Fluid />

      {/* App Dock */}
      <AppDock />

    </main>
  );
}
