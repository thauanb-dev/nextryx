import Navbar from "./components/Navbar";
import ProcessBar from "@/components/ProcessBar";
import ProcessList from "@/components/ProcessList";
import {ProcessProvider} from "@/components/context/ProcessContext";

export default function Home() {
  return (
    <>
      <Navbar/>
      <ProcessProvider>
          <ProcessBar/>
          <ProcessList/>
      </ProcessProvider>
    </>

  );
}

