import counterStore from "@/store/counterStore.ts";

export default function Demo() {

  const {counter, setCounter} = counterStore();

  return (
    <div>
      <button onClick={() => setCounter(10)}>加1</button>
      <p>{counter}</p>
    </div>
  );
}