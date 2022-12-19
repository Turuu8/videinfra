import React from "react";
// import { workType } from "../../utils/work-data";
import { ArrowRL } from "../company-page/ArrowRL";
import { TextButtom } from "./Buttom";
// import { CaseStudies } from "../expertise/CaseStudies";

export const WorkCardDetail = (props) => {
  return (
    <div className="work-detail-container">
      <section className="header-bgi">
        <div className="bgi">
          <img src={props.bgi} alt="" />
        </div>
        <div className="title">
          <h1>{props.workHeadText}</h1>
          <p>{props.workBottonText}</p>
          {props.website ? (
            <div className="website">
              <TextButtom text="Visit Website" path={props.website} />
            </div>
          ) : null}
        </div>
      </section>
      <div className="max-width">
        <section className="bold-txt">
          {props.smTitle ? (
            <div className="logos">
              <h4>{props.smTitle}</h4>
              <div>
                {props.logo.map((it, i) => (
                  <ul key={i}>
                    <img src={it.url} alt="ok" />
                    <span>
                      <p>{it.topLine}</p>
                      <p>{it.bottomLine}</p>
                    </span>
                  </ul>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <h3>{props.boldTxt}</h3>
        </section>
        <section className="section">
          {props.leftTxt1 ? (
            <div className="txt txt1">
              <h2>{props.leftTxt1}</h2>
              <p>{props.txt1}</p>
            </div>
          ) : null}

          {props.imgs1
            ? props.imgs1.map((it, ind) => <img key={ind} src={it.img} alt="" />)
            : props.video1.map((it, ind) => (
                <iframe key={ind} src={it.src} title="video" frameBorder={0} />
              ))}
          {props.txt2 ? (
            <>
              <div className="txt title">
                {props.title2 ? <h2>{props.title2}</h2> : null}
                <p>{props.txt2}</p>
              </div>
              <div className={props.classN}>
                {props.imgs2
                  ? props.imgs2.map((it, ind) => <img key={ind} src={it.img} alt="img" />)
                  : null}
              </div>
            </>
          ) : null}
          {/* ---------- */}
          {props.txt3 ? (
            <>
              <div className="txt title">
                {props.title3 ? <h2>{props.title3}</h2> : null}
                <p>{props.txt3}</p>
              </div>
              <div className={props.classN}>
                {props.imgs3
                  ? props.imgs3.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video3.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}

          {/* ---------- */}
          {props.txt4 ? (
            <>
              <div className="txt title">
                {props.title4 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt4}</p>
              </div>
              <div>
                {props.imgs4
                  ? props.imgs4.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video4.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt5 ? (
            <>
              <div className="txt title">
                {props.title5 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt5}</p>
              </div>
              <div>
                {props.imgs5
                  ? props.imgs5.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video5.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt6 ? (
            <>
              <div className="txt title">
                {props.title6 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt6}</p>
              </div>
              <div>
                {props.imgs5
                  ? props.imgs6.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video6.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt7 ? (
            <>
              <div className="txt title">
                {props.title7 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt7}</p>
              </div>
              <div>
                {props.imgs7
                  ? props.imgs7.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video7.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt8 ? (
            <>
              <div className="txt title">
                {props.title8 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt8}</p>
              </div>
              <div>
                {props.imgs8
                  ? props.imgs8.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video8.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt9 ? (
            <>
              <div className="txt title">
                {props.title9 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt9}</p>
              </div>
              <div>
                {props.imgs9
                  ? props.imgs9.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video9.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt10 ? (
            <>
              <div className="txt title">
                {props.title10 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt10}</p>
              </div>
              <div>
                {props.imgs10
                  ? props.imgs10.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video10.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt11 ? (
            <>
              <div className="txt title">
                {props.title11 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt11}</p>
              </div>
              <div>
                {props.imgs11
                  ? props.imgs11.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video11.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {props.txt12 ? (
            <>
              <div className="txt title">
                {props.title12 ? <h2>{props.title4}</h2> : null}
                <p>{props.txt12}</p>
              </div>
              <div>
                {props.imgs12
                  ? props.imgs12.map((it, ind) => <img key={ind} src={it.img} alt="" />)
                  : props.video12.map((it, ind) => (
                      <iframe key={ind} src={it.src} title="video" frameBorder={0} />
                    ))}
              </div>
            </>
          ) : null}
          {/* {props.none ?  : (
            <>
              
            </>
          )} */}
        </section>
      </div>
      <div className="case-studies-section">
        <div className="container">
          <div className="headline">
            <h1>Related Case Studies</h1>
            <div className="case-studies-buttons">
              <a href="/work">All Works</a>
              <ArrowRL />
            </div>
          </div>
          <div className="cards"></div>
        </div>
      </div>
    </div>
  );
};
