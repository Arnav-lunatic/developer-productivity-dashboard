import { Button } from "../components/ui/button";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        Developer Productivity Dashboard
      </h1>

      <p className="text-muted-foreground">
        Organize your tasks and track your productivity.
      </p>

      <Button
        size="lg"
        onClick={() => {
          window.location.href =
            `${import.meta.env.VITE_BACKEND_URL}/auth/github`;
        }}
      >
        Login with GitHub
      </Button>
    </div>
  );
};

export default LoginPage;