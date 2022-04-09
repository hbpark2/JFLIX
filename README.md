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
  
- ### 
