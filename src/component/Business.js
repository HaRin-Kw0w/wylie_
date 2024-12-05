import data from "../data";

function Business(){
	let {business, title}=data;

	return(
		<section id="business">
			<div className="business">
				<div className="title">
					<strong>{title.business.strong}</strong>
					<p>{title.business.p}</p>
				</div>
				
				<div className="content">
					<ul>
						{
							business.map((d, i) =>
								<BusinessList key={i} propsValue={d}/>
							)
						}
					</ul>	
				</div>
			</div>
		</section>
	)
}

function BusinessList(props){
	let{path, alt, desc}=props.propsValue;

	return(
		<li>
			<img src={`/images/${path}`} alt={alt}/>
			<div className="desc">
				<strong>{desc.strong}</strong>
				{
					desc.p.map((d, i)=>
						<p key={i}>{d}</p>
					)
				}
			</div>
		</li>
	)
}
export default Business;