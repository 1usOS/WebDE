import Image from "next/image";
import { useState, useEffect, MouseEvent, Fragment } from "react";
import styles from "../page.module.css";
import { Popover, Tooltip, Divider } from '@mui/material';

const AppDock = () => {

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
        <div className={styles.grid}>
            <a
            href="#start=org.1us.file"
            className={styles.card} rel="noopener noreferrer">
            <Tooltip title="File" placement="top">
            <Image
            className={styles.appIcon}
            src="file_icon.png"
            alt="App Icon"
            width={0}
            height={0}
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
            width={0}
            height={0}
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
            width={0}
            height={0}
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
            width={0}
            height={0}
            priority
            /></Tooltip></a>

            <a id="hide-mobile"
            href="#start=org.1us.osinstaller"
            className={styles.card} rel="noopener noreferrer">
            <Tooltip title="Install 1usOS" placement="top">
            <Image
            className={styles.appIcon}
            src="1usOS_icon.png"
            alt="App Icon"
            width={0}
            height={0}
            priority
            /></Tooltip></a>

            <Divider id="hide-mobile" orientation="vertical" variant="middle" flexItem style={{margin:".25rem .5rem"}} />

            <a id="hide-mobile"
            href="#start=org.1us"
            className={styles.card} rel="noopener noreferrer">
            <Tooltip title="1us" placement="top">
            <Image
            className={styles.appIcon}
            src="1us.png"
            alt="App Icon"
            width={0}
            height={0}
            priority
            /></Tooltip></a>

            <a id="hide-mobile"
            href="#start=org.1us.applibrary"
            className={styles.card} rel="noopener noreferrer">
            <Tooltip title="App Library" placement="top">
            <Image
            className={styles.appIcon}
            src="app_library_icon.png"
            alt="App Icon"
            width={0}
            height={0}
            priority
            /></Tooltip></a>
        </div>
        <Popover 
          id="topbar-menu"
          className={styles.descriptionMenuPopover}
          open={menuopen}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}>
            {dropdownmenu}
      </Popover>
    </Fragment>
  );
};

export default AppDock;