"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, Fragment, MouseEvent } from "react";
import { getPreferredColorScheme, applyPreferredColorScheme, toggleColorScheme } from './theme.js';
import { IonIcon } from "@ionic/react";
import { Popover, MenuList, MenuItem, ListItemIcon, ListItemText, Typography, Divider, Slider, Tooltip } from '@mui/material';
import { logoGithub, logoTwitter, logoDiscord, logoInstagram, batteryChargingOutline, chevronDownOutline, volumeHigh, bluetooth, wifi, phonePortraitOutline, toggle, volumeMute, flash, batteryFull, leaf } from  "ionicons/icons";

export default function Home() {

  const [isDesktop, setIsDesktop] = useState(true);
  const [showDyland, setShowDyland] = useState(true);

  const [dylandElement, setDylandElement] = useState("Welcome to the Dyland!");
  const [clock, setClock] = useState("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuopen = Boolean(anchorEl);
  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
  let secTimer = setInterval( () => {
    let date = new Date()
    let weekday_short = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let month_short = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let formatted_date = weekday_short[date.getDay()] + " " + date.getDate() +  " " + month_short[date.getMonth()] 
    let formatted_time = date.getHours() + ":" + date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})
    let formatted_clock = formatted_date + " " + formatted_time
    setClock(formatted_clock)
  },1000)

  return () => clearInterval(secTimer);
}, [])

useEffect(() => {
  applyPreferredColorScheme(getPreferredColorScheme());
}, []);

