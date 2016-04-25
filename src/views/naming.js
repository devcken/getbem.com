export default () => (
	<div className="container naming">
	<h1>네이밍</h1>

			<blockquote>컴퓨터 과학에는 두 가지 난제가 존재한다. 캐시 무효화와 네이밍 — <i>Phil Karlton</i></blockquote>

			<p>올바른 스타일가이드가 레거시 코드에서 새로운 기능을 디버그하고 구현함에 있어서 개발 속도를 현저히 높인다는 것은 사실로 알려져 있다. 슬프게도, 대부분의 CSS codebase는 (때때로) 어떤 구조와 네이밍 관례도 없이 개발됩니다. 이것은 오랜 시간동안 유지보수하기 어려운 CSS codebase를 유발시킵니다.</p>

			<p>BEM 접근법은 웹 사이트 개발에 참여하는 모든이들이 단일 codebase로 협업하고 동일한 언어로 말할 수 있도록 해줍니다. 적합한 네이밍 사용은 웹 사이트 디자인 변화에 대비할 수 있도록 해줄겁니다.</p>

			<div className="naming__cell naming__cell--block">
				<h3>Block</h3>

				<p>그 자체로 의미를 가지는 독립적인 개체를 인캡슐화합니다. Block이 서로 간에 내재되고 상호 작용될 수 있음에도, 의미적으로는 우선 순위나 계층 없이 평등함을 유지합니다. DOM 표현이 없는 전체 개체들(컨트롤러나 모델) 또한 block이 될 수 있습니다.</p>
			</div>

			<div className="row">
				<div className="column">
					<div className="naming__cell">
						<h4>네이밍</h4>
						<p>Block 이름은 라틴 문자, 숫자 그리고 대시로 이루어질 겁니다. CSS 클래스를 만들려면, 네임스페이스를 위한 짧은 접두사를 추가하세요: <code>.block</code></p>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h4>HTML</h4>
						<p>클래스 이름을 적용 가능한 DOM 노드라면 어떤 것이든지 block이 될 수 있습니다.</p>
						<pre>{'<div class="block">...</div>'}</pre>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h4>CSS</h4>
						<ul>
							<li>클래스 이름 셀렉터만 사용하세요.</li>
							<li>태그 이름이나 아이디는 안됩니다.</li>
							<li>페이지 상의 다른 block이나 element에 대한 의존성이 있어서는 안됩니다.</li>
						</ul>
						<pre>{".block { color: #042; }"}</pre>
					</div>
				</div>
			</div>

			<div className="naming__cell naming__cell--element">
				<h3>Element</h3>
				<p>Block의 일부분이며 혼자서는 아무런 의미를 가지지 못합니다. 모든 element들이 의미적으로 자신의 block에 종속적입니다.</p>
			</div>

			<div className="row">
				<div className="column">
					<div className="naming__cell">
						<h4>네이밍</h4>
						<p>Element 이름은 라틴 문자, 숫자, 대시 그리고 언더스코어로 이루어집니다. CSS 클래스는 block 이름에 두 개의 언더스코어 그리고 element 이름을 붙여 만들어집니다: <code>.block__elem</code></p>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h4>HTML</h4>
						<p>Block 내의 모든 DOM 노드는 element가 될 수 있습니다. 주어진 block 내의 모든 요소들은 의미론적으로 동일합니다.</p>
						<pre>{`<div class="block">
  ...
  <span class="block__elem"></span>
</div>`}</pre>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h4>CSS</h4>
						<ul>
							<li>클래스 이름 셀렉터만 사용하세요.</li>
							<li>태그 이름이나 아이디는 안됩니다.</li>
							<li>페이지 상의 다른 block이나 element에 대한 의존성이 있어서는 안됩니다.</li>
						</ul>
						<b>Good</b>
						<pre>{`.block__elem { color: #042; }`}</pre>
						<b>Bad</b>
						<pre>{`.block .block__elem { color: #042; }
div.block__elem { color: #042; }`}</pre>
					</div>
				</div>
			</div>

			<div className="naming__cell naming__cell--modifier">
				<h3>Modifier</h3>
				<p>Block 혹은 element에 대한 플래그입니다. 생김새, 동작 혹은 상태를 변화시키고자 할 때 사용하세요.</p>
			</div>

			<div className="row">
				<div className="column">
					<div className="naming__cell">
						<h4>네이밍</h4>
						<p>Modifier 이름은 라틴 문자, 숫자, 대시 그리고 언더스코어로 이루어집니다. CSS 클래스는 block 혹은 element 이름에 두 개의 대시를 붙여서 만듭니다: <code>.block--mod</code> 혹은 <code>.block__elem--mod</code>, <code>.block--color-black</code>과 <code>.block--color-red</code>. Modifier가 복잡한 경우, 공백은 모두 대시로 대체하도록 합니다.</p>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h4>HTML</h4>
						<p>Modifier는 추가적인 클래스 이름으로 block이나 element DOM 노드에 추가해줍니다. 수정된 내용에 대해서만 modifier 클래스를 추가하며, 기존의 클래스는 유지하도록 해야합니다:</p>
						<b>Good</b>
						<pre>{`<div class="block block--mod">...</div>
<div class="block block--size-big
	block--shadow-yes">...</div>`}</pre>
						<b>Bad</b>
						<pre>{`<div class="block--mod">...</div>`}</pre>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h4>CSS</h4>
						<p>셀렉터로써 modifier 클래스 이름을 사용하세요:</p>
						<pre>{".block--hidden { }"}</pre>
						<p>Block 수준의 modifier에 기초하여 element를 수정하려면:</p>
						<pre>{".block--mod .block__elem { }"}</pre>
						<p>Element modifier:</p>
						<pre>{".block__elem--mod { }"}</pre>
					</div>
				</div>
			</div>

			<h3>예제</h3>

			<p>Modifier <code>theme: "xmas"</code>와 <code>simple: true</code>, element <code>input</code>와 <code>submit</code>를 가지고 있는 block 폼과 폼 컨트롤이 모두 입력되지 않으면 제출하지 못하도록 하기 위한 자체 modifier <code>disabled: true</code>를 가지는 <code>submit</code> element가 있다고 가정해보세요:</p>

			<div className="row">
				<div className="column">
					<div className="naming__cell">
						<h4>HTML</h4>
						<pre>{`<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>`}</pre>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h4>CSS</h4>
						<pre>{`.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }`}</pre>
					</div>
				</div>
			</div>
	</div>
);
