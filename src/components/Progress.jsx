import '../App.css'
 
 function Progress(){
    return(
       <>
           <div>
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
</div>
       </>
 
    )
}

export default Progress;