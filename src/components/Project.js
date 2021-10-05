import './Project.css';

export default function Project({ data }) {
  const liveBtnStyle = {
    background: data.theme,
  };

  const codeBtnStyle = {
    border: `5px ${data.theme} solid`,
    color: data.theme,
  };

  function liveBtnHandler() {
    window.open(data.liveAdr);
  }

  function codeBtnHandler() {
    window.open(data.codeAdr);
  }

  return (
    <div className="project-wrap">
      <div className="project-img__wrap">
        <img
          className="laptop-img"
          src={process.env.PUBLIC_URL + '/images/laptop.jpeg'}
          alt="laptop-frame"
        />
        <img
          className="project-img"
          src={process.env.PUBLIC_URL + data.thumbnail}
          alt={data.title}
        />
      </div>
      <div className="project-info__wrap">
        <h2 className="project-title">{data.title}</h2>
        <div className="project-skills__wrap">
          {data.skills.map((cur, i) => {
            return (
              <div key={i}>
                <span>{cur}</span>
              </div>
            );
          })}
        </div>
        <button
          className="project-btns live-btn"
          style={liveBtnStyle}
          type="button"
          onClick={liveBtnHandler}
        >
          LIVE
        </button>
        <button
          className="project-btns code-btn"
          style={codeBtnStyle}
          type="button"
          onClick={codeBtnHandler}
        >
          CODE
        </button>
      </div>
    </div>
  );
}
