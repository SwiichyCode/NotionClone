import { useEffect, useState } from "react";

// Todo complete this type

type User = {
  username: string;
};

export const useUser = (): [User | null, (user: User) => void] => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return [user, setUser];
};
