

import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import '../App.css'
 
function Footer(){
    return(
        <>
         
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

export default Footer;