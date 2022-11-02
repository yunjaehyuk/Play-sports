import React from "react";
import styles from "./Article.module.css";
const Article4 = () => {
  return (
    <div>
      <div className={styles.topnews_main}>
        <div className={styles.topnews_jpg1}>
          <img src={process.env.PUBLIC_URL + "/img/manu.jpg"}></img>
        </div>
        <div className={styles.jpg_content}>
          타이럴 말라시아(페예노르트). 페예노르트 트위터 캡처
        </div>
        <div className={styles.topnews_content}>
          <div className={styles.topnews_part}>
            [풋볼리스트] 조효종 기자= 맨체스터유나이티드가 페예노르트 수비수
            타이럴 말라시아 영입 합의에 근접했다. 이는 아스널의 희소식이 될 거란
            전망이 나온다.
          </div>
          <div className={styles.topnews_part}>
            29일(한국시간) 스포츠 전문 매체 '애슬레틱'은 "맨유가 페예노르트와
            1,700만 유로(약 231억 원)에 달하는 말라시아 이적료 합의에 근접했다.
            기본 이적료 1,500만 유로(약 204억 원)에 옵션 금액 200만 유로(약 27억
            원)다. 재이적시 페예노르트가 이적료 일부를 받는 조항도 포함됐다"고
            전했다.
          </div>
          <div className={styles.topnews_part}>
            에릭 텐하흐 감독 체제로 팀을 재편 중인 맨유는 아약스 감독이었던
            텐하흐 감독이 친숙한 네덜란드 에레디비시 커넥션을 구축하려고 노력
            중이다. 아약스 시절 텐하흐 감독이 지도했던 바르셀로나 미드필더
            프렝키 더용 영입이 임박한 데 이어 네덜란드 왼쪽 풀백 말라시아 영입도
            추진하고 있다.
          </div>

          <div className={styles.topnews_part}>
            맨유가 올랭피크리옹행이 유력했던 말라시아를 가로채는데 성공했다는
            보도가 전해지자 '미러' 등 영국 현지 매체에서 맨유의 말라시아 영입이
            아스널에도 긍정적인 소식이 될 수 있다는 반응이 나오고 있다. 이는
            맨유와 아스널이 동시에 노리는 아르헨티나 수비수 리산드로
            마르티네스와 관련이 있다.
          </div>
          <div className={styles.topnews_part}>
            맨유는 당초 아약스의 율리안 팀버를 노렸으나 최근에는 팀버의 파트너
            마르티네스 영입에 눈을 돌린 것으로 알려졌다. 그런데 말라시아를
            영입했으니 마르티네스는 데려오지 않을 것이라는 관측이 제기된다.
            포지션 중복 문제는 아니다. 마르티네스가 왼쪽 풀백도 소화할 수 있는
            선수이긴 하나 마르티네스는 본업이 센터백이고 수비형 미드필더 역할도
            맡을 수 있다.
          </div>
          <div className={styles.topnews_part}>
            그럼에도 이야기가 나오는 이유는 신장 때문이다. 말라시아와 마르티네스
            모두 키가 작은 편이다. 말라시아는 169cm이고, 마르티네스는 175cm다.
            경합 상황이 자주 발생하는 잉글랜드 프리미어리그(EPL) 무대에서 두
            선수를 나란히 풀백과 센터백으로 배치하기엔 부담이 될 수 있다.
          </div>
          <div className={styles.topnews_part}>
            다만 아직 아스널이 안심하긴 이르다. '타임스' 등 일부 매체는 오히려
            맨유가 말라시아 영입을 마무리한 뒤 본격적으로 마르티네스 영입전에
            나설 것이라고 보도했다. 텐하흐 감독은 아약스 시절 수비진의 키에 크게
            연연하지 않는 모습을 보이기도 했다. 180cm 안팎으로 수비수 중에서는
            크지 않은 키를 지닌 데일리 블린트(180), 마르티네스, 팀버(182),
            누사이르 마즈라위(183)로 주전 포백을 구성한 바 있다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article4;
