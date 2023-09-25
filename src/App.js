import { Profile } from "./components/profile";

const fullName = {
  name: "nsihar",
  lastname: "multani",
};
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const s =kvArray.map(({ key, value, name }) => {
  return (
    <div>
      <h3>{value}</h3>
      <h3>{key}</h3>
    </div>
  );
})
console.log(s)
function App() {
  return (
    <>
      {fullName.name}
      <Profile name="nishar" lastname="ok" />
      <Profile lila="lila" name="amishas" />
      <Profile />
      <Profile></Profile>
      {  kvArray.map(({ key, value, name }) => {
        return (
          <div>
            <h3>{value}</h3>
            <h3>{key}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;
