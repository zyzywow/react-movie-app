// export default function Profile(props) {
//   return (
//     <li>
//       <img src={`https://image.tmdb.org/t/p/w185/${props.profile_path}`} alt="" />
//       <span>{props.name}</span>
//     </li>
//   );
// }

import { Link } from "react-router-dom";

export default function Profile({ profileInfo }) {
  // 구조분해할당 가능

  return (
    <>
      <Link to={`/profile/${profileInfo.id}`}>
        {profileInfo.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} alt={profileInfo.name} /> : <img src={`/images/noname.png`} alt="" />}
        <span>{profileInfo.name}</span>
      </Link>
    </>
  );
}

// 리액트에서 정적파일은 public 에
