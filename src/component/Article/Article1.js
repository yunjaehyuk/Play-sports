import React from "react";
import styles from "./Article.module.css";
const Article1 = () => {
  return (
    <div>
      <div className={styles.topnews_main}>
        <div className={styles.topnews_jpg1}>
          <img src={process.env.PUBLIC_URL + "/Image/salah.jpg"} />
        </div>
        <div className={styles.jpg_content}>
          이집트 축구 스타 살라. 2022.06.05.
        </div>
        <div className={styles.topnews_content}>
          <div className={styles.topnews_part}>
            손흥민(토트넘)과 함께 2021~2022시즌 잉글랜드 프로축구
            프리미어리그(EPL) 공동 득점왕을 수상한 모하메드 살라(이집트)가
            리버풀과 2025년까지 함께 한다.
            <div className={styles.topnews_part}>
              리버풀 구단은 2일(한국시간) "살라와 새로운 장기 계약을 맺었다"고
              발표했다. 계약의 구체적인 내용은 공개하지 않았지만 현지 언론은 3년
              계약을 연장해 2025년까지라고 전했다. 영국 BBC는 "구단 역대 최고인
              주급 35만 파운드(약 5억5000만원) 이상을 조건으로 3년 계약을 새롭게
              했다"고 했다.
            </div>
          </div>
          <div className={styles.topnews_part}>
            이집트 국가대표 공격수 살라는 2017년 AS로마(이탈리아)를 떠나 리버풀
            유니폼을 입었다. 2017~2018시즌 EPL에 데뷔해 5시즌 동안 총 254경기에
            출전해 156골을 터뜨린 득점 기계다. 2019~2020시즌 EPL 우승,
            2018~2019시즌 유럽축구연맹(UEFA) 챔피언스리그 우승 등에 일조했다.
          </div>

          <div className={styles.topnews_part}>
            지난 시즌에는 리그에서 23골을 터뜨리며 손흥민과 함께 공동 득점왕에
            올랐다. 살라는 "계약을 새롭게 하는데 시간이 좀 걸렸지만 이제 모든 게
            완료됐다. 다음 행보에 집중해야 한다"고 말했다.
          </div>
          <div className={styles.topnews_part}>
            이어 "지난 5~6년 동안 팀은 항상 위로 올라갔다. 지난 시즌에는 4관왕에
            가까웠지만 시즌 막판에 두 개의 우승을 잃었다"며 "나는 우리가 모든
            것을 위해 싸울 좋은 위치에 있다고 생각한다. 좋은 비전을 갖고 모든
            것을 위해 다시 뛰어야 한다"고 보탰다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article1;
