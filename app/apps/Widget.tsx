import styles from "../page.module.css";
import { useState, useEffect, ReactNode, Fragment, ComponentType } from "react";
import Draggable from 'react-draggable';

// Import Widget Components
import SampleWidget from "../widgets/SampleWidget";

export default function Widget() {

  const [testwd, setTestwd] = useState(<SampleWidget />);

  // Function to make a component draggable
  const makeDraggable = (Component: ComponentType) => {
    return (
      <Draggable>
        <div>
          <Component />
        </div>
      </Draggable>
    );
  };

  return (
    <Fragment>
      {makeDraggable(SampleWidget)}
    </Fragment>
  );
}
