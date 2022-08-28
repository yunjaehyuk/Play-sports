import React,{Fragment} from 'react';
import  './MainArticle.css'
const MainArticle = () => {
  return (
<div>

  <Fragment>

  <div className="topnews_title">
  PSG와 계약 종료까지 1년… 메시, <br></br>
  바르사 복귀 가능성은?
  </div>
  <div className="profile">
    <div className="reporter"> 
    <img src={process.env.PUBLIC_URL + '/img/spotv.jpg'} class="reporter_avatar" alt="spotv"/>
    <div className="reporter_name">
      맹봉주 기자
      
        </div>
    </div>
  <div className="news_time">
    June 11 11:49 am
    </div>
    </div>
  <div className="topnews_main">
    <div className="topnews_jpg1">
    <img src={process.env.PUBLIC_URL + '/img/messi2.jpg'} alt="messi2" />
    </div>
    <div className="jpg_content">
    리오넬 메시의 PSG(파리생제르맹) 이적 발표는 많은 축구 팬들에게 충격을 안겼다. 어린 시절부터 바르셀로나에서만 뛰며 세계 최고 선수로 거듭난 메시다. 778경기 672골로 바르셀로나 역대 최다 득점 선수이기도 하다.
    </div>
  </div>
  <div className="topnews_content">
  <div className="topnews_part">
  재정난에 허덕인 바르셀로나는 울며 겨자 먹기로 메시를 보냈다. PSG는 메시와 2023년 6월까지 계약하며 네이마르, 킬리안 음바페와 빅3를 만들었다. 이제 메시와 계약 종료까지 1년 남았다.

유럽 현지에선 메시의 바르셀로나 복귀설이 조금씩 나오고 있다. 몸은 파리에 있지만 바르셀로나를 향한 메시의 애정은 여전하다. 36살로 적지 않은 나이인 만큼 바르셀로나에서 선수생활을 마무리하려는 의지가 강하다. 
<div>
바르셀로나도 메시가 돌아온다면 두 팔 벌려 환영이다.

후안 라포르타 바르셀로나 회장은 "메시가 FA(자유계약선수)로 풀릴 때만 영입이 가능하다. 이적료를 낼 상황이 아니다"며 이적료를 주고 데려올 확률은 없다고 선을 그었다. 바꿔 말하면 PSG와 계약이 종료되는 내년 여름엔 가능성이 높다는 걸 의미한다.
</div>
</div>
<div className="topnews_part">
결정권은 사비 에르난데스 감독에게 달려있다. 사비 감독은 선수 시절 메시와 바르셀로나 전성기를 이끌었다. 개인적인 사이는 좋다.

하지만 팀 재건에 힘쓰고 있는 사비 감독은 90분 내내 상대를 압박해줄 젊은 선수를 원한다. 메시 영입은 사비 감독 구상과 전혀 다른 방향일 수 있다.

바르셀로나 복귀 외에도 메시 앞에는 다양한 경우의 수가 있다. 큰돈을 벌 수 있는 미국(MLS) 진출, 아르헨티나 고향 팀과 계약, 프리미어리그 이적, PSG와 재계약도 여러 옵션 중 하나다.
</div>

<div className="topnews_jpg2">
<img src={process.env.PUBLIC_URL + '/img/messi3.jpg'} alt="messi3"/> 
</div>
<span className='topnews_jpg2_content'>
▲ 지난해 여름, 메시가 PSG 이적을 발표했을 당시 모습. 메시는 많은 눈물을 흘렸다.
</span>
<div className="topnews_part">
미국 스포츠 매체 'ESPN'은 11일(한국시간) 여러 각도로 메시의 다음 행선지를 분석했다. 먼저 미국, 아르헨티나행에 대해 "메시는 늘 세계 최고 선수들과 경쟁했다. 유럽보다 한참 떨어지는 미국, 아르헨티나에서 뛸 수 있을지 모르겠다. 아르헨티나행은 자녀 문제와도 직결된다. 메시에겐 고향이지만 자녀들의 고향은 바르셀로나다. 치안과 교육 등 축구 외적인 점을 보면 아르헨티나를 안 갈 것 같다"고 회의적인 시선을 보냈다.

프리미어리그 이적도 마찬가지. PSG와 재계약에 대해선 여지를 남겼다.
</div>
<div className="topnews_part">
'ESPN'은 "메시를 데려갈 만한 프리미어리그 팀은 맨체스터 시티와 맨체스터 유나이티드 정도다. 맨시티는 1년 사이 엘링 홀란드, 잭 그릴리시를 영입했다. 전력상 메시가 필요 없다. 맨유엔 메시 라이벌인 크리스티아누 호날두가 있다"며 "PSG 재계약은 다음 시즌 성과에 달렸다.

메시가 파리에서 재밌게 축구한다면 충분히 성사 가능하다. 일단 PSG는 메시와 연장 계약을 추진할 것"이라고 알렸다.
</div>
<div>
<div className='topnews_jpg1'></div>
</div>

  </div>
</Fragment>
</div>
)
}

export default MainArticle;