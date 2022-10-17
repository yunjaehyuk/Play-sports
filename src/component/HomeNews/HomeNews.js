import React from "react";
import {
  faBars,
  faFootball,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from "./HomeNews.module.css";
const Sports = () => {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div
        className={styles.HomeNews}
        onClick={() => {
          navigate("/MainNews");
        }}
      >
          <img src="img/messi.jpg" className={styles.mainimage} />
        <div className={styles.subject}>
          <FontAwesomeIcon icon={faFutbol} />
          <span className={styles.subject_title}>FOOTBALL</span>
        </div>
        <div className={styles.article}>
          <span className={["article_title"]}>
            PSG와 계약 종료까지 1년…메시, 바르사 복귀 가능성은?
          </span>
          <div className={styles.article_content}>
            <span>
              리오넬 메시의 PSG(파리생제르맹) 이적 발표는 많은 축구 팬들에게
              충격을 안겼다. 어린 시절부터 바르셀로나에서만 뛰며 세계 최고
              선수로 거듭난 메시다. 778경기 672골로 바르셀로나 역대 최다 득점
              선수이기도 하다....
            </span>
          </div>
        </div>
      </div>
      
        <section className={styles.SportNews}>
          <div className={styles.SportNews_top}>
            <div className={styles.SportNews_icon}>
              <FontAwesomeIcon icon={faFootball} size="xl" />
            </div>
            <div className={styles.SportNews_title}>TOP NEWS</div>
          </div>

          <div className={styles.Top_News}>
            <div
              className={styles.SportTopNews}
              onClick={() => {
                navigate("/News1");
              }}
            >
              <div className={styles.SportTopNews_icon}>
                <FontAwesomeIcon icon={faBars} size="xl" />
              </div>
              <span>살라, 리버풀과 계약 연장…2025년까지</span>
            </div>
            <div
              className={styles.SportTopNews}
              onClick={() => {
                navigate("/News2");
              }}
            >
              <div className={styles.SportTopNews_icon}>
                <FontAwesomeIcon icon={faBars} size="xl" />
              </div>
              <span>
                캘빈 필립스: 잉글랜드 미드필더, 맨체스터 시티와 6년 계약
              </span>
            </div>
            <div
              className={styles.SportTopNews}
              onClick={() => {
                navigate("/News3");
              }}
            >
              <div className={styles.SportTopNews_icon}>
                <FontAwesomeIcon icon={faBars} size="xl" />
              </div>
              <span>조코비치 윔블던 16강 진출, 4연패까지 4승 남았다</span>
            </div>
            <div
              className={styles.SportTopNews}
              onClick={() => {
                navigate("/News4");
              }}
            >
              <div className={styles.SportTopNews_icon}>
                <FontAwesomeIcon icon={faBars} size="xl" />
              </div>
              <span>맨유, 말라시아 영입 근접…아스날에 희소식?</span>
            </div>
            <div
              className={styles.SportTopNews}
              onClick={() => {
                navigate("/News5");
              }}
            >
              <div className={styles.SportTopNews_icon}>
                <FontAwesomeIcon icon={faBars} size="xl" />
              </div>
              <span>
                UFC 276: 이스라엘 아데산야, 자레드 캐노니어 꺾고 미들급 타이틀
                유지
              </span>
            </div>
          </div>
        </section>
      
    </React.Fragment>
  );
};

export default Sports;
