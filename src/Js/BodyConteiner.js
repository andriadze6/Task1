import HeaderLogo from '../Img/rest.png';
import '../css/bodyConteiner.css';
import img1 from '../Img/Img1.png';
import img2 from '../Img/shoes.png';
import img3 from '../Img/bag.png';
function ProductDiv(props){
    return(
        <div>
            <div className='Product-Img-Div'>
                <img className="Img-ToSee" src={props.img} />
            </div>
            <div className="product_content">
                <div className="product_content-header">
                    <h4 className="product_name">{props.title}</h4>
                    <div className="product_price_rating">
                        <div className="price_box">
                            <span className="price">{props.price}</span>
                            <span className="currency">{props.currency}</span>
                        </div>
                    </div>
                </div>
                <AddToCardButton/>
            </div>
        </div>
        // <img className="bodyImg" src={HeaderLogo}></img>
    )
}
function AddToCardButton(){
    return(
        <div>
            <button>Add To Card</button>
        </div>
    )
}
function BodyConteiner(){
    return(            
        <div className='prductDiv'>
            <ProductDiv img = {img1} title="Jordan Essentials" price = '100' currency='$'/>
            <ProductDiv img = {img2} title="Nike Dunk Low Retro SE" price = '50' currency='$' />
            <ProductDiv img = {img3} title="Nike Academy Team" price = '40' currency='$' />
        </div>
    )   
}
export default BodyConteiner