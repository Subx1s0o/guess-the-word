"use client";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "next-themes";
import React, { useState } from "react";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    handleClose();
  };

  return (
    <div className={className}>
      <IconButton
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleThemeChange("light")}>
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <ListItemText primary="Light Theme" />
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange("dark")}>
          <ListItemIcon>
            <Brightness7Icon />
          </ListItemIcon>
          <ListItemText primary="Dark Theme" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ThemeSwitcher;
