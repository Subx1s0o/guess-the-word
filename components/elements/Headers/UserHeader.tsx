"use client";

import { useActions } from "@/hooks/useActions";
import CoinIcon from "@/public/icons/coin.svg";
import { Avatar, ListItemText, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface UserHeaderProps {
  user: {
    username: string;
    money: number;
    photo: string;
  };
}

export default function UserHeader({ user }: UserHeaderProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {logout} = useActions()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <div className="my-container flex relative items-center shadow-header dark:shadow-none rounded-b-3xl justify-between dark:bg-slate-900 py-7">
        <Link href="/" className="font-semibold text-lg sm:text-2xl">
          Guess The Word
        </Link>
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
              <MenuItem onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
