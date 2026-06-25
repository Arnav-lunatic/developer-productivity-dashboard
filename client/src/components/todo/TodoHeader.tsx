import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const TodoHeader = () => {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          {greeting} 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Stay productive and finish your goals today.
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          {today}
        </p>
      </div>

      <Button size="lg" className="gap-2">
        <Plus size={18} />
        Add Task
      </Button>
    </div>
  );
};

export default TodoHeader;