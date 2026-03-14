import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import HeaderComponent from '../components/header-component'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container100">
        <Head>
          <title>Lighthearted Stable Ant</title>
          <meta property="og:title" content="Lighthearted Stable Ant" />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/"
          />
        </Head>
        <HeaderComponent
          text={
            <Fragment>
              <span className="home-text100"> Press Enter to Search</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="home-text101">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text102">FAIS</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text103">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text104">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text105">
                {' '}
                Search
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text106">Community</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text107">Events</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text108">Media</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text109">Movements</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text110">News</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text111">Resources</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text112">Shop</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-text113">Get Involved</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-text114">Donate</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-text115"> Student Network</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="home-text116"> Programs</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="home-text117"> Upcoming</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="home-text118"> Shows</span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="home-text119"> Press</span>
            </Fragment>
          }
          text19={
            <Fragment>
              <span className="home-text120"> Our Method</span>
            </Fragment>
          }
          text20={
            <Fragment>
              <span className="home-text121"> Latest Headlines</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text122"> Activism Toolkit</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="home-text123"> FAIS Store</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="home-text124"> Take Action</span>
            </Fragment>
          }
          text24={
            <Fragment>
              <span className="home-text125">Chapters</span>
            </Fragment>
          }
          text25={
            <Fragment>
              <span className="home-text126">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text26={
            <Fragment>
              <span className="home-text127">Summit</span>
            </Fragment>
          }
          text27={
            <Fragment>
              <span className="home-text128">Join a Chapter</span>
            </Fragment>
          }
          text28={
            <Fragment>
              <span className="home-text129">High School</span>
            </Fragment>
          }
          text29={
            <Fragment>
              <span className="home-text130">College</span>
            </Fragment>
          }
          text30={
            <Fragment>
              <span className="home-text131">National Summit 2026</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="home-text132">Upcoming</span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="home-text133">Upcoming</span>
            </Fragment>
          }
          text33={
            <Fragment>
              <span className="home-text134">Press Inquiries</span>
            </Fragment>
          }
          text34={
            <Fragment>
              <span className="home-text135">Media Kit</span>
            </Fragment>
          }
          text35={
            <Fragment>
              <span className="home-text136">F</span>
            </Fragment>
          }
          text36={
            <Fragment>
              <span className="home-text137"> — Find</span>
            </Fragment>
          }
          text37={
            <Fragment>
              <span className="home-text138">A</span>
            </Fragment>
          }
          text38={
            <Fragment>
              <span className="home-text139"> — Assess</span>
            </Fragment>
          }
          text39={
            <Fragment>
              <span className="home-text140">I</span>
            </Fragment>
          }
          text40={
            <Fragment>
              <span className="home-text141"> — Initiate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="home-text142">S</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="home-text143"> — Solution</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="home-text144">Parents</span>
            </Fragment>
          }
          text44={
            <Fragment>
              <span className="home-text145">Students</span>
            </Fragment>
          }
          text45={
            <Fragment>
              <span className="home-text146">Educators</span>
            </Fragment>
          }
          text46={
            <Fragment>
              <span className="home-text147">Reporting</span>
            </Fragment>
          }
          text47={
            <Fragment>
              <span className="home-text148">Apparel</span>
            </Fragment>
          }
          text48={
            <Fragment>
              <span className="home-text149">Gear</span>
            </Fragment>
          }
          text49={
            <Fragment>
              <span className="home-text150">Volunteer</span>
            </Fragment>
          }
          text50={
            <Fragment>
              <span className="home-text151">Partner with Us</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="home-text152">Culture Apothecary</span>
            </Fragment>
          }
          text52={
            <Fragment>
              <span className="home-text153">Education Watch</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="home-text154">School Safety Initiatives</span>
            </Fragment>
          }
          text54={
            <Fragment>
              <span className="home-text155">Educational Expansion</span>
            </Fragment>
          }
          text55={
            <Fragment>
              <span className="home-text156">Transparency Envoy</span>
            </Fragment>
          }
          text56={
            <Fragment>
              <span className="home-text157">Parent Playbook</span>
            </Fragment>
          }
          text57={
            <Fragment>
              <span className="home-text158">Student Rights</span>
            </Fragment>
          }
          text58={
            <Fragment>
              <span className="home-text159">Educator Resources</span>
            </Fragment>
          }
          text59={
            <Fragment>
              <span className="home-text160">Incident Portal</span>
            </Fragment>
          }
          text60={
            <Fragment>
              <span className="home-text161">About</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="home-text162">Features</span>
            </Fragment>
          }
          text62={
            <Fragment>
              <span className="home-text163">Pricing</span>
            </Fragment>
          }
          text63={
            <Fragment>
              <span className="home-text164">Team</span>
            </Fragment>
          }
          text64={
            <Fragment>
              <span className="home-text165">Blog</span>
            </Fragment>
          }
          text65={
            <Fragment>
              <span className="home-text166">About</span>
            </Fragment>
          }
          text66={
            <Fragment>
              <span className="home-text167">Features</span>
            </Fragment>
          }
          text67={
            <Fragment>
              <span className="home-text168">Pricing</span>
            </Fragment>
          }
          text68={
            <Fragment>
              <span className="home-text169">Team</span>
            </Fragment>
          }
          text69={
            <Fragment>
              <span className="home-text170">Blog</span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="home-text171">Media</span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="home-text172">Movements</span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="home-text173">News</span>
            </Fragment>
          }
          text101={
            <Fragment>
              <span className="home-text174">Resources</span>
            </Fragment>
          }
          text110={
            <Fragment>
              <span className="home-text175">FAIS</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="home-text176">Shop</span>
            </Fragment>
          }
          text121={
            <Fragment>
              <span className="home-text177">Get Involved</span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="home-text178">Donate</span>
            </Fragment>
          }
          text141={
            <Fragment>
              <span className="home-text179"> Student Network</span>
            </Fragment>
          }
          text151={
            <Fragment>
              <span className="home-text180"> Programs</span>
            </Fragment>
          }
          text161={
            <Fragment>
              <span className="home-text181"> Upcoming</span>
            </Fragment>
          }
          text171={
            <Fragment>
              <span className="home-text182"> Shows</span>
            </Fragment>
          }
          text181={
            <Fragment>
              <span className="home-text183"> Press</span>
            </Fragment>
          }
          text191={
            <Fragment>
              <span className="home-text184"> Our Method</span>
            </Fragment>
          }
          text201={
            <Fragment>
              <span className="home-text185"> Latest Headlines</span>
            </Fragment>
          }
          text210={
            <Fragment>
              <span className="home-text186">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="home-text187"> Activism Toolkit</span>
            </Fragment>
          }
          text221={
            <Fragment>
              <span className="home-text188"> FAIS Store</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="home-text189"> Take Action</span>
            </Fragment>
          }
          text241={
            <Fragment>
              <span className="home-text190">Chapters</span>
            </Fragment>
          }
          text251={
            <Fragment>
              <span className="home-text191">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text261={
            <Fragment>
              <span className="home-text192">Summit</span>
            </Fragment>
          }
          text271={
            <Fragment>
              <span className="home-text193">Join a Chapter</span>
            </Fragment>
          }
          text281={
            <Fragment>
              <span className="home-text194">High School</span>
            </Fragment>
          }
          text291={
            <Fragment>
              <span className="home-text195">College</span>
            </Fragment>
          }
          text301={
            <Fragment>
              <span className="home-text196">National Summit 2026</span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="home-text197">Upcoming</span>
            </Fragment>
          }
          text321={
            <Fragment>
              <span className="home-text198">Upcoming</span>
            </Fragment>
          }
          text331={
            <Fragment>
              <span className="home-text199">Press Inquiries</span>
            </Fragment>
          }
          text341={
            <Fragment>
              <span className="home-text200">Media Kit</span>
            </Fragment>
          }
          text351={
            <Fragment>
              <span className="home-text201">F</span>
            </Fragment>
          }
          text361={
            <Fragment>
              <span className="home-text202"> — Find</span>
            </Fragment>
          }
          text371={
            <Fragment>
              <span className="home-text203">A</span>
            </Fragment>
          }
          text381={
            <Fragment>
              <span className="home-text204"> — Assess</span>
            </Fragment>
          }
          text391={
            <Fragment>
              <span className="home-text205">I</span>
            </Fragment>
          }
          text401={
            <Fragment>
              <span className="home-text206"> — Initiate</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="home-text207">S</span>
            </Fragment>
          }
          text421={
            <Fragment>
              <span className="home-text208"> — Solution</span>
            </Fragment>
          }
          text431={
            <Fragment>
              <span className="home-text209">Parents</span>
            </Fragment>
          }
          text441={
            <Fragment>
              <span className="home-text210">Students</span>
            </Fragment>
          }
          text451={
            <Fragment>
              <span className="home-text211">Educators</span>
            </Fragment>
          }
          text461={
            <Fragment>
              <span className="home-text212">Reporting</span>
            </Fragment>
          }
          text471={
            <Fragment>
              <span className="home-text213">Apparel</span>
            </Fragment>
          }
          text481={
            <Fragment>
              <span className="home-text214">Gear</span>
            </Fragment>
          }
          text491={
            <Fragment>
              <span className="home-text215">Volunteer</span>
            </Fragment>
          }
          text501={
            <Fragment>
              <span className="home-text216">Partner with Us</span>
            </Fragment>
          }
          text510={
            <Fragment>
              <span className="home-text217">Community</span>
            </Fragment>
          }
          text511={
            <Fragment>
              <span className="home-text218">Culture Apothecary</span>
            </Fragment>
          }
          text521={
            <Fragment>
              <span className="home-text219">Education Watch</span>
            </Fragment>
          }
          text531={
            <Fragment>
              <span className="home-text220">School Safety Initiatives</span>
            </Fragment>
          }
          text541={
            <Fragment>
              <span className="home-text221">Educational Expansion</span>
            </Fragment>
          }
          text551={
            <Fragment>
              <span className="home-text222">Transparency Envoy</span>
            </Fragment>
          }
          text561={
            <Fragment>
              <span className="home-text223">Parent Playbook</span>
            </Fragment>
          }
          text571={
            <Fragment>
              <span className="home-text224">Student Rights</span>
            </Fragment>
          }
          text581={
            <Fragment>
              <span className="home-text225">Educator Resources</span>
            </Fragment>
          }
          text591={
            <Fragment>
              <span className="home-text226">Incident Portal</span>
            </Fragment>
          }
          text610={
            <Fragment>
              <span className="home-text227">Events</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="home-text228">Register</span>
            </Fragment>
          }
        ></HeaderComponent>
        <section className="home-thq-hero-elm">
          <div className="home-container101">
            <img
              alt="School campus"
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&amp;fit=crop&amp;q=80&amp;w=1500"
              className="home-image10"
            />
          </div>
          <div className="home-container102">
            <span className="home-text229">
              Fighting Antisemitism in Schools
            </span>
            <h1 className="home-text230">
              <span> Safe Schools.</span>
              <span className="home-text232">The Fight for Our Future.</span>
            </h1>
            <div className="home-container103">
              <a href="report-an-incident.html" className="home-link10">
                <div className="home-container104">
                  <span>Report an Incident</span>
                </div>
              </a>
              <a href="get-involved.html" className="home-link11">
                <div className="home-container105">
                  <span>Get Involved</span>
                </div>
              </a>
            </div>
          </div>
          <div className="home-container106">
            <svg
              fill="none"
              width="20"
              height="20"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <span>
              {' '}
              Scroll
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </section>
        <section className="home-thq-mission-elm">
          <div className="home-container107">
            <div className="home-container108">
              <div>
                <span className="home-text236">Our Mission</span>
                <h2 className="home-text237">
                  Protecting the Students of Today.
                </h2>
                <p className="home-text238">
                  <span className="home-text239">
                    Fighting Antisemitism in Schools (FAIS)
                  </span>
                  <span>
                    {' '}
                    is a movement dedicated to identifying, reporting, and
                    educationally combating antisemitism within school systems
                    through transparency and community action.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
                <p className="home-text241">
                  {' '}
                  We equip students, parents, and educators with the tools and
                  knowledge needed to recognize, document, and challenge bias
                  wherever it appears.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="learn.html">
                  <div className="home-container110">
                    <span>
                      {' '}
                      Explore Resources
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <svg
                      fill="none"
                      width="14"
                      height="14"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="home-container111">
                <div className="home-container112">
                  <div className="home-container113">
                    <span>2+</span>
                  </div>
                  <div className="home-container114">
                    <span>Active Chapters Nationwide</span>
                  </div>
                </div>
                <div className="home-container115">
                  <div className="home-container116">
                    <span>1</span>
                  </div>
                  <div className="home-container117">
                    <span>States Represented</span>
                  </div>
                </div>
                <div className="home-container118">
                  <div className="home-container119">
                    <span>3+</span>
                  </div>
                  <div className="home-container120">
                    <span>Incidents Reviewed</span>
                  </div>
                </div>
                <div className="home-container121">
                  <div className="home-container122">
                    <span>99%</span>
                  </div>
                  <div className="home-container123">
                    <span>Case Resolution Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-educate-elm">
          <div className="home-container124">
            <span className="home-text251">Education</span>
            <h1 className="home-text252">
              <span>Educational</span>
              <br></br>
            </h1>
            <p className="home-text254">
              Empowering students, parents, and educators with the truth.
              Knowledge is the foundation of freedom and the shield against
              bias.
            </p>
          </div>
        </section>
        <section className="home-thq-mastering-elm">
          <div className="home-container125">
            <div className="home-container126">
              <span className="home-text255">Featured Topics</span>
              <h2 className="home-text256">Mastering the Fight</h2>
            </div>
            <div className="home-container127">
              <a href="#">
                <div className="home-container128">
                  <div className="home-container129">
                    <img
                      alt="Bias in Curriculum"
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad&amp;w=1300"
                      className="home-image11"
                    />
                    <span className="home-text257">The Real Conflict</span>
                  </div>
                  <div className="home-container130">
                    <h4 className="home-text258">
                      Identifying Systemic Bias in Curriculum
                    </h4>
                    <p className="home-text259">
                      Learn to identify subtle radicalization and bias embedded
                      within modern school textbooks.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="home-container131">
                  <div className="home-container132">
                    <img
                      alt="Debunking Myths"
                      src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe&amp;w=1300"
                      className="home-image12"
                    />
                    <span className="home-text260">Reality vs Media</span>
                  </div>
                  <div className="home-container133">
                    <h4 className="home-text261">Debunking Campus Myths</h4>
                    <p className="home-text262">
                      Breaking down common misconceptions about campus life and
                      reporting of antisemitic incidents.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="home-container134">
                  <div className="home-container135">
                    <img
                      alt="Radicalism in K-12"
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655&amp;w=1300"
                      className="home-image13"
                    />
                    <span className="home-text263">Campus Exposure</span>
                  </div>
                  <div className="home-container136">
                    <h4 className="home-text264">
                      Undercover: Radicalism in K-12
                    </h4>
                    <p className="home-text265">
                      An investigative look into how radical ideologies are
                      presented to students in schools.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="home-container137">
                  <div className="home-container138">
                    <img
                      alt="Local Advocacy"
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952&amp;w=1300"
                      className="home-image14"
                    />
                    <span className="home-text266">Community Action</span>
                  </div>
                  <div className="home-container139">
                    <h4 className="home-text267">
                      The Power of Local Advocacy
                    </h4>
                    <p className="home-text268">
                      Tools for community leaders and parents to lobby school
                      boards and effect real policy change.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="home-thq-empowerment-elm">
          <div className="home-container140">
            <div className="home-container141">
              <span className="home-text269">Empowerment</span>
              <h2 className="home-text270">Toolkits &amp; Guides</h2>
            </div>
            <div className="home-container142">
              <div className="home-container143">
                <svg
                  fill="none"
                  width="48"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home-icon14"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <h3 className="home-text271">Parent Playbook</h3>
                <p className="home-text272">
                  A comprehensive guide for parents to identify radicalism in
                  curriculum and advocate for their children&apos;s safety.
                </p>
                <a href="#" className="home-link17">
                  <div className="home-container144">
                    <span>
                      Download PDF
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="home-container145">
                <svg
                  fill="none"
                  width="48"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home-icon21"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="home-text274">Student Rights Guide</h3>
                <p className="home-text275">
                  Everything students need to know about Title VI protections
                  and how to exercise their rights on campus.
                </p>
                <a href="#" className="home-link18">
                  <div className="home-container146">
                    <span>
                      View Guide
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="home-container147">
                <svg
                  fill="none"
                  width="48"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home-icon30"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <h3 className="home-text277">Educator Toolkit</h3>
                <p className="home-text278">
                  Resources for teachers to foster inclusive classrooms and
                  recognize antisemitic tropes in educational materials.
                </p>
                <a href="#" className="home-link19">
                  <div className="home-container148">
                    <span>
                      Download Kit
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-legal-elm">
          <div className="home-container149">
            <div className="home-container150">
              <div className="home-container151">
                <span className="home-text280">Legal Info</span>
                <h2 className="home-text281">Know Your Rights</h2>
                <p className="home-text282">
                  <span>
                    Educational institutions receiving federal funding are
                    prohibited from discriminating on the basis of race, color,
                    or national origin under
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text284">
                    Title VI of the Civil Rights Act
                  </span>
                  <span>
                    . You have the right to a safe learning environment free
                    from hostility.
                  </span>
                </p>
                <a href="report-an-incident.html">
                  <div className="home-container152">
                    <span>Report a Violation</span>
                  </div>
                </a>
              </div>
              <div className="home-container153">
                <h4 className="home-text287">Legal Pillars</h4>
                <div className="home-container154">
                  <svg
                    fill="none"
                    width="22"
                    height="22"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-icon37"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>
                    {' '}
                    Title VI Compliance
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-container155">
                  <svg
                    fill="none"
                    width="22"
                    height="22"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-icon39"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>
                    {' '}
                    Free Speech Advocacy
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-container156">
                  <svg
                    fill="none"
                    width="22"
                    height="22"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-icon41"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>
                    {' '}
                    Religious Freedom
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-container157">
                  <svg
                    fill="none"
                    width="22"
                    height="22"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-icon43"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>
                    {' '}
                    Campus Policy Review
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-news-elm">
          <div className="home-container158">
            <div className="home-container159">
              <div>
                <span className="home-text292">Latest</span>
                <h2 className="home-text293"> News</h2>
              </div>
              <a href="#" className="home-link21">
                <div className="home-container161">
                  <span>
                    {' '}
                    View All News
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    fill="none"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
            </div>
            <div className="home-container162">
              <a href="#">
                <div className="home-container163">
                  <div className="home-container164">
                    <span className="home-text295">
                      Community — Jan 26, 2026
                    </span>
                    <img
                      alt="News 1"
                      src="https://images.unsplash.com/photo-1544531585-9837b9884657&amp;w=1300"
                      className="home-image15"
                    />
                  </div>
                  <h3 className="home-text296">
                    {' '}
                    Bilateral Support for New School Safety Initiatives
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="home-container165">
                  <div className="home-container166">
                    <span className="home-text297">
                      Education — Jan 26, 2026
                    </span>
                    <img
                      alt="News 2"
                      src="https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHx8fDE3NzI4MjE5MDV8&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="home-image16"
                    />
                  </div>
                  <h3 className="home-text298">
                    {' '}
                    Educational Exchange Programs Expanded for 2026
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="home-container167">
                  <div className="home-container168">
                    <span className="home-text299">
                      Advocacy — Jan 26, 2026
                    </span>
                    <img
                      alt="News 3"
                      src="https://images.unsplash.com/photo-1769745836625-4cac1ba455a4?ixid=M3w5MTMyMXwwfDF8YWxsfDN8fHx8fHx8fDE3NzI4MjE5MDV8&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="home-image17"
                    />
                  </div>
                  <h3 className="home-text300">
                    {' '}
                    Envoy Visits Jerusalem for Transparency
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="home-container169">
                  <div className="home-container170">
                    <span className="home-text301">
                      Technology — Jan 26, 2026
                    </span>
                    <img
                      alt="News 4"
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b&amp;w=1300"
                      className="home-image18"
                    />
                  </div>
                  <h3 className="home-text302">
                    {' '}
                    Tech Partnership Forged Between Tel Aviv and US Schools
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="home-container171">
                  <div className="home-container172">
                    <span className="home-text303">
                      Community — Jan 26, 2026
                    </span>
                    <img
                      alt="News 5"
                      src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620&amp;w=1300"
                      className="home-image19"
                    />
                  </div>
                  <h3 className="home-text304">
                    {' '}
                    Community Leaders Rally Against Campus Bias in NY
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="home-container173">
                  <div className="home-container174">
                    <span className="home-text305">Policy — Jan 26, 2026</span>
                    <img
                      alt="News 6"
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655&amp;w=1300"
                      className="home-image20"
                    />
                  </div>
                  <h3 className="home-text306">
                    {' '}
                    FAIS Presents Classroom Findings to Congress
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="home-thq-programs-elm">
          <div className="home-container175">
            <div className="home-container176">
              <span className="home-text307">Programs</span>
              <h2 className="home-text308"> Student Programs</h2>
            </div>
            <div className="home-container177">
              <a href="get-involved.html">
                <div className="home-container178">
                  <div className="home-container179">
                    <span className="home-text309">Program</span>
                    <img
                      alt="High School Program"
                      src="https://images.unsplash.com/photo-1529530385195-5f7be6bb3d12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxoaWdoc2Nob29sfGVufDB8fHx8MTc3MzM0MTEzOXww&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="home-image21"
                    />
                  </div>
                  <div className="home-container180">
                    <h3 className="home-text310"> High School</h3>
                    <p className="home-text311">
                      Equipping the next generation of leaders with the tools to
                      stand for truth in their local schools, advocating for
                      fair curriculum and safe campuses.
                    </p>
                    <span className="home-text312">
                      <span>
                        {' '}
                        Learn More
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <svg
                        fill="none"
                        width="14"
                        height="14"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a href="get-involved.html">
                <div className="home-container181">
                  <div className="home-container182">
                    <span className="home-text314">Program</span>
                    <img
                      alt="College Program"
                      src="https://images.unsplash.com/photo-1627556704302-624286467c65?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHVuaXZlcnNpdHl8ZW58MHx8fHwxNzczMzQxMTkwfDA&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="home-image22"
                    />
                  </div>
                  <div className="home-container183">
                    <h3 className="home-text315"> College</h3>
                    <p className="home-text316">
                      Building strong campus networks to combat systemic bias,
                      protect student rights, and promote educational
                      transparency in higher education.
                    </p>
                    <span className="home-text317">
                      <span>
                        {' '}
                        Learn More
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <svg
                        fill="none"
                        width="14"
                        height="14"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="home-thq-report-elm">
          <div className="home-container184">
            <span className="home-text319">Secure Portal</span>
            <h1 className="home-text320">
              <span> Report An</span>
              <br></br>
            </h1>
            <p className="home-text322">
              {' '}
              Your voice matters. Our secure portal ensures your report is
              reviewed by our legal advocacy team with total confidentiality.
            </p>
          </div>
        </section>
        <section className="home-thq-report-form-elm">
          <div className="home-container185">
            <div className="home-container186">
              <div className="home-container187">
                <svg
                  fill="none"
                  width="48"
                  height="48"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home-icon51"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <div>
                  <h6 className="home-text323"> Secure &amp; Confidential</h6>
                  <p className="home-text324">
                    FAIS uses encrypted systems to protect your data. You may
                    choose to remain anonymous, though providing contact info
                    allows our team to provide direct legal support.
                  </p>
                </div>
              </div>
              <form
                id="faisReportForm"
                action="https://formsubmit.co/info@fais-schools.org"
                method="POST"
                data-form-id="276a41d7-83bd-4b06-b63d-bd9a1579da14"
                encType="multipart/form-data"
              >
                <h3 className="home-text325"> 1. Your Information</h3>
                <label className="home-text326">
                  <input
                    type="checkbox"
                    id="faisAnonToggle"
                    name="anonymous"
                    className="home-textinput10"
                  />
                </label>
                <div id="faisPersonalFields">
                  <div className="home-container190">
                    <div className="home-container191">
                      <label className="home-text327">Full Name</label>
                      <input
                        type="text"
                        id="thq_full_name_ff3g"
                        name="full_name"
                        placeholder="Enter your name"
                        className="home-textinput11"
                      />
                    </div>
                    <div className="home-container192">
                      <label className="home-text328">Email Address</label>
                      <input
                        type="email"
                        id="thq_email_6B0K"
                        name="email"
                        placeholder="email@example.com"
                        className="home-textinput12"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="home-text329"> 2. Incident Details</h3>
                <div className="home-container193">
                  <div className="home-container194">
                    <label className="home-text330">Date of Incident</label>
                    <input
                      type="date"
                      id="thq_incident_date_q2yr"
                      name="incident_date"
                      required="true"
                      className="home-textinput13"
                    />
                  </div>
                  <div className="home-container195">
                    <label className="home-text331">Time of Incident</label>
                    <input
                      type="time"
                      id="thq_incident_time_UMCR"
                      name="incident_time"
                      className="home-textinput14"
                    />
                  </div>
                </div>
                <div className="home-container196">
                  <label className="home-text332">
                    School / Institution Name
                  </label>
                  <input
                    type="text"
                    id="thq_institution_ifl_"
                    name="institution"
                    required="true"
                    placeholder="e.g. Lincoln High School or State University"
                    className="home-textinput15"
                  />
                </div>
                <div className="home-container197">
                  <div className="home-container198">
                    <label className="home-text333">Type of Incident</label>
                    <select
                      id="thq_incident_type_mVNu"
                      name="incident_type"
                      required="true"
                      className="home-select1"
                    >
                      <option value="true">Select Type...</option>
                      <option value="verbal">Verbal Harassment</option>
                      <option value="physical">Physical Assault</option>
                      <option value="online">
                        Online Harassment / Cyberbullying
                      </option>
                      <option value="vandalism">
                        Vandalism (Graffiti, etc.)
                      </option>
                      <option value="discrimination">
                        Institutional Discrimination
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="home-container199">
                    <label className="home-text334">Urgency Level</label>
                    <select
                      id="thq_urgency_hACm"
                      name="urgency"
                      required="true"
                      className="home-select2"
                    >
                      <option value="low">
                        Ongoing Concern (Non-Immediate)
                      </option>
                      <option value="medium">
                        Serious Incident (Needs Review)
                      </option>
                      <option value="high">Immediate Threat / Danger</option>
                    </select>
                  </div>
                </div>
                <div className="home-container200">
                  <label className="home-text335">Detailed Description</label>
                  <textarea
                    id="thq_description_2N_B"
                    name="description"
                    required="true"
                    placeholder="Please provide as much detail as possible about what happened..."
                    className="home-textarea1"
                  ></textarea>
                </div>
                <h3 className="home-text336"> 3. Supporting Info</h3>
                <div className="home-container201">
                  <label className="home-text337">
                    Witness Information (Optional)
                  </label>
                  <input
                    type="text"
                    id="thq_witnesses_vJiF"
                    name="witnesses"
                    placeholder="Names or contact info of any witnesses"
                    className="home-textinput16"
                  />
                </div>
                <div className="home-container202">
                  <label className="home-text338">
                    Upload Evidence (Photos, Screenshots, Documents)
                  </label>
                  <input
                    type="file"
                    id="thq_attachment_fHQg"
                    name="attachment"
                    multiple="true"
                    className="home-textinput17"
                  />
                  <p className="home-text339">Max file size: 10MB per file.</p>
                </div>
                <input
                  type="hidden"
                  id="thq__captcha_TzvU"
                  name="_captcha"
                  value="false"
                />
                <input
                  type="hidden"
                  id="thq__subject_s5Gg"
                  name="_subject"
                  value="NEW INCIDENT REPORT – FAIS PORTAL"
                />
                <button
                  id="thq_button_lQsy"
                  name="button"
                  type="submit"
                  className="home-button1"
                >
                  <span>
                    {' '}
                    Submit Incident Report
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
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
                    <line x1="22" x2="11" y1="2" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
        <div id="faisOverlay" className="home-container203"></div>
        <div id="faisModal" className="home-container204">
          <svg
            fill="none"
            width="64"
            height="64"
            stroke="#22c55e"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="home-icon57"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3 className="home-text341">Report Submitted</h3>
          <p className="home-text342">
            Thank you for coming forward. Our team has received your report and
            will begin the review process immediately.
          </p>
          <button id="faisModalClose" className="home-button2">
            Close
          </button>
        </div>
        <div className="home-container205">
          <div className="home-container206">
            <Script
              html={`<script>
(function(){
  (function() {
  document.addEventListener('DOMContentLoaded', function() {
    var anonToggle     = document.getElementById('faisAnonToggle');
    var personalFields = document.getElementById('faisPersonalFields');

    anonToggle.addEventListener('change', function() {
      if (this.checked) {
        personalFields.style.opacity = '0.35';
        personalFields.querySelectorAll('input').forEach(function(i) { i.disabled = true; });
      } else {
        personalFields.style.opacity = '1';
        personalFields.querySelectorAll('input').forEach(function(i) { i.disabled = false; });
      }
    });

    document.getElementById('faisReportForm').addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('faisOverlay').style.display = 'block';
      document.getElementById('faisModal').style.display = 'block';
    });

    document.getElementById('faisModalClose').addEventListener('click', function() {
      document.getElementById('faisOverlay').style.display = 'none';
      document.getElementById('faisModal').style.display = 'none';
      document.getElementById('faisReportForm').reset();
      personalFields.style.opacity = '1';
      personalFields.querySelectorAll('input').forEach(function(i) { i.disabled = false; });
    });
  });
})();
})()
</script>`}
            ></Script>
          </div>
        </div>
        <section id="donateForm" className="home-thq-donate-elm">
          <div className="home-container207">
            <h2 className="home-text343">
              <span> Support FAIS and join the frontline</span>
              <br></br>
            </h2>
            <div className="home-container208">
              <div className="home-container209">
                <img
                  alt="Students standing together"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644&amp;w=1100"
                  className="home-image23"
                />
              </div>
              <div className="home-container210">
                <p className="home-text345"> Join the movement</p>
                <h3 className="home-text346">
                  {' '}
                  Your gift protects student safety
                </h3>
                <div className="home-container211">
                  <div
                    data-freq="once"
                    className="home-thq-fais-freq-tab-elm1 active fais-freq-tab"
                  >
                    <span> One-time</span>
                  </div>
                  <div
                    data-freq="monthly"
                    className="home-thq-fais-freq-tab-elm2 fais-freq-tab"
                  >
                    <span> Monthly</span>
                  </div>
                </div>
                <div className="home-container212">
                  <button
                    data-amount="25"
                    className="home-thq-fais-amount-btn-elm1 fais-amount-btn"
                  >
                    $25
                  </button>
                  <button
                    data-amount="50"
                    className="home-thq-fais-amount-btn-elm2 fais-amount-btn"
                  >
                    $50
                  </button>
                  <button
                    data-amount="100"
                    className="home-thq-fais-amount-btn-elm3 fais-amount-btn active"
                  >
                    $100
                  </button>
                  <button
                    data-amount="250"
                    className="home-thq-fais-amount-btn-elm4 fais-amount-btn"
                  >
                    $250
                  </button>
                  <button
                    data-amount="500"
                    className="home-thq-fais-amount-btn-elm5 fais-amount-btn"
                  >
                    $500
                  </button>
                  <button
                    data-amount="other"
                    className="home-thq-fais-amount-btn-elm6 fais-amount-btn"
                  >
                    Other
                  </button>
                </div>
                <div className="home-container213">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="home-textinput20"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="home-textinput21"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="home-textinput22"
                />
                <button type="button" className="home-button3">
                  Donate Today
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container214">
          <div className="home-container215">
            <Script
              html={`<script>
(function(){
  (function() {
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fais-amount-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.fais-amount-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
    document.querySelectorAll('.fais-freq-tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.fais-freq-tab').forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
      });
    });
  });
})();
})()
</script>`}
            ></Script>
          </div>
        </div>
        <section className="home-thq-contact-form-elm">
          <div className="home-container216">
            <div className="home-container217">
              <div className="home-container218">
                <h2 className="home-text349"> Send a Message</h2>
                <form
                  id="faisContactForm"
                  action="https://formsubmit.co/info@fais-schools.org"
                  method="POST"
                  data-form-id="e8daab7b-9024-4d5c-baea-564b36ad2a27"
                >
                  <div className="home-container219">
                    <div className="home-container220">
                      <label className="home-text350">First Name</label>
                      <input
                        type="text"
                        id="thq_first_name_-7J2"
                        name="first_name"
                        required="true"
                        placeholder="First Name"
                        className="home-textinput23"
                      />
                    </div>
                    <div className="home-container221">
                      <label className="home-text351">Last Name</label>
                      <input
                        type="text"
                        id="thq_last_name_FPan"
                        name="last_name"
                        required="true"
                        placeholder="Last Name"
                        className="home-textinput24"
                      />
                    </div>
                  </div>
                  <div className="home-container222">
                    <label className="home-text352">Email Address</label>
                    <input
                      type="email"
                      id="thq_email_cWmb"
                      name="email"
                      required="true"
                      placeholder="email@example.com"
                      className="home-textinput25"
                    />
                  </div>
                  <div className="home-container223">
                    <label className="home-text353">How can we help?</label>
                    <select
                      id="thq_inquiry_type_GuVv"
                      name="inquiry_type"
                      className="home-select3"
                    >
                      <option>General Inquiry</option>
                      <option>Start a Chapter</option>
                      <option>Educational Resources</option>
                      <option>Media &amp; Press</option>
                    </select>
                  </div>
                  <div className="home-container224">
                    <label className="home-text354">Message</label>
                    <textarea
                      id="thq_message_rgBt"
                      name="message"
                      placeholder="Describe how we can support you..."
                      className="home-textarea2"
                    ></textarea>
                  </div>
                  <input
                    type="hidden"
                    id="thq__captcha_XuIv"
                    name="_captcha"
                    value="false"
                  />
                  <button
                    id="thq_button__D4D"
                    name="button"
                    type="submit"
                    className="home-button4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="home-container226">
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-icon60"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <h5 className="home-text355"> Direct Email</h5>
                    <p className="home-text356">info@fais-schools.org</p>
                  </div>
                </div>
                <div className="home-container228">
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-icon63"
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
                  <div>
                    <h5 className="home-text357"> Connect</h5>
                    <p className="home-text358">@FAIS_National</p>
                  </div>
                </div>
                <div className="home-container230">
                  <h4 className="home-text359"> Incident Reporting</h4>
                  <p className="home-text360">
                    Report antisemitic bias or radicalism in your local school
                    district for review by our legal team.
                  </p>
                  <a href="report-an-incident.html">
                    <div className="home-container231">
                      <span>Report Now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="faisOverlay" className="home-container232"></div>
        <div id="faisSuccessModal" className="home-container233">
          <svg
            fill="none"
            width="64"
            height="64"
            stroke="#22c55e"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="home-icon67"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3 className="home-text362">
            Message Sent
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h3>
          <p className="home-text363">
            Thank you for reaching out. Our team will review your message and
            respond shortly.
          </p>
          <button id="faisModalClose" className="home-button5">
            Close
          </button>
        </div>
        <div className="home-container234">
          <div className="home-container235">
            <Script
              html={`<script>
(function(){
  (function() {
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('faisContactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('faisOverlay').style.display = 'block';
      document.getElementById('faisSuccessModal').style.display = 'block';
    });
    document.getElementById('faisModalClose').addEventListener('click', function() {
      document.getElementById('faisOverlay').style.display = 'none';
      document.getElementById('faisSuccessModal').style.display = 'none';
      document.getElementById('faisContactForm').reset();
    });
  });
})();
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="home-text364">
                Fighting Antisemitism in Schools (FAIS) is a nationwide movement
                dedicated to identifying and combating bias in our educational
                systems through transparency and community action.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text365">
                &amp;copy; 2026 Fighting Antisemitism in Schools (FAIS). All
                Rights Reserved.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text366">FAIS</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text367">Home</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text368">Resources</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text369">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text370">Get Involved</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text371">Report Incident</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text372">Donate</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text373">Privacy Policy</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text374">Terms of Use</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text375">Explore</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text376">Take Action</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-text377">Legal</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container100 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            font-family: 'Poppins';
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
          .home-text220 {
            display: inline-block;
          }
          .home-text221 {
            display: inline-block;
          }
          .home-text222 {
            display: inline-block;
          }
          .home-text223 {
            display: inline-block;
          }
          .home-text224 {
            display: inline-block;
          }
          .home-text225 {
            display: inline-block;
          }
          .home-text226 {
            display: inline-block;
          }
          .home-text227 {
            display: inline-block;
          }
          .home-text228 {
            display: inline-block;
          }
          .home-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            position: relative;
            background: #000;
            min-height: 720px;
            align-items: center;
            justify-content: center;
          }
          .home-container101 {
            inset: 0;
            z-index: 1;
            position: absolute;
          }
          .home-image10 {
            width: 100%;
            filter: brightness(0.65) contrast(1.1);
            height: 100%;
            display: block;
            margin-top: var(--dl-layout-space-fiveunits);
            object-fit: cover;
          }
          .home-container102 {
            width: 100%;
            padding: 0 24px;
            z-index: 10;
            position: relative;
            max-width: 1000px;
            text-align: center;
          }
          .home-text229 {
            color: #e31b23;
            display: block;
            font-size: 0.8rem;
            font-weight: 800;
            margin-bottom: 24px;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          .home-text230 {
            color: #fff;
            font-family: 'Poppins', sans-serif;
            margin-bottom: 36px;
          }
          .home-container103 {
            gap: 16px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .home-link10 {
            display: contents;
          }
          .home-container104 {
            gap: 8px;
            color: #fff;
            border: 2px solid #e31b23;
            cursor: pointer;
            display: inline-flex;
            padding: 18px 36px;
            font-size: 0.85rem;
            background: #e31b23;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            border-radius: 6px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-link11 {
            display: contents;
          }
          .home-container105 {
            gap: 8px;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.5);
            cursor: pointer;
            display: inline-flex;
            padding: 18px 36px;
            font-size: 0.85rem;
            background: transparent;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            border-radius: 6px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container106 {
            gap: 8px;
            left: 50%;
            color: rgba(255, 255, 255, 0.5);
            bottom: 36px;
            display: flex;
            z-index: 10;
            position: absolute;
            font-size: 0.65rem;
            transform: translateX(-50%);
            align-items: center;
            flex-direction: column;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-thq-mission-elm {
            width: 100%;
            padding: 100px 0;
            background: #fff;
            font-family: 'Poppins', sans-serif;
          }
          .home-container107 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container108 {
            gap: 80px;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .home-text236 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 16px;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          .home-text237 {
            color: #000;
            font-size: clamp(2rem, 4vw, 3.2rem);
            font-style: italic;
            font-weight: 900;
            line-height: 1.05;
            margin-bottom: 28px;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .home-text238 {
            color: #444;
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 24px;
          }
          .home-text239 {
            color: #000;
            font-weight: 700;
          }
          .home-text241 {
            color: #444;
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 24px;
          }
          .home-container110 {
            gap: 8px;
            color: #fff;
            display: inline-flex;
            padding: 14px 28px;
            font-size: 0.8rem;
            background: #e31b23;
            align-items: center;
            font-weight: 800;
            border-radius: 6px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container111 {
            gap: 28px;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-container112 {
            padding: 32px;
            background: #f8f8f8;
            border-left: 5px solid #e31b23;
            border-radius: 16px;
          }
          .home-container113 {
            color: #e31b23;
            font-size: 3rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 8px;
          }
          .home-container114 {
            color: #333;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-container115 {
            padding: 32px;
            background: #f8f8f8;
            border-left: 5px solid #e31b23;
            border-radius: 16px;
          }
          .home-container116 {
            color: #e31b23;
            font-size: 3rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 8px;
          }
          .home-container117 {
            color: #333;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-container118 {
            padding: 32px;
            background: #f8f8f8;
            border-left: 5px solid #e31b23;
            border-radius: 16px;
          }
          .home-container119 {
            color: #e31b23;
            font-size: 3rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 8px;
          }
          .home-container120 {
            color: #333;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-container121 {
            padding: 32px;
            background: #f8f8f8;
            border-left: 5px solid #e31b23;
            border-radius: 16px;
          }
          .home-container122 {
            color: #e31b23;
            font-size: 3rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 8px;
          }
          .home-container123 {
            color: #333;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-thq-educate-elm {
            color: #fff;
            width: 100%;
            padding: 120px 0 90px;
            background: #000;
            text-align: center;
            font-family: 'Poppins', sans-serif;
          }
          .home-container124 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-text251 {
            color: #e31b23;
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          .home-text252 {
            font-size: clamp(3rem, 7vw, 5.5rem);
            font-style: italic;
            font-weight: 900;
            line-height: 0.95;
            margin-bottom: 24px;
            letter-spacing: -3px;
            text-transform: uppercase;
          }
          .home-text254 {
            color: #e31b23;
            margin: 0 auto;
            font-size: 1rem;
            max-width: 700px;
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-thq-mastering-elm {
            color: #fff;
            width: 100%;
            padding: 80px 0;
            background: #000;
            font-family: 'Poppins', sans-serif;
          }
          .home-container125 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container126 {
            text-align: center;
            margin-bottom: 50px;
          }
          .home-text255 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .home-text256 {
            color: #fff;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .home-container127 {
            gap: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .home-container128 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .home-container129 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .home-image11 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .home-text257 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.6rem;
            background: #e31b23;
            font-weight: 900;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-container130 {
            padding: 24px;
            flex-grow: 1;
          }
          .home-text258 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .home-text259 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .home-container131 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .home-container132 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .home-image12 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .home-text260 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.6rem;
            background: #e31b23;
            font-weight: 900;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-container133 {
            padding: 24px;
            flex-grow: 1;
          }
          .home-text261 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .home-text262 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .home-container134 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .home-container135 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .home-image13 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .home-text263 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.6rem;
            background: #e31b23;
            font-weight: 900;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-container136 {
            padding: 24px;
            flex-grow: 1;
          }
          .home-text264 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .home-text265 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .home-container137 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .home-container138 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .home-image14 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .home-text266 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.6rem;
            background: #e31b23;
            font-weight: 900;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-container139 {
            padding: 24px;
            flex-grow: 1;
          }
          .home-text267 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .home-text268 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .home-thq-empowerment-elm {
            width: 100%;
            padding: 80px 0;
            background: #fff;
            font-family: 'Poppins', sans-serif;
          }
          .home-container140 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container141 {
            margin-bottom: 50px;
          }
          .home-text269 {
            color: rgb(227, 27, 35);
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .home-text270 {
            color: #000;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .home-container142 {
            gap: 28px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-container143 {
            border: 1px solid #eee;
            display: flex;
            padding: 38px;
            background: #fff;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            flex-direction: column;
          }
          .home-icon14 {
            color: #e31b23;
            margin-bottom: 20px;
          }
          .home-text271 {
            color: #000;
            font-size: 1.3rem;
            font-style: italic;
            font-weight: 800;
            margin-bottom: 14px;
            text-transform: uppercase;
          }
          .home-text272 {
            color: #666;
            flex-grow: 1;
            font-size: 0.9rem;
            line-height: 1.65;
            margin-bottom: 24px;
          }
          .home-link17 {
            display: contents;
          }
          .home-container144 {
            gap: 8px;
            color: #fff;
            display: inline-flex;
            padding: 12px 22px;
            font-size: 0.75rem;
            background: #000;
            align-items: center;
            font-weight: 800;
            border-radius: 6px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container145 {
            border: 1px solid #eee;
            display: flex;
            padding: 38px;
            background: #fff;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            flex-direction: column;
          }
          .home-icon21 {
            color: #e31b23;
            margin-bottom: 20px;
          }
          .home-text274 {
            color: #000;
            font-size: 1.3rem;
            font-style: italic;
            font-weight: 800;
            margin-bottom: 14px;
            text-transform: uppercase;
          }
          .home-text275 {
            color: #666;
            flex-grow: 1;
            font-size: 0.9rem;
            line-height: 1.65;
            margin-bottom: 24px;
          }
          .home-link18 {
            display: contents;
          }
          .home-container146 {
            gap: 8px;
            color: #fff;
            display: inline-flex;
            padding: 12px 22px;
            font-size: 0.75rem;
            background: #000;
            align-items: center;
            font-weight: 800;
            border-radius: 6px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container147 {
            border: 1px solid #eee;
            display: flex;
            padding: 38px;
            background: #fff;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            flex-direction: column;
          }
          .home-icon30 {
            color: #e31b23;
            margin-bottom: 20px;
          }
          .home-text277 {
            color: #000;
            font-size: 1.3rem;
            font-style: italic;
            font-weight: 800;
            margin-bottom: 14px;
            text-transform: uppercase;
          }
          .home-text278 {
            color: #666;
            flex-grow: 1;
            font-size: 0.9rem;
            line-height: 1.65;
            margin-bottom: 24px;
          }
          .home-link19 {
            display: contents;
          }
          .home-container148 {
            gap: 8px;
            color: #fff;
            display: inline-flex;
            padding: 12px 22px;
            font-size: 0.75rem;
            background: #000;
            align-items: center;
            font-weight: 800;
            border-radius: 6px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-thq-legal-elm {
            width: 100%;
            padding: 80px 0;
            background: #f9f9f9;
            font-family: 'Poppins', sans-serif;
          }
          .home-container149 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container150 {
            gap: 60px;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .home-text280 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .home-text281 {
            color: #000;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-style: italic;
            font-weight: 900;
            margin-bottom: 24px;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .home-text282 {
            color: #444;
            font-size: 1rem;
            line-height: 1.8;
            margin-bottom: 28px;
          }
          .home-text284 {
            font-weight: 700;
          }
          .home-container152 {
            gap: 8px;
            color: #fff;
            display: inline-flex;
            padding: 14px 28px;
            font-size: 0.8rem;
            background: #e31b23;
            align-items: center;
            font-weight: 800;
            border-radius: 6px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container153 {
            color: #fff;
            padding: 48px;
            background: #000;
            border-radius: 20px;
          }
          .home-text287 {
            color: #e31b23;
            font-size: 1.3rem;
            font-style: italic;
            font-weight: 900;
            margin-bottom: 24px;
            text-transform: uppercase;
          }
          .home-container154 {
            gap: 14px;
            display: flex;
            font-size: 0.95rem;
            align-items: center;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .home-icon37 {
            color: #e31b23;
            flex-shrink: 0;
          }
          .home-container155 {
            gap: 14px;
            display: flex;
            font-size: 0.95rem;
            align-items: center;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .home-icon39 {
            color: #e31b23;
            flex-shrink: 0;
          }
          .home-container156 {
            gap: 14px;
            display: flex;
            font-size: 0.95rem;
            align-items: center;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .home-icon41 {
            color: #e31b23;
            flex-shrink: 0;
          }
          .home-container157 {
            gap: 14px;
            display: flex;
            font-size: 0.95rem;
            align-items: center;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .home-icon43 {
            color: #e31b23;
            flex-shrink: 0;
          }
          .home-thq-news-elm {
            width: 100%;
            padding: 80px 0;
            background: #fff;
            font-family: 'Poppins', sans-serif;
          }
          .home-container158 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container159 {
            gap: 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .home-text292 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 8px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .home-text293 {
            color: #000;
            font-size: clamp(2rem, 3vw, 2.6rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .home-link21 {
            display: contents;
          }
          .home-container161 {
            gap: 6px;
            color: #e31b23;
            display: inline-flex;
            font-size: 0.75rem;
            align-items: center;
            font-weight: 800;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container162 {
            gap: 28px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-container163 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .home-container164 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .home-text295 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 12px;
            z-index: 5;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-image15 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-text296 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .home-container165 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .home-container166 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .home-text297 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 12px;
            z-index: 5;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-image16 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-text298 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .home-container167 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .home-container168 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .home-text299 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 12px;
            z-index: 5;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-image17 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-text300 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .home-container169 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .home-container170 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .home-text301 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 12px;
            z-index: 5;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-image18 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-text302 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .home-container171 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .home-container172 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .home-text303 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 12px;
            z-index: 5;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-image19 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-text304 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .home-container173 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .home-container174 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .home-text305 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 12px;
            z-index: 5;
            position: absolute;
            font-size: 0.62rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
          .home-image20 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-text306 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .home-thq-programs-elm {
            width: 100%;
            padding: 80px 0;
            background: #fff;
            font-family: 'Poppins', sans-serif;
          }
          .home-container175 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container176 {
            margin-bottom: 50px;
          }
          .home-text307 {
            color: #e31b23;
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .home-text308 {
            color: #000;
            font-size: clamp(2rem, 3.5vw, 3rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .home-container177 {
            gap: 36px;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-container178 {
            display: block;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
            border-radius: 16px;
            text-decoration: none;
          }
          .home-container179 {
            height: 380px;
            overflow: hidden;
            position: relative;
            background: #eee;
          }
          .home-text309 {
            top: 22px;
            left: 22px;
            color: #fff;
            padding: 5px 14px;
            z-index: 5;
            position: absolute;
            font-size: 0.68rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-image21 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container180 {
            padding: 36px;
          }
          .home-text310 {
            color: #000;
            font-size: 2rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .home-text311 {
            color: #666;
            font-size: 1rem;
            line-height: 1.65;
            margin-bottom: 24px;
          }
          .home-text312 {
            gap: 6px;
            color: #e31b23;
            display: inline-flex;
            font-size: 0.8rem;
            align-items: center;
            font-weight: 800;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container181 {
            display: block;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
            border-radius: 16px;
            text-decoration: none;
          }
          .home-container182 {
            height: 380px;
            overflow: hidden;
            position: relative;
            background: #eee;
          }
          .home-text314 {
            top: 22px;
            left: 22px;
            color: #fff;
            padding: 5px 14px;
            z-index: 5;
            position: absolute;
            font-size: 0.68rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-image22 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container183 {
            padding: 36px;
          }
          .home-text315 {
            color: #000;
            font-size: 2rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .home-text316 {
            color: #666;
            font-size: 1rem;
            line-height: 1.65;
            margin-bottom: 24px;
          }
          .home-text317 {
            gap: 6px;
            color: #e31b23;
            display: inline-flex;
            font-size: 0.8rem;
            align-items: center;
            font-weight: 800;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-thq-report-elm {
            color: #fff;
            width: 100%;
            padding: 120px 0 80px;
            background: #000;
            text-align: center;
            font-family: 'Poppins', sans-serif;
          }
          .home-container184 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-text319 {
            color: #e31b23;
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          .home-text320 {
            font-size: clamp(3rem, 7vw, 5.5rem);
            font-style: italic;
            font-weight: 900;
            line-height: 0.95;
            margin-bottom: 22px;
            letter-spacing: -3px;
            text-transform: uppercase;
          }
          .home-text322 {
            color: #e31b23;
            margin: 0 auto;
            font-size: 1rem;
            max-width: 650px;
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .home-thq-report-form-elm {
            width: 100%;
            padding: 80px 0 120px;
            background: #f9f9f9;
            font-family: 'Poppins', sans-serif;
          }
          .home-container185 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container186 {
            margin: 0 auto;
            padding: 60px;
            max-width: 900px;
            background: #fff;
            box-shadow: 0 36px 100px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
          }
          .home-container187 {
            gap: 20px;
            display: flex;
            padding: 28px 32px;
            background: #f4faf4;
            align-items: flex-start;
            border-left: 5px solid #22c55e;
            border-radius: 12px;
            margin-bottom: 50px;
          }
          .home-icon51 {
            color: #22c55e;
            margin-top: 2px;
            flex-shrink: 0;
          }
          .home-text323 {
            color: #22c55e;
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 6px;
            text-transform: uppercase;
          }
          .home-text324 {
            color: #555;
            font-size: 0.88rem;
            line-height: 1.65;
          }
          .home-text325 {
            color: #000;
            display: inline-block;
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 900;
            border-bottom: 4px solid #eee;
            margin-bottom: 36px;
            padding-bottom: 6px;
            text-transform: uppercase;
          }
          .home-text326 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            font-size: 0.92rem;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            margin-bottom: 28px;
          }
          .home-textinput10 {
            width: 18px;
            cursor: pointer;
            height: 18px;
            accent-color: #e31b23;
          }
          .home-container190 {
            gap: 28px;
            display: grid;
            margin-bottom: 28px;
            grid-template-columns: 1fr 1fr;
          }
          .home-container191 {
            margin-bottom: 28px;
          }
          .home-text327 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput11 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container192 {
            margin-bottom: 28px;
          }
          .home-text328 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput12 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-text329 {
            color: #000;
            display: inline-block;
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 900;
            border-bottom: 4px solid #eee;
            margin-bottom: 36px;
            padding-bottom: 6px;
            text-transform: uppercase;
          }
          .home-container193 {
            gap: 28px;
            display: grid;
            margin-bottom: 28px;
            grid-template-columns: 1fr 1fr;
          }
          .home-container194 {
            margin-bottom: 28px;
          }
          .home-text330 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput13 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container195 {
            margin-bottom: 28px;
          }
          .home-text331 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput14 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container196 {
            margin-bottom: 28px;
          }
          .home-text332 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput15 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container197 {
            gap: 28px;
            display: grid;
            margin-bottom: 28px;
            grid-template-columns: 1fr 1fr;
          }
          .home-container198 {
            margin-bottom: 28px;
          }
          .home-text333 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-select1 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            height: 52px;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container199 {
            margin-bottom: 28px;
          }
          .home-text334 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-select2 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            height: 52px;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container200 {
            margin-bottom: 28px;
          }
          .home-text335 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textarea1 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            resize: vertical;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            min-height: 200px;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-text336 {
            color: #000;
            display: inline-block;
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 900;
            border-bottom: 4px solid #eee;
            margin-bottom: 36px;
            padding-bottom: 6px;
            text-transform: uppercase;
          }
          .home-container201 {
            margin-bottom: 28px;
          }
          .home-text337 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput16 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 15px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container202 {
            margin-bottom: 28px;
          }
          .home-text338 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput17 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 10px 20px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-text339 {
            color: #aaa;
            font-size: 0.72rem;
            margin-top: 8px;
          }
          .home-button1 {
            gap: 14px;
            color: #fff;
            width: 100%;
            border: none;
            cursor: pointer;
            display: flex;
            padding: 24px 48px;
            font-size: 1.25rem;
            background: #e31b23;
            font-style: italic;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            border-radius: 10px;
            text-transform: uppercase;
            justify-content: center;
          }
          .home-container203 {
            inset: 0;
            display: none;
            z-index: 9998;
            position: fixed;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
          }
          .home-container204 {
            top: 50%;
            left: 50%;
            width: 90%;
            display: none;
            padding: 44px;
            z-index: 9999;
            position: fixed;
            max-width: 450px;
            transform: translate(-50%, -50%);
            background: #fff;
            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
            text-align: center;
            border-radius: 20px;
          }
          .home-icon57 {
            margin: 0 auto 20px;
            display: block;
          }
          .home-text341 {
            font-size: 1.5rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            margin-bottom: 10px;
          }
          .home-text342 {
            color: #666;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .home-button2 {
            color: #fff;
            width: 100%;
            border: none;
            cursor: pointer;
            padding: 14px 32px;
            font-size: 0.9rem;
            background: #e31b23;
            font-style: italic;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            border-radius: 8px;
            text-transform: uppercase;
          }
          .home-container205 {
            display: none;
          }
          .home-container206 {
            display: contents;
          }
          .home-thq-donate-elm {
            width: 100%;
            padding: 100px 0;
            background: #f8f8f8;
            font-family: 'Poppins', sans-serif;
          }
          .home-container207 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-text343 {
            color: #000;
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            font-style: italic;
            text-align: center;
            font-weight: 900;
            line-height: 1.2;
            margin-bottom: 56px;
            text-transform: uppercase;
          }
          .home-container208 {
            gap: 40px;
            margin: 0 auto;
            display: flex;
            max-width: 1100px;
            align-items: stretch;
          }
          .home-container209 {
            flex: 1;
            overflow: hidden;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
            min-height: 500px;
            border-radius: 14px;
          }
          .home-image23 {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }
          .home-container210 {
            flex: 1;
            display: flex;
            padding: 44px;
            background: #fff;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
            border-radius: 14px;
            flex-direction: column;
          }
          .home-text345 {
            color: #e31b23;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 6px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-text346 {
            color: #000;
            font-size: 1.8rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 28px;
            text-transform: uppercase;
          }
          .home-container211 {
            display: flex;
            border-bottom: 1px solid #eee;
            margin-bottom: 24px;
          }
          .home-thq-fais-freq-tab-elm1 {
            color: #e31b23;
            cursor: pointer;
            padding: 10px 20px;
            font-size: 0.78rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            user-select: none;
            border-bottom: 3px solid #e31b23;
            text-transform: uppercase;
          }
          .home-thq-fais-freq-tab-elm2 {
            color: #888;
            cursor: pointer;
            padding: 10px 20px;
            font-size: 0.78rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            user-select: none;
            border-bottom: 3px solid transparent;
            text-transform: uppercase;
          }
          .home-container212 {
            gap: 10px;
            display: grid;
            margin-bottom: 20px;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-thq-fais-amount-btn-elm1 {
            color: #000;
            border: 2px solid #ececec;
            cursor: pointer;
            padding: 14px 8px;
            font-size: 1.1rem;
            background: transparent;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            border-radius: 8px;
          }
          .home-thq-fais-amount-btn-elm2 {
            color: #000;
            border: 2px solid #ececec;
            cursor: pointer;
            padding: 14px 8px;
            font-size: 1.1rem;
            background: transparent;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            border-radius: 8px;
          }
          .home-thq-fais-amount-btn-elm3 {
            color: #fff;
            border: 2px solid #000;
            cursor: pointer;
            padding: 14px 8px;
            font-size: 1.1rem;
            background: #000;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            border-radius: 8px;
          }
          .home-thq-fais-amount-btn-elm4 {
            color: #000;
            border: 2px solid #ececec;
            cursor: pointer;
            padding: 14px 8px;
            font-size: 1.1rem;
            background: transparent;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            border-radius: 8px;
          }
          .home-thq-fais-amount-btn-elm5 {
            color: #000;
            border: 2px solid #ececec;
            cursor: pointer;
            padding: 14px 8px;
            font-size: 1.1rem;
            background: transparent;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            border-radius: 8px;
          }
          .home-thq-fais-amount-btn-elm6 {
            color: #000;
            border: 2px solid #ececec;
            cursor: pointer;
            padding: 14px 8px;
            font-size: 1.1rem;
            background: transparent;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            border-radius: 8px;
          }
          .home-container213 {
            gap: 10px;
            display: flex;
            margin-bottom: 12px;
          }
          .home-textinput20 {
            width: 100%;
            border: 1px solid #ddd;
            outline: none;
            padding: 14px 16px;
            font-size: 0.92rem;
            font-family: 'Poppins', sans-serif;
            border-radius: 8px;
          }
          .home-textinput21 {
            width: 100%;
            border: 1px solid #ddd;
            outline: none;
            padding: 14px 16px;
            font-size: 0.92rem;
            font-family: 'Poppins', sans-serif;
            border-radius: 8px;
          }
          .home-textinput22 {
            width: 100%;
            border: 1px solid #ddd;
            outline: none;
            padding: 14px 16px;
            font-size: 0.92rem;
            font-family: 'Poppins', sans-serif;
            border-radius: 8px;
            margin-bottom: 12px;
          }
          .home-button3 {
            color: #fff;
            width: 100%;
            border: none;
            cursor: pointer;
            padding: 22px;
            font-size: 1.2rem;
            background: #e31b23;
            margin-top: 14px;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            border-radius: 8px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-container214 {
            display: none;
          }
          .home-container215 {
            display: contents;
          }
          .home-thq-contact-form-elm {
            width: 100%;
            padding: 80px 0 100px;
            background: #f9f9f9;
            font-family: 'Poppins', sans-serif;
          }
          .home-container216 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .home-container217 {
            gap: 56px;
            display: grid;
            align-items: start;
            grid-template-columns: 1.6fr 1fr;
          }
          .home-container218 {
            padding: 52px;
            background: #fff;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
            border-radius: 18px;
          }
          .home-text349 {
            color: #000;
            font-size: 2.1rem;
            font-style: italic;
            font-weight: 900;
            margin-bottom: 32px;
            text-transform: uppercase;
          }
          .home-container219 {
            gap: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-container220 {
            margin-bottom: 22px;
          }
          .home-text350 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput23 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 14px 18px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container221 {
            margin-bottom: 22px;
          }
          .home-text351 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput24 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 14px 18px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container222 {
            margin-bottom: 22px;
          }
          .home-text352 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textinput25 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            outline: none;
            padding: 14px 18px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container223 {
            margin-bottom: 22px;
          }
          .home-text353 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-select3 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            height: 52px;
            outline: none;
            padding: 14px 18px;
            font-size: 0.95rem;
            background: #fff;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-container224 {
            margin-bottom: 22px;
          }
          .home-text354 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-textarea2 {
            color: #000;
            width: 100%;
            border: 2px solid #eee;
            resize: vertical;
            outline: none;
            padding: 14px 18px;
            font-size: 0.95rem;
            background: #fff;
            min-height: 150px;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
          }
          .home-button4 {
            color: #fff;
            width: 100%;
            border: none;
            cursor: pointer;
            padding: 20px;
            font-size: 1.05rem;
            background: #e31b23;
            font-style: italic;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            border-radius: 10px;
            text-transform: uppercase;
          }
          .home-container226 {
            gap: 18px;
            display: flex;
            padding: 24px;
            background: #fff;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            border-left: 4px solid #e31b23;
            border-radius: 14px;
            margin-bottom: 18px;
          }
          .home-icon60 {
            color: #e31b23;
            margin-top: 2px;
            flex-shrink: 0;
          }
          .home-text355 {
            color: #e31b23;
            margin: 0 0 4px;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
          }
          .home-text356 {
            color: #000;
            margin: 0;
            font-size: 0.9rem;
            font-weight: 600;
          }
          .home-container228 {
            gap: 18px;
            display: flex;
            padding: 24px;
            background: #fff;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            border-left: 4px solid #e31b23;
            border-radius: 14px;
            margin-bottom: 18px;
          }
          .home-icon63 {
            color: #e31b23;
            margin-top: 2px;
            flex-shrink: 0;
          }
          .home-text357 {
            color: #e31b23;
            margin: 0 0 4px;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
          }
          .home-text358 {
            color: #000;
            margin: 0;
            font-size: 0.9rem;
            font-weight: 600;
          }
          .home-container230 {
            color: #fff;
            padding: 36px;
            background: #000;
            margin-top: 24px;
            border-radius: 16px;
          }
          .home-text359 {
            color: #e31b23;
            font-size: 1.4rem;
            font-style: italic;
            font-weight: 900;
            margin-bottom: 10px;
            text-transform: uppercase;
          }
          .home-text360 {
            color: #aaa;
            font-size: 0.88rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          .home-container231 {
            color: #fff;
            display: inline-block;
            padding: 12px 24px;
            font-size: 0.78rem;
            background: #e31b23;
            font-weight: 800;
            border-radius: 6px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-container232 {
            inset: 0;
            display: none;
            z-index: 9998;
            position: fixed;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
          }
          .home-container233 {
            top: 50%;
            left: 50%;
            width: 90%;
            display: none;
            padding: 44px;
            z-index: 9999;
            position: fixed;
            max-width: 450px;
            transform: translate(-50%, -50%);
            background: #fff;
            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
            text-align: center;
            border-radius: 20px;
          }
          .home-icon67 {
            color: #22c55e;
            margin: 0 auto 20px;
            display: block;
          }
          .home-text362 {
            font-size: 1.5rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            margin-bottom: 10px;
          }
          .home-text363 {
            color: #666;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .home-button5 {
            color: #fff;
            width: 100%;
            border: none;
            cursor: pointer;
            padding: 14px 32px;
            font-size: 0.9rem;
            background: #e31b23;
            font-style: italic;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            border-radius: 8px;
            text-transform: uppercase;
          }
          .home-container234 {
            display: none;
          }
          .home-container235 {
            display: contents;
          }
          .home-text364 {
            display: inline-block;
          }
          .home-text365 {
            display: inline-block;
          }
          .home-text366 {
            display: inline-block;
          }
          .home-text367 {
            display: inline-block;
          }
          .home-text368 {
            display: inline-block;
          }
          .home-text369 {
            display: inline-block;
          }
          .home-text370 {
            display: inline-block;
          }
          .home-text371 {
            display: inline-block;
          }
          .home-text372 {
            display: inline-block;
          }
          .home-text373 {
            display: inline-block;
          }
          .home-text374 {
            display: inline-block;
          }
          .home-text375 {
            display: inline-block;
          }
          .home-text376 {
            display: inline-block;
          }
          .home-text377 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .home-text256 {
              color: rgb(255, 255, 255);
              font-size: clamp(1.8rem, 47.19px, 2.8rem);
              font-style: italic;
              font-weight: 900;
              letter-spacing: -1px;
              text-transform: uppercase;
            }
          }
          @media (max-width: 1200px) {
            .home-text230 {
              color: rgb(255, 255, 255);
              font-size: clamp(2.8rem, 72px, 5.5rem);
              font-style: italic;
              font-weight: 900;
              line-height: 1.05;
              letter-spacing: -2px;
              text-transform: uppercase;
            }
            .home-text232 {
              color: #e31b23;
            }
          }
          @media (max-width: 767px) {
            .home-container111 {
              grid-template-columns: repeat(1, 1fr);
            }
            .home-container127 {
              grid-template-columns: repeat(2, 1fr);
            }
            .home-container150 {
              grid-template-columns: repeat(1, 1fr);
            }
            .home-container162 {
              grid-template-columns: repeat(2, 1fr);
            }
            .home-container208 {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-container217 {
              display: block;
            }
          }
          @media (max-width: 479px) {
            .home-container108 {
              display: block;
            }
            .home-container111 {
              display: block;
            }
            .home-container112 {
              margin-top: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container115 {
              margin-top: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container118 {
              margin-top: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container121 {
              margin-top: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container127 {
              display: block;
            }
            .home-container128 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container131 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container134 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container137 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container142 {
              display: block;
            }
            .home-container143 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container145 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container147 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container150 {
              display: block;
            }
            .home-container151 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container153 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container162 {
              display: block;
            }
            .home-container163 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container165 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container167 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container169 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container171 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container177 {
              display: block;
            }
            .home-container178 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container181 {
              margin-top: var(--dl-layout-space-unit);
            }
            .home-container186 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container208 {
              flex-direction: column;
            }
            .home-container217 {
              display: block;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
