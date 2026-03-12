import '../App.css'

function Progress({ inProgress, resolved }) {
  return (
    <div>
      <div className='card-container'>
        <div className='card in-progress'>
          <h4 style={{ fontSize: '24px' }}>In-Progress</h4>
          <p style={{ fontSize: '60px' }}>{inProgress}</p>
        </div>
        <div className='card Resolved'>
          <h4 style={{ fontSize: '24px' }}>Resolved</h4>
          <p style={{ fontSize: '60px' }}>{resolved}</p>
        </div>
      </div>
    </div>
  )
}

export default Progress