import React from "react";
import styles from "./Article.module.css";

import { useSelector } from "react-redux";

const Article2 = () => {
  let state = useSelector((state) => state);
  return (
    <div>
      <div className={styles.topnews_main}>
        <div className={styles.topnews_jpg1}>
          <img src={process.env.PUBLIC_URL + "/img/Kalvin.jpg"}></img>
        </div>
        <div className={styles.jpg_content}>
          캘빈 필립스는 2015년 데뷔 이후 리즈에서 14골을 터뜨렸다.
        </div>
        <div className={styles.topnews_content}>
          <div className={styles.topnews_part}>
            맨체스터 시티는 리즈 유나이티드의 미드필더 캘빈 필립스를 4,500만
            파운드에 영입했습니다. 26세의 이 잉글랜드 국가대표는 프리미어리그
            챔피언과 6년 계약을 맺었습니다. 이상을 조건으로 3년 계약을 새롭게
            했다"고 했다.
          </div>
          <div className={styles.topnews_part}>
            그는 에를링 홀란드와 스테판 오르테가 모레노가 합류한 후 펩
            과르디올라의 세 번째 여름 영입이 되었습니다. Phillips는 "맨체스터
            시티에 합류하게 되어 매우 기쁩니다. 시티는 다시 한 번 미국 최고의
            팀임을 증명했습니다."라고 말했습니다.
          </div>
          <div className={styles.topnews_part}>
            Elland Road에서 8시즌 동안 235경기를 뛰었던 필립스는 리즈와의 계약이
            아직 2년 남았습니다. 그는 "맨시티는 세계 최고의 선수로 인정받는 펩
            과르디올라 감독과 놀라운 스쿼드를 보유하고 있다"고 말했다. 그는 "펩
            밑에서 뛰고 그와 그의 코칭스태프와 환상적인 팀의 일원으로 배울 수
            있다는 것은 내가 믿을 수 없을 정도로 흥분되는 전망"이라고 덧붙였다.
          </div>
          <div className={styles.topnews_part}>
            Phillips는 2020년 9월에 국가대표로 데뷔했으며 연기된 Euro 2020
            토너먼트에서 모든 경기에 출전하여 2020-21 잉글랜드 남자 올해의
            선수로 선정되었습니다. 전 감독인 마르셀로 비엘사 밑에서 핵심
            선수였던 필립스는 리즈가 16년 만 에 프리미어리그로 승격 된 2019-20
            시즌 동안 챔피언십에서 37경기를 뛰었습니다 . 그는 지난 시즌 햄스트링
            부상으로 오랜 기간 경기에 출전하지 못했으며 리그 20경기에 출전하는
            데 그쳤다.
          </div>
          <div className={styles.topnews_part}>
            시티의 풋볼 디렉터인 치키 베지리스타인은 다음과 같이 덧붙였습니다.
            "그의 경기력, 패스 능력, 에너지, 추진력은 그를 무시무시한 재능으로
            만들어주며 그는 승리에 대한 환상적인 의지를 가진 선수입니다. "우리는
            그가 우리 스쿼드에 훌륭하게 추가될 것이며 그가 우리 게임을 완벽하게
            보완할 것이라고 생각합니다."
          </div>
          <div className={styles.topnews_part}>
            <h3>'너는 나에게 모든 것을 주었다'</h3>
            필립스는 탈퇴가 확정된 후 리즈와 팬들에게 공개서한을 보내 전 보스
            비엘사를 특별히 칭찬했다. 필립스는 "특별한 한 사람인 마르셀로를
            언급하지 않고는 리즈를 언급할 수 없다"고 썼다. "내가 만난 최고의
            감독입니다. 그는 클럽에 생명을 불어넣었고, 선수들과 클럽에 관련된
            모든 사람들에게 우리가 16년 만에 프리미어 리그로 돌아갈 수 있을 만큼
            충분히 훌륭하다는 믿음을 준 사람입니다.
          </div>

          <div className={styles.topnews_part}>
            "당신은 클럽에 모든 것을 주었을 뿐만 아니라 경기장 안팎에서 내가
            오늘날의 사람이 되는 데 필요한 모든 것을 주었습니다." 그는 또한
            새로운 감독 Jesse Marsch를 "믿을 수 없는" 보스이자 "더 나은
            사람"이라고 환영했습니다. 필립스는 팬들이 "자신의 꿈을 쫓기 위해"
            떠나는 그의 결정을 팬들이 이해하길 바란다고 덧붙였다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article2;
