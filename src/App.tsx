import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

function App() {
	return (
		<div id="App" className="App">
			<div id="container">
				<Header />
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
