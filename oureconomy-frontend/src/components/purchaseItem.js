function purchaseItem(props) {
  return (
    <div className="purchase-item">
        {props.desc} - {props.amount}
    </div>
    
  );
}

export default purchaseItem;
