- [왜 다른 CSS 모듈화 솔루션이 아닌 BEM을 선택해야 하나요?](#why-bem)
- [Modifier CSS 클래스는 왜 복합 셀렉터로 표현하지 않나요?](#why-the-modifier-classes-are-prefixed)
- [왜 시맨틱 커스텀 태그를 사용하지 않고, block을 위한 CSS 클래스를 사용해야 하나요?](#custom-tags-for-blocks)
- [수정된 block에 대해 왜 block과 block을 prefix한 modifier를 사용해야 하나요?](#block-modifier-mix)
- [Block modifier는 element에 영향을 줄 수 있나요?](#block-modifier-affects-elements)
- [어떠한 block에라도 적용 가능한 글로벌 modifier를 만들 수 있을까요?](#can-i-create-global-modifier)
- [button.button처럼 셀렉터를 태그와 클래스로 혼합할 수 있나요?](#encapsulating-tag-selector)
- [CSS 내에 명시된 내용을 토대로 modifier의 이름을 짓는게 좋을까요? `.block__element--border-bottom-5px`처럼 말이죠.](#css-modifier-names)
- [다른 element 내에 있는 어떤 element의 클래스 이름은 어떻게 지어야 할까요? `.block__el1__el2`처럼 해야 하나요?](#css-nested-elements)
- [BEM은 글로벌 CSS reset을 추천하지 않는다고 들었습니다. 왜 그런가요?](#global-css-resets)
- [원하는 답변을 못 찾았나요?](#ask-you-question)

<a id="why-bem"></a>
## CSS를 위한 모듈화 솔루션으로 BEM을 선택해야 하는 이유는 무엇인가요?

> CSS를 위한 여러 모듈화 솔루션이 존재합니다.(OOCSS, AMCSS, SMACSS, SUITCSS 등과 같은). BEM을 선택해야 하는 이유는 무엇인가요?

BEM은 CSS, JavaScript, templating과 같은 모든 프론트엔드 기술들을 위한 해결책을 제공합니다. 뿐만 아니라 웹 애플리케이션 빌드 프로세스를 위한 것까지 말이죠.
이 방법론은 어디에나 적용 가능합니다. 하지만, 반면, CSS에서 특별한 프레임워크를 필요로 하는 JavaScript와 templating에 적용하려면, 방법론의 추천 사항을 따라야 할 것입니다.
BEM의 CSS 파트는 개발 프로세스 내로 가져오기가 매우 쉽습니다. 이것이 BEM이 많이 사용되는 이유입니다. 반면에, 최근에 BEM이 프로젝트에 완전히 적용되었고, 그로 인해 유지보수가 수월해져 행복하다면, 아마도 웹 애플리케이션을 모듈화할 다음 단계를 . BEM CSS는 모듈화 JavaScript와 block 기반의 프로젝트 파일 구조로 조직화하기가 아주 쉽습니다.

오로지 CSS 모듈화 솔루션으로써만 BEM을 이야기한다면, BEM의 주요 feature는 block의 독립입니다. CSS 권고를 다르면 block을 page내 어디든지 위치시킬 수 있고, 주변의 다른 것들로부터의 영향을 염려하지 않아도 됩니다. 또한, 현재의 block 내로 다른 block을 끼워넣어야 할 필요가 생겼다면, 해당 block들의 호환성을 완벽히 보장합니다. 다른 말로하자면, 웹 애플리케이션을 유지보수할 때, block을 page에 종속되지 않고 위치시킬 수 있으며, 다른 block에 추가하거나 block들을 혼합할 수도 있습니다.

BEM CSS는 CSS가 어떤 인터페이스 조각에 속해있는지를 분명하게 정의하며, 그래서 BEM을 이용하게 되면 "이 코드 조간을 제거할 수 있을까?"라는 질문과 "이 코드 조각을 변경하게 되면 무슨 일이 벌어지고 어떤 인터페이스 부분들이 영향을 받게 될까?"라는 질문에 대한 답을 얻을 수 있을 겁니다.

<a id="why-the-modifier-classes-are-prefixed"></a>
## 왜 modifier CSS 클래스를 혼합 셀렉터로 표현하면 안될까요?

> BEM은 `<div class="block block--mod">`과 같이 block을 수정하길 권고합니다. 왜 단순하게 `<div class="block mod">`와 같이 사용하면 안되는 걸까요? 혼합 셀렉터인 `.block.mod`가 있기 때문에, 모든 CSS 프로퍼티를 정의하는 것이 용이한데 말이죠.

Modifier CSS 클래스를 그것의 block 이름으로 prefix하는 것을 권고하는데에는 여러 가지 이유가 있습니다.

첫째로, 동일한 DOM 노드에서 여러 block과 element들이 섞일 가능성이 있기 때문에, 우리는 modifier가 속해 있는 block에만 영향을 주도록 확실히 해야 합니다. 우리에게 메뉴 아이템 element와 button이 함께 혼합된 요소가 있다고 가정해보죠. HTML로 표현하자면 다음과 같을 겁니다:

```html
<div class="menu__item button"></div>
```

이 경우, `.active` modifier를 추가하게 되면 양쪽 모두에게 영향을 주게 됩니다.

```html
<div class="menu__item button active"></div>
```

세 가지 모두 동일한 DOM 노드에 놓이기 때문에, `menu__item.active`와 `button.active`을 명확히 구분하기 어려워집니다. 반면, `button--active`와 같이 prefix를 활용한 경우, 이것이 오직 button에만 영향을 준다고 분명히 이야기할 수 있습니다.

또 다른 관점은 CSS의 독특함에 있습니다. 혼합 셀렉터는 단일 클래스 셀렉터보다 좀 더 독특합니다(좀 더 중요하다고 할까요?). 이것이 의미하는 바는, 상위 block 코드에서 그것들을 재정의할 때 문제가 생길 수 있다는 것입니다.

```html
<div class="header">
    <button class="button active">
</div>
```

코드 상에 이미 `.button.active` 셀렉터가 존재한다면, `.header .button`라고 하는 재정의의 독특함은 선언된 CSS 규칙의 순서에 따라 의존성을 만들게 되는 modifier 혼합 셀렉터의 독특함과 정확하게 일치한다고 할 수 있습니다. 반면, prefix된 modifier를 사용하는 경우에, cascade 셀렉터인 `.header .button`가 `.button--active` modifier를 덮어쓴다고 확신할 수 있습니다.

이것은 특히 유지보수 프로젝트를 좀 더 쉽게 만들어줍니다.

세번째 요지는 `<div class="block block--mod">` 마크업을 보게 되면, block 구조라는 것을 분명히 알 수 있다는 것입니다. 그러므로 block과 그것의 modifier가 존재하고 그외의 가능성은 존재하지 않음을 분명히 할 수 있습니다.
불행하게도 `<div class="block mod">` 코드에 대한 파악은 어떤 정보도 줄 수 없습니다. 명확한 CSS 클래스가 무엇인지에 의존해서는, block을 가지고 있는지 modifier가 있는지 혹은 두 개의 block이 혼합되어 있는지를 정확히 인식할 수 없습니다.
개체들의 이름이 복잡하거나 단축/축약(큰 프로젝트에서 때때로 사용됩니다)될 경우 혼란은 가중될 것입니다.
<br/> Block 구조의 명확한 이해는 특히 파일 시스템에 상응하는 코드를 탐색하는데 도움을 줍니다.

당신은, 모든 프로젝트 파일에 걸쳐 리팩토링하거나 글로벌 검색을 할 경우, `.block--mod`와 같은 관례의 힘을 인정하게 될 것입니다.
`.mod`라는 prefix되지 않은 셀렉터를 검색한다고 상상해보세요. 모든 HTML 조각에서 검색될지도 모릅니다.

그리고 마지막으로, 개발 프로세스 관점에서 `.block.mod`와 `.block--mod`의 차이점은 오로지 한 개의 심볼일 것입니다. `.` 대신 `-`을 사용하는 것은 어떠한 비용도 들지 않지만 위에서 열거한 장점들을 가져다 줍니다.
더욱이, 전처리자가 BEM 표기법을 지원하기 시작한 이례로, `&--mod`라고 작성하는 것이 꽤 자연스러운 것이 되었고, 결과적으로 BEM이 권고하는 바와 같이 선언된 modifier를 얻게 됩니다.

<a id="custom-tags-for-blocks"></a>
## 왜 시맨틱 커스텀 태그를 사용하는 대신에 block에 대한 CSS 클래스가 필요할까요?

> Block들은 우리가 CSS 규칙을 정의한 커스텀 태그로 표현될 수 있습니다.
Block들을 위한 CSS 클래스는 전혀 필요하지 않은 것처럼 보입니다.
Block들은 `<button class="mod"/>`와 같이 오직 modifier만 적용할 수 있습니다.

Block 셀렉터로써 커스텀 태그를 사용하는 것은 BEM스러운 해결책 중 하나임이 틀림없고 그렇게 사용될 수도 있습니다.
하지만 이러한 변형은 권고되는 "class" 접근법보다 유연하지 못합니다.

Modifier에 네임스페이스를 부여하기 위해 해당되는 block의 이름으로 modifier 클래스를 prefix해야 할 필요가 있을 것 같습니다.
자세한 내용은 ["왜 modifier CSS 클래스들은 상위 block 이름으로 prefix되어야 하는가?"](#why-the-modifier-classes-are-prefixed)라는 질문에서 다루고 있습니다.
그래서, block의 최종적인 커스텀 태그 버전은 `<block class="block--mod"/>`와 같습니다.
이것은 `<div class="block block--mod">`과는 꽤 달라보이는데, 특히, 태그 의존성을 배제한다고 하면, 어떤 커스텀 노드든지 사용할 수 있어 `<block class="block block--mod">`을 유지할 수 있습니다. 

두번째 결점은 "class" 버전이 `<div class="block1 block2">`에 의해 자연스럽게 표현하는데 반해, "tag" 버전은 block 혼합 사용을 가능하도록 만든다는 것입니다.

그리고 BEM 접근법에 비하여 "tag" 버전은 수많은 경우에 커스텀 태그로 block을 표현하는 것이 불가능합니다.
예를 들면, `link` block에 대해, 분명 커스텀 태그가 아닌 `<a>` 태그나 `<input>` 태그와 같은 기본 태그를 사용해야 할 것입니다.

<a id="block-modifier-mix"></a>
## 왜 수정된 block에 대해 block과 prefix된 modifier 클래스를 함께 사용해야 할까요?

> `<div class=”block block--mod”>`와 같이 수정된 block에서 block과 modifier의 클래스를 함께 놓아야 할까요? 

> 수정된 block에 관한 모든 것은 `.block--mod`에서 묘사될 수 있습니다. 2개의 modifier 사이에 어떤 공통점이 존재한다면, 복사-붙여넣기를 피하기 위한 전처리자의 mixin을 사용하는 것이 가능합니다.

이런 접근법은 전처리자의 도움을 받아 가능합니다. 하지만, 그것에는 당신이 알아야 하는 어떤 단점이 있습니다.

`<div class="block--theme--christmas block--size--big">`와 같이 동일한 block 내에서 2개 이상의 modifier를 함께 사용하는 경우, block의 핵심 스타일을 두번 사용해야 한다는 것입니다.
하지만, 이것은 전처리자의 알고리즘에 따라 달라질 수 있습니다.

JavaScript를 이용해 동적으로 modifier를 다루는 경우, 추가적인 modifier를 좀 더 다루기 쉬워집니다.
그것을 끄는 것은 CSS 클래스가 영원히 필요한 것은 아니기 때문에 오로지 핵심 block CSS 클래스를 추가할 필요없이 DOM 노드로부터 한 개의 CSS 클래스를 제거하는 것을 의미합니다.

<a id="block-modifier-affects-elements"></a>
## Block modifier은 element에 영향을 줄 수 있나요?

> 예를 들어, `xmas`라고 하는 block modifier가 있고, 해당 block 사이에 xmas 테마가 적용되길 원하는 element가 있다고 가정한다면, 어떻게 하는게 가장 좋을까요?

> 꼭 적용해야 할 모든 element에 `--xmas`를 suffix해야 할까요? 아니면, 내재시키기 위한 한가지 유스케이스를 적용해야 할까요?(예를 들자면, `block--xmas block__elem { ... }` 식의...)   

하지만, 내재화된 셀렉터를 피하기 위한 일반적인 BEM 추천 사항에서 꽤 타당한 경우가 됩니다.
내재된 셀렉터를 만들 때, 당신은 하나의 개체가 다른 개체에 의존하도록 선언할 겁니다. BEM이 독립적인 컴포넌트를 도입함으로써, 이러한 접근법은 2개의 다른 block을 다루는 방법으로 추천되지 않습니다.

하지만, modifier가 block과 그것의 element에 적용될 경우, 동일한 의미여서는 안됩니다. 정의에 따라서, element는 그것의 상위 block의 밖에 있을 수 없습니다.
그러므로 element는 block에 의존하는 개체입니다. 이로 보건대, element가 block의 현재 상태에 의해 영향을 받는다는 것은 꽤 정상적이며 논리적입니다.

그래서 다음은 BEM의 흔한 코딩패턴이라고 볼 수 있습니다. 
So, this is quite a pattern in BEM to code

```
.my-block--xmas .my-block__button {
	/* Jingle bells, jingle bells, jingle all the way.*/
}
```

<a id="can-i-create-global-modifier"></a>
## 어떤 block에든 적용 가능한 글로벌 modifier를 만들 수 있나요?

> `visible`, `invisible`, `red`, `opacity50`과 같은 글로벌 modifier는 BEM에서 그리 환영받지 못한다고 들었습니다. 왜 그런가요?

> 저는 그런 글로벌 클래스 내에 그 이름에 나타내는 공통의 속성을 포함시켜 그것들을 다른 block들에 적용시킬 수 있다면 도움이 될거라고 생각하는데요.

실제로, 동일한 DOM 노드에서 2개의 주요 CSS 클래스를 적용할 수 있습니다. BEM에서는 그것을 `mix`라고 부릅니다:

```html
<div class="block1 block2"></div>
```

하지만 그것과 관련된 중요한 점은 두 `block1`과 `block2`은 반드시 단독 block이 되어야 한다는 것입니다.
But important thing about it is that both `block1` and `block2` should be standalone blocks.
이것은 사람들이 "글로벌 modifier"를 modifier라고 하는 것이 
This is slightly different from what people usually mean by "global modifiers" as modifiers do not have any sense on they own and are just a set of properties to change.

```html
<div class="block globalmod"></div>
```

만약 당신의 경우 글로벌 modifier를 가지고 있다고 한다면, 다음은 당신이 직면할 문제가 될지도 모릅니다:

첫번째로, 특성의 문제가 있습니다. 로컬 modifier 경우에 CSS 코드가 다음과 같을 수 있습니다:

```css
.block {
  display: block;
}
.block--hidden {
  display: none;
}
```

두 block, modifier 셀렉터는 동일한 특성을 가지고 있죠. Modifier의 선언이 block 뒤에 있으므로, CSS 프로퍼티들을 재정의합니다.  
이 스타일들은 block에 속하게 되며 block 파일에 저장됩니다.
그러므로, 결과로 생긴 CSS가 소스로부터 빌드된 방법으로부터 독립적으로, 이런 순서로 프로퍼티들을 항상 가지게 될 것이며, 재정의는 반드시 발생합니다.
글로벌 modifier의 경우, 프로퍼티들은 코드 내에서 modifier를 따르는 경우 block에 의해 재정의될 수 있다: 

```css
.hidden { display: none }
/* ... */
.block { display: block }
```

```html
<div class="block hidden">you still see me</div>
```

이런 문제점을 해결할 수 있는 방법 중 하나는 프로퍼티들에 `!important`을 추가하여 글로벌 modifier의 셀렉터 특성을 최우선으로 처리하도록 하는 것입니다.
그러나 이런 경우 이런 글로벌 modifier에 발생할 수 있는 부작용들은 동일한 `!important` 지시자 선언에 의해서만 덮어쓰여진다는 것입니다.

또 다른 방법은 모든 다른 스타일 뒤에 글로벌 modfier CSS를 로드시키는 것입니다. 
그러나 이 경우에는 컴포넌트에 대한 *lazy loading* 전략을 사용하는 것이 더 이상 불가능합니다.
추가적인 lazy CSS는 여전히 modifier 뒤에 로드될 것이고 동일한 문제가 발생하게 됩니다.

다음 문제는 동일 block의 몇 가지 글로벌 modifier를 함께 사용하는 것입니다.

```html
<div class="block mod1 mod2"></div>
```

이 경우에 block 너머로 제어하는 것이 결코 불가능해집니다. 
코드 내에서 modifier들의 순서가 달라집니다.
만약 선언 상에 충돌이 발생할 경우, 순서의 변경으로 이런 충돌을 해결할 수 있지만 다른 문제를 야기하게 됩니다.
유일한 방법은 block 내의 꼬인 부분을 재정의하는 것일 겁니다.
그리고 핵인 `!important`을 잊지 말기 바랍니다.

또한, 동일한 modifier는 block에 의존하여 다르게 선언될 수 있습니다.
간단한 `.hidden`조차 때때로 `display: none`가 아닌 `visibility: hidden` 혹은 `position: absolute; left: -9999px` 등으로도 정의될 수 있습니다.
그리고 block 내에 약간의 변화를 줄 경우, block이 글로벌 modifier와 함께 사용될 수 있는 모든 곳에 대한 검색 시간을 방비하지 않아 더 좋습니다.
특히 이런 의존성은 보통 어느 곳에서도 설명되지 않는다고 가정한다면 말이죠. 

이런 모든 단점들은 `.block--mod`과 같이 block 내 modifier를 인캡슐화하여 피할 수 있습니다.

확실히 글로벌 modifier 사용은 결과 코드의 양을 줄여줍니다. 하지만, byte 수의 차이를 보면 크게 차이나지 않는다는 것을 알 수 있습니다. 특히 셀렉터를 결합할 수 있는 CSS 옵티마이저를 사용하는 경우라면 말이죠.

<a id="encapsulating-tag-selector"></a>
## `button.button`처럼 셀렉터에서 태그와 셀렉터를 혼합하여 사용할 수 있을까요?

> 특정 태그 사이에서 block의 기능을 인캡슐화하기 위해 `button.button`와 같은 셀렉터를 사용하고 싶습니다.
> 최근에 어떤 다른 이가 코드 내에서 `<h2 class="button">`을 사용했을 경우 이런 인캡슐화는 충돌을 막아줄 것입니다.

이런 셀렉터의 CSS 특성은 커져갑니다. `.button--mod` 셀렉터는 block의 CSS 프로퍼티들을 덮어쓰지는 않겟지만 `button.button--mod`은 동작할 것입니다.
그것의 modifier들도 태그와 결합할 필요가 있으며 block을 재정의하려는 개발자들도 그렇게 해야할 것입니다. 

최근에 프로젝트가 커지면서 `input.button`, `span.button` 그리고 `a.button` 등과 같은 셀렉터를 만들 확률이 커졌습니다. 그리고 modifier와 내재된 element들을 위한 prefix된 모든 셀렉터들은 4가지 선언을 필요로 하게 될 것입니다.

그래서 이런 prefix는 하지 않는 것이 좋습니다. 하지만, 여전히 block들이 적합한 태그로 사용되는 것을 아주 조심스럽게 보장할 수 있고, 모든 block에 대해 사용자에게 템플릿을 제공하다면, 이것은 가장 유연하고 오토매틱한 해결책입니다.

Templating이 오버헤드로 느껴진다면, 사용자에게 block CSS 클래스가 적용되어질 tag가 어떤 것이 알려주기 위한 "문서" 접근법이 있는데, 이것은 block 코드를 문서화하여 이루어질 수 있습니다.
가장 짧은 버전은 `/*button*/.button`처럼 태그 이름을 prefix한 block 선언에서 태그 이름을 주석 처리하는 것입니다.
혹은 동작하는 block에 필요한 전체 HTML 조각을 좀 더 크게 주석 처리할 수 있습니다.

<a id="css-modifier-names"></a>
## modifier 이름을 CSS 내에 있는 것들에 상응하도록 짓는게 맞을까요?

> Mix 덕분에, CSS 프로퍼티를 나타내고 block에 그것들을 할당하는 많은 modifier를 만들 수 있습니다.
> 하지만, 나는 "그것이 좋지 않다"고 들었어요. 예를 들어, `.block__element--border-bottom-5px`라고 하는 셀렉터는 "끔찍하다"고 낙인찍혔죠. 그렇다면 나는 어떻게 modifier의 이름을 지어야 하는지 그리고 왜 그래야 하는지가 궁금합니다.

Modifier 이름을 CSS 표현에 상응하도록 짓는 것은 바람직하지 않습니다. 정말 좋지 않지요. 그러나 그에 반대되는 현실적인 이유 또한 있습니다. 최근에 컴퍼넌트의 뷰가 변경됐다라고 가정하면, CSS를 수정하는 것 뿐만 아니라 셀렉터도 변경해야 할 것입니다.
그래서 border가 6px이 되면, 모든 템플릿에서 변경이 일어날 것이고 때때로는 JavaScript에서도 변경이 일어날 수 있죠.

또한, Modifier가 정의해야 할 CSS 프로퍼티를 오직 한개만 가지고 있고 그것을 영원히 가지고 있으리란 보장도 없습니다. 
Also, it never happens that a modifier has only one CSS property to define and will have it forever.
그 경계선이 다른 것들로부터 한 가지 상태를 구분짓는 유일한 경계선이라고 할지라도, block의 동일한 상태에 대해 다른 CSS 프로퍼티를 필요로 할 확률이 매우 높습니다.
이것은 "border"라고 부르는 modifier내에 background 혹은 padding을 정의하고 있을 경우, 혼란스러워집니다. 그래서, 오로지 한 개의 프로퍼티를 가지고 있는 modifier라도 시맨틱한 이름을 선택하는 것이 좋습니다.

<a id="css-nested-elements"></a>
## 다른 요소 내에 있는 요소에 대해 클래스 이름은 어떻게 지어야 할까요? `.block__el1__el2` 이렇게 지어야 하나요?

> 제가 만든 block이 복잡한 구조를 가지고 있고 다른 요소가 내재되어 있는 경우 어떻게 해야 하나요?
> `block__elem1__elem2__elem3`와 같은 클래스 이름은 끔찍해보여요.

BEM 방법론에 따르면, block 구조는 평평해야 합니다. block의 내재된 DOM 구조를 반영해야 할 필요가 없도록 말이죠. 그래서, 이런 경우에 클래스 이름은 다음과 같아야 합니다:

```css
.block {}
.block__elem1 {}
.block__elem2 {}
.block__elem3 {}
```

그러므로 block의 DOM 표현은 다음과 같이 내재될 수 있습니다:

```html
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>
```

클래스 이름이 좀 더 좋아보인다는 사실이외에도, element들이 오로지 block에만 의존하게 됩니다. 
그래서, 인터페이스에 변경을 가하는 경우에 block을 가로질러 쉽게 이동시킬 수 있습니다.
block의 DOM 구조 변경은 CSS 코드의 변경에 대응될 필요가 있습니다.

```html
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'></div>
    </div>
    <div class='block__elem3'></div>
</div>
```

<a id="global-css-resets"></a>
## 제가 듣기로 BEM은 글로벌 CSS 리셋을 권하지 않는다고 하던데요, 왜 그런가요?

> CSS 리셋은 모양을 좋게 만들어줍니다. 많은 프레임워크들이 먼저 어떤 것이든 정렬한 뒤에 그들의 특별한 스타일을 적용하고 있죠.
> BEM은 일반적인 리셋을 추천하지 않는데 왜 그런가요? 그리고 그 대신 우리가 할 수 있는건 무엇일까요?

일반적인 리셋을 사용한다고 해서 block에 나쁜 일이 생기는 것은 아닙니다(음, 아래 몇 가지 특별한 경우를 제외하고는 말이죠).
Nothing bad would happen to your blocks if you use common reset (well, except of some special cases below).
그래서, BEM은 리셋의 사용을 금지하지 않고 있습니다. 그러나, 리셋을 사용하면서 BEM이 제시하는 방법을 사용한다면 좀 더 효과적일 겁니다.

일반적인 CSS 리셋은 문서 노드에 적용되는 CSS 집합이고 그들의 기본 뷰가 다른 브라우저에서도 동일하게 보여지는 것을 보장합니다.
대개의 경우 CSS 규칙은 태그 셀렉터로 작성되는데 BEM에서는 추천하지 않는 방법입니다(위에서 이에 대한 많은 설명을 참고할 수 있습니다).

또 다른 요점은 BEM에서 block은 표현해야 할 모든 것들과 기능들을 인캡슐화한다는 것입니다.  
그리고 이것이 우리가 BEM block을 독립적으로 불러야 하는 이유입니다.
만약 block가 페이지 상에 추가되는 서드파티 CSS없이 적절히 보여지지 않는다면, 그것은 그다지 "독립적이다"라고 말할 수 없습니다.

이 모든 것을 가정하여, BEM은 모든 block을 그 자체로 리셋할 것을 권합니다.  
HTML 내에 `<ul>`인 `menu`라는 block과 `list` block 두 개가 있다면, 그들 각각은 통상 `<ul>`에 부여되는 리셋 CSS를 제공해야 할 것입니다. 
몇몇 block이 동일한 리셋 규칙을 가져서 결과 코드 내에 반복되는 것을 걱정할 수도 있습니다. *그러나 이것은 CSS optimizer가 해결해줄 수 있습니다.*
개발자로써 당신은 모든 block을 독립적으로 개발하게 되는데, 동일한 페이지에 다른 block이 없기 때문이죠. 

동일한 규칙 집합으로 셀렉터를 결합하기 위한 CSS optimizer가 없는 경우라면, 복사-붙여넣기를 막기 위한 전처리자를 사용할지도 모릅니다.
모든 새로운 block에 적절한 코드를 섞어 그 자체로 리셋하도록 만들 수 있습니다. 예를 들어, SASS로 이를 한다면:

```css
.menu {
    @include reset-list;
}
.menu__item {
    @include reset-list-item;
}

/* ... */

.list {
    @include reset-list;
}
.list__item {
    @include reset-list-item;
}
```

하지만 이런 mixin 방법을 사용하는 유일한 이유가 적절한 optimizer가 없기 때문이라는 것을 깨닫게 될 것입니다.

모든 블록에 대해 리셋을 갖는 이유(좋아지고 BEM스러워지는 것외에도)는 브라우저 기본 스타일에 의존하고 글로벌 리셋에 의해 영향을 받는 HTML/CSS 마크업의 서드파티 조각이 주입되어 발생하는 문제를 막아준다는 것입니다.
예를 들어, 잘 알려진 문제는 웹메일에 관한 것이죠.

<a id="ask-you-question"></a>
## 원하는 답을 찾지 못했나요? 질문을 올려주세요!

적절한 답변을 찾지 못했다면, [질문을 올려주세요](https://github.com/getbem/getbem.com/issues/new?title=Type+your+question&body=Explain+in+detail+your+question&labels=question)!
