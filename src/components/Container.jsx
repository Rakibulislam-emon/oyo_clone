import { twMerge } from "tailwind-merge";

const Container = ({ className, children }) => {
  return (
    <div className={twMerge("max-w-screen-2xl mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
