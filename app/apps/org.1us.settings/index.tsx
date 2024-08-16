"use client";

import Image from "next/image";
import { useState, useEffect, MouseEvent, ReactNode, Fragment } from "react";
import styles from "/app/app.module.css";
import { Popover, MenuList, MenuItem, ListItemText, Typography, Divider, Slider } from '@mui/material';
import { IonIcon } from "@ionic/react";
import { menu, removeCircle, searchOutline, leaf, hardwareChip, rocket, albums, wifi, globe, bluetooth, notifications, sparkles, layers, save, apps, cloudDownload, tv, volumeMedium, server, language, text, time, keypad, people, informationCircleOutline, gitNetwork } from  "ionicons/icons";

export default function Settings() {

  return (
    <div className={styles.window} style={{display:"flex", minWidth:"600px", minHeight:"300px", height:"60vh", background:"var(--window-background-rgb)", boxShadow:"var(--window-box-shadow)"}}>
      <a style={{position:"absolute",top:".75rem",right:".75rem"}} className={styles.windowIcon}><IonIcon icon={removeCircle} /></a>
      <div style={{textAlign:"center",position:"relative",padding:".75em .75em .5em .5em", minWidth:"12rem",borderRight:"1px solid #282828"}}>
        <a style={{position:"absolute",top:".75rem",left:".75rem"}} className={styles.windowIcon}><IonIcon icon={searchOutline} /></a>
        <h2>Settings</h2>
        <a style={{position:"absolute",top:".75rem",right:".75rem"}} className={styles.windowIcon}><IonIcon icon={menu} /></a>
        <div style={{height:"calc(100% - 1em)"}} className={styles.list}>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={wifi} /></p>Wi-Fi</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={globe} /></p>Network</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={bluetooth} /></p>Bluetooth</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={notifications} /></p>Notifications</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={sparkles} /></p>Appearance</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={layers} /></p>Multitasking</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={apps} /></p>Apps</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={gitNetwork} /></p>Repositories</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={cloudDownload} /></p>Updates</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={tv} /></p>Displays</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={volumeMedium} /></p>Sound</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={server} /></p>Storage</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={hardwareChip} /></p>Performance</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={save} /></p>Restore</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={rocket} /></p>Boot</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={people} /></p>User Accounts</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={language} /></p>Languages</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={text} /></p>Fonts</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={time} /></p>Date & Time</a>
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={keypad} /></p>Keyboard</a>
          <div style={{display:"flex",border:"1px solid #282828"}} />
          <a><p className={styles.windowIcon} style={{marginRight:".5em"}}><IonIcon icon={informationCircleOutline} /></p>System Info</a>
          <br />
        </div>
      </div>
      <div style={{width:"100%", display:"flex"}}>
        <div className={styles.center} style={{width:"100%"}}>
        <Image
          className={styles.logo}
          style={{height:"10rem",width:"10rem",filter:"invert(1) drop-shadow(2px 4px 6px #ffd4dc)"}}
          src="https://cdn-icons-png.freepik.com/512/483/483390.png"
          alt="1us Logo"
          width={180}
          height={180}
          priority
        />
        <div style={{position:"absolute",bottom:".5rem",fontSize:".75rem",fontWeight:"600",color:"#d7938e"}}>1usOS System Settings (v0.1.5 Experimental)</div>
        </div>
      </div>
    </div>
  );
}