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
      <div id="hide-mobile" className={styles.topbarDesk}>
          <a  
          aria-controls={menuopen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={menuopen ? 'true' : undefined}
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>About 1us</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>System Settings</ListItemText>
              <Typography variant="body2">
                ⌘Alt + S
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Activity Monitor</ListItemText>
              <Typography variant="body2">
                ⌘Alt + Del
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Disk Utility</ListItemText>
              <Typography variant="body2">
                ⌘Alt + D
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Terminal</ListItemText>
              <Typography variant="body2">
                ⌘Alt + T
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Shut Down</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + S
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Sleep</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + H
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Reboot</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + R
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Logout User</ListItemText>
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
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>New Window</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>New Tab</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>New File</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + N
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>New Folder</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + W
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Open</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + O
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Rename</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + R
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Compress</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + Z
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Find</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + F
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Share</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Shift + S
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Get Info</ListItemText>
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
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Undo</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Z
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Redo</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Copy</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + C
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Cut</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + X
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Paste</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + V
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Select All</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + A
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Show Clipboard</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Shift + C
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>AutoFill</ListItemText>
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
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>as Icons</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>as Gallary</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>as List</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>as Columns</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Sort by</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Clean up</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Hide Tab Bar</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Show All Tabs</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Show View Options</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + V
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Full Screen Mode</ListItemText>
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
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Back</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl & Shift & -
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Forward</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl & Shift & +
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Recents</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Home</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Documents</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Desktop</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Network</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>1usShare</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>1usCloud</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Connect to Network Server</ListItemText>
            </MenuItem>
          </MenuList>); 
          handleMenuClick(event);}} rel="noopener noreferrer">Go</a>

          <a aria-controls={menuopen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={menuopen ? 'true' : undefined}
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Minimize window</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + M
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Resize window</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + R
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Maximize window</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Alt + M
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Tile window to left</ListItemText>
              <Typography variant="body2">
                ⌘Alt + L
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Tile window to center</ListItemText>
              <Typography variant="body2">
                ⌘Alt + C
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Tile window to right</ListItemText>
              <Typography variant="body2">
                ⌘Alt + R
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Move to Display 2</ListItemText>
              <Typography variant="body2">
                ⌘Alt + Up
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Close window</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Q
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Bring to front</ListItemText>
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
            setDropdownmenu(<MenuList className={styles.dropdownMenu}>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>About 1us</ListItemText>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Community</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Shift + C
              </Typography>
            </MenuItem>
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Documentation</ListItemText>
              <Typography variant="body2">
                ⌘Ctrl + Shift + D
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={styles.dropdownMenuItem} onClick={handleMenuClose}>
              <ListItemText className={styles.dropdownMenuText}>Official Website</ListItemText>
            </MenuItem>
          </MenuList>); 
          handleMenuClick(event);}} rel="noopener noreferrer">Help</a>
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

export default MenuBar;