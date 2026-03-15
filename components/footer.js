import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-thq-footer-elm ${props.rootClassName} `}>
        <div className="footer-container10">
          <div className="footer-container11">
            <div>
              <div className="footer-container13">
                <svg viewBox="0 0 100 20" className="footer-icon10">
                  <path
                    d="M0 10 L85 10 M75 2 L90 10 L75 18"
                    fill="none"
                    stroke="#e31b23"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="footer-text10">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="footer-text33">FAIS</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <p className="footer-text11">
                {props.text ?? (
                  <Fragment>
                    <span className="footer-text25">
                      Fighting Antisemitism in Schools (FAIS) is a nationwide
                      movement dedicated to identifying and combating bias in
                      our educational systems through transparency and community
                      action.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div>
              <h6 className="footer-text12">
                {props.heading ?? (
                  <Fragment>
                    <span className="footer-text37">Explore</span>
                  </Fragment>
                )}
              </h6>
              <ul className="footer-ul1">
                <li className="footer-li1">
                  <Link href="/">
                    <a>
                      <div className="footer-container15">
                        <span>
                          {props.text3 ?? (
                            <Fragment>
                              <span className="footer-text28">Home</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="footer-li2">
                  <Link href={props.containerUrl?.['url']}>
                    <a
                      target={
                        props.containerUrl?.['newTab'] ? '_blank' : undefined
                      }
                      rel={
                        props.containerUrl?.['newTab']
                          ? 'noreferrer noopener'
                          : undefined
                      }
                    >
                      <div className="footer-container16">
                        <span>
                          {props.text4 ?? (
                            <Fragment>
                              <span className="footer-text32">Resources</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="footer-li3">
                  <Link href={props.containerUrl1?.['url']}>
                    <a
                      target={
                        props.containerUrl1?.['newTab'] ? '_blank' : undefined
                      }
                      rel={
                        props.containerUrl1?.['newTab']
                          ? 'noreferrer noopener'
                          : undefined
                      }
                    >
                      <div className="footer-container17">
                        <span>
                          {props.text5 ?? (
                            <Fragment>
                              <span className="footer-text30">Contact</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="footer-text16">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="footer-text26">Take Action</span>
                  </Fragment>
                )}
              </h6>
              <ul className="footer-ul2">
                <li className="footer-li4">
                  <Link href={props.containerUrl2?.['url']}>
                    <a
                      target={
                        props.containerUrl2?.['newTab'] ? '_blank' : undefined
                      }
                      rel={
                        props.containerUrl2?.['newTab']
                          ? 'noreferrer noopener'
                          : undefined
                      }
                    >
                      <div className="footer-container19">
                        <span>
                          {props.text6 ?? (
                            <Fragment>
                              <span className="footer-text34">
                                Get Involved
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="footer-li5">
                  <Link href={props.containerUrl3?.['url']}>
                    <a
                      target={
                        props.containerUrl3?.['newTab'] ? '_blank' : undefined
                      }
                      rel={
                        props.containerUrl3?.['newTab']
                          ? 'noreferrer noopener'
                          : undefined
                      }
                    >
                      <div className="footer-container20">
                        <span>
                          {props.text7 ?? (
                            <Fragment>
                              <span className="footer-text36">
                                Report Incident
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="footer-li6">
                  <a href="#">
                    <div className="footer-container21">
                      <span>
                        {props.text8 ?? (
                          <Fragment>
                            <span className="footer-text24">Donate</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="footer-text20">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="footer-text31">Legal</span>
                  </Fragment>
                )}
              </h6>
              <ul className="footer-ul3">
                <li className="footer-li7">
                  <a href="#">
                    <div className="footer-container23">
                      <span>
                        {props.text9 ?? (
                          <Fragment>
                            <span className="footer-text27">
                              Privacy Policy
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-li8">
                  <a href="#">
                    <div className="footer-container24">
                      <span>
                        {props.text10 ?? (
                          <Fragment>
                            <span className="footer-text29">Terms of Use</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-container25">
            <div className="footer-container26">
              <span>
                {props.text1 ?? (
                  <Fragment>
                    <span className="footer-text35">
                      &amp;copy; 2026 Fighting Antisemitism in Schools (FAIS).
                      All Rights Reserved.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="footer-container27">
              <a href="#" className="footer-link18">
                <div aria-label="Facebook" className="footer-container28">
                  <svg
                    fill="currentColor"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="footer-link19">
                <div aria-label="Instagram" className="footer-container29">
                  <svg
                    fill="none"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                      width="20"
                      height="20"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </a>
              <a href="#" className="footer-link20">
                <div aria-label="X" className="footer-container30">
                  <svg fill="none" width="18" height="18" viewBox="0 0 18 19">
                    <path
                      d="M3 3.5H6.3L14 15.5H10.7L3 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 10.5L3 15.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 3.5L10 8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="footer-link21">
                <div aria-label="YouTube" className="footer-container31">
                  <svg
                    fill="currentColor"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-thq-footer-elm {
            color: #fff;
            width: 100%;
            padding: 80px 0 40px;
            position: relative;
            background: #111;
            font-family: '' '' '' "'Poppins', sans-serif" '' '' '';
          }
          .footer-container10 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .footer-container11 {
            gap: 50px;
            display: grid;
            border-bottom: 1px solid #2a2a2a;
            padding-bottom: 60px;
            grid-template-columns: 1.8fr 1fr 1fr 1fr;
          }
          .footer-container13 {
            gap: 12px;
            display: flex;
            align-items: center;
            margin-bottom: 18px;
          }
          .footer-icon10 {
            width: 38px;
            height: auto;
          }
          .footer-text10 {
            color: #fff;
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
          }
          .footer-text11 {
            color: #ffffff;
            font-size: 0.85rem;
            max-width: 290px;
            line-height: 1.65;
          }
          .footer-text12 {
            color: #ffffff;
            font-size: 0.78rem;
            font-weight: 800;
            margin-bottom: 22px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
          }
          .footer-ul1 {
            list-style: none;
          }
          .footer-li1 {
            margin-bottom: 12px;
          }
          .footer-container15 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-li2 {
            margin-bottom: 12px;
          }
          .footer-container16 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-li3 {
            margin-bottom: 12px;
          }
          .footer-container17 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-text16 {
            color: #ffffff;
            font-size: 0.78rem;
            font-weight: 800;
            margin-bottom: 22px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
          }
          .footer-ul2 {
            list-style: none;
          }
          .footer-li4 {
            margin-bottom: 12px;
          }
          .footer-container19 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-li5 {
            margin-bottom: 12px;
          }
          .footer-container20 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-li6 {
            margin-bottom: 12px;
          }
          .footer-container21 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-text20 {
            color: #ffffff;
            font-size: 0.78rem;
            font-weight: 800;
            margin-bottom: 22px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
          }
          .footer-ul3 {
            list-style: none;
          }
          .footer-li7 {
            margin-bottom: 12px;
          }
          .footer-container23 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-li8 {
            margin-bottom: 12px;
          }
          .footer-container24 {
            color: #ffffff;
            font-size: 0.9rem;
            text-decoration: none;
          }
          .footer-container25 {
            gap: 16px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 40px;
            align-items: center;
            justify-content: space-between;
          }
          .footer-container26 {
            color: #ffffff;
            font-size: 0.75rem;
          }
          .footer-container27 {
            gap: 18px;
            display: flex;
          }
          .footer-link18 {
            display: contents;
          }
          .footer-container28 {
            color: #ffffff;
            display: flex;
            align-items: center;
          }
          .footer-link19 {
            display: contents;
          }
          .footer-container29 {
            color: #ffffff;
            display: flex;
            align-items: center;
          }
          .footer-link20 {
            display: contents;
          }
          .footer-container30 {
            color: #ffffff;
            display: flex;
            align-items: center;
          }
          .footer-link21 {
            display: contents;
          }
          .footer-container31 {
            color: #ffffff;
            display: flex;
            align-items: center;
          }
          .footer-text24 {
            display: inline-block;
          }
          .footer-text25 {
            display: inline-block;
          }
          .footer-text26 {
            display: inline-block;
          }
          .footer-text27 {
            display: inline-block;
          }
          .footer-text28 {
            display: inline-block;
          }
          .footer-text29 {
            display: inline-block;
          }
          .footer-text30 {
            display: inline-block;
          }
          .footer-text31 {
            display: inline-block;
          }
          .footer-text32 {
            display: inline-block;
          }
          .footer-text33 {
            display: inline-block;
          }
          .footer-text34 {
            display: inline-block;
          }
          .footer-text35 {
            display: inline-block;
          }
          .footer-text36 {
            display: inline-block;
          }
          .footer-text37 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .footer-container11 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .footer-container11 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text8: undefined,
  text: undefined,
  heading1: undefined,
  text9: undefined,
  text3: undefined,
  containerUrl2: {
    url: 'get-involved.html',
    newTab: false,
  },
  text10: undefined,
  text5: undefined,
  rootClassName: '',
  containerUrl3: {
    url: 'report-an-incident.html',
    newTab: false,
  },
  containerUrl1: {
    url: 'contact.html',
    newTab: false,
  },
  heading2: undefined,
  text4: undefined,
  text2: undefined,
  text6: undefined,
  text1: undefined,
  text7: undefined,
  containerUrl: {
    url: 'learn.html',
    newTab: false,
  },
  heading: undefined,
}

Footer.propTypes = {
  text8: PropTypes.element,
  text: PropTypes.element,
  heading1: PropTypes.element,
  text9: PropTypes.element,
  text3: PropTypes.element,
  containerUrl2: PropTypes.object,
  text10: PropTypes.element,
  text5: PropTypes.element,
  rootClassName: PropTypes.string,
  containerUrl3: PropTypes.object,
  containerUrl1: PropTypes.object,
  heading2: PropTypes.element,
  text4: PropTypes.element,
  text2: PropTypes.element,
  text6: PropTypes.element,
  text1: PropTypes.element,
  text7: PropTypes.element,
  containerUrl: PropTypes.object,
  heading: PropTypes.element,
}

export default Footer
