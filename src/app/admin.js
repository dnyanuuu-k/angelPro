// pages/admin.js
"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="bg-orange-600 mt-5 z-30 rounded-xl px-20 py-10 flex flex-col gap-3 items-center mx-4">
      <h1 className="text-5xl">Admin Panel</h1>
      <h2 className="text-2xl">Registered Users</h2>
      <table className="flex-1 w-full ">
        <thead className="flex-1 mt-8 justify-between">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="flex-1 w-full justify-between text-center gap-2 mt-8 ml-2">
          {users &&
            users?.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
