"use client";

import styles from "/app/app.module.css";
import { useState, useEffect, ReactNode, Fragment, ComponentType } from "react";
import Draggable from 'react-draggable';
import { IonIcon } from "@ionic/react";
import { menu, removeCircle } from  "ionicons/icons";

//Import Apps
import Settings from "../org.1us.settings";
import ComingSoonBar from "../org.1us.comingsoon";
import AppDock from "../org.1us.appdock";
import Example from "../org.1us.example";

// Window Manager / App Loader
export default function WindowManager() {

    // Map apps with package names
    function getComponentByName(name: string): React.ComponentType | undefined {
      switch (name) {
        // Add Apps here
        case 'org.1us.settings':
          return Settings;
        case 'org.1us.comingsoon':
          return ComingSoonBar;
        case 'org.1us.appdock':
          return AppDock;
        case 'org.1us.example':
          return Example
        default:
          return undefined;
      }
    }

  // Define component position and drag types
  type DragType = undefined | false;
  type StartType = { top: string, left:undefined } | { top: string, left: string };

  // App with default window layout (basic window with title and close button)
  const DefaultWindow = (Component: ComponentType, pos = {x: 0, y: 0}, start: StartType = {top: "50%", left: undefined}, drag: DragType = undefined) => {
    return (
      <Draggable defaultPosition={pos} onStart={() => drag}>
        <div className={styles.window} style={{position: 'fixed', top: start.top, left: start.left, minWidth:"400px", minHeight:"200px", background:"var(--window-background-rgb)", boxShadow:"var(--window-box-shadow)"}}>
          <div style={{display:"block", textAlign:"center", margin:".5em 0"}}>
            <a style={{position:"absolute",top:".75rem",left:".75rem"}} className={styles.windowIcon}><IonIcon icon={menu} /></a>
            <h2>{Component.displayName || Component.name.replace(/([A-Z])/g, " $1").trim() || "Untitled"}</h2>
            <a style={{position:"absolute",top:".75rem",right:".75rem"}} className={styles.windowIcon}><IonIcon icon={removeCircle} /></a>
          </div>
          <Component />
        </div>
      </Draggable>
    );
  };

  // App with custom window layout (transparent window)
  const CustomWindow = (Component: ComponentType, pos = {x: 0, y: 0}, start: StartType = {top: "50%", left: undefined}, drag: DragType = undefined) => {
    return (
      <Draggable defaultPosition={pos} onStart={() => drag}>
        <div style={{ position: 'fixed', top: start.top, left: start.left }}>
          <Component />
        </div>
      </Draggable>
    );
  };

  const [spawnedComponents, setSpawnedComponents] = useState<React.ReactElement[]>([]);
  
  const handleButtonClick = (componentName: string) => {
    const ComponentToSpawn = getComponentByName(componentName);
    if (ComponentToSpawn) {
      setSpawnedComponents([
        ...spawnedComponents,
        CustomWindow(ComponentToSpawn, undefined, { top: '20%', left: '30%' }),
      ]);
    } else {
      console.log(`Component '${componentName}' not found.`);
    }
  };
  
  // AppLauncher
  const AppLauncher = () => {
    const [packagename, setPackageName] = useState("");
    return (
      <Fragment>
        <br />
        <p className={styles.textFieldLabel}>Enter a package name:</p>
        <br />
        <input
          key=""
          className={styles.textField}
          placeholder="com.example.app"
          value={packagename}
          onChange={(e) => setPackageName(e.target.value)} />
        <br /><br />
        <a className={styles.buttonOutlined} onClick={() => handleButtonClick(packagename)}>
          Launch App
        </a>
      </Fragment>
    );
  };
  // App Infomation
  AppLauncher.displayName = "App Launcher"
  //AppLauncher.description = "This is a description"
  //AppLauncher.logo = "AppLauncher.svg"
  //AppLauncher.type = "default"

  return (
    <Fragment>
      {/* App Loader */}
      {DefaultWindow(AppLauncher,undefined,{top: "calc(4em + 1%)", left: "1%"})}
      {spawnedComponents.map((component, index) => (
          <div style={{position: 'fixed'}} key={index}>{component}</div>
        ))}
    </Fragment>
  );
}