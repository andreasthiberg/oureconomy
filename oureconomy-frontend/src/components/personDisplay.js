import '../css/purchases-page.css';
import PurchaseItemList from './purchaseItemList';

function PersonDisplay(props) {
  return (
    <div className="person-display">
        <div className="person-header">
          <p className="person-name">
            {props.name}
          </p>
        </div>
        <PurchaseItemList/>
    </div>
    
  );
}

export default PersonDisplay;
