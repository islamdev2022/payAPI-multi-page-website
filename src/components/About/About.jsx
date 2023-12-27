import TT from "./TT";
import Footer from "../Footer";
const About = () => {
    const H={
        height:"189px",
        width:"500Px",
        color:"#36526a",
        fontFamily:"'DM Serif Display-Regular',Helvetica",
        fontWeight:"600",
        fontSize:"40px",
        letterSpacing:"-0.43px",
        lineHeight:"50px",
        position:"relative",
        left:"225px",
        marginTop:"80px"
    }
    return ( 
    <div >
        <h1 style={H}>We empower innovators by delivering access to the financial system </h1>
        <TT title="Our Vision" text="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The
        result is an intelligent tool that gives everyone the ability to create amazing products that solve big
        problems. We are deeply focused on democratizing financial services through technology."></TT>
        <TT title ="Our Business" text="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product
        provides key insights for businesses and individuals, as well as robust reporting for traditional financial
        institutions and developers."></TT>
        <img src="/assets/about/desktop/image-team-members.jpg" alt="" width={"100%"}/>
        <TT title="The Culture" text="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work,
        whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team
        collaboration and diversity of thought, no matter the job title."></TT>
        <TT title="The People" text="We're all passionate about building a more efficient and inclusive financial infrastructure together. 
        At payAPI, we have diverse background and skills."></TT>
    
    <Footer></Footer>
    </div> );
}
 
export default About;