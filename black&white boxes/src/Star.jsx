export default function Star(props){
    const star=props.isFilled?"./images/start.png":"./images/empty-star.png";
    return (<img 
        src={star} 
        className="card--favorite"
        alt='#'
        onClick={props.click}
    />
  )
  
  }