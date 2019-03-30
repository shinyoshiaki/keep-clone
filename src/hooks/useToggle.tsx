import { useState } from "react";

export function useToggle(state: boolean): [boolean, () => void] {
  const [opend, setOpend] = useState(state);
  const toggle = () => {
    setOpend(prev => !prev);
  };
  return [opend, toggle];
}
