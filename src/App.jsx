 import './App.css'

function App() {
    console.log("hello world");
  return (
    
    <> 
      <div className='nav-container'>
          <div>
              <h3 style={{ color:"130B2D" }}>CS — Ticket System</h3>
          </div>
          <div className='nav-content'>
             <ul>
                <li>Home</li>
                <li>FAQ</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
                
             </ul>
             <button>+ New Ticket</button>
          </div>
      </div>


      <div className='card-container'>
          <div className=' card in-progress'>
            <h4>In-Progress</h4>
             <p>0</p>
          </div>

          <div className='card Resolved'>
             <h4>Resolved</h4>
              <p>0</p>
          </div>
      </div>

    <div style={{marginLeft:'50px'}}>
  <h5 style={{ fontSize: "24px", marginLeft: "70px", marginTop: "80px" }}>
    Customer Tickets
  </h5>

  <div
    style={{
      width: "513px",
      marginLeft: "70px",
      backgroundColor: "#f8f9fb",
      borderRadius: "8px",
      padding: "15px",
      border: "1px solid #e5e5e5",
    }}
  >
    {/* Top Row */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h6 style={{ fontSize: "16px", margin: 0 }}>
        Login Issues - Can't Access Account
      </h6>

      <span
        style={{
          backgroundColor: "#d1f7dc",
          color: "#1a7f37",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        ● Open
      </span>
    </div>

    {/* Description */}
    <p
      style={{
        fontSize: "13px",
        color: "#666",
        marginTop: "8px",
      }}
    >
      Customer is unable to log in to their account. They've tried <br /> resetting
      their password multiple times but still...
    </p>

    {/* Bottom Row */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "12px",
        marginTop: "10px",
    
      }}
    >
      <div style={{
        display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "12px",
    marginTop: "10px",
    justifyContent: "space-between",
     width: "100%"

        }}>
           <div>
         <span>#1001</span>

      <span
        style={{
          color: "red",
          fontWeight: "bold",
          marginLeft:"10px"
        }}
      >
        HIGH PRIORITY
      </span>
      </div>
      
        <div>
          
      <span style={{marginRight:"10px"}}>John Smith</span>

      <span>📅 1/15/2024</span>
        </div>
      </div>
    </div>
  </div>
</div>



<footer
  style={{
    background: "#000",
    color: "#ccc",
    padding: "60px 80px",
    marginTop: "80px"
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }}
  >

    {/* Column 1 */}
    <div style={{maxWidth:"260px"}}>
      <h3 style={{color:"#fff"}}>CS — Ticket System</h3>

      <p style={{fontSize:"13px", lineHeight:"1.6"}}>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>

    {/* Column 2 */}
    <div>
      <h4 style={{color:"#fff"}}>Company</h4>
      <p>About Us</p>
      <p>Our Mission</p>
      <p>Contact Sales</p>
    </div>

    {/* Column 3 */}
    <div>
      <h4 style={{color:"#fff"}}>Services</h4>
      <p>Products & Services</p>
      <p>Customer Stories</p>
      <p>Download Apps</p>
    </div>

    {/* Column 4 */}
    <div>
      <h4 style={{color:"#fff"}}>Information</h4>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>Join Us</p>
    </div>

    {/* Column 5 */}
    <div>
      <h4 style={{color:"#fff"}}>Social Links</h4>
      <p>🌐 @CS — Ticket System</p>
      <p>📘 @CS — Ticket System</p>
      <p>📸 @CS — Ticket System</p>
      <p>✉ support@cst.com</p>
    </div>

  </div>

  {/* Bottom Line */}
  <div
    style={{
      borderTop: "1px solid #222",
      marginTop: "40px",
      paddingTop: "20px",
      textAlign: "center",
      fontSize: "13px"
    }}
  >
    © 2025 CS — Ticket System. All rights reserved.
  </div>
</footer>
    </>
  )
}

export default App
