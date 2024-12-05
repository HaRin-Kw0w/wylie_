import Awards from "./component/Awards";

const data={
	nav: [
		{ href: "#header", text: "HOME" },
		{ href: "#business", text: "BUSINESS" },
		{ href: "#portfolio", text: "PORTFOLIO" },
		{ href: "#culture", text: "CULTURE" },
		{ href: "#awards", text: "AWARDS" },
		{ href: "#contact", text: "CONTACT" }
	],
	title:{
		business: {
			strong:"business",
			p:"고객사의 니즈에 최적화된 디지털 통합 마케팅 솔루션을 제공합니다."
		},
		portfolio: {
			strong:"portfolio",
			p:"고객사와 하나 된 울림이 만들어 낸 행복한 성과입니다."
		},
		culture:{
			strong :"culture",
			p: "매년 새롭게 구성되는 Club Wylie는 다양한 직군의 멤버들이 조를 이루어 한 해 동안 허락된 땡땡이를 즐기며 팀워크를 다집니다."
		},
		contact: {
			strong:"contact",
			p:"다양한 경험과 노하우로 성공을 설계합니다."
		},
		awards: {
			strong:"awards",
			p:"주요 Award의 다양한 수상 실적을 통해 전문성과 크리에이티브를 검증받았습니다."
		},

	},
	business:[
		{ 
			path: "icon_business1.jpg",
			alt: "icon_business1",
			desc: {
				strong: "Platform Creation",
				p: ["웹/앱 플랫폼 디자인","뉴미디어 플랫폼 디자인","웹/모바일 퍼블리싱","jsp / asp / php / .net 개발","iOS / Android개발","클라우드 세팅 / 운영"]
			}
		},
		{ 
			path: "icon_business2.jpg",
			alt: "icon_business2",
			desc: {
				strong: "Marketion COMM.",
				p: ["마케팅 전략 컨설팅","광고 캠페인 기획 운영","온, 오프 프로모션 기획 운영","바이럴, SNS 기획 운영","마케팅 KPI 관리"]
			}
		},
		{ 
			path: "icon_business3.jpg",
			alt: "icon_business3",
			desc: {
				strong: "Maintenance",
				p: ["플랫폼 활성화 기획","프로모션, 배너 디자인","호스팅 개발 운영","모니터링, 로그분석, 리포팅","고객 CS 관리"]
			}
		}
	],
	portfolio:[
		{
			path: "portfolio1.jpg",
			alt: "portfolio1",
			desc:{
				strong:"한화 리조트",
				p: "영업용 템플릿 온라인 플랫폼 구축"
			}
		},
		{
			path: "portfolio2.jpg",
			alt: "portfolio2",
			desc:{
				strong:"ABOUT ME 쇼핑몰",
				p: "리뉴얼 제작"
			}
		},
		{
			path: "portfolio3.jpg",
			alt: "portfolio3",
			desc:{
				strong:"CJ BYO유산균",
				p: "2016 디지털 캠페인"
			}
		},
		{
			path: "portfolio4.jpg",
			alt: "portfolio4",
			desc:{
				strong:"대구은행",
				p: "비대면채널 전략 및 UXUI컨설팅"
			}
		},
		{
			path: "portfolio5.jpg",
			alt: "portfolio5",
			desc:{
				strong:"대유위니아",
				p: "서비스 온라인 플랫폼 구축"
			}
		},
		{
			path: "portfolio6.jpg",
			alt: "portfolio6",
			desc:{
				strong:"쥬비스 다이어트",
				p: "APP 3.0 리뉴얼 구축"
			}
		}
	],	
	culture:[
		{
			path: "culture1.jpg",
			alt: "culture1",
			desc:{
				strong:["PLAY - Wyile Club","조조 영화, 맛집 탐방, 1박 2일"],
				p: ["'잘 노는 것도 능력'이라는 모토 아래",
					"조조영화를 보고, 맛집을 찾고, 나들이를 떠나며,", 
					"잘 놀기만 하면 연말 해외여행 포상까지 기다리고 있는", 
					"와일리만의 Friendship Activity입니다."]
			}
		},
		{
			path: "culture2.jpg",
			alt: "culture2",
			desc:{
				strong:["PLAY - WYLIE Refresh","한 달에 한 번 여유로운 시간"],
				p: ["매월 첫 번째 금요일은 여유롭습니다.",
					"점심시간 이후 오후 1시 부터 2시까지 각 팀별/그룹별 간", 
					"리프레쉬 시간을 함께 하며 사무실을 벗어나", 
					"생기를 되찾습니다."]
			}
		},
		{
			path: "culture3.jpg",
			alt: "culture3",
			desc:{
				strong:["EAT - Wyile Kitchen", "집밥을 함께 하고픈 마음"],
				p: ["매일 점심, 모두 모여 함께 식사를 합니다.",
					"바쁜 업무 속에서 식사만큼은 꼭 제대로 된 ‘집밥’을", 
					"챙겨 먹어야 하는 와일리의 철학 때문입니다.", 
					"정성 가득한 ‘와일리백반’ 덕분에", 
					"오늘도 와일리의 프로젝트는 ‘밥심’으로 완성됩니다."]
			}
		},
		{
			path: "culture4.jpg",
			alt: "culture4",
			desc:{
				strong:["EAT - WYLIE Cafe","커피향과 함께 시작하는 하루"],
				p: ["매일 아침, 은은한 커피향이",
					"가득한 곳에서 힘찬 하루를 시작합니다.",
					"커피 한 잔으로 나누는 멤버들의 위로와 수다 속에서", 
					"와일리의 크리에이티브는 매일 새롭게 태어납니다."]
			}
		},
		{
			path: "culture5.jpg",
			alt: "culture5",
			desc:{
				strong:["STUDY - WYLIE Study","학생 때 못 다한 공부 지금도 늦지 않았다"],
				p: ["지식의 공유, 업무 스킬의 공유", 
					"상식의 공유, 트렌드 및 환경 변화의 공유 등을 목표로", 
					"자유로운 스터디 문화 조성을 통해 개인 및 팀 역량 향상"]
			}
		}
	],
	awards:[
		{
			path: "img_award1.jpg",
			alt: "award1",
			desc:{
				span:"KB스타뱅킹",
				p: ["App Award Korea 2018",	
					"기술이노베이션",	
					"대상"]
			}
		},
		{
			path: "img_award2.jpg",
			alt: "award2",
			desc:{
				span:"서울성모병원",
				p: ["Web Award Korea 2018",	
					"종합의료분야 & 건강/의료분야",	
					"대상"]
			}
		},
		{
			path: "img_award3.jpg",
			alt: "award3",
			desc:{
				span:"어바웃미",
				p: ["Web Award Korea 2018",	
					"제품브랜드분야",	
					"대상"]
			}
		},
	],
	signature:[
		{
			path: "signature1.jpg",
			alt: "signature1"
		},
		{
			path: "signature2.jpg",
			alt: "signature2"
		},
		{
			path: "signature3.jpg",
			alt: "signature3"
		},
		{
			path: "signature4.jpg",
			alt: "signature4"
		},
		{
			path: "signature5.jpg",
			alt: "signature5"
		},
		{
			path: "signature6.jpg",
			alt: "signature6"
		},
		{
			path: "signature7.jpg",
			alt: "signature7"
		}
	],

	footer: {
		address: ["주소 : 서울시 강남구 논현로 131길 39(논현동) 와일리타워", "Tel : 02-545-3477", "Fax : 02-545-3494", "E-mail : wylie@wylie.co.kr","COPYRIGHTⓒ WYLIE. ALL RIGHTS RESERVED."],
		icon: ['fab fa-twitter','fab fa-facebook','fab fa-pinterest','fab fa-google']
	},
}

export default data;