const StartB = () => {
    const header={
         width: "500px",
        color: "#36526a",
fontFamily: "'DM Serif Display-Regular', Helvetica",
fontSize: "64px",
fontWeight: "500",
lineHeight: "70px",
position: "absolute",

top:"140px"
    }
    const left={
        position: "absolute",
        left: "150px",
        top: "460px",
        height: "35px",
         borderRadius: "24px",
         boxShadow: "0px 0px 50px 10px #36526a40"
         
               }
       const input ={
        width: "180px",
        padding: "5px",
        borderRadius: "24px",
        border: "none",
        backgroundColor: "white"
       }
       const button= {
        cursor: "pointer",
            borderRadius: "24px",
    backgroundColor: "#ba416f",
    color: "white",
    border: "none",
    width: "135px",
    height: "35px"
       }
       const con={
        width:"325px",
        height:"100vh",
       }
       const p={
        color: "#36526a",
fontFamily: "'Public Sans-Regular', Helvetica",
fontSize: "12px",
fontWeight: "500",
left: "10px",
lineHeight: "normal",
opacity: "0.7",
position: "absolute"
       }
       const span={
        fontWeight: "700",
textDecoration:"underline"
       }
       const phone={
      position:"absolute",
      right:"120px"
       }

    return ( <div style={con}>
    <h1 style={header}>Start building with our APIs for absolutely free.</h1>
    <div style={left}>
            <input style={input} type="email" />
            <button style={button}>Schedule a Demo</button>
            <p style={p}>Have any Question ? <span style={span}>Contact Us</span></p>
        </div>
    <div className="right">
        <img alt="phone" src="/assets/home/desktop/illustration-phone-mockup.svg" width={370} style={phone}></img>
    </div>
    </div> );
}
 
export default StartB;