import { Link } from "react-router-dom";
// export default function Movie(props) {
//   return (
//     <li className="item">
//       <div className="img">
//         <img src={`https://image.tmdb.org/t/p/w200/${props.imgSrc}`} alt="" />
//         <span className="point">{props.point}</span>
//       </div>
//     </li>
//   );
// }
///------방법1------------------props로받기 -필요한것!만 지정해서 넘겨받을것인가

export default function Movie({ movieInfo }) {
  return (
    <li className="item">
      <Link to={`/detail/${movieInfo.id}`}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`} alt="" />
          <span className="point">{movieInfo.vote_average}</span>
        </div>
        <div className="info">
          <div className="titleBox">
            <h3>{movieInfo.title}</h3>
            <p className="originalTitle">{movieInfo.original_title}</p>
            <p className="release">{movieInfo.release_date}</p>
          </div>
          <div className="overviewBox">
            <p className="overview">{movieInfo.overview}</p>
            <p className="vote">{movieInfo.vote_count}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
//-방법2-----movieInfo로 통째로! obj형태로넘겨받은 후 필요한것을 골라받아처리할것인가
