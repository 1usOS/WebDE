import { useState, useEffect, MouseEvent, ReactNode, Fragment } from "react";
import styles from "../app.module.css";
import { getPreferredColorScheme, applyPreferredColorScheme, toggleColorScheme } from './theme.js';
import { IonIcon } from "@ionic/react";
import { Popover, MenuList, MenuItem, ListItemText, Typography, Divider, Slider } from '@mui/material';
import { batteryChargingOutline, chevronDownOutline, volumeHigh, bluetooth, wifi, phonePortraitOutline, toggle, volumeMute, flash, batteryFull, leaf } from  "ionicons/icons";

const StatusBar = () => {

    // Handle theme change (Dark or Light Mode)
    // This overrides browser system theme preferences
    useEffect(() => {
        applyPreferredColorScheme(getPreferredColorScheme());
    }, []);

    // Functions for Date and Time
    const [clock, setClock] = useState("");
    const [mobileclock, setMobileClock] = useState("");

    useEffect(() => {
    let secTimer = setInterval( () => {
        let date = new Date()
        let weekday_short = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        let month_short = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        let formatted_date = weekday_short[date.getDay()] + " " + date.getDate() +  " " + month_short[date.getMonth()] 
        let formatted_time = date.getHours() + ":" + date.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})
        let formatted_clock = formatted_date + " " + formatted_time
        setMobileClock(formatted_time)
        setClock(formatted_clock)
    },1000)

    return () => clearInterval(secTimer);
    }, [])

    // Dropdown Menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuopen = Boolean(anchorEl);
    const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const [dropdownmenu, setDropdownmenu] = useState(<div />); // Dropdown Menu Element

  return (
    <Fragment>
        <div className={styles.topbarDesk}>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <ListItemText className={styles.dropdownMenuTitle}>WiFi<IonIcon icon={toggle} style={{float:"right",paddingRight:"1.25rem",fontSize:"2rem"}} /></ListItemText>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>7 </p>ASUS Mesh</ListItemText>
                <Typography variant="body2">WPA3/6GHz</Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>6 </p>Starbucks Free WiFi</ListItemText>
                <Typography variant="body2">Public/5GHz</Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>4 </p>Marcus's iPhone</ListItemText>
                <Typography variant="body2">WPA2/2.4GHz</Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={wifi} /><p style={{display:"unset",fontSize: ".75rem"}}>6E </p>Starlink WiFi</ListItemText>
                <Typography variant="body2">WPA3/6GHz</Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={wifi} />Other...</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}>Manage WiFi Settings</ListItemText>
            </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.topbarDeskIcon}><IonIcon icon={wifi} /></a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <ListItemText className={styles.dropdownMenuTitle}>Bluetooth<IonIcon icon={toggle} style={{float:"right",paddingRight:"1.25rem",fontSize:"2rem"}} /></ListItemText>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={bluetooth} /> Keychron K4</ListItemText>
                <Typography variant="body2">100%<IonIcon icon={batteryChargingOutline} style={{fontSize:"18px"}} /></Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={volumeHigh} /> Airpods Max - Find My</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={phonePortraitOutline} /> Marcus's iPhone</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}>Manage Bluetooth Settings</ListItemText>
            </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.topbarDeskIcon}><IonIcon icon={bluetooth} /></a>
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <ListItemText className={styles.dropdownMenuTitle}>Sound<IonIcon icon={volumeHigh} style={{float:"right",paddingRight:"1.25rem",fontSize:"2rem"}} /></ListItemText>
            <Slider valueLabelDisplay="auto" defaultValue={30} step={5} marks min={10} max={100} style={{margin:"0 1.5rem",maxWidth:"-webkit-fill-available"}} disabled />
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}><IonIcon icon={volumeMute} /> No Audio Device</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}>Manage Sound Settings</ListItemText>
            </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.topbarDeskIcon}><IonIcon icon={volumeHigh} /></a>
            <a id="hide-mobile" onClick={toggleColorScheme} rel="noopener noreferrer" className={styles.topbarDeskIcon}><IonIcon icon={chevronDownOutline} /></a>

            <div style={{display:"flex"}} className={styles.mobileTopbarRight} >
            <a aria-controls={menuopen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuopen ? 'true' : undefined}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <ListItemText className={styles.dropdownMenuTitle}>Power<IonIcon icon={flash} style={{float:"right",paddingRight:"1.25rem",fontSize:"2rem"}} /></ListItemText>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}>
                <Typography variant="body2">Battery</Typography>
                <IonIcon icon={batteryFull} style={{paddingTop:".5rem",fontSize:"48px"}}/>
                </ListItemText>
                <ListItemText className={styles.dropdownMenuText} style={{minWidth:"160px"}}>
                <Typography variant="body2">Fully Charged</Typography>
                <p style={{fontSize:"28px"}}>100%</p>
                <Typography variant="body2">Healthy (16 Cycles)</Typography>
                </ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}>
                <Typography variant="body2">Adapter</Typography>
                <IonIcon icon={flash} style={{paddingTop:".5rem",fontSize:"48px"}}/>
                </ListItemText>
                <ListItemText className={styles.dropdownMenuText} style={{minWidth:"160px"}}>
                <Typography variant="body2">Idle</Typography>
                <p style={{fontSize:"28px"}}>100W</p>
                <Typography variant="body2">USB PD/PPS (20V)</Typography>
                </ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}>
                <Typography variant="body2">Energy</Typography>
                <IonIcon icon={leaf} style={{paddingTop:".5rem",fontSize:"48px"}}/>
                </ListItemText>
                <ListItemText className={styles.dropdownMenuText} style={{minWidth:"160px"}}>
                <Typography variant="body2">Power Saving Mode</Typography>
                <p style={{fontSize:"28px"}}>14h 31m</p>
                <Typography variant="body2">Estimated Remaining</Typography>
                </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
                <ListItemText className={styles.dropdownMenuText}>Manage Power Settings</ListItemText>
            </MenuItem>
            </MenuList>); 
            handleMenuClick(event);}} rel="noopener noreferrer" className={styles.topbarDeskIcon}><p id="hide-mobile" style={{fontSize:".85rem"}}>100%</p><IonIcon style={{fontSize: "1.5rem"}} icon={batteryChargingOutline} /></a>
            <a id="show-mobile" href="#" rel="noopener noreferrer" style={{padding: "0.1rem 1.5rem 0rem 0.5rem"}}>{mobileclock}</a>
            </div>
            <a id="hide-mobile" href="#" rel="noopener noreferrer">{clock}</a>
        </div>
        <Popover 
          id="topbar-menu"
          className={styles.dropdownMenuPopover}
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
            {dropdownmenu}
      </Popover>
    </Fragment>
  );
};

export default StatusBar;