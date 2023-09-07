import './css/app.css';
import PurchasesPage from './components/purchasesPage';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="page-title">
          our <span className="page-title-coloring">economy</span>
        </p>
      </header>
      <PurchasesPage/>
    </div>
    
  );
}

export default App;
