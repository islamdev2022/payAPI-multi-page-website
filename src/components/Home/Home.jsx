import StartB from "./StartB";
import WorkWith from "./WorkWith";
import Footer from "../Footer";
import Description from "./Description";

const Home = () => {
    const div={
    
    height:"200vh"
}

    return ( <>
    <StartB></StartB>
    <WorkWith></WorkWith>
    <div style={div}> <Description></Description></div>
    
   
    </> );
}
 
export default Home;