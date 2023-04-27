<h1>임해준</h1>

<h2>2023년 4월 27일 (목)</h2>

<h3>이벤트 핸들러</h3>

1. 이벤트 처리하기

- DOM에서 클릭 이벤트를 처리하는 예제 코드.

```js
    <button onclick="activate()">
        Activate
    </button>
```

- React에서 클릭 이벤트 처리하는 예제 코드

```js
    <button onClick={activate}>
        Activate
    </button>
```
- 둘의 차이점은
    1. 이벤트 이름이 onclick에서 onClick으로 변경.(Camel case)
    2. 전달하려는 함수는 문자열에서 함수 그대로 전달.

- 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러(Event Handler)" 라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너(Event Listener)"라고 부르기도 합니다.

2. Arguments 전달하기

- 함수를 정의할 때는 파라미터(Parameter) 혹은 매개변수, 함수를 사용할 때는 아귀먼트(Argument) 혹은 인수라고 부릅니다.  
- 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.

```js
    <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
    <button onClick={this.deleteItem.bind(this.id)}>삭제하기</button>
```

- 위의 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했습니다.  
- event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.  
- 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달됩니다.  
- 첫 번째 코드는 명시적으로 event를 매개변수로 넣어 주었고, 두 번째 코드는 id 이후 두 번째 매개변수로 event가 자동 전달됩니다. (이 방법은 클래스형에서 사용하는 방법입니다.)  
- 함수형 컴포넌트에서 이벤트 핸들러에 매개변수를 전달할 때는 아래 코드와 같이 합니다.  

```js
    function MyButton(props) {
        const handleDelete = (id, event) => {
            console.log(id, event.target);
        };

        return(
            <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>
        );
    }
```

<b>요약</b>  

- 이벤트린?
    - 사용자가 버튼을 클릭하는 등의 사건을 의미

- 이벤트 처리하기
    - DOM의 이벤트
        - 이벤트의 이름을 모두 소문자로 표기
        - 이벤트를 처리할 함수를 문자열로 전달
    - 리액트의 이벤트
        - 이벤트의 이름을 카멜 표기법으로 표기
        - 이벤트를 처리할 함수를 그대로 전달
    - 이벤트 핸들러
        - 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수
        - 이벤트 리스너라고 부르기도 함
        - 클래스 컴포넌트
            - 클래스의 함수로 정의하고 생성자에서 바인딩해서 사용
            - 클래스 빌드 문법도 사용가능
        - 함수 컴포넌트
            - 함수 안에 함수로 정의하거나 arrow function을 사용해서 정의
- Arguments 전달하기
    - Argument란?
        - 함수에 전달할 데이터
        - 파라미터 또는 매개변수라고 부르기도 함
    - 클래스 컴포넌트
        - arrow function(화살표 함수)를 사용하거나 Function.prototype.bind를 사용해서 전달  
    - 함수 컴포넌트
        - 이벤트 핸들러 호출 시 원하는 순서대로 매개변수를 넣어서 사용  

<h3>조건부 렌더링</h3>  

1. 조건부 렌더링이란?
    - 여기서 조건이란 우리가 알고 있는 조건문의 조건입니다.
    ```js
        function Greeting(props) {
            const IsLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <UserGreeting />;
            }
            return <GuestGreeting />;
        }
    ```

    - props로 전달 받은 isLoggedIn이 true이면 <UserGreeting />을, false면 <GuestGreeting />을 return합니다.  
    - 이와 같은 렌더링을 조건부 렌더링이라고 합니다.  

2. 엘리먼트 변수  
    - 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수입니다.  
    - 272페이지 코드처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고 있습니다.  
        ```js
            let button;
            if (isLoggedIn) {
                button = <LogoutButton onClick={handleLogoutClick} />;
            } else {
                button = <LogInButton onClick={handleLogInClick} />;
            }

            return (
                <div>
                    <Greeting IsLoggedIn={isLoggedIn} />
                    {button}
                </div>
            )
        ```  

