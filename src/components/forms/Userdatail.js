import React from "react";

const Userdetail = ({}) => {
    const users = [
        {
          id: 1,
          name: "Basic",
          email: "Aman",
          gender: "---",
          role: "submit",
        },
        {
          id: 2,
          name: "Basic",
          email: "Aman",
          gender: "---",
          role: "submit",
        },
      ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y border  divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Plan
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User Nmae
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Btn
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-semibold md:text-lg text-green-600">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.gender}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button type="" className="text-sm px-4 py-2 w-[150px] rounded-lg bg-[#E92424] text-white">{user.role}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userdetail;
