import data from "../data";
function Culture(){
	let {culture, title}=data;

	return(
		<section id="culture">
			<div className="culture">
				<div className="title">
					{/* <strong>culture</strong>
					<p>매년 새롭게 구성되는 Club Wylie는 다양한 직군의 멤버들이 조를 이루어<br/>한 해 동안 허락된 땡땡이를 즐기며 팀워크를 다집니다.</p> */}
					<strong>{title.culture.strong}</strong>
					<p>{title.culture.p}</p>
				</div>
				<div className="content">
					<ul>
						{
							culture.map((d, i)=>
								<CultureList key={i} propsValue={d}/> 
							)	
						}
					</ul>
				</div>
			</div>
		</section>
	)
}

function CultureList(props){
	let {path, alt, desc}=props.propsValue;

	return(
		<li>
			<a href=""><img src={`/images/${path}`} alt={alt}/></a>
			<div className="popup">
					{
						desc.strong.map((d,i)=>
							<strong key={i}>{d}</strong>
						)
					}
					{
						desc.p.map((d, i)=>
						<p key={i}>{d}</p>
					)
					}
			</div>
		</li>
	)
}

export default Culture;