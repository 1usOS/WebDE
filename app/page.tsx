"use client";

// Library and Modules
import styles from "./app.module.css";
import { useState, useEffect, MouseEvent, ReactNode } from "react";

// Apps
import StatusBar from "./apps/org.1us.statusbar";
import MenuBar from "./apps/org.1us.menubar";
import AppDock from "./apps/org.1us.appdock";
import WindowManager from "./apps/org.1us.wm";
import DyLand from "./apps/org.1us.dyland";
import Widget from "./apps/org.1us.widget";
import Fluid from "./apps/org.1us.fluid";

export default function Home() {

  //Configuration variables
  const [showDyland, setShowDyland] = useState(true);

  return (
    <main className={styles.main}>

      {/* Desktop Components */}
      <Widget />
      <WindowManager />

      {/* Top Bar */}
      <div className={styles.topbar}>
          <MenuBar /> {/* Top Menu Bar */}
          {showDyland && <DyLand /> /* Dyland */}
          <StatusBar /> {/* Top Status Bar */}
      </div>

      {/* Wallpaper Engine */}
      <Fluid /> {/* Must be loaded after theme.js of StatusBar */}
      
      {/* App Dock */}
      <AppDock />

    </main>
  );
}
