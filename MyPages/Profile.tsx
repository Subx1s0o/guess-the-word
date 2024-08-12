"use client";

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { Avatar } from "@mui/material";
import React, { useCallback, useEffect } from "react";

const Profile: React.FC = () => {
  const { user, isLoading, error } = useAuth();
  const { getCurrentUser } = useActions();

  const refetchUser = useCallback(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  useEffect(() => {
    refetchUser();
  }, [refetchUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={refetchUser}>Retry</button>
      </div>
    );
  }

  return (
    <section>
      <div className="my-container">
        <h1>User Information</h1>
        {user ? (
          <div>
            <p>Username: {user.username}</p>
            {user.photo ? (
              <Avatar variant="rounded" src={user.photo} alt={user.username} />
            ) : (
              <Avatar variant="rounded">{user.username.slice(0, 1)}</Avatar>
            )}
            <p>Games Played: {user.games}</p>
            <p>Won: {user.won}</p>
            <p>Lost: {user.losed}</p>
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;
