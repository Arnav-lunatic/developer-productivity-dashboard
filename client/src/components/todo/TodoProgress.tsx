const completed = 6;
const total = 10;

const percentage = Math.round((completed / total) * 100);

const TodoProgress = () => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Today's Progress
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Keep going! You're doing great today.
          </p>
        </div>

        <div className="text-right">
          <h2 className="text-3xl font-bold text-blue-600">
            {percentage}%
          </h2>

          <p className="text-sm text-gray-500">
            Completed
          </p>
        </div>
      </div>

      <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">
            {completed}
          </p>
          <p className="text-sm text-gray-500">
            Completed
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">
            {total - completed}
          </p>
          <p className="text-sm text-gray-500">
            Pending
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">
            {total}
          </p>
          <p className="text-sm text-gray-500">
            Total
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoProgress;