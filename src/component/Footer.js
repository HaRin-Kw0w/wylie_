import data from "../data";

function Footer(props){
	let {footer}=data;

	return(
		<footer id="footer">
			<div className="footer_inner">
				<a href="" className="btn_top"><i className="fa fa-angle-up"></i></a>
				<div className="address">
					{
						footer.address.map((d, i)=>
							<span key={i}>{d}</span>
						)
					}
				</div>	
				<div className="sns">
					<ul>
						{
							footer.icon.map((d,i)=>
								<li key={i}><a href=""><i className={d}></i></a></li>
							)
						}
					</ul>
				</div>
			</div>	
		</footer>
	)
}
export default Footer;