import { PulseLoader } from "react-spinners";

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <PulseLoader color="#000000" size={15} />
    </div>
  );
};

export default GlobalLoader;
