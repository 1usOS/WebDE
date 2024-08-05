"use client";

// Library and Modules
import styles from "./app.module.css";
import { useState, useEffect, MouseEvent, ReactNode } from "react";

// Apps
import StatusBar from "./apps/org.1us.statusbar/page";
import MenuBar from "./apps/org.1us.menubar/page";
import AppDock from "./apps/org.1us.appdock/page";
import WindowManager from "./apps/org.1us.wm/page";
import DyLand from "./apps/org.1us.dyland/page";
import Widget from "./apps/org.1us.widget/page";
import Fluid from "./apps/org.1us.fluid/page";

export default function Home() {

  //Configuration variables
  const [showDyland, setShowDyland] = useState(true);

  return (
    <main className={styles.main}>

      {/* Desktop Components */}
      <Fluid />
      <Widget />
      <WindowManager />

      {/* Top Bar */}
      <div className={styles.topbar}>
          <MenuBar /> {/* Top Menu Bar */}
          {showDyland && <DyLand /> /* Dyland */}
          <StatusBar /> {/* Top Status Bar */}
      </div>
      
      {/* App Dock */}
      <AppDock />

    </main>
  );
}
