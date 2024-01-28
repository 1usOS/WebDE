import styles from "../page.module.css";
import { useState, useEffect, ReactNode, Fragment, ComponentType } from "react";
import Draggable from 'react-draggable';

// Import Widget Components
import SampleWidget from "../widgets/SampleWidget";
import Clock from "../widgets/Clock";

export default function Widget() {

  // Function to make a component draggable
  const makeDraggable = (Component: ComponentType, pos = { x: 0, y: 0 }, top = '50%') => {

    return (
      <Draggable defaultPosition={pos}>
        <div style={{ position: 'fixed', top: top }}>
          <Component />
        </div>
      </Draggable>
    );
  };

  return (
    <Fragment>
      {makeDraggable(SampleWidget,{x: 0, y: -90})}
      {makeDraggable(Clock,undefined,'15%')}
    </Fragment>
  );
}
