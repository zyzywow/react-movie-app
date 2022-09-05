import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Profile from "./Profile";

export default function ProfileDetail() {
  const [profile, setProfile] = useState({});
  // res.data값이 obj로 되어있으니 useState({})감싸주고
  const params = useParams();

  // Profile에 Link에 ${profileInfo.id} id값을 그곳에입력해야 넘어오는 params값이 있고 클릭한 id값의 프로필을 볼수있다.

  const profileID = params.id;

  console.log(params);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${profileID}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR`).then((res) => {
      console.log(res.data);
      setProfile(res.data);
    });
  }, []);
  return (
    <>
      <div id="detail" className="detail">
        <div className="container">
          <h2 className="title">
            <strong>DETAIL PROFILE</strong>
          </h2>
          <div className="detailBox">
            <div className="img">
              <img src={`https://image.tmdb.org/t/p/w300/${profile.profile_path}`} alt="" />
            </div>
            <div className="info">
              <div className="summary">
                <dl>
                  <dt>이름</dt>
                  <dd className="name">
                    <h3>{profile.name}</h3>
                  </dd>
                </dl>
                <dl>
                  <dt>생년월일</dt>
                  <dd>{profile.birthday}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="back">MAIN</button>
        </Link>
      </div>
    </>
  );
}
