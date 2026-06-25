import TodoHeader from "../components/todo/TodoHeader";
import TodoStats from "../components/todo/TodoStats";
import TodoProgress from "../components/todo/TodoProgress";
import TodoFilters from "../components/todo/TodoFilters";
import TodoCard from "../components/todo/TodoCard";
import TodoSearch from "../components/todo/TodoSearch";

const TodoPage = () => {
  return (
    <div className="min-h-screen p-8">
      <TodoHeader />

      <div className="mt-8">
        <TodoStats />
      </div>

      <div className="mt-8">
        <TodoProgress />
      </div>

      <div className="mt-8">
        <TodoFilters />
      </div>
      <div className="mt-8">
        <TodoSearch />
      </div>
      <div className="mt-8 space-y-4">
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoPage;
