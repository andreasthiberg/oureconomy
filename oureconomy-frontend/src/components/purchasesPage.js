import PersonDisplay from "./personDisplay";

function PurchasesPage() {
  return (
    <div className="purchases-page">
      Purchases page
      <PersonDisplay name="Andreas" />
      <PersonDisplay name="Erik"/>
    </div>
    
  );
}

export default PurchasesPage;
