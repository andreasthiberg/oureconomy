import PurchaseItem from "./purchaseItem";

function purchaseItemList() {
    return (
      <div className="purchase-item-list">
        <PurchaseItem desc="ICA" amount="777"/>
        <PurchaseItem desc="Elräkning" amount="123"/>
      </div>
      
    );
  }
  
  export default purchaseItemList;
  