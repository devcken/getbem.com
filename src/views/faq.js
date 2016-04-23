import marked from 'marked';
import faqMarkdown from '../markdown/faq.md';

export default () => (
	<div className="container faq">
		<h1>FAQ</h1>
		<p>이 Frequently Asked Question는 BEM을 사용해본 개발자들의 실제 질문을 GetBEM 커뮤니티에서 답변한 내용입니다.
			거리낌없이 <a href="https://github.com/getbem/getbem.com/issues/new?title=FAQ:%20Type%20your%20question%20here">궁금한 점을 질문</a>해주시기 바랍니다. 최선을 다해 답변해드릴 것입니다.</p>

		<div innerHTML={marked(faqMarkdown)}></div>
	</div>
);