3. 인라인 조건  

- 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다.   

    1. 인라인 if
        - if문을 직접 사용하지 않고, 동일한 효과를 내기위해 && 논리 연산자를 사용합니다.  
        - &&는 and 연산자로 모든 조건이 참일때만 참이 됩니다.  
        - 첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없습니다. 단축평가  

        ```js
            true && expression -> expression
            false && expression -> false

        {unreadMessages.length > 0 &&
            <h2>
                현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
            </h2>
        }
        ```
        - 판단만 하지 않는 것이고 결과 값은 그대로 리턴됩니다.  
    2. 인라인 if-else
        - 삼항 연산자를 사용합니다. (조건문 ? 참일 경우 : 거짓일 경우)  
        - 문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다.

    ```js
        function UserStatus(props) {
            return (
                <div>
                    이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.  
                </div>
            )
        }
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />  
                    {isLoggedIn
                        ? <LogoutButton onClick={handleLogoutClick} />
                        : <LoginButton onClick={handleLoginClick} />
                     }
                </div>
    ```    

4. 컴포넌트 렌더링 막기
    - 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴합니다.

    ```js
        function WarningBanner(props) {
            if (!props.warning) {
                return null;
            }

            return (
                <div>경고!</div>
            );
        }
    ```
6. 마치며

<b> 요약 </b>  

- 조건부 렌더링
    - 조건에 따라 렌더링의 결과가 달라지도록 하는 것
- 엘리먼트 변수
    - 리액트 엘리먼트를 변수처럼 저장해서 사용하는 방법
- 인라인 조건
    - 조건문을 코드 안에 집어넣는 것
    - 인라인 If
        - If문을 필요한 곳에 직접 집어넣어서 사용하는 방법  
        - 논리 연산자 &&를 사용 (AND 연산)  
        - 앞에 나오는 조건문이 true일 경우에만 뒤에 나오는 엘리먼트를 렌더링
    - 인라인 If-Else
        - If-Else문을 핑요한 곳에 직접 집어 넣어서 사용하는 방법
        - 삼항 연산자 ?를 사용
        - 앞에 나오는 조건문이 true면 첫 번째 항목을 리턴, false면 두 번째 항목을 리턴
        - 조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 때 사용
    - 컴포넌트 렌더링 막기
        - 리액트에서는 null을 리턴하면 렌더링되지 않음
        - 특정 컴포넌트를 렌더링하고 싶지 않을 경우 null을 리턴하면 됨

<h2>2023년 4월 13일 (목)</h2>  

<h3>요약</h3>

1. State  
    - State란?  
        - 리액트 컴포넌트의 변경 가능한 데이터  
        - 컴포넌트를 개발하는 개발자가 직접 정의해서 사용
        - state가 변경될 경우 컴포넌트가 재렌더링됨
        - 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함

    - State의 특징
        - 자바스크립트 객체 형태로 존재  
        - 직접적인 변경이 불가능 함  
        - 클래스 컴포넌트  
            - 생성자에서 모든 state를 한 번에 정리  
            - state를 변경하고자 할 때에는 꼭 setState()함수를 사용해야 함  
        - 함수 컴포넌트  
            - useState()훅을 사용하여 각각의 state를 정의  
            - 각 state별로 주어지는 set함수를 사용하여 state 값을 변경  

<h3>훅</h3>

1. 훅이란 무엇인가?

- <U>클래스형 컴포넌트</U>에서는 생성자(constructor)에서 state를 정의하고, setState()함수를 통해 state를 업데이트합니다.  
- <U>예전에 사용하던 함수형 컴포넌트</U>는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.  
- 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 <U>훅(Hook)</U>입니다.  
- 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 <U>동일하게 구현</U>할 수 있게 되었습니다.  
- Hook이란 <U>state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수</U>를 의미합니다.  
- 훅의 이름은 모두 <U>'use'</U>로 시작합니다.
- 사용자 정의 훅(custom hook)을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 시작해야만 훅으로 인식한다.   
 
