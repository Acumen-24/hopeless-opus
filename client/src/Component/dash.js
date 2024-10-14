import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios"; // For fetching data from MongoDB

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [data, setData] = useState({
    teamId: '',
    points: 0,
    lives: 0,
    health: 100,
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
    <aside className="fixed right-0 top-0 h-screen">
      <nav className="h-full flex flex-col bg-slate-950 border-l shadow-sm w-80">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <img
            // src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="Logo"
          /> */}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 space-y-4">
            <SidebarItem text={`Team ID: ${data.teamId}`} />
            <SidebarItem text={`Points: ${data.points}`} />
            <SidebarItem text={`Lives: ${data.lives}`} />
            <SidebarItem text={`Health: ${data.health}%`} />

            {/* Inventory Dropdown */}
            <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group">
              <span
                className={`overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                }`}
              >
                Inventory
              </span>
              {expanded && (
                <ul className="pl-6 space-y-2">
                  {data.inventory.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Logout Button */}
          <div className="border-t p-3">
            <button className="w-full text-red-600 font-semibold">
              Logout
            </button>
          </div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ text }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group">
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
    </li>
  );
}
