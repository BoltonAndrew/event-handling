import { useState } from "react";
import styles from "./App.module.css";
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [name, setName] = useState("Andy");

  function nameHandler() {
    setName("Steve");
  }

  return (
    <div className={styles.App}>
      <header>
        <h1>Handling Events</h1>
        <h2>Let's look at "on~" attributes</h2>
      </header>
      <main className={styles["App-main"]}>
        <h2>{name}</h2>
        <Button label="Change name to Steve" clickHandler={nameHandler} />
        <Counter />
      </main>
      <footer className={styles["App-footer"]}>
        <h3>Created By Andy Bolton</h3>
      </footer>
    </div>
  );
}

export default App;
