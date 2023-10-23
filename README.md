# 목표달성 커뮤니티를 활용한 건강관리 어플리케이션, BodyShare

## 📎   프로젝트 목차

---
- [1️⃣ 프로젝트 소개](#1️⃣-프로젝트-소개)
- [2️⃣ 기술 스택](#2️⃣-기술-스택)
- [3️⃣ 개발 일정](#3️⃣-개발-일정)
- [4️⃣ 개선점](#4️⃣-개선점)
- [5️⃣ 느낀점](#5️⃣-느낀점)

---

### 1️⃣ 프로젝트 소개

📆  일정 : 23.09.01 - 23.10.13 (총 6주)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

👨‍👨‍👦‍  <b>인원 (총 5인)</b>

🧑 최동윤 : 팀장, 회원 페이지

🧑 장준범 : 부팀장, 커뮤니티 페이지

👩 안은비 : 마이 페이지

👩 이경민 : 분석 페이지

🧑 이상민 : 메인 페이지

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

🎨  <b>컨셉</b> : 차분한 느낌을 주는 파랑계열의 색을 메인컬러로 사용

- 메인컬러1 : #556FFF

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

‼️  <b>기획 배경</b> 

- 자신의 운동 기록 및 라이프 스타일을 공유하는 문화 형성

- 어플을 통해 운동 및 식단 기록 > 칼로리 정보 제공

- 개인의 건강관리

- 커뮤니티를 통해 기록 공유 및 소통 > 격려와 동기부여

- 건강한 운동 습관 및 개인의 목표 달성

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

⚙️  <b>주 기능</b>

- 로그인 세션이 만료될 시, 사용자 정보를 초기화하고 로그인 페이지로 이동

- GlobalStyle(다크모드, 스크롤바)

- React Hook Form -> FormData 전달 및 유효성 검사

- react-calendar -> 캘린더 기능

- 운동 및 식단 기록 + 시각화 데이터 제공

- 업로드한 이미지 미리보기 기능

### 2️⃣  기술 스택
<b>Communication</b> <br/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Google Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<b>Frontend</b> <br/>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<b>Backend</b> <br/>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br/>
<details><summary> <b> 상세 기술스택 및 버전</b> </summary>

|     구분     |      기술스택     |     버전   |
|--------------| ------------------|------------|
| 형상관리      | GitHub            | \-         |
| 커뮤니케이션  | Google Drive      | \-         |
|              | Slack             | \-         |
|              | Figma             | \-         |
|              | Discord           | \-         |
| OS           | Window10          | \-         |
|              | Mac               | \-         |
| IDE          | Visual Studio Code| 1.67.1     |
| Frontend     | HTML5             | \-         |
|              | CSS3              | \-         |
|              | JavaScript        | \-         |
|              | React             | 18.0.8     |
|              | Recoil            | 0.7.2      |
|              | styled-components | 5.3.5      |
|              | google-charts     | 4.0.1      |
|              | react-hook-form   | 7.46.1     |
| Backend      | express           | 4.16.1     |
|              | multer            | 1.4.5      |
|              | mysql2            | 3.6.1      |
|              | nodemon           | 3.0.1      |
| Database     | MySQL Workbench   | 8.0.x      |
</details>

---


### 3️⃣  개발 일정
>
> 1주차
> - 기획, 목업디자인, DB, 요구사항 분석, EER 다이어그램 작성, 데이터 분류 및 정리

> 2주차-1
> - URL 정의서 작성
> - Frontend : 공통 부분 구현 & 각 페이지 별 기본적인 화면 구현
> - DB : 설계 마무리 및 구현

> 2주차-2
> - Frontend : 부족한 부분 화면 구현
> - Backend : 각 테이블 별 서버 연동 기초 작업

> 3주차-1
> - Frontend : 로그인 기능 구현, 홈/분석 시각화 자료 구현, 커뮤니티 상세페이지 화면구현 Backend : 로그인, 홈, 분석, 커뮤니티, 마이페이지 기본적인 데이터 연동

> 3주차-2
> - Frontend : 부족한 부분 마무리, 유효성 검사 적용
> - Backend : 분석(운동/식단기록) CRD, 커뮤니티(게시물, 댓글) CR구현, 그 외 페이지 나머지 서버 연동
> - 오류 : 페이지 별 오류, 작동되지 않는 부분 수정

> 4주차
> - 개발 마무리, 오류 수정 및 피드백 반영, 테스트

> 5주차
> - 발표 준비(포트폴리오) 및 산출물 정리, 코드 전체 리팩토링

> 10월 13일 (금)
> - 프로젝트 경진 대회


### 4️⃣ 개선점
>
>- 챌린지 기능
>1) 사용자들은 자체적으로 챌린지를 생성할 수 있습니다. 챌린지에 참여하는 것은 사용자들에게 목표를 설정하고 다른 참여자들과 목표 달성할 수 있는 기회를 제공합니다.
>2) 챌린지에 대한 정보를 시각적으로 표시하는 달성률을 제공합니다. 사용자들은 챌린지 진행 상황, 목표 달성률 등을 확인할 수 있습니다.

>- 커뮤니티 내 좋아요 기능
>1) 사용자들은 커뮤니티 내에서 다른 사용자가 게시한 게시물에 좋아요를 누를 수 있습니다. 이를 통해 게시물 작성자는 자신의 글이 얼마나 많은 관심을 받았는지 파악할 수 있습니다.


### 5️⃣  느낀점
>
>- 최동윤 : 프로젝트를 통해 기획 단계의 중요성을 다시 한 번 깨닫게 되었고,  React 와 서버 그리고 Database 부분에서 모르는 부분이 많았지만 찾아가면서 하나씩 이루어내는 값진 경험을 할 수 있어서 너무 좋았습니다.

>- 장준범 : 지금까지 겪었던 프로젝트 경험을 바탕으로 제 모든 실력을 쏟아냈습니다.
후회없이 마무리하기 위해 처음부터 끝까지 최선을 다했고, Backend 작업도 배울 수 있었습니다. 열심히 따라와준 팀원분들 감사합니다.

>- 이상민 : 개발하면서 데이터 처리, API 요청, 데이터 필터링, 그리고 차트 데이터의 동적 업데이트와 같은 기능들을 구현하면서 효과적으로 사용하는 법을 배웠습니다. 향후에는 이러한 경험을 기반으로 더 나은 개발을 하기위해 노력하고 싶습니다.

>- 이경민 : 비전공자로서 관련 지식을 전혀 갖고 있지 않아 프로젝트 전부터 팀에 누가 될까봐 걱정을 많이 하였습니다. 그러나 팀장님과 팀원분들의 도움으로 어려운 과정들을 잘 헤쳐나갈 수 있었습니다. 다시 한번 팀원분들께 감사드립니다. 

>- 안은비 : 앞으로의 프로젝트에서는 더 효율적인 일정 관리를 위해 노력하겠습니다.
각 팀원은 프로젝트에서 얻은 경험과 배운 점을 토대로 개인적인 성장을 이루었으며, 팀 전체로서 더 나은 프로젝트를 진행하고자 합니다.



