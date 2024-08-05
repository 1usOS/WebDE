"use client";

import styles from "/app/app.module.css";
import { useState, useEffect, ReactNode, Fragment, ComponentType } from "react";
import Draggable from 'react-draggable';
import { IonIcon } from "@ionic/react";
import { menu, closeCircle } from  "ionicons/icons";

import ConfigUtil from "../org.1us.acu/page";

// Window Manager / App Loader
export default function WindowManager() {

  // Define component position and drag types
  type DragType = undefined | false;
  type StartType = { top: string, left:undefined } | { top: string, left: string };

  // App with default window layout (basic window with title and close button)
  const DefaultWindow = (Component: ComponentType, pos = {x: 0, y: 0}, start: StartType = {top: "50%", left: undefined}, drag: DragType = undefined) => {
    return (
      <Draggable defaultPosition={pos} onStart={() => drag}>
        <div className={styles.window} style={{position: 'fixed', top: start.top, left: start.left, minWidth:"400px", minHeight:"200px", background:"var(--window-background-rgb)", boxShadow:"var(--window-box-shadow)"}}>
          <div style={{display:"block", textAlign:"center", margin:".25em 0", paddingBottom:".25rem"}}>
            <a style={{position:"absolute",top:".75rem",left:".75rem"}} className={styles.windowIcon}><IonIcon icon={menu} /></a>
            <h2>Title</h2>
            <a style={{position:"absolute",top:".75rem",right:".75rem"}} className={styles.windowIcon}><IonIcon icon={closeCircle} /></a>
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

  return (
    <Fragment>
      {/* App Loader */}
      {CustomWindow(ConfigUtil,undefined,{top: "20%", left: "30%"})}
      {DefaultWindow(SampleApp,undefined,{top: "20%", left: "10%"})}
    </Fragment>
  );
}

// SampleApp
const SampleApp = () => {
  return (
    <Fragment>
      <p>Hello, World!</p>
    </Fragment>
  );
};