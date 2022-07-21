import Header from "./components/Header";
import MaintenanceList from "./components/MaintenanceCard";
import AddMaintenance from "./components/AddMaintenance";


function App() {
  return (
    <div className="App">
        <Header />
        <MaintenanceList />
        <AddMaintenance />
    </div>
  )
}

export default App;
