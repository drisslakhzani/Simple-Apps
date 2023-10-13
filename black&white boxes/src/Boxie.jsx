function Boxie(prop){
    const cl=prop.isValue?"#222222":"white";
    const styles ={
      backgroundColor :cl
    }
    return (
    <div style={styles} className='box' key={prop.theId} onClick={()=>prop.isOn(prop.id)} ></div>
    )
  }
  export default Boxie