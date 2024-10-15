import { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar({ isOpen }) {
  const [data, setData] = useState({
    teamId: '',
    points: 0,
    lives: 0,
    health: 100, // Health percentage
    money: 0,
    inventory: []
  });

  // Fetch data from MongoDB
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/user/dashboard"); // Replace with your MongoDB endpoint
        setData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <aside
      className={`fixed right-0 top-0 h-full mt-28 z-[9999] bg-[#000000] text-white w-64 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col justify-between">
        {/* Sidebar Items */}
        <ul className="space-y-6 mt-8 text-center">
          <SidebarItem label="Team ID" value={data.teamId} />
          <SidebarItem label="Points" value={data.points} />
          <SidebarItem label="Lives" value={data.lives} />
          <HealthProgress health={data.health} />
          <SidebarItem label="Money" value={`$${data.money}`} />

          {/* Inventory Dropdown */}
          <li className="relative flex flex-col items-center text-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors">
            <span className="text-sm">Inventory</span>
            <ul className="space-y-2 mt-2">
              {data.inventory.length > 0 ? (
                data.inventory.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))
              ) : (
                <li className="text-sm text-gray-400">No items</li>
              )}
            </ul>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="pt-96 py-4 border-t border-gray-700 text-center">
          <button className="rounded-xl w-[80%] bg-red-700 p-2 text-gray-200 border-none font-semibold">
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({ label, value }) {
  return (
    <li className="flex flex-col items-center justify-center">
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-lg">{value}</span>
    </li>
  );
}

function HealthProgress({ health }) {
  return (
    <li className="flex flex-col items-center justify-center">
      <span className="text-sm font-semibold">Health</span>
      {/* Wrap the health bar and percentage in a group */}
      <div className="group w-[80%]">
        <div className="w-full h-4 bg-gray-800 rounded-lg overflow-hidden mt-2">
          <div
            className="bg-green-500 h-full transition-width duration-500"
            style={{ width: `${health}%` }}
          ></div>
        </div>
        {/* Health percentage hidden by default, shown on hover with a delay */}
        <span className="text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-600 delay-500">
          {health}%
        </span>
      </div>
    </li>
  );
}
