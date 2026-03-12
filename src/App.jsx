import './App.css'
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
function App() {
    console.log("hello world");
  return (
    
    <> 
      <div className='nav-container'>
          <div>
              <h3 style={{ color:"130B2D" ,fontSize:'24px'}}>CS — Ticket System</h3>
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

      <div className='card-container'>
          <div className=' card in-progress'>
            <h4 style={{fontSize:'24px'}}>In-Progress</h4>
             <p  style={{fontSize:'60px'}}>0</p>
          </div>
          <div className='card Resolved'>
             <h4 style={{fontSize:'24px'}}>Resolved</h4>
              <p style={{fontSize:'60px'}}>0</p>
          </div>
      </div>

      <div className="ticket-layout">
        {/* LEFT SIDE */}
        <div className="ticket-left">
          <h5 className="ticket-heading">Customer Tickets</h5>

          <div className="ticket-grid">

            {/* CARD 1 */}
            <div className="ticket-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h6 style={{ fontSize: "16px", margin: 0 }}>Login Issues - Can't Access Account</h6>
                <span className="badge badge-open">● Open</span>
              </div>
              <p style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
                Customer is unable to log in to their account. They've tried resetting their password multiple times but still...
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginTop: "10px" }}>
                <div>
                  <span>#1001</span>
                  <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}>HIGH PRIORITY</span>
                </div>
                <div>
                  <span style={{ marginRight: "10px" }}>John Smith</span>
                  <span>📅 1/15/2024</span>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="ticket-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h6 style={{ fontSize: "16px", margin: 0 }}>Unable to Download Invoice</h6>
                <span className="badge badge-inprogress">● In-Progress</span>
              </div>
              <p style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
                Customer cannot download their January billing section. The download button is not working.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginTop: "10px" }}>
                <div>
                  <span>#1003</span>
                  <span style={{ color: "#f0ad4e", fontWeight: "bold", marginLeft: "10px" }}>MEDIUM PRIORITY</span>
                </div>
                <div>
                  <span style={{ marginRight: "10px" }}>Michael Brown</span>
                  <span>📅 1/17/2024</span>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="ticket-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h6 style={{ fontSize: "16px", margin: 0 }}>Payment Failed - Card Declined</h6>
                <span className="badge badge-open">● Open</span>
              </div>
              <p style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
                Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginTop: "10px" }}>
                <div>
                  <span>#1002</span>
                  <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}>HIGH PRIORITY</span>
                </div>
                <div>
                  <span style={{ marginRight: "10px" }}>Sarah Johnson</span>
                  <span>📅 1/16/2024</span>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="ticket-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h6 style={{ fontSize: "16px", margin: 0 }}>Incorrect Billing Address</h6>
                <span className="badge badge-open">● Open</span>
              </div>
              <p style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
                Customer's billing address shows a different city. They updated it but it still displays the old one.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginTop: "10px" }}>
                <div>
                  <span>#1004</span>
                  <span style={{ color: "#28a745", fontWeight: "bold", marginLeft: "10px" }}>LOW PRIORITY</span>
                </div>
                <div>
                  <span style={{ marginRight: "10px" }}>Emily Davis</span>
                  <span>📅 1/18/2024</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="ticket-right">
          <h5 style={{ fontSize: "20px" }}>Task Status</h5>

          <div className="task-card">
            <p style={{ margin: 0, fontSize: "14px" }}>Payment Failed - Card Declined</p>
            <button className="btn-complete">Complete</button>
          </div>

          <div className="task-card">
            <p style={{ margin: 0, fontSize: "14px" }}>Incorrect Billing Address</p>
            <button className="btn-complete">Complete</button>
          </div>

          <h5 style={{ marginTop: "20px", fontSize: "18px" }}>Resolved Task</h5>
          <p style={{ fontSize: "13px", color: "#777" }}>No resolved tasks yet.</p>
        </div>
      </div>

      <footer style={{ background: "#000", color: "#ccc", padding: "60px 80px", marginTop: "80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{maxWidth:"260px"}}>
            <h3 style={{color:"#fff"}}>CS — Ticket System</h3>
            <p style={{fontSize:"13px", lineHeight:"1.6"}}>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 style={{color:"#fff"}}>Company</h4>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Our Mission</a></p>
            <p><a href="#">Contact Sales</a></p>
          </div>
          <div>
            <h4 style={{color:"#fff"}}>Services</h4>
            <p><a href="#">Products & Services</a></p>
            <p><a href="#">Customer Stories</a></p>
            <p><a href="#">Download Apps</a></p>
          </div>
          <div>
            <h4 style={{color:"#fff"}}>Information</h4>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms & Conditions</a></p>
            <p><a href="#">Join Us</a></p>
          </div>
          <div>
           <h4 style={{color:"#fff"}}>Social Links</h4>

<a href="#" style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px", textDecoration:"none", color:"#ccc" }}>
  <span style={{ width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
    <Twitter size={16} color="#000" />
  </span>
  @CS — Ticket System
</a>

<a href="#" style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px", textDecoration:"none", color:"#ccc" }}>
  <span style={{ width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
    <Linkedin size={16} color="#000" />
  </span>
  @CS — Ticket System
</a>

<a href="#" style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px", textDecoration:"none", color:"#ccc" }}>
  <span style={{ width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
    <Facebook size={16} color="#000" />
  </span>
  @CS — Ticket System
</a>

<a href="mailto:support@cst.com" style={{ display:"flex", alignItems:"center", gap:"10px", textDecoration:"none", color:"#ccc" }}>
  <span style={{ width:"20px", height:"20px", borderRadius:"50%", backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
    <Mail size={16} color="#000" />
  </span>
  support@cst.com
</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #222", marginTop: "40px", paddingTop: "20px", textAlign: "center", fontSize: "13px" }}>
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App