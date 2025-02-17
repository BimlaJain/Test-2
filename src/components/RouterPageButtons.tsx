import React from "react";
import { useRouter } from "next/navigation";

const RouterPageButton = () => {
  const router = useRouter();

  const handleRouteOne = () => {
    router.push('/question-one'); // Replace with your target route
  };

  const handleRouteTwo = () => {
    router.push('/question-two'); // Replace with your target route
  };

  return (
    <div>
      <h1>Welcome to the Test</h1>
      <div>
        {/* Buttons that route to dynamic parameters */}
        <button onClick={handleRouteOne}>Question-one</button>
        <button onClick={handleRouteTwo}>Question-two</button>
      </div>
    </div>
  );
};

export default RouterPageButton;