import { useSearchParams } from "react-router-dom";
import QuickPlayResult from "../components/QuickplayResult";
import VsBotResult from "../components/VsBotResult";

const Results = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <div>
      {mode === "quickplay" && <QuickPlayResult />}
      {mode === "vsbot" && <VsBotResult />}
    </div>
  );
};

export default Results;