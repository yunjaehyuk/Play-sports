import React from "react";
import styles from "./Article.module.css";
const Article5 = () => {
  return (
    <div>
      <div>
        <div className={styles.topnews_main}>
          <div className={styles.topnews_jpg1}>
            <img src={process.env.PUBLIC_URL + "/img/UFC1.jpg"} />
          </div>
          <div className={styles.jpg_content}>
            아데산야(왼쪽)가 미들급 타이틀 방어에 성공했다.
          </div>
        </div>
        <p className={styles.topnews_content}>
          <div className={styles.topnews_part}>
            이스라엘 아데산야(Israel Adesanya)는 라스베이거스에서 열린 UFC
            276에서 미들급 타이틀을 유지하기 위해 5라운드 동안 자레드
            캐노니어(Jared Cannonier)를 꺾었다. 32세의 Adesanya는 뛰어난
            움직임과 거리 제어를 사용하여 Cannonier를 제치고 만장일치로 결정적인
            승리를 거뒀습니다
          </div>
          <div className={styles.topnews_part}>
            승리 후 뉴질랜드 선수는 이른 밤 Sean Strickland를 이겼던 Alex
            Pereira를 불렀습니다. "우리는 다음 사람이 누군지 압니다. 스케이트를
            타도록 하겠습니다."라고 Adesanya가 말했습니다. 이 싸움에는 MMA로
            전환하기 전에 브라질이 킥복싱에서 Adesanya를 2번 이겼다는 배경이
            있습니다. 코메인 이벤트에서 Alexander Volkanovski는 Max Holloway를
            만장일치로 이기고 페더급 타이틀을 유지했습니다. 호주인의 매끄러운
            움직임과 카운터 펀칭은 5 라운드 동안의 차이였습니다. 그가 미국
            상대를 세 번째로 꺾고 서사시적인 라이벌 관계를 마무리 지었습니다.
          </div>
          <h3 className={styles.subtitle1}>Adesanya는 쇼를 펼칩니다.</h3>
          <div className={styles.topnews_part}>
            Adesanya는 2019년 미들급 챔피언이 된 이후로 그가 상대한 모든 유형의
            전투기를 능가하며 디비전을 지배했습니다. 캐노니어에서 그는 지난
            6번의 UFC 경기 중 5번의 승리를 거둔 상대를 상대하며 맹렬한 KO승을
            거뒀습니다. 캐노니어의 득점에도 불구하고 그는 북메이커들과의 경기 전
            강력한 약자였으며 Adesanya는 아메리칸 게임에서 이전에 직면한 적이
            없는 것을 본 적이 없다고 말했습니다. 둘의 차이는 처음부터 뚜렷했다.
          </div>

          <div className={styles.topnews_part}>
            Cannonier가 강렬하게 케이지로 조깅하는 동안 Adesanya는 챙이 넓은
            모자를 쓰고 항아리를 들고 고개를 숙인 채 팔각형을 향해 천천히
            걸어가는 WWE의 The Undertaker에게 경의를 표했습니다.
          </div>
          <div className={styles.topnews_jpg2}>
            <img src={process.env.PUBLIC_URL + "/img/UFC2.jpg"} />
          </div>
          <div className={styles.topnews_jpg_content}></div>
          <div className={styles.topnews_part}>
            그것은 그를 UFC의 가장 큰 스타 중 한 명으로 만들어준 Adesanya의
            쇼맨십 측면에 대한 더 많은 증거였습니다. 두 선수가 다리 킥을
            교환하면서 T-Mobile Arena에서 Adesanya의 이름을 외치는 관중들과 함께
            경기가 시작되었습니다. 한판 승부가 계속되자 Adesanya는 두 번째
            라운드에서 일련의 바디 킥과 스트레이트 라이트로 캐노니어를 흔들면서
            더 많은 스트라이크를 위한 홈을 찾았습니다.
          </div>
          <div className={styles.topnews_part}>
            처음 몇 라운드 동안 Cannonier의 유일한 성공 경로는 Adesanya의 다리를
            차고 챔피언이 도전자의 출력 대부분을 성공적으로 피했기 때문입니다.
            후반 라운드 동안 Cannonier는 약간의 클린치 작업에 의존했지만
            Adesanya의 탁월한 테이크다운 방어는 많은 위험을 무효화했습니다.
          </div>
          <div className={styles.topnews_part}>
            Adesanya가 성공적인 포인트 승리를 거둠에 따라 관중들은 싸움이 끝날
            때까지 비웃었습니다. Adesanya는 Pereira에 대해 묻는 질문에 "스토리가
            마음에 든다. 내 인생 전체가 영화와 같다고 전에도 말했었다. "저는
            킥복싱에서 저를 이긴 사람을 만나고 있습니다. 그리고 지금 그는 제가
            왕이라는 것을 알고 저를 쫓고 있습니다. "내 등이 벽에 닿으면 어떻게
            되는지 알잖아. 그와 싸울 날이 기대된다."고 말했었다.
          </div>
        </p>
      </div>
    </div>
  );
};

export default Article5;
