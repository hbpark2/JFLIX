# Jfilx

Learning React and ES6 by building a Movie Disovery App.

## Screens

-[] Home
-[] TV Shows
-[] Search
-[] Detail

### API Verbs

-[] Now playing(Movie)
-[] Upcoming(Movie)
-[] Top Rated(TV, Movies)
-[] Popular(TV, Movies)
-[] Airing today(TV)
-[] TV Show Detail
-[] Movie Detail
-[] Search(TV,Movies)

- 작업을 완료하신 후 `/client` 디렉토리 하위에 `README.md` 파일을 생성해두었으니 이곳에 작업 내역에 대한 상세한 설명을 담아주세요.
- 내용의 형태는 자유롭게 작성해 주시면 됩니다. (마크다운 권장)
- 프로그램 실행을 위해 별도 추가한 라이브러리가 있다면 설명과 버전 정보를 명시해 주세요.

## 1. node version

- 기존에 진행하던 개인프로젝트에서 높은 버전의 node를 사용하고 있었기 때문에 server를 install하는데 오류가 발생해 노드버전을 14.16.1로 다운그레이드 했습니다.

## 2. CRA vs Vite

- 최근에 알게된 vite의 엄청난 dev에서의 로딩속도 덕분에 사용하고 싶었지만, 아직은 vite에 대한 경험부족으로 cra를 사용했습니다.

## 3. Library

- react: 18
  - 3.29일에 업데이트된 18버전을 사용했습니다.
- react-router-dom: ^6.3.0
  - 확장성을 고려해 Router설정을 하기위해 설치했습니다.
  - 번들의 사이즈가 전 버전에 비해 많이 줄었기 때문에 v6를 사용했습니다.
- react-query: 3.34.19
  - API요청을 수월하게 하기위해 설치했습니다.

## 4. Structure (폴더 구조)

- 확장성을 고려해서 폴더구조를 구성했습니다.
  - ### API
    - Api와 관련한 파일들로 구성했습니다.
  - ### Components
    - 공통으로 쓰이는 컴포넌트(`Header, Footer, Loading`)로 구성했습니다.
  - ### Hook
    - 유용한 Hook을 모아둘 용도로 만든 폴더입니다.
      - API에 GET요청을 하는 Hook이 담겨있습니다.
  - ### Routes
    - ReDirect 및 확장성을 고려해 `CustomRouter`를 생성했습니다.
  - ### Screens
    - 화면,페이지 별로 폴더를 나눠서 정리할 목적으로 만들었습니다.
      - 내부구조는 기능을 담당하는 `Container`, UI를 담당하는 `Presenter`, 해당 페이지에서 사용하는 `components`폴더로 구성했습니다.
  - ### Utils
    - 프로젝트에서 재사용이 많을 함수를 담을 목적으로 폴더를 구성했습니다.

## 5. 요구사항 분석

- ### 영역 별로 적절하게 컴포넌트화를 진행해 주세요. (header, footer 등..)

  - `Header`, `Footer`
    - 각각 헤더와 푸터의 역할을 합니다.
  - `Search`
    - 검색관련된 기능과 UI를 담당하는 컴포넌트입니다.
  - `Card`
    - 요청해서 가져온 데이터로 반복되는 UI의 컴포넌트입니다.

- ### 데이터를 등록일(createdAt) 최신순으로 정렬합니다.

  - javascript의 내장함수 `sort`를 사용했습니다.

- ### 오늘 날짜 기준으로 등록일(createdAt)이 2일내 라면 new 데이터로 표시합니다.

  - ### 당일일 경우 'Today', 2일 내 데이터는 '${diff} days ago', 그 외는 'YYYY.MM.DD' 포맷으로 출력합니다.
    - `Screen/Home/components/Card.tsx` 컴포넌트내에 useEffect에서 구현했습니다.
    - `dateState`라는 state`{inNew: 2일 이내 인지 구분하는 boolean 값, date: 날짜위치에 들어갈 string}` 를 생성했습니다.
    - useEffect 내에서 javascript 내장함수Date()를 이용해 오늘의 날짜와 데이터의 날짜(createdAt)을 비교했습니다.
      - 2일 전 = `2 days ago`, 1일 전 = `1 day ago`, 당일 = `Today` 로 출력했습니다.

- ### 주어진 검색 인풋 박스에 대해 입력된 문자로 실시간 검색하는 기능을 구현합니다. (타이틀 또는 키워드에 입력된 검색어 포함)

  - ### 검색어 입력 즉시 필터링 되도록 합니다. (엔터 또는 검색버튼 클릭 없이)
  - `HomeContiner` 컴포넌트내에서 구현했습니다.
  - `deleteBlank` : 정규식을 사용해 문자열내에 공백과 내장함수`trim()`을 사용해서 앞뒤의 공백을 지우고 `toUpperCase()`를 사용해 대문자로 수정하는 함수를 만들었습니다.
  - `searchData` : 검색기능을 구현하는 함수를 만들었습니다. useEffect에서 인풋에 값이 입력 될 때 마다 실행되어야하기 때문에 useCallBack 훅을 사용했습니다.

- ### 실행 중 일어날 수 있는 오류에 대한 예외 처리를 해주셔야 합니다.
- `src/Api/ErrorGenerator.tsx` API요청시 예외처리를 구성했습니다.

