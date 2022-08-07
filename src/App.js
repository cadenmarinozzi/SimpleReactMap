import SimpleReactMap from "./lib/SimpleReactMap";
import "./App.css";

function App() {
	return <SimpleReactMap className="map" query="Washington DC" zoom={10} />;
}

export default App;
