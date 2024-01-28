import { useState, useEffect, useRef } from "react";
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

export default function Fluid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      webGLFluidEnhanced.simulation(canvasRef.current, {
        SIM_RESOLUTION: 256,
        DENSITY_DISSIPATION: 0.8,
        PRESSURE_ITERATIONS: 30,
        BACK_COLOR: getComputedStyle(document.documentElement).getPropertyValue('--fluid-back-color') || '#FFFFFF',
      });
    }
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0 }} />
  );
}
