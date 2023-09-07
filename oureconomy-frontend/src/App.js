import './css/app.css';
import PageContainer from './components/pageContainer';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="page-title">
          our <span className="page-title-coloring">economy</span>
        </p>
      </header>
      <PageContainer/>
    </div>
    
  );
}

export default App;
