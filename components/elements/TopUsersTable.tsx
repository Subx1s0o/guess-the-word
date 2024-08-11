import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

type IUser = {
  id: string;
  username: string;
  photo: string;
  won: number;
  losed: number;
  games: number;
};

const fetchUsers = async () => {
  const { data } = await axios.get<IUser[]>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/leaders`
  );
  return data;
};

export default function TopUsersTable() {
  const {
    data: users,
    isError,
    isLoading,
    refetch,
  } = useQuery<IUser[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    refetchInterval: 30000,
    retry: false,
  });

  const memoizedUsers = useMemo(() => users, [users]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        <p>Can`t get top users:</p>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "1000px", margin: "auto", borderRadius: 2 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Won</TableCell>
            <TableCell>Losed</TableCell>
            <TableCell>Games</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memoizedUsers?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No users found.
              </TableCell>
            </TableRow>
          ) : (
            memoizedUsers?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  {user.photo ? (
                    <Avatar variant="rounded" src={user.photo} />
                  ) : (
                    <Avatar variant="rounded">
                      {user?.username.slice(0, 1)}
                    </Avatar>
                  )}
                  <p>{user.username}</p>
                </TableCell>
                <TableCell>{user.won}</TableCell>
                <TableCell>{user.losed}</TableCell>
                <TableCell>{user.games}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
