import React from "react";
import {
  faBars,
  faFootball,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import classes from './HomeNews.css'
const Sports = () => {
  let navigate = useNavigate();
  return (
    <React.Fragment>

    <div className={['HomeNews']}onClick={()=>{navigate('/MainNews')}}>
    <div className={['main-bg']}></div>
    <div className={['subject']} >
      <div className={['subject_icon']}>
    <FontAwesomeIcon icon={faFutbol} />
    </div>
    <span className={['subject_title']}>FOOTBALL</span>
    </div>
    <div className={['article']}>
        <span className={['article_title']}>
        PSG와 계약 종료까지 1년…메시, 바르사 복귀 가능성은?
        
        </span>
        <div className={['article_content']}>
        <span>
        리오넬 메시의 PSG(파리생제르맹) 이적 발표는 많은 축구 팬들에게 충격을 안겼다. 어린 시절부터 바르셀로나에서만 뛰며 세계 최고 선수로 거듭난 메시다. 778경기 672골로 바르셀로나 역대 최다 득점 선수이기도 하다....
        </span>
        </div>
    </div>
    

  </div>
  <div className={['SportNews']}>
    <div className={['SportNews_top']}>
      <div className={['SportNews_icon']}>
    <FontAwesomeIcon icon={faFootball} size='xl'/>
      </div>
      <div className={['SportNews_title']}>TOP NEWS</div>
    </div>

    <div className="Top_News">
      <div className={['SportTopNews']}onClick={()=>{navigate('/News1')}}>
      <div className={['SportTopNews_icon']}>
    <FontAwesomeIcon icon={faBars} size = 'xl'/>
      </div>
      <span>살라, 리버풀과 계약 연장…2025년까지</span>
      </div>
      <div className={['SportTopNews']}onClick={()=>{navigate('/News2')}}>
      <div className={['SportTopNews_icon']}>
    <FontAwesomeIcon icon={faBars} size = 'xl'/>
    </div>
       <span>캘빈 필립스: 잉글랜드 미드필더, 맨체스터 시티와 6년 계약</span>
      </div>
      <div className={['SportTopNews']}onClick={()=>{navigate('/News3')}}>
      <div className={['SportTopNews_icon']}>
    <FontAwesomeIcon icon={faBars} size = 'xl'/>
      </div>
        <span>조코비치 윔블던 16강 진출, 4연패까지 4승 남았다</span>
      </div>
      <div className={['SportTopNews']}onClick={()=>{navigate('/News4')}}>
      <div className={['SportTopNews_icon']}>
    <FontAwesomeIcon icon={faBars} size = 'xl'/>
    </div>
        <span>맨유, 말라시아 영입 근접…아스날에 희소식?</span>
      </div>
      <div className={['SportTopNews']}onClick={()=>{navigate('/News5')}}>
      <div className={['SportTopNews_icon']}>
    <FontAwesomeIcon icon={faBars} size = 'xl'/>
    </div>
      <span>UFC 276: 이스라엘 아데산야, 자레드 캐노니어 꺾고 미들급 타이틀 유지</span>
      </div>
      <div className={['SportTopNews']}onClick={()=>{navigate('/News6')}}>
      <div className={['SportTopNews_icon']}>
    <FontAwesomeIcon icon={faBars} size = 'xl'/>
    </div>
     <span>인도서 '몸 값' 7兆 뚫었다…크리켓 경기 중계권이 뭐길래</span>
      </div>
  </div>
  </div>
  <div>
  
 </div>
    </React.Fragment>
  )
}

export default Sports