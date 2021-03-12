import { FC } from "react";

const MainContainer: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <div className="grid grid-cols-5 gap-6">
          <div className="p-4 overflow-hidden bg-white shadow text-4xl text-center">
            123
          </div>
          <div className="p-4 text-4xl text-center">+</div>
          <div className="p-4 overflow-hidden text-4xl text-center bg-white shadow">
            234
          </div>
          <div className="p-4 text-4xl text-center">=</div>
          <div className="p-4 overflow-hidden text-4xl text-center bg-white shadow">
            543
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
