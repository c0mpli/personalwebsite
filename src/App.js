import { Route, Routes } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";

function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		document.title = "Jash Doshi | Personal Website";
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);
	return loading ? (
		<Splash />
	) : (
		<Routes>
			<Route path="/personalwebsite" element={<Landing />} />

			<Route path="/personalwebsite/about" element={<About />} />
		</Routes>
	);
}

export default App;
