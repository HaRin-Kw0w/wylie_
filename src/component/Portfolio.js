import data from "../data";

function Portfolio(){
	let {portfolio, title}=data;

	return(
		<section id="portfolio">
			<div className="portfolio">
				<div className="title">
					<strong>{title.portfolio.strong}</strong>
					<p>{title.portfolio.p}</p>
				</div>
				<div className="content">
					<ul>
						{
							portfolio.map((d, i)=>
								<PortfolioList key={i} propsValue={d}/>
							)
						}
					</ul>
				</div>
			</div>
		</section>
	)
}
function PortfolioList(props){
	let {path, alt, desc}=props.propsValue;
	
	return(
		<li>
			<a href="">
				<div className="photo"><img src={`/images/${path}`} alt={alt}/></div>
				<div className="desc">
					<strong>{desc.strong}</strong>
					<p>{desc.p}</p>
				</div>
			</a>
		</li>
	)
}

export default Portfolio;