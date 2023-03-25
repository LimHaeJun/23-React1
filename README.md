<h1>임해준</h1>

<h2>2023년 3월 23일(목)</h2>
 
리액트 프로젝트 생성방법  
Npc create-react-app “프로젝트 이름”  
cd “폴더 이름”  
nom start  

JSX는 JavaScript를 확장한 문법이다.  

1. JSX는 객체를 표현합니다.  
- Babel은 JSX를 React,createElement() 호출로 컴파일합니다.  
Const dlement = (  
	<h1 className= “greeting”>  
		Hello, world!  
	</h1>  
);  

2. JSX의 역할  
- JSX는 내부적으로 XML/HTML코드로 변환합니다.  
- React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.  
- 만일 JS작업할 경우 직접 createElement함수를 사용해야 합니다.  
- JSX는 가독성을 높여 주는 역할을 합니다.  

3. JSX의 장점  
- 코드가 간결해 집니다.(가독성 향상)  
- Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.  

4. JSX 사용법  
- 모든 자바스크립트 문법을 지원합니다.  
- 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.  
- 아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.  
- 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.  
- 만일 태그의 속성값을 넣고 싶을 때는 다음과 같이 합니다.  
    
    큰따옴표 사이에 문자열을 넣거나  
    const element = <div tabIndex="0"></div>  

    중괄호 사이에 자바스크립으 코드를 넣으면 됨!  
    const element = <img src={user.avatarUrl}></img>  

컴포넌트 선언의 첫글자는 대문자로만 해야한다.  


<h2>2023년 3월 16일(목)</h2>

README.md 작성요령

1. 파일이름은 대문자
2. 이름 : h1
3. 학습 내용(필수) : h2이하 사이즈 자유 사용
4. 작성 코드(선택)
5. 최근 내용이 위해 오도록 작성
6. 날짜 별 구분이 잘 가도록 작성  
---

### 1. 리액트의 정의
    1. 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
    2. 다양한 자바스크립트 UI 프레임워크 : Stack Overflow trends
    3. 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 리액트입니다.

### 2. 리액트의 장점
    1. 빠른 업데이트와 렌더링 속도
        1. 이 것을 가능하게 하는 것이 바로 Virtual DOM(Document of Model)이다.
        2. DOM(Document Object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스 입니다. 이 것은 W3C의 표준이다.
        3. Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안되 방법
        4. DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링을 한다.
            비동기식은 전체 데이터에서 필요한 데이터만 렌더링하기 때문에 속도가 더 빠르다. 

    2. 컴포넌트 기반 구조
        1. 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
        2. 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성될 수 있습니다. 
        3. 그래서 리액트로 개발을 하다 보면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 된다.
        4. 재사용성이 뛰어나다. 

    3. 재사용성
        1. 반복적인 작업을 줄여주기 때문에 생산성을 높여 준다.
        2. 유지보수가 용이하다.
        3. 재사용이 가능하려면 해당 모듈의 의존성이 없어야 한다.

    4. 든든한 지원군
        메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있다.

    5. 활발한 지식 공유 & 커뮤니티

    6. 모바일 앱 개발가능
        리액트 네이티브라는 모바일 환경 UI프레임워크를 샤용하면 크로스 플랫폼(cross-platform) 모바일 앱을 개발할 수 있습니다.

### create-react-app  
    1. create-react-app은 local에 React를 개발하는데 필요한 모든 패키지를 설치하고 프로젝트를 생성해 줍니다.  
    2. Node.js를 설치했으면 npm은 함께 설치됩니다.  
    3. npx를 다음 명령어로 설치하고 버전을 확인합니다.  
    4. npx는 npm(Node Package Manager)5.2.0 버전부터 새로 추가된 도구입니다.  
    5. npx는 패키지를 임시 설치해서 "실행"하는 도구입니다.  

<h2>2023년 3월 9일(목)</h2> 

 config를 확인한다. 우선 순위는 Local>global>System순이며 Local 설정파일이 제일 높다.
    <p>설정 파일을 확인 : git config --system --list</p>
    <p>Global 설정 파일을 확인 : git config --global --list</p>
    <p>Local 설정 파일을 확인 : git config --local --list</p>
    <p>모든 설정을 확인 : git config --list</p>

<p>설정이 끝나면 새로 생성하는 저장소부터 적용된다.</p>
<p>기존의 것을 바꾸려면 다음 명령을 사용한다.</p>
    <p>$ git branch -m master main</p>

# h1 HTML
## h2 웹사이트의 뼈대를 구성하는 태그들
### h3 SPA(Single page Application)

-자바스크립트
    <p>1.E56 (ECMAScript6) - 표준 ECMA-262</p>
    <p>2.자바스크립트의 자료형</p>
        <p>var : 중복 선언 가능, 재할당 가능</p>
        <p>let : 중복 선언 불가능, 재할당 가능</p>
        <p>const : 중복 선언 불가능, 재할당 불가능</p>
