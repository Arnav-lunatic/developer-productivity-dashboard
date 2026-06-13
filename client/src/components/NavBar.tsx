import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import type { RootState } from "../store/store";
import { Spinner } from "./ui/spinner";


function NavBar() {

  const user: any = useSelector((state: RootState) => state.auth.data);

  const isLoading: boolean = useSelector((state: RootState) => state.auth.loading);

  return (
    <nav className="flex items-center justify-start gap-4 px-5 py-4 bg-card/95 border-b border-border shadow-sm backdrop-blur-md">
      {isLoading ? <Spinner className="size-8" /> :
        user ?
          <Avatar>
            <AvatarImage src={user?.user.avatar} />
            <AvatarFallback>{user?.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          :
          <Button
            size="lg"
            variant="outline"
            className="text-foreground hover:bg-muted/80 hover:text-foreground"
            onClick={() => {
              window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/github`
            }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.111.82-.261.82-.579 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.239 1.84 1.239 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.005-.404c1.02.005 2.045.138 3.005.404 2.291-1.552 3.296-1.23 3.296-1.23.655 1.65.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            Login with GitHub
          </Button>
      }
    </nav>
  );
}

export default NavBar;