import Business from "./Business.js";
import Portfolio from "./Portfolio.js";
import Culture from "./Culture.js";
import Awards from "./Awards.js";
import Signature from "./Signature.js";
import Contact from "./Contact.js"

function Section(){
	return(
		<>
			<Business/>
			<Portfolio/>
			<Culture/>
			<Awards/>
			<Signature/>
			<Contact/>
		</>
	)
}

export default Section;