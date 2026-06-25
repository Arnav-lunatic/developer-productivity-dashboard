import {
  CheckCircle2,
  Clock3,
  ListTodo,
  Flame,
} from "lucide-react";

const stats = [
  {
    title: "Total Tasks",
    value: "10",
    icon: ListTodo,
  },
  {
    title: "Completed",
    value: "6",
    icon: CheckCircle2,
  },
  {
    title: "Pending",
    value: "4",
    icon: Clock3,
  },
  {
    title: "Current Streak",
    value: "12 Days",
    icon: Flame,
  },
];

const TodoStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {stat.value}
                </h2>
              </div>

              <div className="rounded-xl bg-blue-100 p-3">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoStats;