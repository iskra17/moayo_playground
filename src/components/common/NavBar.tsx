import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
          backgroundColor: "#fff",
          padding: "0 20px"
        }}
      >
        <Link to="/main/daily">
          <div>메인</div>
        </Link>
        <Link to="/sub/calendar">
          <div>캘린더</div>
        </Link>
        <Link to="/sub/chart">
          <div>통계</div>
        </Link>
        <Link to="/sub/account">
          <div>계정</div>
        </Link>
      </div>
    </>
  );
};
