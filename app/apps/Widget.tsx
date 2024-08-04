import styles from "../app.module.css";
import { useState, useEffect, ReactNode, Fragment, ComponentType } from "react";
import Draggable from 'react-draggable';

// Import Widget Components
import SampleWidget from "../widgets/SampleWidget";
import Clock from "../widgets/Clock";
import ConfigUtil from "./ConfigUtil";

// Widget loader
export default function Widget() {

  const [showwidgetmenu, setShowWidgetMenu] = useState(false);

  // Function to make a component draggable
  type DragType = undefined | false;
  type StartType = { top: string, left:undefined } | { top: string, left: string };
  const makeDraggable = (Component: ComponentType, pos = {x: 0, y: 0}, start: StartType = {top: "50%", left: undefined}, drag: DragType = undefined) => {

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
      {/* Add Widgets here */}
      {makeDraggable(SampleWidget,{x: 0, y: -90},undefined,false)}
      {makeDraggable(Clock,undefined,{top: "15%", left: undefined})}
      {showwidgetmenu && makeDraggable(WidgetMenu,undefined,{top: "5%", left: "1em"},false)}
      {makeDraggable(ConfigUtil,undefined,{top: "20%", left: "30%"})}
    </Fragment>
  );
}

// Widget Menu App
const WidgetMenu = () => {
  return (
    <div className={styles.card} style={{ minWidth:"400px", height:"calc(94vh)"}}>
      <h2>Widgets</h2>
    </div>
  );
};