2. useState
- useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook입니다.
- 다음 예제는 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트입니다.
- 하지만 증가는 시킬 수 있지만 증가할 때마다 재렌더링은 일어나지 않습니다.
- 이럴 때 state를 사용해야 하지만 함수형에는 없기 때문에 useState()를 사용합니다.

```js
import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => count++}>
                클릭
            </button>
        </div>
    );
}
```

- useState() 함수의 사용법은 다음과 같습니다.
```js
    const [변수명, set함수명] = useState(초깃값);
```
- 첫번째 항목은 state의 이름(변수명)이고,
- 두번째 항목은 state의 set함수입니다. 즉 state를 업데이트 하는 함수입니다.
- 함수를 호출할 때 state의 초기값을 설정합니다.
- 함수의 리턴 값은 배열의 형태입니다.

```js
import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
```

3. useEffect

- useState와 함께 가장 많이 사용하는 Hook입니다.
- 이 함수는 <U>사이드 이펙트</U>를 수행하기 위한 것입니다.  
- 영어로 side effect는 부작용을 의미합니다. 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말합니다.  
- 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가깝습니다.
- 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다.  
- 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, <U>렌더링 중에는 작업이 완료될 수 없기 때문</U>입니다. 렌더링이 끝난 이후에 실행되어야 하는 작업들입니다.  
- <U>클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공</U>합니다.  
- 저자는 useEffect가 side effect가 아니라 effect에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해이다. 부작용의 부를 不로 생각했기 때문입니다.  
- Side effect는 不作用으로 '원래의 용도 혹은 목적의 효과 외에, 부수적으로 다른 효과가 있는 것'을 뜻하는 것입니다.

- 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말합니다.
- 예를 들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들입니다.

- useEffect()함수는 다음과 같이 사용합니다.
- 첫 번째 파라미터는 <U>이펙트 함수</U>가 들어가고, 두번째 파라미터로는 <U>의존성 배열</U>이 들어갑니다.
```js
    useEffect(이펙트 함수, 의존성 배열); //배열을 빈칸으로라도 선언은 해줘야 한다.  
```
- 의존성 배열은 이펙트가 의존하고 있는 배열로, <U>배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수</U>가 실행됩니다.
- 이펙트 함수는 <U>처음 컴포넌트가 렌더링 된 이후</U>, 그리고 <U>재 렌더링 이후</U>에 실행됩니다.
- 만약 이펙트 함수가 <U>마운트와 언마운트 될 때만 한 번씩 실행</U>되게 하고 싶으면 <U>빈 배열</U>을 넣으면 됩니다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러 번 실행되지 않습니다.
- 의존성 <U>배열을 생략</U>하는 경우는 <U>업데이트될 때마다 호출</U>됩니다.  

```js
import React, { useState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
    useEffect(() => {
        // 브라우저 API를 사용해서 document의 title을 업데이트 합니다.
        document.title = `총 ${count}번 클릭했습니다.`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() = > setCount(count + 1)}>
                클릭
            <button>
        </div>
    );
}
```
- 정리하면 다음과 같습니다.

```js
useEffect(() => {
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
    // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
    ∙∙∙

    return () => {
        // 컴포넌트가 마운트 해제되기 전에 실행됨
        ∙∙∙
    }
}, [의존성 변수1, 의존성 변수2, ...]);
```

4. useMemo  

- useMemo() 훅은 Memoizde value를 리턴하는 훅입니다.
- 이전 계산값을 갖고 있기 띠문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
- 이 훅은 렌더링이 일어나는 동안 실행됩니다.
- 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.
- 예를 들면 useEffect 사이드 이펙트 같은 것입니다.
- <U>메모이제이션(memoization)</U>은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, <U>이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술</U>이다. 동적 계획법의 핵심이 되는 기술이다.
```js
    const memoizedValue = useMemo(
        () => {
            // 연산량이 높은 작업을 수행하여 결과를 반환
            return computeExpensiveValue(의존성 변수1, 의존성 변수2);
        }
        [의존성 변수1, 의존성 변수2]
    );
```

