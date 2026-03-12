import '../App.css'
 
function Navbar(){
    return(
         <div className='nav-container'>
          <div>
              <h2 style={{ fontSize:'24px'}}>CS — Ticket System</h2>
          </div>
          <div className='nav-content'>
             <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Contact</a></li>
             </ul>
             <button>+ New Ticket</button>
          </div>
      </div>
    )

}
export default Navbar;



