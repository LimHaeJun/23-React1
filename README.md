<h1>임해준</h1>

<h2>2023뇬 4월 6일 (목)</h2>  

5. 컴포넌트 추출

- Comment는 댓글 표시 컴포넌트입니다.  
- 내부에는 이미지, 이름 댓글과 작성일이 포함되어 있습니다.  
- 첫 번째로 이미지 부분을 Avatar 컴포넌트로 출력해 보겠습니다.  

```js
function Avatar(props) {
    return (
        <img className="avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}
```  

- 두 번째로 사용자 정보 부분을 추출합니다.  
- 컴포넌트 이름은 UserInfo로 합니다. React 컴포넌트 이름은 Camel notatio을 사용합니다.  
- UserInfo 안에 Avatar 컴포넌트를 넣어서 완성시킵니다.  

```js
function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar user={props.user} />
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    );
}
```

- 추출 후 다시 결합한 UserInfo를 Comment 컴포넌트를 반영하면 다음과 같은 모습이 됩니다.  
- 처음에 비해서 가족성이 높아진 것을 확인할 수 있습니다.  

```js
function Comment(props){
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
```  

- 기본적으로는 한 컴포넌트에 하나의 기능을 수행하도록 설계하는 것이 바람직합니다.  

요약

- 리액트 컴포넌트
    - 컴포넌트 기반 구조
        - 작은 컴포넌트들이 모여서 하나의 컴포넌트를 구성하고 이러한 컴포넌트들이 모여서 전체 페이지를 구성
        - 개념적으로는 자바스크립트의 함수와 비슷함
            - 속성들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성하여 리턴함

- Props
    - Props의 개념  
        - 리액트 컴포넌트의 속성  
        - 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
    - Props의 특징
        - 읽기 전용
        - 리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야 함
    - Props 사용법
        - JSX를 사용할 경우 컴포넌트에 키-값 쌍 형태로 넣어주면 됨
        - 문자열 이외에 정수, 변수, 그리고 다른 컴포넌트 등이 들어갈 경우에는 중괄호를 사용해서 감싸주어야 함
        - JSX를 사용하지 않는 경우에는 createElement() 함수의 두 번째 파리미터로 자바스크립트 객체를 넣어 주면 됨
        

<h3>State</h3>

1. State란?
- State는 리액트 컴포넌트의 상태를 의미합니다.
- 상태의 의미는 정상인지 비정상인지가 아니라 <U>컴포넌트의 데이터</U>를 의미합니다.
- 정확히는 컴포넌트의 <U>변경가능한 데이터</U>를 의미합니다.
- State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.

2. state의 특징
- 리액트 만의 특별한 형태가 아닌 단지 <U>자바스크립트 객체</U>일 뿐입니다.
- 예의 LikeButton은 class 컴포넌트입니다.
- constructor는 생성자이고 그 안에 있는
- this.state가 현 컴포넌트의 state입니다.
```js
class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: false
        };
    }
}
```

- 함수형에서는 useState()라는 함수를 사용합니다.  
- state는 변경은 가능하다고 했지만 직접 수정해서는 안됩니다.  
- state를 변경하고자 할 때는 <U>setState()함수를 사용<U>합니다.  

```js
// state를 직접 수정 (잘못된 사용법)
this. state = {
    name: 'Inje'
};

// setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
    name: 'Inje'
});
```  

<h3>생명주기에 대해 알아보기</h3>

- 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것입니다.
- constructor가 실행되면서 컴포넌트가 생성됩니다.
- 생성 직후 componentDidMount() 함수가 호출됩니다.
- 컴포넌트가 소멸하기 전까지 여러 번 랜더링 합니다.
- 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다.
- 렌더링이 끝나면 componentDidUpdate() 함수가 호출됩니다.
- 마지막으로 컴포넌트가 언마운트 되면 componentWillUnmount() 함수가 호출됩니다.

<h2>2023년 3월 30일(목)</h2>

<h3>엘리멘트 렌더링</h3>

1. 엘리먼트의 정의  
- 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.  
- 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명하고 있습니다.  
- 웹사이트의 경우는 DOM엘리먼트이며 HTML요소를 의미합니다.  

2. 엘리먼트의 생김새  
- 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
- 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체입니다.  
- 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.  
- 리액트 엘리먼트의 예를 보면 type에 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다는 것을 알 수 있습니다.  
- 역시 자바스크립트 객체입니다.  

3. 엘리먼트의 특징  
- 리액트 엘리먼트의 가장 큰 특징은 불변성입니다.  
한 번 새엉된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없습니다.
- 내용이 바뀌면 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.  

<h3>컴포넌트에 대해 알아보기<h3>  

- 리액트는 컴포넌트 기반의 구조를 갖습니다.  
- 컴포넌트는 재사용이 가능하기 대문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.  
- 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 유사합니다.  
- 입력과 출력은 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.  
- 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.

<h3>컴포넌트 만들기</h3>

1. 컴포넌트의 종류
- 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
- 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
- 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있다.
- 클래스형 컴포넌트와 컴포넌트의 주기에 대해서도 알고 있어야 합니다.

2. 컴포넌트 이름 짓기
- 이름은 항상 대문자로 시작합니다.
- 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문입니다.
- 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

3. 컴포넌트의 렌더링
- 렌더링의 과정은 다음 코드와 같습니다.  

```
    function Welcome(props) {
        return <h1>안녕, {props.name}</h1>;      
    }  

    const element = <Welcome name="인제" />;
    ReactDom.render(
        element
        document.getElementById(`root`)
    );
```

<h3>Props에 대해 알아보기</h3>

1. Props의 특징  
- 읽기 전용입니다. 변경할 수 없다는 의미입니다.  
- 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.  
- 모든 리액트 컴포넌트는 그들의 props에 관해서는 Pure함수 같은 역할을 한다.  

2. Props 사용법
- JSX에서는 key-value쌍으로 props를 구성합니다.  

 ```  
    function App(props) {  
        return (  
            <Profile  
                name="소플"  
                introduction="안녕하세요,소플입니다."  
                viewCount={1500}  
            />  
        );  
    }  
 ```
- JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있다고 배웠습니다.  
- JSX를 사용하지 않는 경우 props의 전달 방법은 createElement()함수를 사용하는 것입니다.  

3. 컴포넌트 합성

- 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.
- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누너 구현할 수 있습니다.

4. 컴포넌트 추출  

- 복잡한 컴포너트를 쪼개서 여러 개의 컴포넌트를 나눌 수도 있습니다.  
- 큰 컴포너트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.  
- 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.  



<h2>2023년 3월 23일(목)</h2>
 
리액트 프로젝트 생성방법  
npx create-react-app “프로젝트 이름”  
cd “폴더 이름”  
npm start  

JSX는 JavaScript를 확장한 문법이다.  

1. JSX는 객체를 표현합니다.  
- Babel은 JSX를 React,createElement() 호출로 컴파일합니다.  
```
const element = (  
	<h1 className= “greeting”>  
		Hello, world!  
	</h1>  
);  
```
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
    ```javascript
    const element = <div tabIndex="0"></div>
    ```  

    중괄호 사이에 자바스크립트 코드를 넣으면 됨!  
    ```javascript
    const element = <img src={user.avatarUrl}></img>
    ```  

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
