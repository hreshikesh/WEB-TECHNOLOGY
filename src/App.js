
import "./App.css";
import LoginForm from "./components/form";
import Header from "./components/Header";
import Login from "./components/Login";
import NetworkStatus from "./components/network";
import UsersList from "./components/userlist";

function App() {
  return (
    <div className="container">
      <Header />
      <Login />
      <LoginForm />  
      <UsersList />
      <NetworkStatus />
    </div>
  );
}

export default App;
