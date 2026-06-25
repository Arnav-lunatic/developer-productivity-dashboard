import { Search, Plus } from "lucide-react";
import { Button } from "../ui/button";

const TodoSearch = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div className="relative w-full md:w-[400px]">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search tasks..."
          className="
            w-full
            rounded-xl
            border
            py-3
            pl-11
            pr-4
            outline-none
            transition
            focus:ring-2
            focus:ring-blue-500
          "
        />

      </div>

      <Button className="gap-2">

        <Plus size={18} />

        Add Task

      </Button>

    </div>
  );
};

export default TodoSearch;