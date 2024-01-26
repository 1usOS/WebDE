import { useState, useEffect, MouseEvent, ReactNode, Fragment } from "react";
import styles from "../page.module.css";
import { Popover, MenuList, MenuItem, ListItemText, Typography, Divider, Slider } from '@mui/material';

const MenuBar = () => {

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
      <div id="hide-mobile" className={styles.descriptionDesk}>
          <a  
          aria-controls={menuopen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={menuopen ? 'true' : undefined}
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.descriptionMenu}>
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
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.descriptionMenu}>
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
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.descriptionMenu}>
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
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.descriptionMenu}>
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
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.descriptionMenu}>
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
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.descriptionMenu}>
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
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.descriptionMenu}>
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
            {dropdownmenu}
      </Popover>
    </Fragment>
  );
};

export default MenuBar;