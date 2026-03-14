import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features10 = (props) => {
  return (
    <>
      <div
        className={`features10-thq-layout300-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="features10-thq-max-width-elm thq-flex-column thq-section-max-width">
          <div className="features10-thq-section-title-elm thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features10-text14">
                    Empowering Communities, Educating Minds, Fighting
                    Antisemitism
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features10-thq-text-elm2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features10-text19">Key Features</span>
                </Fragment>
              )}
            </h2>
            <p className="features10-thq-text-elm3 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features10-text20">
                    Discover the key features of Fighting Antisemitism in
                    Schools (FAIS)
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features10-thq-content-elm thq-grid-auto-300">
            <div className="features10-thq-feature1-elm thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="features10-thq-feature1-title-elm thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features10-text15">
                      Empowerment Through Education
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features10-text13">
                      Empowering students, parents, and educators to recognize
                      and challenge bias through educational initiatives.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-thq-feature2-elm thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features10-text18">
                      Resource Toolkits and Guides
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features10-text10">
                      Providing resources like toolkits and guides to support
                      the identification and reporting of antisemitism in
                      schools.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-thq-feature3-elm thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features10-text12">
                      Advocacy for Safe Learning Environments
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features10-text17">
                      Advocating for safe learning environments free from
                      hostility by promoting transparency and community action.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features10-thq-actions-elm thq-flex-row">
            <button className="features10-thq-button-elm1 thq-button-filled">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features10-text11">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features10-thq-button-elm2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features10-text16">Get Involved</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features10-thq-layout300-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features10-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features10-thq-section-title-elm {
            align-items: center;
          }
          .features10-thq-text-elm3 {
            text-align: center;
          }
          .features10-thq-content-elm {
            align-self: stretch;
            align-items: center;
          }
          .features10-thq-feature1-elm {
            align-items: flex-start;
          }
          .features10-thq-feature1-title-elm {
            text-align: center;
          }
          .features10-thq-feature2-elm {
            align-items: flex-start;
          }
          .features10-thq-feature3-elm {
            align-items: flex-start;
          }
          .features10-thq-actions-elm {
            align-items: flex-start;
          }
          .features10-thq-button-elm1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features10-thq-button-elm2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features10-text10 {
            display: inline-block;
          }
          .features10-text11 {
            display: inline-block;
          }
          .features10-text12 {
            display: inline-block;
          }
          .features10-text13 {
            display: inline-block;
          }
          .features10-text14 {
            display: inline-block;
          }
          .features10-text15 {
            display: inline-block;
          }
          .features10-text16 {
            display: inline-block;
          }
          .features10-text17 {
            display: inline-block;
          }
          .features10-text18 {
            display: inline-block;
          }
          .features10-text19 {
            display: inline-block;
          }
          .features10-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features10-thq-section-title-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features10-thq-section-title-elm {
              width: auto;
            }
            .features10-thq-text-elm2 {
              text-align: center;
            }
            .features10-thq-feature2-elm {
              width: auto;
            }
            .features10-thq-feature3-elm {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features10-thq-max-width-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features10-thq-actions-elm {
              width: 100%;
              flex-direction: column;
            }
            .features10-thq-button-elm1 {
              width: 100%;
            }
            .features10-thq-button-elm2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features10.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1758687126375-e2c1683219e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MzE0NDM3M3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  mainAction: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  slogan: undefined,
  feature1Title: undefined,
  secondaryAction: undefined,
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1699269778604-ce6d21cb738b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MzE0NDM3M3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Description: undefined,
  rootClassName: '',
  feature3ImageAlt: 'Advocacy for Safe Learning Environments Image',
  feature2Title: undefined,
  sectionTitle: undefined,
  feature2ImageAlt: 'Resource Toolkits and Guides Image',
  sectionDescription: undefined,
  feature1ImageAlt: 'Empowerment Through Education Image',
}

Features10.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  slogan: PropTypes.element,
  feature1Title: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features10
