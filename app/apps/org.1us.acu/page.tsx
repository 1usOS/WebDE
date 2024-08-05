"use client";

import Image from "next/image";
import { useState, useEffect, MouseEvent, ReactNode, Fragment } from "react";
import styles from "/app/app.module.css";
import { Popover, MenuList, MenuItem, ListItemText, Typography, Divider, Slider } from '@mui/material';
import { IonIcon } from "@ionic/react";
import { chevronDownOutline, closeCircle, leaf, searchOutline } from  "ionicons/icons";

export default function ConfigUtil() {

  return (
    <div className={styles.window} style={{display:"flex", minWidth:"600px", minHeight:"300px", background:"var(--window-background-rgb)", boxShadow:"var(--window-box-shadow)"}}>
      <div style={{padding:".75em .75em .5em .5em", width:"13.5rem",borderRight:"1px solid #282828"}}>
        <a className={styles.windowIcon}><IonIcon icon={searchOutline} /></a>
        <h2 style={{padding:".5rem 1.5rem"}}>ACU</h2>
        <a className={styles.windowIcon}><IonIcon icon={chevronDownOutline} /></a>
        <div style={{margin:".75em 0em"}}>
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Performance</a>
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Overlays</a>
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>System</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Apps</a>
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Repositories</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Languages</a>
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Fonts</a>
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Date & Time</a>
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Keyboard</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a style={{display:"flex", margin:".25rem 0rem"}}><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={leaf} /></p>Accounts</a>
        </div>
      </div>
      <div style={{width:"100%", display:"flex"}}>
      <div style={{position:"absolute",top:".75rem",right:".75rem"}}>
        <a className={styles.windowIcon}><IonIcon icon={closeCircle} /></a>
      </div>
        <div className={styles.center} style={{width:"100%"}}>
        <Image
          className={styles.logo}
          style={{filter:"invert(1) drop-shadow(2px 4px 6px #ffd4dc)"}}
          src="https://cdn-icons-png.freepik.com/512/483/483390.png"
          alt="1us Logo"
          width={180}
          height={180}
          priority
        />
        <div style={{position:"absolute",bottom:".5rem",fontSize:".75rem",fontWeight:"600",color:"#d7938e"}}>1usOS Configuration Utility (v0.1.5 Experimental)</div>
        </div>
      </div>
    </div>
  );
}