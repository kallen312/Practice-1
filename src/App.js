import "./styles.css";
// The App.js file contains two components: <App /> and <Question />.
//Your task is to modify what <App /> renders.
//It should render a <Question /> component which asks "How are you, [person's name]"and pass your name as a prop

export default function App() {
  return (
    <div className="App">
      <Question name="Keturah" />
    </div>
  );
}
function Question(props) {
  return <p>How are you {props.name} ?</p>;
}
