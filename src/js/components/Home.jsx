import React, {useState} from "react";


//create your first component
const Home = () => {

const [red, setRed] = useState("on")
const [yellow, setYellow] = useState("off")
const [green, setGreen] = useState("off")


const glowRed = ()=>{
	setRed("on");
	setYellow("off");
	setGreen("off");
}
const glowYellow = ()=>{
	setYellow("on");
	setRed("off");
	setGreen("off");
}
const glowGreen = ()=>{
	setGreen("on");
	setYellow("off");
	setRed("off");
}

return (
		<div>
			<div 
				// onClick={()=> {
				// 	// function...
				// }} 
			>
			</div>

			<div className={`text-center bg-danger-subtle ${red == "on" ? "border border-5 border-danger" : "border border-body" }`} onClick={glowRed} > red light </div><br />
			<div className={`text-center bg-warning-subtle ${yellow == "on" ? "border border-5 border-warning" : "border border-info" }`} onClick={glowYellow} > yellow light</div><br />
			<div className={`text-center bg-success-subtle ${green == "on" ? "border border-5 border-success" : "border border-info" }`} onClick={glowGreen} > green light</div>
		</div>
	);
};

export default Home;