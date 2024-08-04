"use client";

// Library and Modules
import styles from "./app.module.css";
import { useState, useEffect, MouseEvent, ReactNode } from "react";

// Apps
import StatusBar from "./apps/StatusBar";
import MenuBar from "./apps/MenuBar";
import AppDock from "./apps/AppDock";
import DyLand from "./apps/DyLand";
import Widget from "./apps/Widget";
import Fluid from "./apps/Fluid";

export default function Loader() {

  //Configuration variables
  const [showDyland, setShowDyland] = useState(true);

  return (
    <main className={styles.main}>

      {/* Top Bar */}
      <div className={styles.topbar}>
          <MenuBar /> {/* Top Menu Bar */}
          {showDyland && <DyLand /> /* Dyland */}
          <StatusBar /> {/* Top Status Bar */}
      </div>

      {/* Desktop Components */}
      <Widget />
      <Fluid />

      {/* App Dock */}
      <AppDock />

    </main>
  );
}
