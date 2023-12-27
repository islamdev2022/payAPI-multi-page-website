const Card = ({ image, title, text }) => {
const card={
  display:"table",
marginLeft:"auto",
marginRight:"auto"
}
  const pic={
    display:"table",
    marginLeft:"auto",
    marginRight:"auto"
}
const tit={
  display:"flex",
  alignItems:'center',
  justifyContent:"center"
}
const cardText={
  color:"#36536B",
  opacity:'0.7',
  width:'323px',
  letterSpacing: "-0.12px",
lineHeight: "25px",
textAlign:'center'

}
    return ( <div style={card}>
    <img style={pic} src={image} alt={title} className="card-image" />
    <h3 style={tit}>{title}</h3>
    <p style={cardText}>{text}</p>
  </div> );
}
 
export default Card;