import { useState } from "react";

const filters = [
  "All",
  "Today",
  "Pending",
  "Completed",
  "High Priority",
];

const TodoFilters = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200
            ${
              active === filter
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TodoFilters;