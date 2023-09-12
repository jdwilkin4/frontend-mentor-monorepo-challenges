import { MobileNav } from "./components/MobileNav";
import { Navbar } from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isMobile = useMediaQuery();
  return <>{isMobile ? <MobileNav /> : <Navbar />}</>;
}

export default App;
