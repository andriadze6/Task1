import './Header.css';
import HeaderLogo from './Img/HeaderLogo.png'
function Header() {
  return (
    <div className='header'>
        <div className='header1-conteiner'>
            <div className='header1'>
                <button className="header1-Buttons" type="button">For Businesses</button>
                <button className="header1-Buttons" type="button">Get help</button>
                <button className="header1-Buttons" type="button">FAQs</button>
            </div>
        </div>
        <div className='header2-conteiner'>
            <div className='logo-header'>
                <img src={HeaderLogo}></img>
                <h3>Book You Table</h3>
            </div>
            <div className='search-Box-Div'>
                <div className='search-Box'>
                    <span>
                        <svg className='search-Icon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.93 14.828a7 7 0 1 1 10.556-.757l3.939 3.94a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0l-3.94-3.94a7.002 7.002 0 0 1-9.142-.657Zm1.413-8.485a5 5 0 1 0 7.071 7.071 5 5 0 0 0-7.07-7.07Z" fill="#2D333F"></path></svg>
                    </span>
                    <input className='input-searchBox'/>
                </div>
            </div>
            <button className='sign-button'>Sign</button>
        </div>
    </div>
  );
}

export default Header;