import {
  CalendarDays,
  Pencil,
  Trash2,
  CircleCheckBig,
} from "lucide-react";

const TodoCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="absolute left-0 top-0 h-full w-1 bg-red-500"></div>
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <CircleCheckBig className="mt-1 h-6 w-6 cursor-pointer text-blue-600" />

          <div>
            <h3 className="text-lg font-semibold">Finish Dashboard UI</h3>

            <p className="mt-1 text-sm text-gray-500">
              Complete the responsive Todo Dashboard design.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                High Priority
              </span>

              <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                <CalendarDays size={14} />
                Today
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Pencil size={18} />
          </button>

          <button className="rounded-lg p-2 hover:bg-red-100 hover:text-red-600">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
