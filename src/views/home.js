export default () => (
	<div className="index">
		<div className="description">
			BEM – Block Element Modifier은 front-end에서 재사용 가능한 컴포넌트와 코드 공유를 달성할 수 있도록 도와주는 방법론입니다.
		</div>
		<div className="container" style={{marginBottom: '50px'}}>
			<div className="row">
				<div className="column">
					{advantage({title: '쉬움', color: 'block', text: 'BEM을 사용하기 위해서, BEM 네이밍 외에 별도로 필요한 것은 없습니다.'})}
				</div>
				<div className="column">
					{advantage({title: '모듈화', color: 'element', text: '독립적인 블록들과 CSS 셀렉터들은 당신의 코드를 재사용 가능하고 모듈화 해줍니다.'})}
				</div>
				<div className="column">
					{advantage({title: '유연함', color: 'modifier', text: '당신이 좋아할 만한 방법 내에서 재조립과 설정이 가능한 방법론과 도구들이 있습니다.'})}
				</div>
			</div>
		</div>
		{introductionPanel()}
		{namingPanel()}
		{questionsPanel()}
		{companiesPanel()}
	</div>
);

function advantage({title, color, text}) {
	return (
		<div className={`advantage advantage--${color}`}>
			<h2>{title}</h2>
			<div>{text}</div>
		</div>
	);
}

function panel({type, title, link, img, children}) {
	return (
		<div className={`panel panel--${type}`}>
			<div className="panel__container">
				<a href={link}><img src={img}/></a>
				<h2><a href={link}>{title}</a></h2>
				{children}
			</div>
		</div>
	);
}

function introductionPanel() {
	return panel({
		type: 'introduction',
		title: '소개',
		link: '/introduction/',
		img: '/assets/ic_book_white_24px.svg',
		children: (
			<p>BEM은 당신의 front-end 코드를 읽고 이해하는데, 협업할 때, 확장할 때 좀 더 쉽게 해주며, 좀 더 강건하고 명확하며 아주 엄격하게 만들어주는 대단히 유용하고 강력하며 단순한 네이밍 관례입니다.</p>
		)
	});
}

function namingPanel() {
	return panel({
		type: 'naming',
		title: '네이밍',
		link: '/naming/',
		img: '/assets/ic_text_format_white_24px.svg',
		children: (
			<p>BEM 접근법은 하나의 웹사이트 개발에 참여하고 있는 모든 이들이 단일 codebase로 협업하고 동일한 언어로 대화할 수 있도록 해줍니다. 적합한 네이밍 사용은 당신으로 하여금 웹사이트 디자인 변화에 잘 대비할 수 있도록 해줍니다.</p>
		)
	});
}

function questionsPanel() {
	return panel({
		type: 'questions',
		title: 'FAQ',
		link: '/faq/',
		img: '/assets/ic_question_answer_white_24px.svg',
		children: (
			<div>
				<p><i>— <a href="/faq/#custom-tags-for-blocks">왜 시맨틱 커스텀 태그를 사용하는 대신에 블록 CSS 클래스를 사용해야 하나요?</a></i></p>
				<p><i>— <a href="/faq/#encapsulating-tag-selector">button.button과 같이 셀렉터 내에서 태그와 클래스를 혼합하여 사용할 수 있나요?</a></i></p>
				<br/>
				<p>놀라운 <a href="/faq/">FAQ 목록</a>에서 해답을 찾아보세요!</p>
			</div>
		)
	});
}

function companiesPanel() {
	return (
		<div className="panel panel--companies">
			<div className="panel__container">
				<h2>BEM을 이용 중인 회사들</h2>
				<ul>
					<li><a href="https://yandex.com" title="Yandex"><img src="/assets/companies/yandex.png"/></a></li>
					<li><a href="http://www.jetbrains.com" title="JetBrains"><img src="/assets/companies/jetbrains.png"/></a></li>
					<li><a href="http://factory.mn" title="Manufactura"><img src="/assets/companies/manufactura.png"/></a></li>
					<li><a href="http://eu.ideus.biz" title="iDeus"><img src="/assets/companies/ideus.png"/></a></li>
					<li><a href="http://alfabank.com" title="Alfa-Bank"><img src="/assets/companies/alfabank.png"/></a></li>
					<li><a href="http://edster.ru" title="Edster"><img src="/assets/companies/edster.png"/></a></li>
					<li><a href="http://www.wimdu.com" title="Wimdu"><img src="/assets/companies/wimdu.png"/></a></li>
					<li><a href="http://megafon.com" title="Megafon"><img src="/assets/companies/megafon.svg"/></a></li>
					<li><a href="http://decaf.de" title="Decaf"><img src="/assets/companies/decaf.png"/></a></li>
					<li><a href="http://epam.com" title="EPAM"><img src="/assets/companies/epam.svg"/></a></li>
					<li><a href="https://renuo.ch" title="Renuo"><img src="/assets/companies/renuo.png"/></a></li>
					<li><a className="panel--companies__add-button" href="https://github.com/getbem/getbem.com/issues/1" title="Add your company"><img src="/assets/ic_add_circle_outline_white_24px.svg"/></a></li>
				</ul>
			</div>
		</div>
	);
}
