import React, { createContext, useContext, useState } from "react";

// Step 1: Create a Context
const UserContext = createContext();

function ETPHooksUseContext1() {
  const [user, setUser] = useState({
    name: "John",
    age: 25,
  });

  return (
    <div>
      {/* Step 2: Provide context value using Context.Provider */}
      <UserContext.Provider value={user}>
        <h1>useContext Hook Example</h1>
        <UserProfile />
        <UpdateButton setUser={setUser} />
      </UserContext.Provider>
    </div>
  );
}

// Step 3: Use useContext to access the context value
function UserProfile() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

function UpdateButton({ setUser }) {
  return (
    <button
      onClick={() =>
        setUser({
          name: "Johanna",
          age: 23,
        })
      }
    >
      Update User
    </button>
  );
}

export default ETPHooksUseContext1;
