//David's Component//
export default function NavBar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 250px;
          min-height: 100vh;
          padding: 24px 20px;
          background-color: white;
          font-family: Arial, sans-serif;
        }

        .navbar__title {
          font-size: 12px;
          font-weight: 700;
          color: gray;
          margin: 0 0 24px;
        }

        .navbar__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .navbar__item {
          padding: 12px 14px;
          margin-bottom: 6px;
          border-radius: 8px;
          color: gray;
          font-size: 14px;
          cursor: pointer;
        }

        .navbar__item:hover {
          background-color: lightgray;
          color: black;
        }

        .navbar__divider {
          height: 1px;
          background-color: lightgray;
          margin: 24px 0;
          width: 100%;
        }

        .navbar__section-title {
          font-size: 11px;
          font-weight: 700;
          color: gray;
          letter-spacing: 1px;
          margin: 0 0 12px;
        }

        .navbar__link {
          padding: 12px 14px;
          margin: 0;
          border-radius: 8px;
          color: gray;
          font-size: 14px;
          cursor: pointer;
        }

        .navbar__link:hover {
          background-color: lightgray;
          color: black;
        }
      `}</style>

      <nav className="navbar">
        <p className="navbar__title">Workspace</p>
        <ul className="navbar__list">
          <li className="navbar__item">Overview</li>
          <li className="navbar__item">All Clients</li>{" "}
          {/* Jennie's Button Component Replace Later */}
          <li className="navbar__item">Review Queue</li>{" "}
          {/* Jennie's Button Component Replace Later */}
          <li className="navbar__item">Invitations</li>{" "}
          {/* Jennie's Button Component Replace Later */}
        </ul>
        <div className="navbar__divider"></div>
        <p className="navbar__section-title">IMMIGRATION SERVICES</p>
        <p className="navbar__link">Assigned Client Cases</p>{" "}
        {/* Jennie's Button Component Replace Later */}
        <p className="navbar__link">Sign Out</p>{" "}
        {/* Jennie's Button Component Replace Later */}
      </nav>
    </>
  );
}
