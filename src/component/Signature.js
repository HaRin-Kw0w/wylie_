import data from "../data";

function Signature(){
	let {signature}=data;

	return(
		<section id="signature">
			<div className="signature_inner">
				<ul>
					{/* <li><a href=""><img src="/images/signature1.jpg" alt=""/></a></li>
					<li><a href=""><img src="/images/signature2.jpg" alt=""/></a></li>
					<li><a href=""><img src="/images/signature3.jpg" alt=""/></a></li>
					<li><a href=""><img src="/images/signature4.jpg" alt=""/></a></li>
					<li><a href=""><img src="/images/signature5.jpg" alt=""/></a></li>
					<li><a href=""><img src="/images/signature6.jpg" alt=""/></a></li>
					<li><a href=""><img src="/images/signature7.jpg" alt=""/></a></li> */}
					{
						signature.map((d,i)=>
							<li key={i}><a href=""><img src={`/images/${d.path}`} alt={d.alt}/></a></li>
						)
					}
				</ul>
			</div>	
		</section>
	)
}

export default Signature;