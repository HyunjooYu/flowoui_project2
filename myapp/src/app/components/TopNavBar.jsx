//David's Component//

export default function TopNavBar() {
  return (
    <>
      <style>{`
        .top-navbar {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 16px 24px;
          background-color: white;
          border-bottom: 1px solid lightgray;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .top-navbar__title {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: black;
        }

        .top-navbar__actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .top-navbar__button {
          padding: 10px 14px;
          border: 1px solid white;
          border-radius: 8px;
          background-color: white;
          color: gray;
          font-size: 14px;
          cursor: pointer;
        }

        .top-navbar__button:hover {
          background-color: white;
        }
      `}</style>

      <header className="top-navbar">
        <h1 className="top-navbar__title">Flowoui</h1>

        <div className="top-navbar__actions">
          <p className="top-navbar__button">Notifications</p>
          {/* Jennie's Button Component Replace Later */}

          <p className="top-navbar__button">Profile</p>
          {/* Jennie's Button Component Replace Later */}
        </div>
      </header>
    </>
  );
}
