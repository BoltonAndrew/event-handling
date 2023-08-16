import { useState } from "react";
import styles from "../App.module.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({});

  function handlerMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handlerPlus() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  function submitHandler(event) {
    event.preventDefault();
    setUser({ ...user, username, email, pass });
  }

  return (
    <>
      <section className={styles.counter}>
        <button onClick={handlerMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlerPlus}>+</button>
      </section>
      <button onClick={reset}>Reset</button>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(event) => setPass(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <section>
        <p>{username}</p>
        <p>{email}</p>
        <p>{pass}</p>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
        <h2>{user.pass}</h2>
      </section>
    </>
  );
}

export default Counter;
