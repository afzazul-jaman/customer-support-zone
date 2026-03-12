import '../App.css'

function Ticketscard() {
  return (
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
  )
}

export default Ticketscard