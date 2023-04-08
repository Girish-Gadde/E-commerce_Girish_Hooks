
import './App.css';
import RenderItems from './RenderItems';



function App() {

      return (
        <div className='Boss'>

              <div className='container'> 
          <div className="topnav">
                <h2>OmegaMart</h2>
            </div>
          <input type='search' placeholder="search for items" className="search"/>
               
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Items</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
      
       <RenderItems />

        </div>


      );
 
}
    

export default App;
