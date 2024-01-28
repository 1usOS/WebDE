import styles from "../page.module.css";
import { useState, useEffect, ReactNode, Fragment, ComponentType } from "react";
import Draggable from 'react-draggable';

// Import Widget Components
import SampleWidget from "../widgets/SampleWidget";
import Clock from "../widgets/Clock";

export default function Widget() {

  // Function to make a component draggable
  type DragType = undefined | false;
  const makeDraggable = (Component: ComponentType, pos = { x: 0, y: 0 }, top = '50%', drag: DragType = undefined) => {

    return (
      <Draggable defaultPosition={pos} onStart={() => drag}>
        <div style={{ position: 'fixed', top: top }}>
          <Component />
        </div>
      </Draggable>
    );
  };

  return (
    <Fragment>
      {makeDraggable(SampleWidget,{x: 0, y: -90},undefined,false)}
      {makeDraggable(Clock,undefined,'15%')}
    </Fragment>
  );
}
