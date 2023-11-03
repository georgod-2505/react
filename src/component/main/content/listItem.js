import ProductItem from "./productItem"
import "../../../styles/productItem.css"
function ListItem(props) {
    const data = props.data;
    // console.log(data)
    const listitem = data.map((item)=>{
        return (
       <ProductItem data={item}/>
        );
    });
    return(
        <div className="products">{listitem}</div>
    )
};

export default ListItem;
