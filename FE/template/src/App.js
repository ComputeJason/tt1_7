import logo from "./logo.svg";
import "./css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Minipostman } from "./components/minipostman/Minipostman";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<div className="App">
							<header className="App-header">
								<img src={logo} className="App-logo" alt="logo" />
								<p>
									Edit <code>src/App.js</code> and save to reload.
								</p>
								<a
									className="App-link"
									href="https://reactjs.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn React
								</a>
							</header>
						</div>
					}
				/>

				<Route path="minipostman" element={<Minipostman />} />
			</Routes>
		</Router>
	);
}

export default App;
