import Counter from '../../untils/counter'
import './style.css'

function Products(props) {
  return (
    <div className="container">
      <div className="products">
        <img src="https://i.pinimg.com/236x/e2/af/55/e2af554f76c64e9223a076709b08ac48.jpg" />
        <div className="name">{props.name}</div>
        <div className="infomation"> {props.infomation}</div>
        <div className="price"> {props.price}</div>
        <Counter />
      </div>
    </div>
  )
}

export default Products
