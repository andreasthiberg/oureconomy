import PersonDisplay from "./personDisplay";

function PurchasesPage() {
  return (
    <div className="purchases-page">
      <h1>Purchases page</h1>
      <PersonDisplay name="Andreas" />
      <PersonDisplay name="Erik"/>
    </div>
    
  );
}

export default PurchasesPage;