const [topbarmenu, setTopBarMenu] = useState(<MenuList className={styles.descriptionMenu} />);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
          {!isDesktop ? 
          <div className={styles.descriptionBar}>
            <p>Coming Soon. Stay Tuned.</p>
          </div> : 
          <div className={styles.descriptionDesk}>
            <a  
            aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>About 1us</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>System Settings</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + S
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Activity Monitor</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + Del
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Disk Utility</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + D
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Terminal</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + T
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Shut Down</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + S
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Sleep</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + H
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Reboot</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + R
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Logout User</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + L
                </Typography>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}}
            rel="noopener noreferrer">1us</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New Window</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New Tab</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New File</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + N
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>New Folder</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + W
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Open</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + O
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Rename</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + R
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Compress</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + Z
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Find</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + F
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Share</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Shift + S
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Get Info</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Shift + I
                </Typography>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">File</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Undo</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Z
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Redo</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Copy</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + C
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Cut</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + X
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Paste</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + V
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Select All</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + A
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Show Clipboard</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Shift + C
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>AutoFill</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Shift + A
                </Typography>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Edit</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as Icons</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as Gallary</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as List</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>as Columns</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Sort by</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Clean up</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Hide Tab Bar</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Show All Tabs</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Show View Options</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + V
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Full Screen Mode</ListItemText>
                <Typography variant="body2">
                  ⌘F12
                </Typography>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">View</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Back</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl & Shift & -
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Forward</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl & Shift & +
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Recents</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Home</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Documents</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Desktop</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Network</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>1usShare</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>1usCloud</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Connect to Network Server</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Go</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Minimize window</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + M
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Resize window</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + R
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Maximize window</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Alt + M
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Tile window to left</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + L
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Tile window to center</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + C
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Tile window to right</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + R
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Move to Display 2</ListItemText>
                <Typography variant="body2">
                  ⌘Alt + Up
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Close window</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Q
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Bring to front</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + F
                </Typography>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Window</a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>About 1us</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Community</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Shift + C
                </Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Documentation</ListItemText>
                <Typography variant="body2">
                  ⌘Ctrl + Shift + D
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Official Website</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer">Help</a>
          </div>
          }

          {showDyland ? 
          <div className={styles.dyLand}>
            {dylandElement}
          </div> : 
          <div />
          }

          {!isDesktop ? 
          <div style={{ display:"flex", fontSize:"18px" }}>
          <a
            href="#"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoDiscord} />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoTwitter} />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoInstagram} />
          </a>
          <a
            href="https://github.com/1usProject"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding:"0px 6px" }}
          >
            <IonIcon icon={logoGithub} />
          </a>
          </div> : 
          <div className={styles.descriptionDesk}>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <ListItemText className={styles.descriptionMenuTitle}>WiFi<IonIcon icon={toggle} style={{float:"right",paddingRight:"1.5rem",fontSize:"36px"}} /></ListItemText>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>7 </p>ASUS Mesh</ListItemText>
                <Typography variant="body2">WPA3/6GHz</Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>6 </p>Starbucks Free WiFi</ListItemText>
                <Typography variant="body2">Public/5GHz</Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>4 </p>Marcus's iPhone</ListItemText>
                <Typography variant="body2">WPA2/2.4GHz</Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>6E </p>Starlink WiFi</ListItemText>
                <Typography variant="body2">WPA3/6GHz</Typography>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={wifi} />Other...</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Manage WiFi Settings</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={wifi} /></a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <ListItemText className={styles.descriptionMenuTitle}>Bluetooth<IonIcon icon={toggle} style={{float:"right",paddingRight:"1.5rem",fontSize:"36px"}} /></ListItemText>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={bluetooth} /> Keychron K4</ListItemText>
                <Typography variant="body2">100%<IonIcon icon={batteryChargingOutline} style={{fontSize:"18px"}} /></Typography>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={volumeHigh} /> Airpods Max - Find My</ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={phonePortraitOutline} /> Marcus's iPhone</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Manage Bluetooth Settings</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={bluetooth} /></a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <ListItemText className={styles.descriptionMenuTitle}>Sound<IonIcon icon={volumeHigh} style={{float:"right",paddingRight:"1.5rem",fontSize:"36px"}} /></ListItemText>
              <Slider valueLabelDisplay="auto" defaultValue={30} step={5} marks min={10} max={100} style={{margin:"0 1.5rem",maxWidth:"-webkit-fill-available"}} disabled />
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}><IonIcon icon={volumeMute} /> No Audio Device</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Manage Sound Settings</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={volumeHigh} /></a>
            <a onClick={toggleColorScheme} rel="noopener noreferrer" className={styles.descriptionDeskIcon}><IonIcon icon={chevronDownOutline} /></a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event) => {
              setTopBarMenu(<MenuList className={styles.descriptionMenu}>
              <ListItemText className={styles.descriptionMenuTitle}>Power<IonIcon icon={flash} style={{float:"right",paddingRight:"1.5rem",fontSize:"36px"}} /></ListItemText>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>
                  <Typography variant="body2">Battery</Typography>
                  <IonIcon icon={batteryFull} style={{paddingTop:".5rem",fontSize:"48px"}}/>
                </ListItemText>
                <ListItemText className={styles.descriptionMenuText} style={{minWidth:"160px"}}>
                <Typography variant="body2">Fully Charged</Typography>
                  <p style={{fontSize:"28px"}}>100%</p>
                  <Typography variant="body2">Healthy (16 Cycles)</Typography>
                </ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>
                  <Typography variant="body2">Adapter</Typography>
                  <IonIcon icon={flash} style={{paddingTop:".5rem",fontSize:"48px"}}/>
                </ListItemText>
                <ListItemText className={styles.descriptionMenuText} style={{minWidth:"160px"}}>
                <Typography variant="body2">Idle</Typography>
                  <p style={{fontSize:"28px"}}>100W</p>
                  <Typography variant="body2">USB PD/PPS (20V)</Typography>
                </ListItemText>
              </MenuItem>
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>
                  <Typography variant="body2">Energy</Typography>
                  <IonIcon icon={leaf} style={{paddingTop:".5rem",fontSize:"48px"}}/>
                </ListItemText>
                <ListItemText className={styles.descriptionMenuText} style={{minWidth:"160px"}}>
                <Typography variant="body2">Power Saving Mode</Typography>
                  <p style={{fontSize:"28px"}}>14h 31m</p>
                  <Typography variant="body2">Estimated Remaining</Typography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.descriptionMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.descriptionMenuText}>Manage Power Settings</ListItemText>
              </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.descriptionDeskIcon}><p style={{fontSize:"18px"}}>100%</p><IonIcon icon={batteryChargingOutline} /></a>
            <a href="#" rel="noopener noreferrer">{clock}</a>
          </div>
          }


      <Popover 
      id="topbar-menu"
      className={styles.descriptionMenuPopover}
      open={menuopen}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      anchorOrigin={{
       vertical: 'bottom',
       horizontal: 'left',
      }}
      transformOrigin={{
       vertical: 'top',
       horizontal: 'left',
      }}>
        {topbarmenu}
      </Popover>
        
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="1us.png"
          alt="1us Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>

        <a
          href="#start=org.1us.file"
          className={styles.card} rel="noopener noreferrer">
        <Tooltip title="File" placement="top">
        <Image
          className={styles.appIcon}
          src="file_icon.png"
          alt="App Icon"
          width={72}
          height={72}
          priority
        /></Tooltip></a>

        <a
          href="#start=org.1us.web"
          className={styles.card} rel="noopener noreferrer">
        <Tooltip title="Web" placement="top">
        <Image
          className={styles.appIcon}
          src="web_icon.png"
          alt="App Icon"
          width={72}
          height={72}
          priority
        /></Tooltip></a>

        <a
          href="#appurl=https://chatu.1us.ca"
          className={styles.card} rel="noopener noreferrer">
        <Tooltip title="Chatulus" placement="top">
        <Image
          className={styles.appIcon}
          src="chatulus_icon.png"
          alt="App Icon"
          width={72}
          height={72}
          priority
        /></Tooltip></a>

        <a
          href="#appurl=https://reactiveide.com"
          className={styles.card} rel="noopener noreferrer">
        <Tooltip title="ReactiveIDE" placement="top">
        <Image
          className={styles.appIcon}
          src="reactiveide_icon.png"
          alt="App Icon"
          width={72}
          height={72}
          priority
        /></Tooltip></a>

        <a
          href="#start=org.1us.osinstaller"
          className={styles.card} rel="noopener noreferrer">
        <Tooltip title="Install 1usOS" placement="top">
        <Image
          className={styles.appIcon}
          src="1usOS_icon.png"
          alt="App Icon"
          width={72}
          height={72}
          priority
        /></Tooltip></a>

        <Divider orientation="vertical" variant="middle" flexItem style={{margin:".25rem .5rem"}} />

        <a
          href="#start=org.1us"
          className={styles.card} rel="noopener noreferrer">
        <Tooltip title="1us" placement="top">
        <Image
          className={styles.appIcon}
          src="1us.png"
          alt="App Icon"
          width={72}
          height={72}
          priority
        /></Tooltip></a>

        <a
          href="#start=org.1us.applibrary"
          className={styles.card} rel="noopener noreferrer">
        <Tooltip title="App Library" placement="top">
        <Image
          className={styles.appIcon}
          src="app_library_icon.png"
          alt="App Icon"
          width={72}
          height={72}
          priority
        /></Tooltip></a>

      </div>
    </main>
  );
}
