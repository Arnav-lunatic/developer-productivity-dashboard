import { Button } from "../../components/ui/button";

function NavBar() {

  return (
    <nav className="navbar">
      <Button
        onClick={() => {
          (window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/github`)
        }}
        variant="outline" >Button</Button>
    </nav>
  );
}

export default NavBar;