import React from "react"
import "./Article.css"
const Article3 = () =>{
 return (
 <div>
  <div className="topnews_main">
    <div className="topnews_jpg1">
    <img src={process.env.PUBLIC_URL + '/img/조코비치.jpg'}></img>
    </div>
    <div className="jpg_content">
    윔블던 16강에 오른 조코비치. [신화통신=연합뉴스]
    </div>
  </div>
  <div className="topnews_content">
  <div className="topnews_part">
  디펜딩 챔피언 노박 조코비치(3위·세르비아)가 윔블던 테니스대회 16강에 올랐다.

톱 시드의 조코비치는 1일(한국시간) 영국 윔블던의 올잉글랜드클럽에서 열린 2022 윔블던 남자 단식 3회전에서 미오미르 케츠마노비치(30위·세르비아)를 1시간 53분 만에 3-0(6-0, 6-3, 6-4)으로 제압했다.
</div>
<div className='topnews_part'>
대회 24연승을 달린 조코비치는 앞으로 4번 더 이기면 4연패와 통산 7번째 우승을 달성한다. 또 메이저 대회 통산 우승 횟수를 21회로 늘려 이 부문 최다 22회 기록을 보유한 라이벌 라파엘 나달(4위·스페인)과 격차를 좁힌다. 나달은 이번 대회에서 2번 시드를 배정 받았다. 조코비치와 나달 둘 다 패하지 않으면 대회 결승전에서 맞붙는 대진이다. 조코비치의 16강 상대는 팀 판헤이토번(104위·네덜란드)이다.
</div>
<div className="topnews_part">

조코비치가 8강에 오를 경우 대회 첫 고비를 맞을 전망이다. '제2의 나달'로 불리는 카를로스 알카라스(7위·스페인)를 만날 가능성이 크기 때문이다. 알카라스는 같은 날 오스카 오테(36위·독일)를 1시간 38분 만에 3-0(6-3, 6-1, 6-2)으로 꺾고 16강에 진출했다. 알카라스는 지난해 US오픈과 올해 프랑스오픈에서 8강에 오른 신예다.

</div>

<div className="topnews_part">
메이저 대회, ATP 파이널스 다음으로 등급이 높은 마스터스 1000 대회인 5월 마드리드오픈에서 나달, 조코비치, 알렉산더 즈베레프(2위·독일)를 연이어 꺾고 우승해 주목받았다. 알카라스는 16강에서 야니크 시너(13위·이탈리아)를 상대한다.
</div>
  </div>
 </div>
 )
}

export default Article3;