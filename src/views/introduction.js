export default () => (
	<div className="container introduction">
		<h1>Introduction</h1>

		<p>보통의경우, 더 작은 브로슈어 사이트에서, 당신이 스타일을 어떻게 체계화하는지는 큰 관심사가 아닐 겁니다. 당신은 거기에 CSS를 작성하거나 어쩌면 SASS를 이용할지도 모릅니다. SASS의 production 설정으로 단일 스타일시트 내에 모든 것을 컴파일한 뒤, 모든 스타일시트를 모듈에서 하나의 아주 작은 패키지로 합치겠지요.</p>

		<p>하지만, 좀 더 크고 복잡한 프로젝트에서 체계화하는 방법은 효율의 실마리가 됩니다. 작성하는 데 걸리는 시간뿐만 아니라, 얼마만큼의 코드를 작성해야하는지, 또 브라우저가 로드해야 할 코드는 얼마큼인지를 결정하게 되죠. 이것은 themer들로 구성된 팀과 함께 일하며, 성능이 중요할 경우, 특히 중요합니다.</p>

		<p>또한 레거시 코드를 다루는 장기 프로젝트에 있어서도 그렇습니다.(<a href="http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/">"How to Scale and Maintain Legacy CSS with Sass and SMACSS"</a>을 읽고 훌륭한 SMACSS와 BEM의 조화를 살펴보세요).</p>


		<h2>Methodologies</h2>

		<p>CSS codebase를 줄이고, 프로그래머 간의 협업의 체계화하며, CSS 코드를 유지보수하기 쉽게 하는데 목적을 두고 만들어진 많은 <a href="https://github.com/ikkou/awesome-css#architecture">방법론</a>들이 존재한다. 이런 방법론이 Twitter, Facebook 그리고 <a href="http://markdotto.com/2014/07/23/githubs-css/#two-bundles">Github</a>와 같은 큰 프로젝트에 있어서 분명한 것이지만, 다른 작은 프로젝트들은 상당힌 빠른 속도로 아주 거대한 CSS 파일을 만들어낸다.</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="https://oocss.org/">OOCSS</a></h4>
					CSS "객체"로 컨테이너와 내용을 구분하기
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="https://smacss.com/">SMACSS</a></h4>
					CSS 규칙에 대한 다섯가지 카테고리로 CSS를 작성하기 위한 스타일 가이드
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="http://suitcss.github.io/">SUITCSS</a></h4>
					구조화된 클래스 이름과 의미있는 하이픈
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="https://github.com/nemophrost/atomic-css">Atomic</a></h4>
					원자 구조 혹은 불가분의 조각까지 나누는 스타일
				</div>
			</div>
		</div>

		<p></p>

		<h2>왜 다른 방법론이 아닌 BEM인가?</h2>

		<p>당신의 프로젝트에서 어떤 방법론을 선택하더라도, 구조화된 CSS와 UI의 장점을 얻게 될 것입니다. 그것들 중 어떤 것은 덜 엄격하고 좀 더 유연하고, 다른 것들은 이해하기가 쉬워 팀 내에도 잘 전파가 될 수도 있습니다.</p>

		<blockquote>
			<p>내가 다른 방법론이 아닌 BEM을 선택한 이유는 다음과 같습니다. 다른 방법론들에 비해(특히 SMACSS) 덜 혼란스러우며, 우리가 원하는 좋은 구조(예를 들자면, OOCSS)를 제공합니다. 또 인식하기 쉬운 용어들도 말이죠.</p>
			<footer>Mark McDonnell, <a href="http://www.integralist.co.uk/posts/bem.html#4">Maintainable CSS with BEM</a></footer>
		</blockquote>

		<h2>Block, Element 그리고 Modifier</h2>

		<p>별로 놀랄것도 없이, BEM은 방법론의 주요 요소(Block, Element 그리고 Modifier)의 축약어입니다. 네이밍에 대한 엄격한 규칙은 <a href="/naming">Naming</a>을 참고하시기 바랍니다.</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell introduction__cell--block">
					<h3>Block</h3>
					<p>그 자체로 의미를 가지는 독립적인 개체입니다.</p>

					<h5>예시</h5>
					<code>header</code>, <code>container</code>, <code>menu</code>, <code>checkbox</code>, <code>input</code>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell introduction__cell--element">
					<h3>Element</h3>
					<p>Block의 일부분이며 혼자서는 어떤 의미도 없습니다. Element는 그것의 block에게 의미적으로 묶여있어야 합니다.</p>

					<h5>예시</h5>
					<code>menu item</code>, <code>list item</code>, <code>checkbox caption</code>, <code>header title</code>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell introduction__cell--modifier">
					<h3>Modifier</h3>
					<p>Block 혹은 Element에 대한 플래그를 말합니다. 겉모습이나 동작에 변화를 주고자할 때 사용하세요.</p>

					<h5>예시</h5>
					<code>disabled</code>, <code>highlighted</code>, <code>checked</code>, <code>fixed</code>, <code>size big</code>, <code>color yellow</code>
				</div>
			</div>
		</div>

		<div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '40px'}}>
			<img src="/assets/github_captions.jpg" style={{width: '100%', maxWidth: '930px'}}/>
		</div>

		<h2>자세히 살펴보기</h2>

		<p>페이지 상의 하나의 개별 element가 어떻게 BEM으로 구현되는지 살펴보도록 하죠. <a href="http://primercss.io/buttons/">GitHub</a>에서 <code>button</code>을 가져오겠습니다:</p>

		<div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '40px'}}>
			<img src="/assets/github_buttons.jpg" style={{width: '100%', maxWidth: '361px'}}/>
		</div>

		<p>보통의 경우에 사용되는 일반적인 버튼이 있으며, 그 외에 두 가지 상태의 버튼이 있습니다. 클래스 셀렉터에 의한 BEM 스타일 block 덕분에, 우리가 원하는 태그라면 무엇으로든지 block을 구현할 수 있습니다.(<code>button</code>, <code>a</code> 혹은 <code>div</code>으로도). 네이밍은 <code>block--modifier--value</code> 구문을 사용하도록 인도합니다.</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4>HTML</h4>
					<pre>{`<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>`}</pre>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>CSS</h4>
					<pre>{`.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}`}</pre>
			</div>
			</div>
		</div>

		<h2>이득</h2>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4>모듈화</h4>
					<p>Block 스타일은 페이지 상의 다른 요소들에 의존성을 가지지 않아야 하므로 <a href="http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/">cascading으로 인한 문제점</a>을 피할 수 있습니다.</p>
					<p>또한, 이런 모듈 방식은 block들을 새로운 프로젝트로 이식할 수 있도록 해줍니다.</p>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>재사용성</h4>
					<p>독집적인 block들을 다른 방법으로 조립하고, CSS 코드량을 줄이기 위해 그것들을 재사용하여 유지하게 될 것입니다.</p>
					<p>당신에게 디자인 가이드라인이 있다면, block 라이브러리를 만드는 것은 매우 효과적일 겁니다.</p>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>구조</h4>
					<p>BEM 방법론은 CSS 코드를 간단하고 이해하기 쉬운 구조로 만들어줍니다.</p>
				</div>
			</div>
		</div>

		<h2>Further Reading</h2>
		<ul>
			<li><a href="http://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/">‘왜 BEM인가?’ 간결하게 알아보기</a></li>
			<li><a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">MindBEMding</a> — BEM 구문으로 생각하기</li>
			<li><a href="http://cssguidelin.es/#bem-like-naming">CSS 가이드라인</a></li>
			<li><a href="http://www.smashingmagazine.com/2014/07/17/bem-methodology-for-small-projects/">소형 프로젝트를 위한 BEM 방법론</a></li>
			<li><a href="http://www.slideshare.net/MaxShirshin/bem-it-for-brandwatch">Brandwatch를 위한 BEM It!</a></li>
			<li><a href="http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/">사용과 오용</a> — CSS 상속 그리고 Cascade에 대한 우리의 오용</li>
			<li><a href="https://medium.com/objects-in-space/objects-in-space-f6f404727">공간 속 객체들</a> — SMACSS와 BEM을 이용한 모듈화된 SASS 개발을 위한 스타일 가이드</li>
			<li><a href="http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/">Sass와 SMACSS로 레거시 CSS를 확장하고 유지보수하는 방법</a></li>
			<li><a href="http://www.bluegg.co.uk/building-my-health-skills-part-3/">BEM과 Sass로 모듈화하여 나의 건강한 스킬 만들기</a></li>
			<li><a href="http://www.bluegg.co.uk/building-my-health-skills-part-3/">나의 건강한 스킬 만들기 - 3부</a></li>
		</ul>

		<h2>사례 연구</h2>

		<p>우리는 "기존 프로젝트를 BEM으로 이전하는 방법"을 쓰는데 관심을 기울이고 있습니다. 그러는 동안에, Nicole Sullivan이 작성한 프레젠테이션을 살펴보시기 바랍니다. — "<a href="http://www.youtube.com/watch?v=0NDyopLKE1w">CSS 전처리자 성능</a>". 이 프레젠테이션은 그녀가 주요 사이트에서 접해던 문제점들에 대한 좋은 설명들과 그것들을 찾고 해결한 방법들을 제공합니다.</p>
	</div>
);
