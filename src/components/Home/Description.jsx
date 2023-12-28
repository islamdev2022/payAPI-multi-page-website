import Card from "./card"
const Description = () => {
    const img={
        position:"absolute",
        left:"80px"
    }
  
    const des={
    color:"#36526a",
    fontSize:"15px",
    fontFamily:"'Public Sans-Regular', Helvetica",
    lineHeight:"25px",
    opacity:'0.7',
    height: "84px",
width: "450px",
position:'absolute',

    }
    const tl={
        color:"#36536B",
    padding:"0",
        fontSize:"45px",
        position:"relative",
        width:"370px",
        top:"30px"
    }
    const right ={
        position:"absolute",
        right:"200px",
    }
    const second={
        position:'absolute',
        top:'450px',
        left:"130px",
        display:"flex",
        gap:'400px'
    }
    const ui={
        position:"relative",
        bottom: "100px",
        left:"-200px"

    }
    const cards={
        display:"flex",
        position:'relative',
        top:"900Px",
        
    }
    const DescCo={
        
    }
    
    return ( <div style={DescCo}>
        <img style={img} src="/assets/home/desktop/illustration-easy-to-implement.svg" alt="img" />
        <div style={right}>
            <h1 style={tl}>Easy to implement</h1>
            <p style={des}>Our API comes with just a few lines of code.
             You’ll be up and running in no time. We built our 
             documentation page to handle payments functionality with ease.</p>
        </div>

        <div style={second}>
            <div>
                 <h1 style={tl}>Simple UI & UX </h1>
            <p style={des}>Our pre-built form is easy to integrate in your app or
             website’s checkout flow and designed to optimize conversion. </p>
            </div>
            <div>
                <img style={ui} src="/assets/home/desktop/illustration-simple-ui.svg" alt="simpleUI" width={600}/>
            </div>
        </div>
        <div style={cards}>
        <Card image="/assets/home/desktop/icon-personal-finances.svg" title="Personal Finances" text="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "></Card>
        <Card image="/assets/home/desktop/icon-banking-and-coverage.svg" title="Banking and Coverage" text="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."></Card>
        <Card image="/assets/home/desktop/icon-consumer-payments.svg" title="Consumer Payments" text="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."></Card>
        </div>
    </div> );
}
 
export default Description;