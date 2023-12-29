import StartB from "./StartB";
import WorkWith from "./WorkWith";
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