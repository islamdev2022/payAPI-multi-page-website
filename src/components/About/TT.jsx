const TT = ({title,text}) => {

    const container={
        width:"fit-content",
        display:"flex",
        gap:"40px",
        position:"relative",
        left:"225px"
    }
    const Ti ={
        width:"300Px",
        color:"#36526a",
        fontFamily:"'DM Serif Display-Regular',Helvetica",
    }
    const Te={
        height:"100Px",
        width:"590px",
        color:"#36526a",
        fontFamily:"'DM Serif Display-Regular',Helvetica",
        opacity:"0.8",
        lineHeight:"24px",
        fontSize:"15px"
    
    }
    return ( 
    <div style={container} className="container">
    <h2 style={Ti} >{title}</h2>
    <p style={Te}>{text}</p>
    </div> );
}
 
export default TT;