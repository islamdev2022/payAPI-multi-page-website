const TN = ({title,number}) => {
    const container={
        position:"relative",
        left:"40px",
        width:"100%"
    }
    const Ti ={
        width:"100%",
        color:"#36526a",
        fontFamily:"'DM Serif Display-Regular',Helvetica",
        opacity:"0.8",
        lineHeight:"24px",
        fontSize:"15px"

    }
    const Nu={
        fontFamily:"'DM Serif Display-Regular',Helvetica",
        color: "#ba416f",
        fontSize:"45px",
        fontWeight:'500'
    }
    const rec={
        backgroundColor: "#36526a",
  height: "2px",
  left: "-1px",
  opacity: "0.25",
  position: "absolute",
  top: "152px",
  width: "330px",
    }
    const recc={
        backgroundColor: "#36526a",
  height: "2px",
  left: "-1px",
  opacity: "0.25",
  position: "absolute",
  top: "2px",
  width: "330px",
    }
    return ( 
    <div style={container}>
         <div style={rec} className="rectangle-copy" />
         <p style={Ti}>{title}</p>
         <p style={Nu}>{number}</p>
         <div style={recc} className="rectangle-copy" />
    </div> );
}
 
export default TN;