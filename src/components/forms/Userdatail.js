import React from "react";

const Userdetail = ({}) => {
    const users = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          gender: "Male",
          role: "Admin",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          gender: "Female",
          role: "User",
        },
      ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.gender}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.role}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userdetail;
