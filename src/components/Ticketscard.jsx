import { use, useState } from 'react'
import '../App.css'
import Progress from './Progress'

function Ticketscard({ userPromise }) {
  const userPromiseData = use(userPromise)
  const [resolvedTasks, setResolvedTasks] = useState([])

  const handleComplete = (ticket) => {
    setResolvedTasks(prev => [...prev, ticket])
  }

  const inProgressCount = userPromiseData.filter(
    t => !resolvedTasks.find(r => r.ticket_id === t.ticket_id)
  ).length

  const resolvedCount = resolvedTasks.length

  return (
    <>
      <Progress inProgress={inProgressCount} resolved={resolvedCount} />

      <div className="ticket-layout">

        {/* LEFT SIDE */}
        <div className="ticket-left">
          <h5 className="ticket-heading">Customer Tickets</h5>
          <div className="ticket-grid">
            {userPromiseData.map((tickets) => (
              <div key={tickets.ticket_id} className="ticket-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h6 style={{ fontSize: "16px", margin: 0 }}>{tickets.title}</h6>
                  <span className={`badge ${tickets.status === "Open" ? "badge-open" : "badge-inprogress"}`}>
  ● {tickets.status}
</span>
                </div>
                <p style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
                  {tickets.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginTop: "10px" }}>
                  <div>
                    <span>{tickets.ticket_id}</span>
                    <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}>{tickets.priority}</span>
                  </div>
                  <div>
                    <span style={{ marginRight: "10px" }}>{tickets.customer_name}</span>
                    <span>📅 {tickets.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="ticket-right">
          <h5 style={{ fontSize: "20px" }}>Task Status</h5>

          {userPromiseData
            .filter(t => !resolvedTasks.find(r => r.ticket_id === t.ticket_id))
            .map((tickets) => (
              <div key={tickets.ticket_id} className="task-card">
                <p style={{ margin: 0, fontSize: "14px" }}>{tickets.title}</p>
                <button onClick={() => handleComplete(tickets)} className="btn-complete">Complete</button>
              </div>
            ))
          }

          <h5 style={{ marginTop: "20px", fontSize: "18px" }}>Resolved Task</h5>
          {resolvedTasks.length === 0
            ? <p style={{ fontSize: "13px", color: "#777" }}>No resolved tasks yet.</p>
            : resolvedTasks.map((task) => (
                <div key={task.ticket_id} style={{
                  background: "#d4defa",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  fontSize: "14px",
                  marginBottom: "8px"
                }}>
                  {task.title}
                </div>
              ))
          }
        </div>

      </div>
    </>
  )
}

export default Ticketscard