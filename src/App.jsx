import './App.css';
// Import the Navbar component and the Outlet component from 'react-router-dom'
import Navbar from './components/Navbar';
import Navbar_b from './components/Navbar_b';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

// Define the main App component
function App() {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar_b />
      {/* Create the main content area */}
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Export the App component to make it available for other parts of the application
export default App;