- 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행됩니다.
- 의존성 배열을 넣지 않는 것은 의미가 없습니다.
- 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.
```js
    const memoizedValue = useMemo(
        () => computeExpensiveValue(a, b)
    );
```

5. useCallback

- useCallback() 혹은 useMemo()와 유사한 역할을 합니다.
- 차이점은 값이 아닌 함수를 반환한다는 점입니다.
- 의존성 배열을 파라미터로 받는 것은 useMemo와 동일 합니다.
- 파라미터로 받은 함수를 콜백이라고 부릅니다.
- useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반홥합니다.

```js
    const memoizedCallback = useCallback(
        () => {
            doSomething(의존성 변수1, 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    );
```

6. useRef

- useRef() 혹은 레퍼런스를 사용하기 위한 훅입니다.
- <U>레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미</U>합니다.
- useRef() 혹은 바로 이 레퍼런스 객체를 반환합니다.
```js
    const refContainer = useRef(초깃값);
```
- 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
- 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됩니다.
- 즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미입니다.

7. 훅의 규칙

- 첫 번째 규칙은 무조건 <U>최상의 레벨에서만 호출해야 한다</U>는 것입니다. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미합니다.
- 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됩니다.
- 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 합니다.
- 두 번째 규칙은 <U>리액트 함수형 컴포넌트에서만 훅은 호출</U>해야 한다는 것입니다.
- 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안 됩니다.
- 훅은 리액트 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다. (클래스형 컴포넌트에서는 사용불가)

8. 나만의 훅 만들기

- 필요 하다면 직접 훅을 만들어 쓸 수도 있습니다. 이것을 커스텀 훅이라고 합니다.

    1. 커스텀 훅을 만들어야 하는 상황
    - 예제 UserStatus 컴포넌트는 isOnline이라는 state에 따라서 사용자의 상태가 온라인인지 아닌지를 텍스트로 보여주는 컴포넌트입니다.

    ```js
    import React, { useState, useEffect } from "react";

    function UserStatus(props) {
        const [isOnline, setIsOnline] = useState(null);

        useEffect(() => {
            function handleStatusChange(status) {
                setIsOnline(status.isOnline);
            }

            ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
            return () => {
                ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
            };
        });

        if (isOnline === null) {
            return '대기중...';
        }
        return isOnline ? '온라인' : '오프라인';
    }
    ```

    2. 커스텀 훅 추출하기

    - 두개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수를 하나 만드는 방법을 사용합니다.  
    - 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있습니다.  
    - 이름을 use로 시작하고, 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 됩니다.  
    - 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출해낸 것입니다.  

    ```js
    import React, { useState, useEffect } from "react";

    function useUserStatus(userId) {
        const [isOnline, setIsOnline] = useState(null);

        useEffect(() => {
            function handleStatusChange(status) {
                setIsOnline(status.isOnline);
            }

            ServerAPI.subscribeUserStatus(userId, handleStatusChange);
            return () => {
                ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
            };
        });

        return isOnline;
    }
    ```

    - 한가지 주의할 점은 일반 컴포넌트와 마찬가지로 <U> 다른 훅을 호출하는 것은 무조건 커스텀 훅의 최상위 레벨에서만 해야</U> 합니다.
    - 커스텀 훅은 일반 함수와 같다고 생각해도 됩니다.
    - 다만 이름은 use로 시작하도록 한다는 것만 다릅니다.


<h2>2023년 4월 6일 (목)</h2>  

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
- 처음에 비해서 가독성이 높아진 것을 확인할 수 있습니다.  

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
  한 번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없습니다.
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
- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있습니다.

4. 컴포넌트 추출  

- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트를 나눌 수도 있습니다.  
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.  
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
        1. 이 것을 가능하게 하는 것이 바로 Virtual DOM이다.
        2. DOM(Document Object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스 입니다. 이 것은 W3C의 표준이다.
        3. Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법
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
