"use client";

import CoinIcon from "@/public/icons/coin.svg";
import { Avatar, ListItemText, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
export default function Header() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const user = {
    username: "ssd",
    money: 10,
    photo: "",
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div
        className={`my-container flex relative items-center shadow-header dark:shadow-none rounded-b-3xl ${
          !user ? "justify-center" : "justify-between"
        } dark:bg-slate-900 py-7`}
      >
        {!user && (
          <ThemeSwitcher className="absolute left-5 top-1/2 -translate-y-1/2" />
        )}
        <Link href="/" className="font-semibold text-lg sm:text-2xl">
          Guess The Word
        </Link>
        {/* USER */}
        {user && (
          <div className="flex items-center gap-4 sm:gap-8">
            <p className="flex items-center font-bold gap-2 text-2xl sm:text-3xl">
              {user.money || 0}
              <span>
                <CoinIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </span>
            </p>
            <div>
              {user.photo ? (
                <Avatar
                  alt={user.username || "User"}
                  src={user.photo}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  onClick={handleClick}
                />
              ) : (
                <Avatar onClick={handleClick}>
                  {user.username ? user.username.slice(0, 1) : "?"}
                </Avatar>
              )}
              <Menu
                id="theme-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="theme-menu-button"
              >
                <MenuItem onClick={() => router.push("/profile")}>
                  <ListItemText primary="Profile" />
                </MenuItem>
                {/* <MenuItem onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </MenuItem> */}
              </Menu>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
