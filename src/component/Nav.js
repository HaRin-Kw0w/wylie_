import data from "../data";

function Nav(props){
	
	let {id}=props;
	let {nav}=data;

	return(
		<nav id={id}>
			<ul>
				{
					nav.map((d, i)=>
						<li key={i}><a href={d.href}>{d.text}</a></li>
					)
				}
			</ul>
		</nav>
	)
}

export default Nav;