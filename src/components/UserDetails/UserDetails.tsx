import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;
};

const UserDetails = () => {
  const [user, setUser] = useState<User>();
  const { userID } = useParams();

  const fetchUser = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users/${userID}");
      if (!res.ok) throw new Error("Cannot update!");

      const user = await res.json();
      setUser(user);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userID]);

  return user ? (
    <div>
      <h1>User Details - {userID}</h1>
      <p>
        {user.firstName} {user.lastName} {user.email} {user.age} {user.phone}{" "}
        {user.birthDate}
      </p>
      <div className="user-details">
        <form>
          <label htmlFor="firstName">
            First Name:
            <input type="text" id="first-name" value={user.firstName} />
          </label>
          <label htmlFor="lastName">
            First Name:
            <input type="text" id="last-name" value={user.lastName} />
          </label>
          <label htmlFor="email">
            First Name:
            <input type="text" id="email" value={user.email} />
          </label>
          <label htmlFor="age">
            First Name:
            <input type="text" id="age" value={user.age} />
          </label>
          <label htmlFor="phone">
            First Name:
            <input type="text" id="phone" value={user.phone} />
          </label>
          <label htmlFor="birthDate">
            First Name:
            <input type="text" id="birth-date" value={user.birthDate} />
          </label>
          <button type="submit">Edytuj</button>
        </form>
      </div>
    </div>
  ) : (
    <h1>nie znaleziono użytkownika</h1>
  );
};

export default UserDetails;
