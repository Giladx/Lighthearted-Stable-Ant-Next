import React, { Fragment } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeaderComponent = (props) => {
  return (
    <>
      <div className={`header-component-container100 ${props.rootClassName} `}>
        <div id="faisSearchOverlay" className="header-component-thq-sarech-elm">
          <button
            id="faisSearchClose"
            aria-label="Close Search"
            className="header-component-button"
          >
            <svg
              fill="none"
              width="24"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </button>
          <div className="header-component-container101">
            <form data-form-id="6c7dc64f-1668-481a-93d4-68fa424f2f00">
              <input
                type="text"
                id="thq_textinput_4nco"
                name="textinput"
                placeholder={props.textinputPlaceholder}
                data-form-field-id="thq_textinput_4nco"
                className="header-component-textinput"
              />
              <div className="header-component-container102">
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="header-component-text269">
                        {' '}
                        Press Enter to Search
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="header-component-thq-container-elm"></div>
        <header id="faisHeader" className="header-component-thq-header-elm">
          <div className="header-component-container103">
            <div className="header-component-container104">
              <div className="header-component-container105">
                <div className="header-component-container106">
                  <div className="header-component-container107">
                    <a href="#" className="header-component-link10">
                      <div
                        aria-label="Facebook"
                        className="header-component-container108"
                      >
                        <svg
                          fill="currentColor"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="header-component-link11">
                      <div
                        aria-label="Instagram"
                        className="header-component-container109"
                      >
                        <svg
                          fill="none"
                          width="16"
                          height="16"
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
                    <a href="#" className="header-component-link12">
                      <div
                        aria-label="X (Twitter)"
                        className="header-component-container110"
                      >
                        <svg
                          fill="none"
                          width="16"
                          height="16"
                          viewBox="0 0 18 19"
                        >
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
                    <a href="#" className="header-component-link13">
                      <div
                        aria-label="YouTube"
                        className="header-component-container111"
                      >
                        <svg
                          fill="currentColor"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <nav className="header-component-container112">
                    <ul className="header-component-ul10">
                      <li className="header-component-li10">
                        <a href="#" className="header-component-link14">
                          <div className="header-component-container113">
                            <span className="header-component-text101">
                              {props.text5 ?? (
                                <Fragment>
                                  <span className="header-component-text347">
                                    Community
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                        <div className="header-component-container114">
                          <div className="header-component-container115">
                            <div className="header-component-container116">
                              <div className="header-component-container117">
                                <p className="header-component-text102">
                                  {props.text14 ?? (
                                    <Fragment>
                                      <span className="header-component-text333">
                                        {' '}
                                        Student Network
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <div className="header-component-container118">
                                  <a href="#">
                                    <div className="header-component-container119">
                                      <span className="header-component-text103">
                                        {props.text24 ?? (
                                          <Fragment>
                                            <span className="header-component-text331">
                                              Chapters
                                            </span>
                                          </Fragment>
                                        )}
                                      </span>
                                      <img
                                        alt={props.imageAlt}
                                        src={props.imageSrc}
                                        className="header-component-image10"
                                      />
                                    </div>
                                  </a>
                                  <div className="header-component-container120">
                                    <a href="#">
                                      <div className="header-component-container121">
                                        <span>
                                          {props.text27 ?? (
                                            <Fragment>
                                              <span className="header-component-text311">
                                                Join a Chapter
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                    <p className="header-component-text105">
                                      {props.text25 ?? (
                                        <Fragment>
                                          <span className="header-component-text244">
                                            Join over 3,500 chapters across the
                                            nation fighting for freedom.
                                          </span>
                                        </Fragment>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="header-component-container122">
                                <p className="header-component-text106">
                                  {props.text15 ?? (
                                    <Fragment>
                                      <span className="header-component-text263">
                                        {' '}
                                        Programs
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <ul className="header-component-ul11">
                                  <li className="header-component-li11">
                                    <a href="#">
                                      <div className="header-component-container123">
                                        <span>
                                          {props.text28 ?? (
                                            <Fragment>
                                              <span className="header-component-text258">
                                                High School
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header-component-li12">
                                    <a href="#">
                                      <div className="header-component-container124">
                                        <span>
                                          {props.text29 ?? (
                                            <Fragment>
                                              <span className="header-component-text236">
                                                College
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header-component-li13">
                        <a href="#" className="header-component-link19">
                          <div className="header-component-container125">
                            <span className="header-component-text109">
                              {props.text6 ?? (
                                <Fragment>
                                  <span className="header-component-text278">
                                    Events
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                        <div className="header-component-container126">
                          <div className="header-component-container127">
                            <div className="header-component-container128">
                              <div className="header-component-container129">
                                <p className="header-component-text110">
                                  {props.text16 ?? (
                                    <Fragment>
                                      <span className="header-component-text280">
                                        {' '}
                                        Upcoming
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <div className="header-component-container130">
                                  <a href="#">
                                    <div className="header-component-container131">
                                      <span className="header-component-text111">
                                        {props.text26 ?? (
                                          <Fragment>
                                            <span className="header-component-text270">
                                              Summit
                                            </span>
                                          </Fragment>
                                        )}
                                      </span>
                                      <img
                                        alt={props.imageAlt1}
                                        src={props.imageSrc1}
                                        className="header-component-image11"
                                      />
                                    </div>
                                  </a>
                                  <div className="header-component-container132">
                                    <a href="#">
                                      <div className="header-component-container133">
                                        <span>
                                          {props.text30 ?? (
                                            <Fragment>
                                              <span className="header-component-text245">
                                                National Summit 2026
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header-component-li14">
                        <a href="#" className="header-component-link22">
                          <div className="header-component-container134">
                            <span className="header-component-text113">
                              {props.text7 ?? (
                                <Fragment>
                                  <span className="header-component-text291">
                                    Media
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                        <div className="header-component-container135">
                          <div className="header-component-container136">
                            <div className="header-component-container137">
                              <div className="header-component-container138">
                                <p className="header-component-text114">
                                  {props.text17 ?? (
                                    <Fragment>
                                      <span className="header-component-text277">
                                        {' '}
                                        Shows
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <div className="header-component-container139">
                                  <div className="header-component-container140">
                                    <a href="#">
                                      <div className="header-component-container141">
                                        <span className="header-component-text115">
                                          {props.text31 ?? (
                                            <Fragment>
                                              <span className="header-component-text306">
                                                Upcoming
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                        <img
                                          alt={props.imageAlt2}
                                          src={props.imageSrc2}
                                          className="header-component-image12"
                                        />
                                      </div>
                                    </a>
                                    <div className="header-component-container142">
                                      <a href="#">
                                        <div className="header-component-container143">
                                          <span>
                                            {props.text51 ?? (
                                              <Fragment>
                                                <span className="header-component-text255">
                                                  Culture Apothecary
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="header-component-container144">
                                    <a href="#">
                                      <div className="header-component-container145">
                                        <span className="header-component-text117">
                                          {props.text32 ?? (
                                            <Fragment>
                                              <span className="header-component-text309">
                                                Upcoming
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                        <img
                                          alt={props.imageAlt3}
                                          src={props.imageSrc3}
                                          className="header-component-image13"
                                        />
                                      </div>
                                    </a>
                                    <div className="header-component-container146">
                                      <a href="#">
                                        <div className="header-component-container147">
                                          <span>
                                            {props.text52 ?? (
                                              <Fragment>
                                                <span className="header-component-text299">
                                                  Education Watch
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="header-component-container148">
                                <p className="header-component-text119">
                                  {props.text18 ?? (
                                    <Fragment>
                                      <span className="header-component-text237">
                                        {' '}
                                        Press
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <ul className="header-component-ul12">
                                  <li className="header-component-li15">
                                    <a href="#">
                                      <div className="header-component-container149">
                                        <span>
                                          {props.text33 ?? (
                                            <Fragment>
                                              <span className="header-component-text273">
                                                Press Inquiries
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header-component-li16">
                                    <a href="#">
                                      <div className="header-component-container150">
                                        <span>
                                          {props.text34 ?? (
                                            <Fragment>
                                              <span className="header-component-text304">
                                                Media Kit
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header-component-li17">
                        <a href="#" className="header-component-link29">
                          <div className="header-component-container151">
                            <span className="header-component-text122">
                              {props.text8 ?? (
                                <Fragment>
                                  <span className="header-component-text243">
                                    Movements
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                        <div className="header-component-container152">
                          <div className="header-component-container153">
                            <div className="header-component-container154">
                              <div className="header-component-container155">
                                <p className="header-component-text123">
                                  {props.text19 ?? (
                                    <Fragment>
                                      <span className="header-component-text268">
                                        {' '}
                                        Our Method
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <ul className="header-component-ul13">
                                  <li className="header-component-li18">
                                    <a href="#">
                                      <div className="header-component-container156">
                                        <strong>
                                          {props.text35 ?? (
                                            <Fragment>
                                              <span className="header-component-text329">
                                                F
                                              </span>
                                            </Fragment>
                                          )}
                                        </strong>
                                        <span>
                                          {props.text36 ?? (
                                            <Fragment>
                                              <span className="header-component-text266">
                                                {' '}
                                                — Find
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header-component-li19">
                                    <a href="#">
                                      <div className="header-component-container157">
                                        <strong>
                                          {props.text37 ?? (
                                            <Fragment>
                                              <span className="header-component-text288">
                                                A
                                              </span>
                                            </Fragment>
                                          )}
                                        </strong>
                                        <span>
                                          {props.text38 ?? (
                                            <Fragment>
                                              <span className="header-component-text265">
                                                {' '}
                                                — Assess
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header-component-li20">
                                    <a href="#">
                                      <div className="header-component-container158">
                                        <strong>
                                          {props.text39 ?? (
                                            <Fragment>
                                              <span className="header-component-text248">
                                                I
                                              </span>
                                            </Fragment>
                                          )}
                                        </strong>
                                        <span>
                                          {props.text40 ?? (
                                            <Fragment>
                                              <span className="header-component-text345">
                                                {' '}
                                                — Initiate
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header-component-li21">
                                    <a href="#">
                                      <div className="header-component-container159">
                                        <strong>
                                          {props.text41 ?? (
                                            <Fragment>
                                              <span className="header-component-text336">
                                                S
                                              </span>
                                            </Fragment>
                                          )}
                                        </strong>
                                        <span>
                                          {props.text42 ?? (
                                            <Fragment>
                                              <span className="header-component-text256">
                                                {' '}
                                                — Solution
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header-component-li22">
                        <a href="#" className="header-component-link34">
                          <div className="header-component-container160">
                            <span className="header-component-text132">
                              {props.text9 ?? (
                                <Fragment>
                                  <span className="header-component-text275">
                                    News
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                        <div className="header-component-container161">
                          <div className="header-component-container162">
                            <div className="header-component-container163">
                              <div className="header-component-container164">
                                <p className="header-component-text133">
                                  {props.text20 ?? (
                                    <Fragment>
                                      <span className="header-component-text324">
                                        {' '}
                                        Latest Headlines
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <div className="header-component-container165">
                                  <div className="header-component-container166">
                                    <div className="header-component-container167">
                                      <img
                                        alt={props.imageAlt4}
                                        src={props.imageSrc4}
                                        className="header-component-image14"
                                      />
                                    </div>
                                    <div className="header-component-container168">
                                      <a href="#">
                                        <div className="header-component-container169">
                                          <span>
                                            {props.text53 ?? (
                                              <Fragment>
                                                <span className="header-component-text318">
                                                  School Safety Initiatives
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="header-component-container170">
                                    <div className="header-component-container171">
                                      <img
                                        alt={props.imageAlt5}
                                        src={props.imageSrc5}
                                        className="header-component-image15"
                                      />
                                    </div>
                                    <div className="header-component-container172">
                                      <a href="#">
                                        <div className="header-component-container173">
                                          <span>
                                            {props.text54 ?? (
                                              <Fragment>
                                                <span className="header-component-text354">
                                                  Educational Expansion
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="header-component-container174">
                                    <div className="header-component-container175">
                                      <img
                                        alt={props.imageAlt6}
                                        src={props.imageSrc6}
                                        className="header-component-image16"
                                      />
                                    </div>
                                    <div className="header-component-container176">
                                      <a href="#">
                                        <div className="header-component-container177">
                                          <span>
                                            {props.text55 ?? (
                                              <Fragment>
                                                <span className="header-component-text338">
                                                  Transparency Envoy
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-component-container178">
                  <Link href="/">
                    <a className="header-component-link38">
                      <div className="header-component-container179">
                        <svg
                          viewBox="0 0 100 20"
                          className="header-component-icon25"
                        >
                          <path
                            d="M0 10 L90 10 M80 2 L95 10 L80 18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="header-component-text137">
                          {props.text1 ?? (
                            <Fragment>
                              <span className="header-component-text230">
                                FAIS
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="header-component-text138">
                          {props.text2 ?? (
                            <Fragment>
                              <span className="header-component-text296">
                                Fighting Antisemitism in Schools
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="header-component-container180">
                  <div className="header-component-container181">
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
                        className="header-component-link39"
                      >
                        <div className="header-component-container182">
                          <span>
                            {props.text3 ?? (
                              <Fragment>
                                <span className="header-component-text254">
                                  Contact
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </a>
                    </Link>
                    <a
                      href="#"
                      id="faisSearchTrigger"
                      className="header-component-link40"
                    >
                      <div className="header-component-container183">
                        <span>
                          {props.text4 ?? (
                            <Fragment>
                              <span className="header-component-text342">
                                {' '}
                                Search
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <svg
                          fill="none"
                          width="13"
                          height="13"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle r="8" cx="11" cy="11"></circle>
                          <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <nav className="header-component-container184">
                    <ul className="header-component-ul14">
                      <li className="header-component-li23">
                        <Link href={props.containerUrl1?.['url']}>
                          <a
                            target={
                              props.containerUrl1?.['newTab']
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              props.containerUrl1?.['newTab']
                                ? 'noreferrer noopener'
                                : undefined
                            }
                            className="header-component-link41"
                          >
                            <div className="header-component-container185">
                              <span className="header-component-text141">
                                {props.text10 ?? (
                                  <Fragment>
                                    <span className="header-component-text297">
                                      Resources
                                    </span>
                                  </Fragment>
                                )}
                              </span>
                            </div>
                          </a>
                        </Link>
                        <div className="header-component-container186">
                          <div className="header-component-container187">
                            <div className="header-component-container188">
                              <div className="header-component-container189">
                                <p className="header-component-text142">
                                  {props.text21 ?? (
                                    <Fragment>
                                      <span className="header-component-text246">
                                        {' '}
                                        Activism Toolkit
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <div className="header-component-container190">
                                  <div className="header-component-container191">
                                    <Link href={props.containerUrl3?.['url']}>
                                      <a
                                        target={
                                          props.containerUrl3?.['newTab']
                                            ? '_blank'
                                            : undefined
                                        }
                                        rel={
                                          props.containerUrl3?.['newTab']
                                            ? 'noreferrer noopener'
                                            : undefined
                                        }
                                      >
                                        <div className="header-component-container192">
                                          <span className="header-component-text143">
                                            {props.text43 ?? (
                                              <Fragment>
                                                <span className="header-component-text355">
                                                  Parents
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                          <img
                                            alt={props.imageAlt7}
                                            src={props.imageSrc7}
                                            className="header-component-image17"
                                          />
                                        </div>
                                      </a>
                                    </Link>
                                    <div className="header-component-container193">
                                      <Link href={props.containerUrl7?.['url']}>
                                        <a
                                          target={
                                            props.containerUrl7?.['newTab']
                                              ? '_blank'
                                              : undefined
                                          }
                                          rel={
                                            props.containerUrl7?.['newTab']
                                              ? 'noreferrer noopener'
                                              : undefined
                                          }
                                        >
                                          <div className="header-component-container194">
                                            <span>
                                              {props.text56 ?? (
                                                <Fragment>
                                                  <span className="header-component-text356">
                                                    Parent Playbook
                                                  </span>
                                                </Fragment>
                                              )}
                                            </span>
                                          </div>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="header-component-container195">
                                    <Link href={props.containerUrl4?.['url']}>
                                      <a
                                        target={
                                          props.containerUrl4?.['newTab']
                                            ? '_blank'
                                            : undefined
                                        }
                                        rel={
                                          props.containerUrl4?.['newTab']
                                            ? 'noreferrer noopener'
                                            : undefined
                                        }
                                      >
                                        <div className="header-component-container196">
                                          <span className="header-component-text145">
                                            {props.text44 ?? (
                                              <Fragment>
                                                <span className="header-component-text326">
                                                  Students
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                          <img
                                            alt={props.imageAlt8}
                                            src={props.imageSrc8}
                                            className="header-component-image18"
                                          />
                                        </div>
                                      </a>
                                    </Link>
                                    <div className="header-component-container197">
                                      <Link href={props.containerUrl8?.['url']}>
                                        <a
                                          target={
                                            props.containerUrl8?.['newTab']
                                              ? '_blank'
                                              : undefined
                                          }
                                          rel={
                                            props.containerUrl8?.['newTab']
                                              ? 'noreferrer noopener'
                                              : undefined
                                          }
                                        >
                                          <div className="header-component-container198">
                                            <span>
                                              {props.text57 ?? (
                                                <Fragment>
                                                  <span className="header-component-text316">
                                                    Student Rights
                                                  </span>
                                                </Fragment>
                                              )}
                                            </span>
                                          </div>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="header-component-container199">
                                    <Link href={props.containerUrl5?.['url']}>
                                      <a
                                        target={
                                          props.containerUrl5?.['newTab']
                                            ? '_blank'
                                            : undefined
                                        }
                                        rel={
                                          props.containerUrl5?.['newTab']
                                            ? 'noreferrer noopener'
                                            : undefined
                                        }
                                      >
                                        <div className="header-component-container200">
                                          <span className="header-component-text147">
                                            {props.text45 ?? (
                                              <Fragment>
                                                <span className="header-component-text344">
                                                  Educators
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                          <img
                                            alt={props.imageAlt9}
                                            src={props.imageSrc9}
                                            className="header-component-image19"
                                          />
                                        </div>
                                      </a>
                                    </Link>
                                    <div className="header-component-container201">
                                      <Link href={props.containerUrl9?.['url']}>
                                        <a
                                          target={
                                            props.containerUrl9?.['newTab']
                                              ? '_blank'
                                              : undefined
                                          }
                                          rel={
                                            props.containerUrl9?.['newTab']
                                              ? 'noreferrer noopener'
                                              : undefined
                                          }
                                        >
                                          <div className="header-component-container202">
                                            <span>
                                              {props.text58 ?? (
                                                <Fragment>
                                                  <span className="header-component-text353">
                                                    Educator Resources
                                                  </span>
                                                </Fragment>
                                              )}
                                            </span>
                                          </div>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="header-component-container203">
                                    <Link href={props.containerUrl6?.['url']}>
                                      <a
                                        target={
                                          props.containerUrl6?.['newTab']
                                            ? '_blank'
                                            : undefined
                                        }
                                        rel={
                                          props.containerUrl6?.['newTab']
                                            ? 'noreferrer noopener'
                                            : undefined
                                        }
                                      >
                                        <div className="header-component-container204">
                                          <span className="header-component-text149">
                                            {props.text46 ?? (
                                              <Fragment>
                                                <span className="header-component-text335">
                                                  Reporting
                                                </span>
                                              </Fragment>
                                            )}
                                          </span>
                                          <img
                                            alt={props.imageAlt10}
                                            src={props.imageSrc10}
                                            className="header-component-image20"
                                          />
                                        </div>
                                      </a>
                                    </Link>
                                    <div className="header-component-container205">
                                      <Link
                                        href={props.containerUrl10?.['url']}
                                      >
                                        <a
                                          target={
                                            props.containerUrl10?.['newTab']
                                              ? '_blank'
                                              : undefined
                                          }
                                          rel={
                                            props.containerUrl10?.['newTab']
                                              ? 'noreferrer noopener'
                                              : undefined
                                          }
                                        >
                                          <div className="header-component-container206">
                                            <span>
                                              {props.text59 ?? (
                                                <Fragment>
                                                  <span className="header-component-text252">
                                                    Incident Portal
                                                  </span>
                                                </Fragment>
                                              )}
                                            </span>
                                          </div>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header-component-li24">
                        <a href="#" className="header-component-link50">
                          <div className="header-component-container207">
                            <span className="header-component-text151">
                              {props.text11 ?? (
                                <Fragment>
                                  <span className="header-component-text322">
                                    Shop
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                        <div className="header-component-container208">
                          <div className="header-component-container209">
                            <div className="header-component-container210">
                              <div className="header-component-container211">
                                <p className="header-component-text152">
                                  {props.text22 ?? (
                                    <Fragment>
                                      <span className="header-component-text302">
                                        {' '}
                                        FAIS Store
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <ul className="header-component-ul15">
                                  <li className="header-component-li25">
                                    <a href="#">
                                      <div className="header-component-container212">
                                        <span>
                                          {props.text47 ?? (
                                            <Fragment>
                                              <span className="header-component-text357">
                                                Apparel
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header-component-li26">
                                    <a href="#">
                                      <div className="header-component-container213">
                                        <span>
                                          {props.text48 ?? (
                                            <Fragment>
                                              <span className="header-component-text340">
                                                Gear
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header-component-li27">
                        <Link href="/contact">
                          <a className="header-component-link53">
                            <div className="header-component-container214">
                              <span className="header-component-text155">
                                {props.text12 ?? (
                                  <Fragment>
                                    <span className="header-component-text259">
                                      Get Involved
                                    </span>
                                  </Fragment>
                                )}
                              </span>
                            </div>
                          </a>
                        </Link>
                        <div className="header-component-container215">
                          <div className="header-component-container216">
                            <div className="header-component-container217">
                              <div className="header-component-container218">
                                <p className="header-component-text156">
                                  {props.text23 ?? (
                                    <Fragment>
                                      <span className="header-component-text327">
                                        {' '}
                                        Take Action
                                      </span>
                                    </Fragment>
                                  )}
                                </p>
                                <ul className="header-component-ul16">
                                  <li className="header-component-li28">
                                    <a href="#">
                                      <div className="header-component-container219">
                                        <span>
                                          {props.text49 ?? (
                                            <Fragment>
                                              <span className="header-component-text274">
                                                Volunteer
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="header-component-li29">
                                    <a href="#">
                                      <div className="header-component-container220">
                                        <span>
                                          {props.text50 ?? (
                                            <Fragment>
                                              <span className="header-component-text323">
                                                Partner with Us
                                              </span>
                                            </Fragment>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <div className="header-component-container221">
                            <span>
                              {props.text13 ?? (
                                <Fragment>
                                  <span className="header-component-text249">
                                    Donate
                                  </span>
                                </Fragment>
                              )}
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="header-component-container222">
          <div className="header-component-container223">
            <Script
              html={`<script>
(function(){
  (function() {
  document.addEventListener('DOMContentLoaded', function() {
    var header      = document.getElementById('faisHeader');
    var overlay     = document.getElementById('faisSearchOverlay');
    var searchClose = document.getElementById('faisSearchClose');
    var trigger     = document.getElementById('faisSearchTrigger');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });

    if (trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        setTimeout(function() { overlay.querySelector('input').focus(); }, 100);
      });
    }

    overlay.addEventListener('click', function(e) {
      if (!e.target.closest('form')) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
      }
    });

    searchClose.addEventListener('click', function() {
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
      }
    });
  });
})();
})()
</script>`}
            ></Script>
          </div>
        </div>
        <header
          data-thq="thq-navbar"
          className="header-component-thq-navbar-interactive-elm"
        >
          <div className="header-component-container224">
            <Link href="/">
              <a className="header-component-link57">
                <div className="header-component-container225">
                  <svg viewBox="0 0 100 20" className="header-component-icon30">
                    <path
                      d="M0 10 L90 10 M80 2 L95 10 L80 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="header-component-text160">
                    {props.text110 ?? (
                      <Fragment>
                        <span className="header-component-text285">FAIS</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="header-component-text161">
                    {props.text210 ?? (
                      <Fragment>
                        <span className="header-component-text310">
                          Fighting Antisemitism in Schools
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div
            data-thq="thq-navbar-nav"
            className="header-component-thq-desktop-menu-elm"
          >
            <nav className="header-component-thq-links-elm1">
              <span>
                {props.text60 ?? (
                  <Fragment>
                    <span className="header-component-text284">About</span>
                  </Fragment>
                )}
              </span>
              <span className="header-component-text163">
                {props.text61 ?? (
                  <Fragment>
                    <span className="header-component-text257">Features</span>
                  </Fragment>
                )}
              </span>
              <span className="header-component-text164">
                {props.text62 ?? (
                  <Fragment>
                    <span className="header-component-text328">Pricing</span>
                  </Fragment>
                )}
              </span>
              <span className="header-component-text165">
                {props.text63 ?? (
                  <Fragment>
                    <span className="header-component-text289">Team</span>
                  </Fragment>
                )}
              </span>
              <span className="header-component-text166">
                {props.text64 ?? (
                  <Fragment>
                    <span className="header-component-text312">Blog</span>
                  </Fragment>
                )}
              </span>
            </nav>
            <div className="header-component-thq-buttons-elm">
              <button className="header-component-thq-login-elm button">
                <span>
                  {props.login ?? (
                    <Fragment>
                      <span className="header-component-text298">Login</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="button">
                <span>
                  {props.register ?? (
                    <Fragment>
                      <span className="header-component-text305">Register</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="header-component-thq-burger-menu-elm"
          >
            <svg viewBox="0 0 1024 1024" className="header-component-icon32">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="header-component-thq-mobile-menu-elm"
          >
            <div className="header-component-thq-nav-elm">
              <div className="header-component-thq-top-elm">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="header-component-thq-logo-elm"
                />
                <div
                  data-thq="thq-close-menu"
                  className="header-component-thq-close-menu-elm"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="header-component-icon34"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <ul className="header-component-ul17">
                <li className="header-component-li31">
                  <a href="#" className="header-component-link58">
                    <div className="header-component-container226">
                      <span className="header-component-text169">
                        {props.text510 ?? (
                          <Fragment>
                            <span className="header-component-text234">
                              Community
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                  <div className="header-component-container227">
                    <div className="header-component-container228">
                      <div className="header-component-container229">
                        <div className="header-component-container230">
                          <p className="header-component-text170">
                            {props.text141 ?? (
                              <Fragment>
                                <span className="header-component-text247">
                                  {' '}
                                  Student Network
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <div className="header-component-container231">
                            <a href="#">
                              <div className="header-component-container232">
                                <span className="header-component-text171">
                                  {props.text241 ?? (
                                    <Fragment>
                                      <span className="header-component-text348">
                                        Chapters
                                      </span>
                                    </Fragment>
                                  )}
                                </span>
                                <img
                                  alt={props.imageAlt12}
                                  src={props.imageSrc12}
                                  className="header-component-image21"
                                />
                              </div>
                            </a>
                            <div className="header-component-container233">
                              <a href="#">
                                <div className="header-component-container234">
                                  <span>
                                    {props.text271 ?? (
                                      <Fragment>
                                        <span className="header-component-text292">
                                          Join a Chapter
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                              <p className="header-component-text173">
                                {props.text251 ?? (
                                  <Fragment>
                                    <span className="header-component-text313">
                                      Join over 3,500 chapters across the nation
                                      fighting for freedom.
                                    </span>
                                  </Fragment>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="header-component-container235">
                          <p className="header-component-text174">
                            {props.text151 ?? (
                              <Fragment>
                                <span className="header-component-text315">
                                  {' '}
                                  Programs
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <ul className="header-component-ul18">
                            <li className="header-component-li32">
                              <a href="#">
                                <div className="header-component-container236">
                                  <span>
                                    {props.text281 ?? (
                                      <Fragment>
                                        <span className="header-component-text325">
                                          High School
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="header-component-li33">
                              <a href="#">
                                <div className="header-component-container237">
                                  <span>
                                    {props.text291 ?? (
                                      <Fragment>
                                        <span className="header-component-text321">
                                          College
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-component-li34">
                  <a href="#" className="header-component-link63">
                    <div className="header-component-container238">
                      <span className="header-component-text177">
                        {props.text610 ?? (
                          <Fragment>
                            <span className="header-component-text295">
                              Events
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                  <div className="header-component-container239">
                    <div className="header-component-container240">
                      <div className="header-component-container241">
                        <div className="header-component-container242">
                          <p className="header-component-text178">
                            {props.text161 ?? (
                              <Fragment>
                                <span className="header-component-text276">
                                  {' '}
                                  Upcoming
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <div className="header-component-container243">
                            <a href="#">
                              <div className="header-component-container244">
                                <span className="header-component-text179">
                                  {props.text261 ?? (
                                    <Fragment>
                                      <span className="header-component-text279">
                                        Summit
                                      </span>
                                    </Fragment>
                                  )}
                                </span>
                                <img
                                  alt={props.imageAlt13}
                                  src={props.imageSrc13}
                                  className="header-component-image22"
                                />
                              </div>
                            </a>
                            <div className="header-component-container245">
                              <a href="#">
                                <div className="header-component-container246">
                                  <span>
                                    {props.text301 ?? (
                                      <Fragment>
                                        <span className="header-component-text233">
                                          National Summit 2026
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-component-li35">
                  <a href="#" className="header-component-link66">
                    <div className="header-component-container247">
                      <span className="header-component-text181">
                        {props.text71 ?? (
                          <Fragment>
                            <span className="header-component-text319">
                              Media
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                  <div className="header-component-container248">
                    <div className="header-component-container249">
                      <div className="header-component-container250">
                        <div className="header-component-container251">
                          <p className="header-component-text182">
                            {props.text171 ?? (
                              <Fragment>
                                <span className="header-component-text267">
                                  {' '}
                                  Shows
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <div className="header-component-container252">
                            <div className="header-component-container253">
                              <a href="#">
                                <div className="header-component-container254">
                                  <span className="header-component-text183">
                                    {props.text311 ?? (
                                      <Fragment>
                                        <span className="header-component-text238">
                                          Upcoming
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                  <img
                                    alt={props.imageAlt21}
                                    src={props.imageSrc21}
                                    className="header-component-image23"
                                  />
                                </div>
                              </a>
                              <div className="header-component-container255">
                                <a href="#">
                                  <div className="header-component-container256">
                                    <span>
                                      {props.text511 ?? (
                                        <Fragment>
                                          <span className="header-component-text281">
                                            Culture Apothecary
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="header-component-container257">
                              <a href="#">
                                <div className="header-component-container258">
                                  <span className="header-component-text185">
                                    {props.text321 ?? (
                                      <Fragment>
                                        <span className="header-component-text339">
                                          Upcoming
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                  <img
                                    alt={props.imageAlt31}
                                    src={props.imageSrc31}
                                    className="header-component-image24"
                                  />
                                </div>
                              </a>
                              <div className="header-component-container259">
                                <a href="#">
                                  <div className="header-component-container260">
                                    <span>
                                      {props.text521 ?? (
                                        <Fragment>
                                          <span className="header-component-text231">
                                            Education Watch
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="header-component-container261">
                          <p className="header-component-text187">
                            {props.text181 ?? (
                              <Fragment>
                                <span className="header-component-text350">
                                  {' '}
                                  Press
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <ul className="header-component-ul19">
                            <li className="header-component-li36">
                              <a href="#">
                                <div className="header-component-container262">
                                  <span>
                                    {props.text331 ?? (
                                      <Fragment>
                                        <span className="header-component-text314">
                                          Press Inquiries
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="header-component-li37">
                              <a href="#">
                                <div className="header-component-container263">
                                  <span>
                                    {props.text341 ?? (
                                      <Fragment>
                                        <span className="header-component-text308">
                                          Media Kit
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-component-li38">
                  <a href="#" className="header-component-link73">
                    <div className="header-component-container264">
                      <span className="header-component-text190">
                        {props.text81 ?? (
                          <Fragment>
                            <span className="header-component-text241">
                              Movements
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                  <div className="header-component-container265">
                    <div className="header-component-container266">
                      <div className="header-component-container267">
                        <div className="header-component-container268">
                          <p className="header-component-text191">
                            {props.text191 ?? (
                              <Fragment>
                                <span className="header-component-text349">
                                  {' '}
                                  Our Method
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <ul className="header-component-ul20">
                            <li className="header-component-li39">
                              <a href="#">
                                <div className="header-component-container269">
                                  <strong>
                                    {props.text351 ?? (
                                      <Fragment>
                                        <span className="header-component-text251">
                                          F
                                        </span>
                                      </Fragment>
                                    )}
                                  </strong>
                                  <span>
                                    {props.text361 ?? (
                                      <Fragment>
                                        <span className="header-component-text282">
                                          {' '}
                                          — Find
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="header-component-li40">
                              <a href="#">
                                <div className="header-component-container270">
                                  <strong>
                                    {props.text371 ?? (
                                      <Fragment>
                                        <span className="header-component-text352">
                                          A
                                        </span>
                                      </Fragment>
                                    )}
                                  </strong>
                                  <span>
                                    {props.text381 ?? (
                                      <Fragment>
                                        <span className="header-component-text303">
                                          {' '}
                                          — Assess
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="header-component-li41">
                              <a href="#">
                                <div className="header-component-container271">
                                  <strong>
                                    {props.text391 ?? (
                                      <Fragment>
                                        <span className="header-component-text260">
                                          I
                                        </span>
                                      </Fragment>
                                    )}
                                  </strong>
                                  <span>
                                    {props.text401 ?? (
                                      <Fragment>
                                        <span className="header-component-text301">
                                          {' '}
                                          — Initiate
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="header-component-li42">
                              <a href="#">
                                <div className="header-component-container272">
                                  <strong>
                                    {props.text411 ?? (
                                      <Fragment>
                                        <span className="header-component-text239">
                                          S
                                        </span>
                                      </Fragment>
                                    )}
                                  </strong>
                                  <span>
                                    {props.text421 ?? (
                                      <Fragment>
                                        <span className="header-component-text332">
                                          {' '}
                                          — Solution
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-component-li43">
                  <a href="#" className="header-component-link78">
                    <div className="header-component-container273">
                      <span className="header-component-text200">
                        {props.text91 ?? (
                          <Fragment>
                            <span className="header-component-text262">
                              News
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                  <div className="header-component-container274">
                    <div className="header-component-container275">
                      <div className="header-component-container276">
                        <div className="header-component-container277">
                          <p className="header-component-text201">
                            {props.text201 ?? (
                              <Fragment>
                                <span className="header-component-text341">
                                  {' '}
                                  Latest Headlines
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <div className="header-component-container278">
                            <div className="header-component-container279">
                              <div className="header-component-container280">
                                <img
                                  alt={props.imageAlt41}
                                  src={props.imageSrc41}
                                  className="header-component-image25"
                                />
                              </div>
                              <div className="header-component-container281">
                                <a href="#">
                                  <div className="header-component-container282">
                                    <span>
                                      {props.text531 ?? (
                                        <Fragment>
                                          <span className="header-component-text317">
                                            School Safety Initiatives
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="header-component-container283">
                              <div className="header-component-container284">
                                <img
                                  alt={props.imageAlt51}
                                  src={props.imageSrc51}
                                  className="header-component-image26"
                                />
                              </div>
                              <div className="header-component-container285">
                                <a href="#">
                                  <div className="header-component-container286">
                                    <span>
                                      {props.text541 ?? (
                                        <Fragment>
                                          <span className="header-component-text343">
                                            Educational Expansion
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="header-component-container287">
                              <div className="header-component-container288">
                                <img
                                  alt={props.imageAlt61}
                                  src={props.imageSrc61}
                                  className="header-component-image27"
                                />
                              </div>
                              <div className="header-component-container289">
                                <a href="#">
                                  <div className="header-component-container290">
                                    <span>
                                      {props.text551 ?? (
                                        <Fragment>
                                          <span className="header-component-text272">
                                            Transparency Envoy
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="header-component-ul21">
                <li className="header-component-li44">
                  <Link href={props.containerUrl11?.['url']}>
                    <a
                      target={
                        props.containerUrl11?.['newTab'] ? '_blank' : undefined
                      }
                      rel={
                        props.containerUrl11?.['newTab']
                          ? 'noreferrer noopener'
                          : undefined
                      }
                      className="header-component-link82"
                    >
                      <div className="header-component-container291">
                        <span className="header-component-text205">
                          {props.text101 ?? (
                            <Fragment>
                              <span className="header-component-text232">
                                Resources
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                  <div className="header-component-container292">
                    <div className="header-component-container293">
                      <div className="header-component-container294">
                        <div className="header-component-container295">
                          <p className="header-component-text206">
                            {props.text211 ?? (
                              <Fragment>
                                <span className="header-component-text242">
                                  {' '}
                                  Activism Toolkit
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <div className="header-component-container296">
                            <div className="header-component-container297">
                              <Link href={props.containerUrl31?.['url']}>
                                <a
                                  target={
                                    props.containerUrl31?.['newTab']
                                      ? '_blank'
                                      : undefined
                                  }
                                  rel={
                                    props.containerUrl31?.['newTab']
                                      ? 'noreferrer noopener'
                                      : undefined
                                  }
                                >
                                  <div className="header-component-container298">
                                    <span className="header-component-text207">
                                      {props.text431 ?? (
                                        <Fragment>
                                          <span className="header-component-text264">
                                            Parents
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                    <img
                                      alt={props.imageAlt71}
                                      src={props.imageSrc71}
                                      className="header-component-image28"
                                    />
                                  </div>
                                </a>
                              </Link>
                              <div className="header-component-container299">
                                <Link href={props.containerUrl71?.['url']}>
                                  <a
                                    target={
                                      props.containerUrl71?.['newTab']
                                        ? '_blank'
                                        : undefined
                                    }
                                    rel={
                                      props.containerUrl71?.['newTab']
                                        ? 'noreferrer noopener'
                                        : undefined
                                    }
                                  >
                                    <div className="header-component-container300">
                                      <span>
                                        {props.text561 ?? (
                                          <Fragment>
                                            <span className="header-component-text334">
                                              Parent Playbook
                                            </span>
                                          </Fragment>
                                        )}
                                      </span>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="header-component-container301">
                              <Link href={props.containerUrl41?.['url']}>
                                <a
                                  target={
                                    props.containerUrl41?.['newTab']
                                      ? '_blank'
                                      : undefined
                                  }
                                  rel={
                                    props.containerUrl41?.['newTab']
                                      ? 'noreferrer noopener'
                                      : undefined
                                  }
                                >
                                  <div className="header-component-container302">
                                    <span className="header-component-text209">
                                      {props.text441 ?? (
                                        <Fragment>
                                          <span className="header-component-text283">
                                            Students
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                    <img
                                      alt={props.imageAlt81}
                                      src={props.imageSrc81}
                                      className="header-component-image29"
                                    />
                                  </div>
                                </a>
                              </Link>
                              <div className="header-component-container303">
                                <Link href={props.containerUrl81?.['url']}>
                                  <a
                                    target={
                                      props.containerUrl81?.['newTab']
                                        ? '_blank'
                                        : undefined
                                    }
                                    rel={
                                      props.containerUrl81?.['newTab']
                                        ? 'noreferrer noopener'
                                        : undefined
                                    }
                                  >
                                    <div className="header-component-container304">
                                      <span>
                                        {props.text571 ?? (
                                          <Fragment>
                                            <span className="header-component-text240">
                                              Student Rights
                                            </span>
                                          </Fragment>
                                        )}
                                      </span>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="header-component-container305">
                              <Link href={props.containerUrl51?.['url']}>
                                <a
                                  target={
                                    props.containerUrl51?.['newTab']
                                      ? '_blank'
                                      : undefined
                                  }
                                  rel={
                                    props.containerUrl51?.['newTab']
                                      ? 'noreferrer noopener'
                                      : undefined
                                  }
                                >
                                  <div className="header-component-container306">
                                    <span className="header-component-text211">
                                      {props.text451 ?? (
                                        <Fragment>
                                          <span className="header-component-text330">
                                            Educators
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                    <img
                                      alt={props.imageAlt91}
                                      src={props.imageSrc91}
                                      className="header-component-image30"
                                    />
                                  </div>
                                </a>
                              </Link>
                              <div className="header-component-container307">
                                <Link href={props.containerUrl91?.['url']}>
                                  <a
                                    target={
                                      props.containerUrl91?.['newTab']
                                        ? '_blank'
                                        : undefined
                                    }
                                    rel={
                                      props.containerUrl91?.['newTab']
                                        ? 'noreferrer noopener'
                                        : undefined
                                    }
                                  >
                                    <div className="header-component-container308">
                                      <span>
                                        {props.text581 ?? (
                                          <Fragment>
                                            <span className="header-component-text351">
                                              Educator Resources
                                            </span>
                                          </Fragment>
                                        )}
                                      </span>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="header-component-container309">
                              <Link href={props.containerUrl61?.['url']}>
                                <a
                                  target={
                                    props.containerUrl61?.['newTab']
                                      ? '_blank'
                                      : undefined
                                  }
                                  rel={
                                    props.containerUrl61?.['newTab']
                                      ? 'noreferrer noopener'
                                      : undefined
                                  }
                                >
                                  <div className="header-component-container310">
                                    <span className="header-component-text213">
                                      {props.text461 ?? (
                                        <Fragment>
                                          <span className="header-component-text300">
                                            Reporting
                                          </span>
                                        </Fragment>
                                      )}
                                    </span>
                                    <img
                                      alt={props.imageAlt101}
                                      src={props.imageSrc101}
                                      className="header-component-image31"
                                    />
                                  </div>
                                </a>
                              </Link>
                              <div className="header-component-container311">
                                <Link href={props.containerUrl101?.['url']}>
                                  <a
                                    target={
                                      props.containerUrl101?.['newTab']
                                        ? '_blank'
                                        : undefined
                                    }
                                    rel={
                                      props.containerUrl101?.['newTab']
                                        ? 'noreferrer noopener'
                                        : undefined
                                    }
                                  >
                                    <div className="header-component-container312">
                                      <span>
                                        {props.text591 ?? (
                                          <Fragment>
                                            <span className="header-component-text294">
                                              Incident Portal
                                            </span>
                                          </Fragment>
                                        )}
                                      </span>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-component-li45">
                  <a href="#" className="header-component-link91">
                    <div className="header-component-container313">
                      <span className="header-component-text215">
                        {props.text111 ?? (
                          <Fragment>
                            <span className="header-component-text287">
                              Shop
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </a>
                  <div className="header-component-container314">
                    <div className="header-component-container315">
                      <div className="header-component-container316">
                        <div className="header-component-container317">
                          <p className="header-component-text216">
                            {props.text221 ?? (
                              <Fragment>
                                <span className="header-component-text307">
                                  {' '}
                                  FAIS Store
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <ul className="header-component-ul22">
                            <li className="header-component-li46">
                              <a href="#">
                                <div className="header-component-container318">
                                  <span>
                                    {props.text471 ?? (
                                      <Fragment>
                                        <span className="header-component-text293">
                                          Apparel
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="header-component-li47">
                              <a href="#">
                                <div className="header-component-container319">
                                  <span>
                                    {props.text481 ?? (
                                      <Fragment>
                                        <span className="header-component-text320">
                                          Gear
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-component-li48">
                  <Link href="/contact">
                    <a className="header-component-link94">
                      <div className="header-component-container320">
                        <span className="header-component-text219">
                          {props.text121 ?? (
                            <Fragment>
                              <span className="header-component-text261">
                                Get Involved
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </a>
                  </Link>
                  <div className="header-component-container321">
                    <div className="header-component-container322">
                      <div className="header-component-container323">
                        <div className="header-component-container324">
                          <p className="header-component-text220">
                            {props.text231 ?? (
                              <Fragment>
                                <span className="header-component-text346">
                                  {' '}
                                  Take Action
                                </span>
                              </Fragment>
                            )}
                          </p>
                          <ul className="header-component-ul23">
                            <li className="header-component-li49">
                              <a href="#">
                                <div className="header-component-container325">
                                  <span>
                                    {props.text491 ?? (
                                      <Fragment>
                                        <span className="header-component-text271">
                                          Volunteer
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="header-component-li50">
                              <a href="#">
                                <div className="header-component-container326">
                                  <span>
                                    {props.text501 ?? (
                                      <Fragment>
                                        <span className="header-component-text337">
                                          Partner with Us
                                        </span>
                                      </Fragment>
                                    )}
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="#" className="header-component-link97">
                <div className="header-component-thq-donate-elm">
                  <span>
                    {props.text131 ?? (
                      <Fragment>
                        <span className="header-component-text229">Donate</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <nav className="header-component-thq-links-elm2">
                <span className="header-component-text224">
                  {props.text65 ?? (
                    <Fragment>
                      <span className="header-component-text235">About</span>
                    </Fragment>
                  )}
                </span>
                <span className="header-component-text225">
                  {props.text66 ?? (
                    <Fragment>
                      <span className="header-component-text290">Features</span>
                    </Fragment>
                  )}
                </span>
                <span className="header-component-text226">
                  {props.text67 ?? (
                    <Fragment>
                      <span className="header-component-text253">Pricing</span>
                    </Fragment>
                  )}
                </span>
                <span className="header-component-text227">
                  {props.text68 ?? (
                    <Fragment>
                      <span className="header-component-text286">Team</span>
                    </Fragment>
                  )}
                </span>
                <span className="header-component-text228">
                  {props.text69 ?? (
                    <Fragment>
                      <span className="header-component-text250">Blog</span>
                    </Fragment>
                  )}
                </span>
              </nav>
            </div>
            <div className="header-component-container327">
              <a href="#" className="header-component-link98">
                <div
                  aria-label="Facebook"
                  className="header-component-container328"
                >
                  <svg
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="header-component-link99">
                <div
                  aria-label="Instagram"
                  className="header-component-container329"
                >
                  <svg
                    fill="none"
                    width="16"
                    height="16"
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
              <a href="#" className="header-component-link100">
                <div
                  aria-label="X (Twitter)"
                  className="header-component-container330"
                >
                  <svg fill="none" width="16" height="16" viewBox="0 0 18 19">
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
              <a href="#" className="header-component-link101">
                <div
                  aria-label="YouTube"
                  className="header-component-container331"
                >
                  <svg
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-component-container100 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .header-component-thq-sarech-elm {
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            display: flex;
            opacity: 0;
            z-index: 5000;
            position: fixed;
            background: rgba(255, 255, 255, 0.95);
            visibility: hidden;
            align-items: center;
            backdrop-filter: blur(10px);
            justify-content: center;
          }
          .header-component-button {
            top: 40px;
            color: #fff;
            right: 40px;
            width: 48px;
            border: none;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 5001;
            position: absolute;
            background: #000;
            align-items: center;
            border-radius: 50%;
            justify-content: center;
          }
          .header-component-container101 {
            width: 90%;
            max-width: 1000px;
            transform: translateY(40px);
          }
          .header-component-textinput {
            color: #000;
            width: 100%;
            border: none;
            outline: none;
            padding: 40px 0;
            font-size: 5rem;
            background: transparent;
            font-style: italic;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            border-bottom: 8px solid #000;
            letter-spacing: -2px;
            text-transform: uppercase;
          }
          .header-component-container102 {
            color: #000;
            font-size: 0.85rem;
            margin-top: 10px;
            text-align: right;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .header-component-thq-container-elm {
            top: 0;
            left: 0;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            opacity: 0;
            z-index: 1900;
            position: fixed;
            background: rgba(0, 0, 0, 0.3);
            visibility: hidden;
            pointer-events: none;
            backdrop-filter: blur(4px);
          }
          .header-component-thq-header-elm {
            top: 0;
            left: 0;
            width: 100%;
            z-index: 2000;
            position: fixed;
          }
          .header-component-container103 {
            z-index: 2600;
            position: relative;
            background: var(--dl-color-theme-neutral-dark);
          }
          .header-component-container104 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container105 {
            display: flex;
            min-height: 90px;
            align-items: stretch;
            justify-content: space-between;
          }
          .header-component-container106 {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .header-component-container107 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-items: center;
          }
          .header-component-link10 {
            display: contents;
          }
          .header-component-container108 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-link11 {
            display: contents;
          }
          .header-component-container109 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-link12 {
            display: contents;
          }
          .header-component-container110 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-link13 {
            display: contents;
          }
          .header-component-container111 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-container112 {
            gap: 4px;
            display: flex;
            align-items: center;
            padding-bottom: 8px;
          }
          .header-component-ul10 {
            gap: 2px;
            display: flex;
            list-style: none;
            align-items: center;
          }
          .header-component-li10 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link14 {
            display: contents;
          }
          .header-component-container113 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text101 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container114 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container115 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container116 {
            gap: 40px;
            display: flex;
          }
          .header-component-container117 {
            flex: 3;
          }
          .header-component-text102 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container118 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container119 {
            width: 100%;
            height: 180px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text103 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image10 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container120 {
            padding: 16px;
          }
          .header-component-container121 {
            color: #000;
            display: block;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-text105 {
            color: #666;
            font-size: 0.78rem;
            margin-top: 6px;
            line-height: 1.5;
          }
          .header-component-container122 {
            flex: 1;
          }
          .header-component-text106 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul11 {
            list-style: none;
          }
          .header-component-li11 {
            margin-bottom: 10px;
          }
          .header-component-container123 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li12 {
            margin-bottom: 10px;
          }
          .header-component-container124 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li13 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link19 {
            display: contents;
          }
          .header-component-container125 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text109 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container126 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container127 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container128 {
            gap: 40px;
            display: flex;
          }
          .header-component-container129 {
            flex: 3;
          }
          .header-component-text110 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container130 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container131 {
            width: 100%;
            height: 180px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text111 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image11 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container132 {
            padding: 16px;
          }
          .header-component-container133 {
            color: #000;
            display: block;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-li14 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link22 {
            display: contents;
          }
          .header-component-container134 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text113 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container135 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container136 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container137 {
            gap: 40px;
            display: flex;
          }
          .header-component-container138 {
            flex: 3;
          }
          .header-component-text114 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container139 {
            gap: 20px;
            display: flex;
          }
          .header-component-container140 {
            flex: 1;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container141 {
            width: 100%;
            height: 130px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text115 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image12 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container142 {
            padding: 16px;
          }
          .header-component-container143 {
            color: #000;
            display: block;
            font-size: 0.9rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container144 {
            flex: 1;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container145 {
            width: 100%;
            height: 130px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text117 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image13 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container146 {
            padding: 16px;
          }
          .header-component-container147 {
            color: #000;
            display: block;
            font-size: 0.9rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container148 {
            flex: 1;
          }
          .header-component-text119 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul12 {
            list-style: none;
          }
          .header-component-li15 {
            margin-bottom: 10px;
          }
          .header-component-container149 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li16 {
            margin-bottom: 10px;
          }
          .header-component-container150 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li17 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link29 {
            display: contents;
          }
          .header-component-container151 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text122 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container152 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container153 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container154 {
            gap: 40px;
            display: flex;
          }
          .header-component-container155 {
            flex: 1;
          }
          .header-component-text123 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul13 {
            list-style: none;
          }
          .header-component-li18 {
            margin-bottom: 10px;
          }
          .header-component-container156 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li19 {
            margin-bottom: 10px;
          }
          .header-component-container157 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li20 {
            margin-bottom: 10px;
          }
          .header-component-container158 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li21 {
            margin-bottom: 10px;
          }
          .header-component-container159 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li22 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link34 {
            display: contents;
          }
          .header-component-container160 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text132 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container161 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container162 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container163 {
            gap: 40px;
            display: flex;
          }
          .header-component-container164 {
            flex: 3;
          }
          .header-component-text133 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container165 {
            gap: 16px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .header-component-container166 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container167 {
            height: 90px;
            position: relative;
          }
          .header-component-image14 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container168 {
            padding: 10px;
          }
          .header-component-container169 {
            color: #000;
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container170 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container171 {
            height: 90px;
            position: relative;
          }
          .header-component-image15 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container172 {
            padding: 10px;
          }
          .header-component-container173 {
            color: #000;
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container174 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container175 {
            height: 90px;
            position: relative;
          }
          .header-component-image16 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container176 {
            padding: 10px;
          }
          .header-component-container177 {
            color: #000;
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container178 {
            display: flex;
            padding: 0 20px;
            align-items: center;
          }
          .header-component-link38 {
            display: contents;
          }
          .header-component-container179 {
            color: #fff;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
          }
          .header-component-icon25 {
            width: 110px;
            height: auto;
            margin-bottom: -8px;
          }
          .header-component-text137 {
            color: inherit;
            font-size: 3rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1;
            letter-spacing: -2px;
          }
          .header-component-text138 {
            color: #e31b23;
            font-size: 0.62rem;
            margin-top: 4px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container180 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .header-component-container181 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-items: center;
            justify-content: flex-end;
          }
          .header-component-link39 {
            display: contents;
          }
          .header-component-container182 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-component-link40 {
            display: contents;
          }
          .header-component-container183 {
            gap: 5px;
            color: #fff;
            display: flex;
            font-size: 0.72rem;
            align-items: center;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-component-container184 {
            gap: 4px;
            display: flex;
            align-items: center;
            padding-bottom: 8px;
            justify-content: flex-end;
          }
          .header-component-ul14 {
            gap: 2px;
            display: flex;
            list-style: none;
            align-items: center;
          }
          .header-component-li23 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link41 {
            display: contents;
          }
          .header-component-container185 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text141 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container186 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container187 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container188 {
            gap: 40px;
            display: flex;
          }
          .header-component-container189 {
            flex: 3;
          }
          .header-component-text142 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container190 {
            gap: 16px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .header-component-container191 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container192 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text143 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image17 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container193 {
            padding: 10px;
          }
          .header-component-container194 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container195 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container196 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text145 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image18 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container197 {
            padding: 10px;
          }
          .header-component-container198 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container199 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container200 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text147 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image19 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container201 {
            padding: 10px;
          }
          .header-component-container202 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container203 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container204 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text149 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image20 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container205 {
            padding: 10px;
          }
          .header-component-container206 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-li24 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link50 {
            display: contents;
          }
          .header-component-container207 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text151 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container208 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container209 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container210 {
            gap: 40px;
            display: flex;
          }
          .header-component-container211 {
            flex: 1;
          }
          .header-component-text152 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul15 {
            list-style: none;
          }
          .header-component-li25 {
            margin-bottom: 10px;
          }
          .header-component-container212 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li26 {
            margin-bottom: 10px;
          }
          .header-component-container213 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li27 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link53 {
            display: contents;
          }
          .header-component-container214 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text155 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container215 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container216 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container217 {
            gap: 40px;
            display: flex;
          }
          .header-component-container218 {
            flex: 1;
          }
          .header-component-text156 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul16 {
            list-style: none;
          }
          .header-component-li28 {
            margin-bottom: 10px;
          }
          .header-component-container219 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li29 {
            margin-bottom: 10px;
          }
          .header-component-container220 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-container221 {
            color: #fff;
            border: 2px solid #fff;
            cursor: pointer;
            padding: 7px 16px;
            font-size: 0.7rem;
            background: transparent;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-component-container222 {
            display: none;
          }
          .header-component-container223 {
            display: contents;
          }
          .header-component-thq-navbar-interactive-elm {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .header-component-container224 {
            display: flex;
            padding: 0 20px;
            align-items: center;
          }
          .header-component-link57 {
            display: contents;
          }
          .header-component-container225 {
            color: #fff;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
          }
          .header-component-icon30 {
            width: 110px;
            height: auto;
            margin-bottom: -8px;
          }
          .header-component-text160 {
            color: inherit;
            font-size: 3rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1;
            letter-spacing: -2px;
          }
          .header-component-text161 {
            color: #e31b23;
            font-size: 0.62rem;
            margin-top: 4px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-thq-desktop-menu-elm {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .header-component-thq-links-elm1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-component-text163 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .header-component-text164 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .header-component-text165 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .header-component-text166 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .header-component-thq-buttons-elm {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-component-thq-login-elm {
            border-width: 0px;
            margin-right: var(--dl-layout-space-twounits);
          }
          .header-component-thq-burger-menu-elm {
            display: none;
          }
          .header-component-icon32 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-component-thq-mobile-menu-elm {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-component-thq-nav-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-component-thq-top-elm {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .header-component-thq-logo-elm {
            height: 2rem;
          }
          .header-component-thq-close-menu-elm {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-component-icon34 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-component-ul17 {
            gap: 2px;
            display: flex;
            list-style: none;
            align-items: center;
          }
          .header-component-li31 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link58 {
            display: contents;
          }
          .header-component-container226 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text169 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container227 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container228 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container229 {
            gap: 40px;
            display: flex;
          }
          .header-component-container230 {
            flex: 3;
          }
          .header-component-text170 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container231 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container232 {
            width: 100%;
            height: 180px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text171 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image21 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container233 {
            padding: 16px;
          }
          .header-component-container234 {
            color: #000;
            display: block;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-text173 {
            color: #666;
            font-size: 0.78rem;
            margin-top: 6px;
            line-height: 1.5;
          }
          .header-component-container235 {
            flex: 1;
          }
          .header-component-text174 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul18 {
            list-style: none;
          }
          .header-component-li32 {
            margin-bottom: 10px;
          }
          .header-component-container236 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li33 {
            margin-bottom: 10px;
          }
          .header-component-container237 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li34 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link63 {
            display: contents;
          }
          .header-component-container238 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text177 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container239 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container240 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container241 {
            gap: 40px;
            display: flex;
          }
          .header-component-container242 {
            flex: 3;
          }
          .header-component-text178 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container243 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container244 {
            width: 100%;
            height: 180px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text179 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image22 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container245 {
            padding: 16px;
          }
          .header-component-container246 {
            color: #000;
            display: block;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-li35 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link66 {
            display: contents;
          }
          .header-component-container247 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text181 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container248 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container249 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container250 {
            gap: 40px;
            display: flex;
          }
          .header-component-container251 {
            flex: 3;
          }
          .header-component-text182 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container252 {
            gap: 20px;
            display: flex;
          }
          .header-component-container253 {
            flex: 1;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container254 {
            width: 100%;
            height: 130px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text183 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image23 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container255 {
            padding: 16px;
          }
          .header-component-container256 {
            color: #000;
            display: block;
            font-size: 0.9rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container257 {
            flex: 1;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container258 {
            width: 100%;
            height: 130px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text185 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image24 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container259 {
            padding: 16px;
          }
          .header-component-container260 {
            color: #000;
            display: block;
            font-size: 0.9rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container261 {
            flex: 1;
          }
          .header-component-text187 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul19 {
            list-style: none;
          }
          .header-component-li36 {
            margin-bottom: 10px;
          }
          .header-component-container262 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li37 {
            margin-bottom: 10px;
          }
          .header-component-container263 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li38 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link73 {
            display: contents;
          }
          .header-component-container264 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text190 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container265 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container266 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container267 {
            gap: 40px;
            display: flex;
          }
          .header-component-container268 {
            flex: 1;
          }
          .header-component-text191 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul20 {
            list-style: none;
          }
          .header-component-li39 {
            margin-bottom: 10px;
          }
          .header-component-container269 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li40 {
            margin-bottom: 10px;
          }
          .header-component-container270 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li41 {
            margin-bottom: 10px;
          }
          .header-component-container271 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li42 {
            margin-bottom: 10px;
          }
          .header-component-container272 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li43 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link78 {
            display: contents;
          }
          .header-component-container273 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text200 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container274 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container275 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container276 {
            gap: 40px;
            display: flex;
          }
          .header-component-container277 {
            flex: 3;
          }
          .header-component-text201 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container278 {
            gap: 16px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .header-component-container279 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container280 {
            height: 90px;
            position: relative;
          }
          .header-component-image25 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container281 {
            padding: 10px;
          }
          .header-component-container282 {
            color: #000;
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container283 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container284 {
            height: 90px;
            position: relative;
          }
          .header-component-image26 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container285 {
            padding: 10px;
          }
          .header-component-container286 {
            color: #000;
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container287 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container288 {
            height: 90px;
            position: relative;
          }
          .header-component-image27 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container289 {
            padding: 10px;
          }
          .header-component-container290 {
            color: #000;
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-ul21 {
            gap: 2px;
            display: flex;
            list-style: none;
            align-items: center;
          }
          .header-component-li44 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link82 {
            display: contents;
          }
          .header-component-container291 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text205 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container292 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container293 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container294 {
            gap: 40px;
            display: flex;
          }
          .header-component-container295 {
            flex: 3;
          }
          .header-component-text206 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-container296 {
            gap: 16px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .header-component-container297 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container298 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text207 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image28 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container299 {
            padding: 10px;
          }
          .header-component-container300 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container301 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container302 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text209 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image29 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container303 {
            padding: 10px;
          }
          .header-component-container304 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container305 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container306 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text211 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image30 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container307 {
            padding: 10px;
          }
          .header-component-container308 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-container309 {
            overflow: hidden;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .header-component-container310 {
            width: 100%;
            height: 120px;
            display: block;
            overflow: hidden;
            position: relative;
          }
          .header-component-text213 {
            top: 12px;
            left: 12px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .header-component-image31 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .header-component-container311 {
            padding: 10px;
          }
          .header-component-container312 {
            color: #000;
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            text-decoration: none;
          }
          .header-component-li45 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link91 {
            display: contents;
          }
          .header-component-container313 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text215 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container314 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container315 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container316 {
            gap: 40px;
            display: flex;
          }
          .header-component-container317 {
            flex: 1;
          }
          .header-component-text216 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul22 {
            list-style: none;
          }
          .header-component-li46 {
            margin-bottom: 10px;
          }
          .header-component-container318 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li47 {
            margin-bottom: 10px;
          }
          .header-component-container319 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li48 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .header-component-link94 {
            display: contents;
          }
          .header-component-container320 {
            gap: 5px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
          }
          .header-component-text219 {
            color: #fff;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .header-component-container321 {
            top: 90px;
            left: 50%;
            width: 95vw;
            opacity: 0;
            padding: 50px 0;
            z-index: 2500;
            overflow: hidden;
            position: fixed;
            max-width: 1300px;
            transform: translateX(-50%) perspective(1200px) rotateX(-10deg)
              scaleY(0.95);
            background: #fff;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
            visibility: hidden;
            pointer-events: none;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
          .header-component-container322 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .header-component-container323 {
            gap: 40px;
            display: flex;
          }
          .header-component-container324 {
            flex: 1;
          }
          .header-component-text220 {
            color: #e31b23;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .header-component-ul23 {
            list-style: none;
          }
          .header-component-li49 {
            margin-bottom: 10px;
          }
          .header-component-container325 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-li50 {
            margin-bottom: 10px;
          }
          .header-component-container326 {
            color: #000;
            font-size: 0.92rem;
            font-weight: 600;
            text-decoration: none;
          }
          .header-component-link97 {
            display: contents;
          }
          .header-component-thq-donate-elm {
            color: #fff;
            border: 2px solid #fff;
            cursor: pointer;
            padding: 7px 16px;
            font-size: 0.7rem;
            background: transparent;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            border-radius: 4px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-component-thq-links-elm2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-component-text224 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-component-text225 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-component-text226 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-component-text227 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-component-text228 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-component-container327 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-items: center;
          }
          .header-component-link98 {
            display: contents;
          }
          .header-component-container328 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-link99 {
            display: contents;
          }
          .header-component-container329 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-link100 {
            display: contents;
          }
          .header-component-container330 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-link101 {
            display: contents;
          }
          .header-component-container331 {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .header-component-text229 {
            display: inline-block;
          }
          .header-component-text230 {
            display: inline-block;
          }
          .header-component-text231 {
            display: inline-block;
          }
          .header-component-text232 {
            display: inline-block;
          }
          .header-component-text233 {
            display: inline-block;
          }
          .header-component-text234 {
            display: inline-block;
          }
          .header-component-text235 {
            display: inline-block;
          }
          .header-component-text236 {
            display: inline-block;
          }
          .header-component-text237 {
            display: inline-block;
          }
          .header-component-text238 {
            display: inline-block;
          }
          .header-component-text239 {
            display: inline-block;
          }
          .header-component-text240 {
            display: inline-block;
          }
          .header-component-text241 {
            display: inline-block;
          }
          .header-component-text242 {
            display: inline-block;
          }
          .header-component-text243 {
            display: inline-block;
          }
          .header-component-text244 {
            display: inline-block;
          }
          .header-component-text245 {
            display: inline-block;
          }
          .header-component-text246 {
            display: inline-block;
          }
          .header-component-text247 {
            display: inline-block;
          }
          .header-component-text248 {
            display: inline-block;
          }
          .header-component-text249 {
            display: inline-block;
          }
          .header-component-text250 {
            display: inline-block;
          }
          .header-component-text251 {
            display: inline-block;
          }
          .header-component-text252 {
            display: inline-block;
          }
          .header-component-text253 {
            display: inline-block;
          }
          .header-component-text254 {
            display: inline-block;
          }
          .header-component-text255 {
            display: inline-block;
          }
          .header-component-text256 {
            display: inline-block;
          }
          .header-component-text257 {
            display: inline-block;
          }
          .header-component-text258 {
            display: inline-block;
          }
          .header-component-text259 {
            display: inline-block;
          }
          .header-component-text260 {
            display: inline-block;
          }
          .header-component-text261 {
            display: inline-block;
          }
          .header-component-text262 {
            display: inline-block;
          }
          .header-component-text263 {
            display: inline-block;
          }
          .header-component-text264 {
            display: inline-block;
          }
          .header-component-text265 {
            display: inline-block;
          }
          .header-component-text266 {
            display: inline-block;
          }
          .header-component-text267 {
            display: inline-block;
          }
          .header-component-text268 {
            display: inline-block;
          }
          .header-component-text269 {
            display: inline-block;
          }
          .header-component-text270 {
            display: inline-block;
          }
          .header-component-text271 {
            display: inline-block;
          }
          .header-component-text272 {
            display: inline-block;
          }
          .header-component-text273 {
            display: inline-block;
          }
          .header-component-text274 {
            display: inline-block;
          }
          .header-component-text275 {
            display: inline-block;
          }
          .header-component-text276 {
            display: inline-block;
          }
          .header-component-text277 {
            display: inline-block;
          }
          .header-component-text278 {
            display: inline-block;
          }
          .header-component-text279 {
            display: inline-block;
          }
          .header-component-text280 {
            display: inline-block;
          }
          .header-component-text281 {
            display: inline-block;
          }
          .header-component-text282 {
            display: inline-block;
          }
          .header-component-text283 {
            display: inline-block;
          }
          .header-component-text284 {
            display: inline-block;
          }
          .header-component-text285 {
            display: inline-block;
          }
          .header-component-text286 {
            display: inline-block;
          }
          .header-component-text287 {
            display: inline-block;
          }
          .header-component-text288 {
            display: inline-block;
          }
          .header-component-text289 {
            display: inline-block;
          }
          .header-component-text290 {
            display: inline-block;
          }
          .header-component-text291 {
            display: inline-block;
          }
          .header-component-text292 {
            display: inline-block;
          }
          .header-component-text293 {
            display: inline-block;
          }
          .header-component-text294 {
            display: inline-block;
          }
          .header-component-text295 {
            display: inline-block;
          }
          .header-component-text296 {
            display: inline-block;
          }
          .header-component-text297 {
            display: inline-block;
          }
          .header-component-text298 {
            display: inline-block;
          }
          .header-component-text299 {
            display: inline-block;
          }
          .header-component-text300 {
            display: inline-block;
          }
          .header-component-text301 {
            display: inline-block;
          }
          .header-component-text302 {
            display: inline-block;
          }
          .header-component-text303 {
            display: inline-block;
          }
          .header-component-text304 {
            display: inline-block;
          }
          .header-component-text305 {
            display: inline-block;
          }
          .header-component-text306 {
            display: inline-block;
          }
          .header-component-text307 {
            display: inline-block;
          }
          .header-component-text308 {
            display: inline-block;
          }
          .header-component-text309 {
            display: inline-block;
          }
          .header-component-text310 {
            display: inline-block;
          }
          .header-component-text311 {
            display: inline-block;
          }
          .header-component-text312 {
            display: inline-block;
          }
          .header-component-text313 {
            display: inline-block;
          }
          .header-component-text314 {
            display: inline-block;
          }
          .header-component-text315 {
            display: inline-block;
          }
          .header-component-text316 {
            display: inline-block;
          }
          .header-component-text317 {
            display: inline-block;
          }
          .header-component-text318 {
            display: inline-block;
          }
          .header-component-text319 {
            display: inline-block;
          }
          .header-component-text320 {
            display: inline-block;
          }
          .header-component-text321 {
            display: inline-block;
          }
          .header-component-text322 {
            display: inline-block;
          }
          .header-component-text323 {
            display: inline-block;
          }
          .header-component-text324 {
            display: inline-block;
          }
          .header-component-text325 {
            display: inline-block;
          }
          .header-component-text326 {
            display: inline-block;
          }
          .header-component-text327 {
            display: inline-block;
          }
          .header-component-text328 {
            display: inline-block;
          }
          .header-component-text329 {
            display: inline-block;
          }
          .header-component-text330 {
            display: inline-block;
          }
          .header-component-text331 {
            display: inline-block;
          }
          .header-component-text332 {
            display: inline-block;
          }
          .header-component-text333 {
            display: inline-block;
          }
          .header-component-text334 {
            display: inline-block;
          }
          .header-component-text335 {
            display: inline-block;
          }
          .header-component-text336 {
            display: inline-block;
          }
          .header-component-text337 {
            display: inline-block;
          }
          .header-component-text338 {
            display: inline-block;
          }
          .header-component-text339 {
            display: inline-block;
          }
          .header-component-text340 {
            display: inline-block;
          }
          .header-component-text341 {
            display: inline-block;
          }
          .header-component-text342 {
            display: inline-block;
          }
          .header-component-text343 {
            display: inline-block;
          }
          .header-component-text344 {
            display: inline-block;
          }
          .header-component-text345 {
            display: inline-block;
          }
          .header-component-text346 {
            display: inline-block;
          }
          .header-component-text347 {
            display: inline-block;
          }
          .header-component-text348 {
            display: inline-block;
          }
          .header-component-text349 {
            display: inline-block;
          }
          .header-component-text350 {
            display: inline-block;
          }
          .header-component-text351 {
            display: inline-block;
          }
          .header-component-text352 {
            display: inline-block;
          }
          .header-component-text353 {
            display: inline-block;
          }
          .header-component-text354 {
            display: inline-block;
          }
          .header-component-text355 {
            display: inline-block;
          }
          .header-component-text356 {
            display: inline-block;
          }
          .header-component-text357 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .header-component-thq-navbar-interactive-elm {
              display: none;
            }
          }
          @media (max-width: 1200px) {
            .header-component-thq-navbar-interactive-elm {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .header-component-thq-sarech-elm {
              display: none;
            }
            .header-component-thq-container-elm {
              display: none;
            }
            .header-component-thq-header-elm {
              display: none;
            }
            .header-component-text138 {
              text-align: center;
            }
            .header-component-thq-navbar-interactive-elm {
              display: flex;
              background-color: #111;
            }
            .header-component-text161 {
              text-align: center;
            }
            .header-component-thq-desktop-menu-elm {
              display: none;
            }
            .header-component-thq-burger-menu-elm {
              width: 35px;
              height: 35px;
              display: flex;
            }
            .header-component-icon32 {
              fill: #d9d9d9;
              width: 35px;
              height: 35px;
            }
            .header-component-thq-mobile-menu-elm {
              background-color: #000000;
            }
            .header-component-ul17 {
              flex-direction: column;
            }
            .header-component-ul21 {
              flex-direction: column;
            }
            .header-component-thq-donate-elm {
              margin-top: var(--dl-layout-space-oneandhalfunits);
            }
            .header-component-thq-links-elm2 {
              display: none;
            }
            .header-component-text224 {
              color: #ffffff;
            }
            .header-component-text225 {
              color: #ffffff;
            }
            .header-component-text226 {
              color: #ffffff;
            }
            .header-component-text227 {
              color: #ffffff;
            }
            .header-component-text228 {
              color: #ffffff;
            }
          }
          @media (max-width: 767px) {
            .header-component-thq-navbar-interactive-elm {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .header-component-container225 {
              align-items: flex-start;
            }
            .header-component-thq-burger-menu-elm {
              align-items: center;
              justify-content: center;
            }
            .header-component-text224 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .header-component-text225 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .header-component-text226 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .header-component-text227 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .header-component-text228 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
          @media (max-width: 479px) {
            .header-component-thq-navbar-interactive-elm {
              padding: var(--dl-layout-space-unit);
            }
            .header-component-container225 {
              align-items: flex-start;
            }
            .header-component-thq-mobile-menu-elm {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

HeaderComponent.defaultProps = {
  text131: undefined,
  text1: undefined,
  text521: undefined,
  containerUrl41: {
    url: 'learn.html',
    newTab: false,
  },
  imageAlt9: 'Toolkit',
  imageSrc7:
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc&w=1300',
  text101: undefined,
  text301: undefined,
  text510: undefined,
  text65: undefined,
  containerUrl6: {
    url: 'report-an-incident.html',
    newTab: false,
  },
  text29: undefined,
  text18: undefined,
  text311: undefined,
  imageAlt31: 'Show',
  text411: undefined,
  text571: undefined,
  text81: undefined,
  imageAlt8: 'Guide',
  imageSrc3:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728&w=1300',
  text211: undefined,
  text8: undefined,
  imageAlt5: 'News',
  imageSrc21:
    'https://images.unsplash.com/photo-1598897349981-ab688af55446&w=1300',
  text25: undefined,
  imageSrc31:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728&w=1300',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  containerUrl7: {
    url: 'learn.html',
    newTab: false,
  },
  text30: undefined,
  text21: undefined,
  imageSrc10:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d&w=1300',
  text141: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df&w=1300',
  text39: undefined,
  text13: undefined,
  text69: undefined,
  text351: undefined,
  imageSrc2:
    'https://images.unsplash.com/photo-1598897349981-ab688af55446&w=1300',
  text59: undefined,
  text67: undefined,
  text3: undefined,
  text51: undefined,
  imageAlt41: 'News',
  containerUrl31: {
    url: 'learn.html',
    newTab: false,
  },
  text42: undefined,
  text61: undefined,
  containerUrl1: {
    url: 'learn.html',
    newTab: false,
  },
  text28: undefined,
  text12: undefined,
  text391: undefined,
  text121: undefined,
  text91: undefined,
  text15: undefined,
  imageAlt: 'Community',
  imageSrc5:
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45&w=1300',
  text431: undefined,
  text38: undefined,
  text36: undefined,
  text171: undefined,
  imageAlt1: 'Events',
  imageAlt91: 'Toolkit',
  text19: undefined,
  imageAlt61: 'News',
  text: undefined,
  text26: undefined,
  text491: undefined,
  imageSrc41:
    'https://images.unsplash.com/photo-1544531585-9837b9884657&w=1300',
  text551: undefined,
  text33: undefined,
  text49: undefined,
  imageSrc71:
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc&w=1300',
  text9: undefined,
  text161: undefined,
  text17: undefined,
  imageSrc91:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b&w=1300',
  imageAlt10: 'Report',
  text6: undefined,
  imageAlt2: 'Show',
  text261: undefined,
  containerUrl91: {
    url: 'learn.html',
    newTab: false,
  },
  containerUrl71: {
    url: 'learn.html',
    newTab: false,
  },
  text16: undefined,
  text511: undefined,
  text361: undefined,
  text441: undefined,
  text60: undefined,
  text110: undefined,
  imageAlt21: 'Show',
  text68: undefined,
  text111: undefined,
  text37: undefined,
  text63: undefined,
  text66: undefined,
  text7: undefined,
  text271: undefined,
  text471: undefined,
  imageSrc81:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85&w=1300',
  text591: undefined,
  text610: undefined,
  text2: undefined,
  text10: undefined,
  login: undefined,
  imageAlt81: 'Guide',
  text52: undefined,
  text461: undefined,
  text401: undefined,
  imageAlt3: 'Show',
  containerUrl5: {
    url: 'learn.html',
    newTab: false,
  },
  text22: undefined,
  text381: undefined,
  text34: undefined,
  imageSrc12:
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df&w=1300',
  register: undefined,
  text31: undefined,
  text221: undefined,
  imageSrc51:
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45&w=1300',
  containerUrl: {
    url: 'contact.html',
    newTab: false,
  },
  imageAlt4: 'News',
  text341: undefined,
  text32: undefined,
  text210: undefined,
  text27: undefined,
  text64: undefined,
  text251: undefined,
  imageSrc4: 'https://images.unsplash.com/photo-1544531585-9837b9884657&w=1300',
  text331: undefined,
  imageSrc1:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678&w=1300',
  text151: undefined,
  containerUrl8: {
    url: 'learn.html',
    newTab: false,
  },
  imageSrc9:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b&w=1300',
  text57: undefined,
  imageSrc6:
    'https://images.unsplash.com/photo-1577896851231-70ef14603e80&w=1300',
  text531: undefined,
  text53: undefined,
  text71: undefined,
  imageSrc61:
    'https://images.unsplash.com/photo-1577896851231-70ef14603e80&w=1300',
  text481: undefined,
  imageAlt7: 'Playbook',
  text291: undefined,
  text11: undefined,
  imageSrc101:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d&w=1300',
  imageAlt13: 'Events',
  text50: undefined,
  text20: undefined,
  text281: undefined,
  imageSrc8:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85&w=1300',
  containerUrl51: {
    url: 'learn.html',
    newTab: false,
  },
  text44: undefined,
  containerUrl4: {
    url: 'learn.html',
    newTab: false,
  },
  text23: undefined,
  text62: undefined,
  text35: undefined,
  text451: undefined,
  imageAlt51: 'News',
  imageAlt71: 'Playbook',
  textinputPlaceholder: 'Type your search...',
  text24: undefined,
  text421: undefined,
  containerUrl101: {
    url: 'report-an-incident.html',
    newTab: false,
  },
  text14: undefined,
  text561: undefined,
  text46: undefined,
  text41: undefined,
  containerUrl9: {
    url: 'learn.html',
    newTab: false,
  },
  text501: undefined,
  text55: undefined,
  text321: undefined,
  text48: undefined,
  text201: undefined,
  text4: undefined,
  text541: undefined,
  text45: undefined,
  text40: undefined,
  text231: undefined,
  text5: undefined,
  containerUrl10: {
    url: 'report-an-incident.html',
    newTab: false,
  },
  text241: undefined,
  text191: undefined,
  containerUrl11: {
    url: 'learn.html',
    newTab: false,
  },
  containerUrl3: {
    url: 'learn.html',
    newTab: false,
  },
  text181: undefined,
  text581: undefined,
  logoAlt: 'image',
  imageAlt12: 'Community',
  containerUrl61: {
    url: 'report-an-incident.html',
    newTab: false,
  },
  imageAlt101: 'Report',
  text371: undefined,
  imageAlt6: 'News',
  text58: undefined,
  containerUrl81: {
    url: 'learn.html',
    newTab: false,
  },
  rootClassName: '',
  text54: undefined,
  text43: undefined,
  text56: undefined,
  imageSrc13:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678&w=1300',
  text47: undefined,
}

HeaderComponent.propTypes = {
  text131: PropTypes.element,
  text1: PropTypes.element,
  text521: PropTypes.element,
  containerUrl41: PropTypes.object,
  imageAlt9: PropTypes.string,
  imageSrc7: PropTypes.string,
  text101: PropTypes.element,
  text301: PropTypes.element,
  text510: PropTypes.element,
  text65: PropTypes.element,
  containerUrl6: PropTypes.object,
  text29: PropTypes.element,
  text18: PropTypes.element,
  text311: PropTypes.element,
  imageAlt31: PropTypes.string,
  text411: PropTypes.element,
  text571: PropTypes.element,
  text81: PropTypes.element,
  imageAlt8: PropTypes.string,
  imageSrc3: PropTypes.string,
  text211: PropTypes.element,
  text8: PropTypes.element,
  imageAlt5: PropTypes.string,
  imageSrc21: PropTypes.string,
  text25: PropTypes.element,
  imageSrc31: PropTypes.string,
  logoSrc: PropTypes.string,
  containerUrl7: PropTypes.object,
  text30: PropTypes.element,
  text21: PropTypes.element,
  imageSrc10: PropTypes.string,
  text141: PropTypes.element,
  imageSrc: PropTypes.string,
  text39: PropTypes.element,
  text13: PropTypes.element,
  text69: PropTypes.element,
  text351: PropTypes.element,
  imageSrc2: PropTypes.string,
  text59: PropTypes.element,
  text67: PropTypes.element,
  text3: PropTypes.element,
  text51: PropTypes.element,
  imageAlt41: PropTypes.string,
  containerUrl31: PropTypes.object,
  text42: PropTypes.element,
  text61: PropTypes.element,
  containerUrl1: PropTypes.object,
  text28: PropTypes.element,
  text12: PropTypes.element,
  text391: PropTypes.element,
  text121: PropTypes.element,
  text91: PropTypes.element,
  text15: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc5: PropTypes.string,
  text431: PropTypes.element,
  text38: PropTypes.element,
  text36: PropTypes.element,
  text171: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageAlt91: PropTypes.string,
  text19: PropTypes.element,
  imageAlt61: PropTypes.string,
  text: PropTypes.element,
  text26: PropTypes.element,
  text491: PropTypes.element,
  imageSrc41: PropTypes.string,
  text551: PropTypes.element,
  text33: PropTypes.element,
  text49: PropTypes.element,
  imageSrc71: PropTypes.string,
  text9: PropTypes.element,
  text161: PropTypes.element,
  text17: PropTypes.element,
  imageSrc91: PropTypes.string,
  imageAlt10: PropTypes.string,
  text6: PropTypes.element,
  imageAlt2: PropTypes.string,
  text261: PropTypes.element,
  containerUrl91: PropTypes.object,
  containerUrl71: PropTypes.object,
  text16: PropTypes.element,
  text511: PropTypes.element,
  text361: PropTypes.element,
  text441: PropTypes.element,
  text60: PropTypes.element,
  text110: PropTypes.element,
  imageAlt21: PropTypes.string,
  text68: PropTypes.element,
  text111: PropTypes.element,
  text37: PropTypes.element,
  text63: PropTypes.element,
  text66: PropTypes.element,
  text7: PropTypes.element,
  text271: PropTypes.element,
  text471: PropTypes.element,
  imageSrc81: PropTypes.string,
  text591: PropTypes.element,
  text610: PropTypes.element,
  text2: PropTypes.element,
  text10: PropTypes.element,
  login: PropTypes.element,
  imageAlt81: PropTypes.string,
  text52: PropTypes.element,
  text461: PropTypes.element,
  text401: PropTypes.element,
  imageAlt3: PropTypes.string,
  containerUrl5: PropTypes.object,
  text22: PropTypes.element,
  text381: PropTypes.element,
  text34: PropTypes.element,
  imageSrc12: PropTypes.string,
  register: PropTypes.element,
  text31: PropTypes.element,
  text221: PropTypes.element,
  imageSrc51: PropTypes.string,
  containerUrl: PropTypes.object,
  imageAlt4: PropTypes.string,
  text341: PropTypes.element,
  text32: PropTypes.element,
  text210: PropTypes.element,
  text27: PropTypes.element,
  text64: PropTypes.element,
  text251: PropTypes.element,
  imageSrc4: PropTypes.string,
  text331: PropTypes.element,
  imageSrc1: PropTypes.string,
  text151: PropTypes.element,
  containerUrl8: PropTypes.object,
  imageSrc9: PropTypes.string,
  text57: PropTypes.element,
  imageSrc6: PropTypes.string,
  text531: PropTypes.element,
  text53: PropTypes.element,
  text71: PropTypes.element,
  imageSrc61: PropTypes.string,
  text481: PropTypes.element,
  imageAlt7: PropTypes.string,
  text291: PropTypes.element,
  text11: PropTypes.element,
  imageSrc101: PropTypes.string,
  imageAlt13: PropTypes.string,
  text50: PropTypes.element,
  text20: PropTypes.element,
  text281: PropTypes.element,
  imageSrc8: PropTypes.string,
  containerUrl51: PropTypes.object,
  text44: PropTypes.element,
  containerUrl4: PropTypes.object,
  text23: PropTypes.element,
  text62: PropTypes.element,
  text35: PropTypes.element,
  text451: PropTypes.element,
  imageAlt51: PropTypes.string,
  imageAlt71: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text24: PropTypes.element,
  text421: PropTypes.element,
  containerUrl101: PropTypes.object,
  text14: PropTypes.element,
  text561: PropTypes.element,
  text46: PropTypes.element,
  text41: PropTypes.element,
  containerUrl9: PropTypes.object,
  text501: PropTypes.element,
  text55: PropTypes.element,
  text321: PropTypes.element,
  text48: PropTypes.element,
  text201: PropTypes.element,
  text4: PropTypes.element,
  text541: PropTypes.element,
  text45: PropTypes.element,
  text40: PropTypes.element,
  text231: PropTypes.element,
  text5: PropTypes.element,
  containerUrl10: PropTypes.object,
  text241: PropTypes.element,
  text191: PropTypes.element,
  containerUrl11: PropTypes.object,
  containerUrl3: PropTypes.object,
  text181: PropTypes.element,
  text581: PropTypes.element,
  logoAlt: PropTypes.string,
  imageAlt12: PropTypes.string,
  containerUrl61: PropTypes.object,
  imageAlt101: PropTypes.string,
  text371: PropTypes.element,
  imageAlt6: PropTypes.string,
  text58: PropTypes.element,
  containerUrl81: PropTypes.object,
  rootClassName: PropTypes.string,
  text54: PropTypes.element,
  text43: PropTypes.element,
  text56: PropTypes.element,
  imageSrc13: PropTypes.string,
  text47: PropTypes.element,
}

export default HeaderComponent
