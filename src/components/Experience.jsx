
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
              <img className="circular-image" src={`/assets/${data.imageSrc}`} alt={data.organisation} />
            </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "black" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "black" }}>{data.location}</span>
                  </h4>
                  <h6 style={{ color: "gray" }}>{data.experiences[0]}</h6>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
