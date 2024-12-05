import Logo from "./Logo";
import Nav from"./Nav";
import data from "../data";

function Header(){
	return(
		<>
			<header id="header">
					<div className="inner">
						<Logo/>
						<Nav id="desktop"/>
						<Nav id="mobile"/>
						<a href="" className="tab">tab</a>
						<div className="dim"></div>
					</div>
			</header>
		</>
	)
}

export default Header;