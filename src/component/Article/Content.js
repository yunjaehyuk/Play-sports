import { useSelector } from "react-redux";
const Content = () => {
  let state = useSelector((state) => state);
  return (
    <div>
      <div className="topnews_main">
        <div className="topnews_jpg1">
          <img src={process.env.PUBLIC_URL + "/img/salah.jpg"} />
        </div>
        <div className="jpg_content">이집트 축구 스타 살라. 2022.06.05.</div>
      </div>
      <div className="topnews_content">
        <div className="topnews_part">
          {state.content.part1}
          <div className="topnews_part">{state.content.part2}</div>
        </div>
        <div className="topnews_part">{state.content.part3}</div>

        <div className="topnews_part">{state.content.part4}</div>
        <div className="topnews_part">{state.content.part5}</div>
      </div>
    </div>
  );
};

export default Content;
