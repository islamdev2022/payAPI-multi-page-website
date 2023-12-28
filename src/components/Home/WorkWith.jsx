const WorkWith = () => {

    const circle={
        position:"absolute",
        bottom:"20px",
        left:"-120px",
        zIndex:"2"
    }
    const container={
        
        position:"relative",
        bottom:"-630px",
        height:"380px",
        width:"100%",
        zIndex:"2",
        backgroundColor:"#1B262F"
    }
    const p={
        fontFamily:"'Public Sans-Regular',Helvetica",
        lineSpacing:'0',
        fontSize:"13px",
        
        lineHeight:"28px",
height:"100px",
width:"410px",
position:"relative",
left:"150px",
top:"120px",
color:"#fafcfd",
opacity: "0.7",
fontSize:"15px"
    }
    const he={
color:"#fafcfd",
fontFamily:"'DM Serif Display-Regular',Helvetica",
fontSize:"40px",
position:"absolute",
top:"-10px",
    }
    const button={
        backgroundColor:'#ffffff',
        color:'black',
        fontWeight:"600",
        border: "1px solid",
borderColor:" #fafcfd",
borderRadius: "24px",
height: "45px",width: "110px",
left: "150px",
position: "absolute",
top: "280px",
cursor:"pointer"
    }
    const logos={
        float:"right",
        position:"relative",
        right:"80px",
        
       
    }
    const logosTop={
        marginBottom:"40px",
        display:"flex",
        gap:"40px"
    }
    const logosBottom={
        display:"flex",
        gap:"40px",
        marginLeft:"10px"
    }
    return (
    <div style={container}>
   <img style={circle} src="/assets/shared/desktop/bg-pattern-circle.svg" alt="circle" width={600} />
   <div><h1 style={he}>Who we work with</h1>
   <p style={p}>Today, millions of people around the world have successfully connected
     their accounts to apps they love using our API. We provide developers with the 
     tools they need to create easy and accessible experiences for their users. 
    </p>
    <button style={button}>About Us</button>
    </div>
    <div style={logos}>
        <div style={logosTop}>
        <img src="/assets/shared/desktop/tesla.svg" alt="tesla"/>
        <img src="/assets/shared/desktop/microsoft.svg" alt="microsoft" />
        <img src="/assets/shared/desktop/hewlett-packard.svg" alt="hp" />
        </div>
        <div style={logosBottom}>
        <img src="/assets/shared/desktop/oracle.svg" alt="oracle" />
        <img src="/assets/shared/desktop/google.svg" alt="google" width={120} />
        <img src="/assets/shared/desktop/nvidia.svg" alt="nvidia" />
        </div>

    </div>
   
    </div>  );
}
 
export default WorkWith;