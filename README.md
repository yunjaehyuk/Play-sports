<img src="./public/img/playlogo.jpg">

### Introduce

스포츠 플랫폼

Naver 스포츠에서 스포츠 정보를 얻는다는 것에 한계가 있다는 것을 깨달았습니다.

Play 웹페이지는 UI적인 면에서는 사용자들이 편안함을 느끼고 원하는 시간 때 경기시간을 계획하고 사람들이 자신이 필요하는 스포츠 뉴스, 경기, 팀 정보를 확인하는 서비스를 이 웹사이트에서 만들었습니다.

### 배웠던 것

여러 데이터를 렌더링하는 방법을 알게 되었다.

프론트엔드 아키텍처 다층화구조를 이해하고 이를 이용해 컴포넌트 구조를 설계할 수 있다.

조건부 내용 출력하여 원하는 내용을 볼 수 있다.

자식대 부모 통신 컴포넌트의 원리를 알게되어 이를 이해하고 있다.

사용자 입력을 받고 이를 리스닝하여 이를 제출 처리할 수 있다.

입력 정보 유효성 확인하여 로그인, 로그아웃을 할 수 있게 만들었다.

### 어려웠던 점과 이를 위해 노력했던 것

이전에 했던 프로젝트와의 아키텍처와 구성이 달라서 프로젝트를 계획할 떄 이전의 컴포넌트 파일 구조에 대해 생각하고 코딩을 하려고 하니 내 파일의 위치 잊거나 불필요하게 파일 위치를 옮겨야 하는 경우가 생겼다.
그래서 이를 위해 나만의 컴포넌트 분리 방식과 폴더 아키텍처를 만들기로 했다.

<h2>Folder architecture</h2>
<img src="./public/img/folder architecture.png">   
<p>
public -> image 파일 관리

components -> 공통 컴포넌트 관리

layout -> 레이아웃 틀 관리

pages -> 라우터 페이지

store -> redux 관리

UI -> UI 관리

app.js -> 컴포넌트 페이지 관리

index.js -> 컴포넌트의 root

  </p>
<figure class="half">
<img src="./public/img/home.jpg" width=280 height=300/>
<p>홈페이지</p>
<br/>
<img src="./public/img/News.jpg" width=280 height=300/>
<p>메인 뉴스페이지</p>
<br/>
</figure>
<figure class="half">
<img src="./public/img/Login.jpg" width=280 height=300/>
<p>로그인 페이지.</p>
<br/>
<img src="./public/img/Logout.jpg" width=280 height=300/>
<p>로그인과 로그아웃이 가능하다.</p>
<br/>
</figure>
<figure class="half">
<img src="./public/img/Game.jpg" width=280 height=300/>
<p>각 스포츠 리그별 일정이 확인 가능하다.</p>
<br/>
<img src="./public/img/More.jpg" width=280 height=300/>
<p>리그 별 순위 표를 확인할 수 있다.</p>
<br/>
</figure>
<figure class="half">
<img src="./public/img/Table.jpg" width=280 height=300/>
<br/>
<img src="./public/img/Calendar.jpg" width=280 height=300/>
<p>자신이 원하는 리그 일정을 기록할 수 있다.</p>
</figure>
