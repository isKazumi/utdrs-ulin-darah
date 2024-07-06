import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader size={50} className="animate-spin" />
    </div>
  );
};

export default Loading;
