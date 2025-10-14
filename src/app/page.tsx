import Navbar from "./components/Navbar";
import ProcessList from "./components/ProcessList";
import CountProcess from "./components/ProcessBar";
import { ProcessProvider } from "./components/context/ProcessContext";

export default function Home() {
  return (
    <>
      <Navbar/>
      <ProcessProvider>
          <CountProcess/>
          <ProcessList/>
      </ProcessProvider>
    </>
  );
}

