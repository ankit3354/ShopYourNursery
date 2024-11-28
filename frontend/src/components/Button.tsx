import React, { useState } from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {label} - Clicked {count} times
      </button>
    </div>
  );
};

export default Button;
