import data from "../data";

function Awards(){
	let {awards, title}=data;

	return(
			<section id="awards">
				<div className="awards">
					<div className="title">
						<strong>{title.awards.strong}</strong>
						<p>{title.awards.p}</p>
					</div>
					<div className="content">
						<ul>
							{
								awards.map((d, i)=>
									<AwardsList key={i} propsValue={d}/>
								)
							}
						</ul>	
					</div>
				</div>
			</section>
	)
}

function AwardsList(props){
	let {path, alt, desc}=props.propsValue;

	return(
		<li>
			<img src={`/images/${path}`} alt={alt}/>
			<div className="award">
				<span>{desc.span}</span>
				{
					desc.p.map((d, i)=>
						<p key={i}>{d}</p>
					)
				}
			</div>
		</li>
	)

}

export default Awards;