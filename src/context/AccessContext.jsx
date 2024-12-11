import { createContext, useContext, useState } from "react";

const AccessContext = createContext();

export function AccessProvider({ children }) {
    const [access, setAccess] = useState(false);
  
  return (
    <AccessContext.Provider value={{ access, setAccess }}>
      {children}
    </AccessContext.Provider>
  );
}

export function useAccess() {
  return useContext(AccessContext);
}
