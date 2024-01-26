"use client";

// Library and Modules
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, MouseEvent, ReactNode } from "react";
import Draggable from 'react-draggable';

// Desktop Components
import StatusBar from "./components/StatusBar";
import MenuBar from "./components/MenuBar";
import AppDock from "./components/AppDock";
import DyLand from "./components/DyLand";

// Landing Page Components
import ProfileIconBar from "./components/ProfileIconBar";
import ComingSoonBar from "./components/ComingSoonBar";

export default function Home() {

  //Configuration variables
  const [isDesktop, setIsDesktop] = useState(true);
  const [showDyland, setShowDyland] = useState(true);

  // Function to make a JSX element draggable
  interface DraggableProps {
  children: ReactNode;
  }

  const makeDraggable = (element: ReactNode) => {
    return (
      <Draggable>
        {element}
      </Draggable>
    );
  };

  // Sample Widget
  const [testwidget, setTestwidget] = useState(<div className={styles.center}>
      <Image
        className={styles.logo}
        src="1us.png"
        alt="1us Logo"
        width={180}
        height={180}
        priority
      /></div>);

  return (
    <main className={styles.main}>

      {/* Top Bar */}
      <div className={styles.description}>

          {/* Top Menu Bar */}
          {!isDesktop ? <ComingSoonBar /> : <MenuBar />}

          {/* Dyland */}
          {showDyland && <DyLand />}

          {/* Top Status Bar */}
          {!isDesktop ? <ProfileIconBar /> : <StatusBar />}
      </div>

      {/* Desktop Components */}
      {makeDraggable(testwidget)}

      {/* App Dock */}
      <AppDock />

    </main>
  );
}
