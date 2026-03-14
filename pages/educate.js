import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import HeaderComponent from '../components/header-component'
import AppComponent from '../components/component'
import Footer from '../components/footer'

const Educate = (props) => {
  return (
    <>
      <div className="educate-container10">
        <Head>
          <title>Educate - Lighthearted Stable Ant</title>
          <meta
            property="og:title"
            content="Educate - Lighthearted Stable Ant"
          />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/educate"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/educate"
          />
        </Head>
        <HeaderComponent
          text={
            <Fragment>
              <span className="educate-text100"> Press Enter to Search</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="educate-text101">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="educate-text102">FAIS</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="educate-text103">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="educate-text104">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="educate-text105">
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
              <span className="educate-text106">Community</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="educate-text107">Events</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="educate-text108">Media</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="educate-text109">Movements</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="educate-text110">News</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="educate-text111">Resources</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="educate-text112">Shop</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="educate-text113">Get Involved</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="educate-text114">Donate</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="educate-text115"> Student Network</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="educate-text116"> Programs</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="educate-text117"> Upcoming</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="educate-text118"> Shows</span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="educate-text119"> Press</span>
            </Fragment>
          }
          text19={
            <Fragment>
              <span className="educate-text120"> Our Method</span>
            </Fragment>
          }
          text20={
            <Fragment>
              <span className="educate-text121"> Latest Headlines</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="educate-text122"> Activism Toolkit</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="educate-text123"> FAIS Store</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="educate-text124"> Take Action</span>
            </Fragment>
          }
          text24={
            <Fragment>
              <span className="educate-text125">Chapters</span>
            </Fragment>
          }
          text25={
            <Fragment>
              <span className="educate-text126">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text26={
            <Fragment>
              <span className="educate-text127">Summit</span>
            </Fragment>
          }
          text27={
            <Fragment>
              <span className="educate-text128">Join a Chapter</span>
            </Fragment>
          }
          text28={
            <Fragment>
              <span className="educate-text129">High School</span>
            </Fragment>
          }
          text29={
            <Fragment>
              <span className="educate-text130">College</span>
            </Fragment>
          }
          text30={
            <Fragment>
              <span className="educate-text131">National Summit 2026</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="educate-text132">Upcoming</span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="educate-text133">Upcoming</span>
            </Fragment>
          }
          text33={
            <Fragment>
              <span className="educate-text134">Press Inquiries</span>
            </Fragment>
          }
          text34={
            <Fragment>
              <span className="educate-text135">Media Kit</span>
            </Fragment>
          }
          text35={
            <Fragment>
              <span className="educate-text136">F</span>
            </Fragment>
          }
          text36={
            <Fragment>
              <span className="educate-text137"> — Find</span>
            </Fragment>
          }
          text37={
            <Fragment>
              <span className="educate-text138">A</span>
            </Fragment>
          }
          text38={
            <Fragment>
              <span className="educate-text139"> — Assess</span>
            </Fragment>
          }
          text39={
            <Fragment>
              <span className="educate-text140">I</span>
            </Fragment>
          }
          text40={
            <Fragment>
              <span className="educate-text141"> — Initiate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="educate-text142">S</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="educate-text143"> — Solution</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="educate-text144">Parents</span>
            </Fragment>
          }
          text44={
            <Fragment>
              <span className="educate-text145">Students</span>
            </Fragment>
          }
          text45={
            <Fragment>
              <span className="educate-text146">Educators</span>
            </Fragment>
          }
          text46={
            <Fragment>
              <span className="educate-text147">Reporting</span>
            </Fragment>
          }
          text47={
            <Fragment>
              <span className="educate-text148">Apparel</span>
            </Fragment>
          }
          text48={
            <Fragment>
              <span className="educate-text149">Gear</span>
            </Fragment>
          }
          text49={
            <Fragment>
              <span className="educate-text150">Volunteer</span>
            </Fragment>
          }
          text50={
            <Fragment>
              <span className="educate-text151">Partner with Us</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="educate-text152">Culture Apothecary</span>
            </Fragment>
          }
          text52={
            <Fragment>
              <span className="educate-text153">Education Watch</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="educate-text154">School Safety Initiatives</span>
            </Fragment>
          }
          text54={
            <Fragment>
              <span className="educate-text155">Educational Expansion</span>
            </Fragment>
          }
          text55={
            <Fragment>
              <span className="educate-text156">Transparency Envoy</span>
            </Fragment>
          }
          text56={
            <Fragment>
              <span className="educate-text157">Parent Playbook</span>
            </Fragment>
          }
          text57={
            <Fragment>
              <span className="educate-text158">Student Rights</span>
            </Fragment>
          }
          text58={
            <Fragment>
              <span className="educate-text159">Educator Resources</span>
            </Fragment>
          }
          text59={
            <Fragment>
              <span className="educate-text160">Incident Portal</span>
            </Fragment>
          }
          text60={
            <Fragment>
              <span className="educate-text161">About</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="educate-text162">Features</span>
            </Fragment>
          }
          text62={
            <Fragment>
              <span className="educate-text163">Pricing</span>
            </Fragment>
          }
          text63={
            <Fragment>
              <span className="educate-text164">Team</span>
            </Fragment>
          }
          text64={
            <Fragment>
              <span className="educate-text165">Blog</span>
            </Fragment>
          }
          text65={
            <Fragment>
              <span className="educate-text166">About</span>
            </Fragment>
          }
          text66={
            <Fragment>
              <span className="educate-text167">Features</span>
            </Fragment>
          }
          text67={
            <Fragment>
              <span className="educate-text168">Pricing</span>
            </Fragment>
          }
          text68={
            <Fragment>
              <span className="educate-text169">Team</span>
            </Fragment>
          }
          text69={
            <Fragment>
              <span className="educate-text170">Blog</span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="educate-text171">Media</span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="educate-text172">Movements</span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="educate-text173">News</span>
            </Fragment>
          }
          text101={
            <Fragment>
              <span className="educate-text174">Resources</span>
            </Fragment>
          }
          text110={
            <Fragment>
              <span className="educate-text175">FAIS</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="educate-text176">Shop</span>
            </Fragment>
          }
          text121={
            <Fragment>
              <span className="educate-text177">Get Involved</span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="educate-text178">Donate</span>
            </Fragment>
          }
          text141={
            <Fragment>
              <span className="educate-text179"> Student Network</span>
            </Fragment>
          }
          text151={
            <Fragment>
              <span className="educate-text180"> Programs</span>
            </Fragment>
          }
          text161={
            <Fragment>
              <span className="educate-text181"> Upcoming</span>
            </Fragment>
          }
          text171={
            <Fragment>
              <span className="educate-text182"> Shows</span>
            </Fragment>
          }
          text181={
            <Fragment>
              <span className="educate-text183"> Press</span>
            </Fragment>
          }
          text191={
            <Fragment>
              <span className="educate-text184"> Our Method</span>
            </Fragment>
          }
          text201={
            <Fragment>
              <span className="educate-text185"> Latest Headlines</span>
            </Fragment>
          }
          text210={
            <Fragment>
              <span className="educate-text186">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="educate-text187"> Activism Toolkit</span>
            </Fragment>
          }
          text221={
            <Fragment>
              <span className="educate-text188"> FAIS Store</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="educate-text189"> Take Action</span>
            </Fragment>
          }
          text241={
            <Fragment>
              <span className="educate-text190">Chapters</span>
            </Fragment>
          }
          text251={
            <Fragment>
              <span className="educate-text191">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text261={
            <Fragment>
              <span className="educate-text192">Summit</span>
            </Fragment>
          }
          text271={
            <Fragment>
              <span className="educate-text193">Join a Chapter</span>
            </Fragment>
          }
          text281={
            <Fragment>
              <span className="educate-text194">High School</span>
            </Fragment>
          }
          text291={
            <Fragment>
              <span className="educate-text195">College</span>
            </Fragment>
          }
          text301={
            <Fragment>
              <span className="educate-text196">National Summit 2026</span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="educate-text197">Upcoming</span>
            </Fragment>
          }
          text321={
            <Fragment>
              <span className="educate-text198">Upcoming</span>
            </Fragment>
          }
          text331={
            <Fragment>
              <span className="educate-text199">Press Inquiries</span>
            </Fragment>
          }
          text341={
            <Fragment>
              <span className="educate-text200">Media Kit</span>
            </Fragment>
          }
          text351={
            <Fragment>
              <span className="educate-text201">F</span>
            </Fragment>
          }
          text361={
            <Fragment>
              <span className="educate-text202"> — Find</span>
            </Fragment>
          }
          text371={
            <Fragment>
              <span className="educate-text203">A</span>
            </Fragment>
          }
          text381={
            <Fragment>
              <span className="educate-text204"> — Assess</span>
            </Fragment>
          }
          text391={
            <Fragment>
              <span className="educate-text205">I</span>
            </Fragment>
          }
          text401={
            <Fragment>
              <span className="educate-text206"> — Initiate</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="educate-text207">S</span>
            </Fragment>
          }
          text421={
            <Fragment>
              <span className="educate-text208"> — Solution</span>
            </Fragment>
          }
          text431={
            <Fragment>
              <span className="educate-text209">Parents</span>
            </Fragment>
          }
          text441={
            <Fragment>
              <span className="educate-text210">Students</span>
            </Fragment>
          }
          text451={
            <Fragment>
              <span className="educate-text211">Educators</span>
            </Fragment>
          }
          text461={
            <Fragment>
              <span className="educate-text212">Reporting</span>
            </Fragment>
          }
          text471={
            <Fragment>
              <span className="educate-text213">Apparel</span>
            </Fragment>
          }
          text481={
            <Fragment>
              <span className="educate-text214">Gear</span>
            </Fragment>
          }
          text491={
            <Fragment>
              <span className="educate-text215">Volunteer</span>
            </Fragment>
          }
          text501={
            <Fragment>
              <span className="educate-text216">Partner with Us</span>
            </Fragment>
          }
          text510={
            <Fragment>
              <span className="educate-text217">Community</span>
            </Fragment>
          }
          text511={
            <Fragment>
              <span className="educate-text218">Culture Apothecary</span>
            </Fragment>
          }
          text521={
            <Fragment>
              <span className="educate-text219">Education Watch</span>
            </Fragment>
          }
          text531={
            <Fragment>
              <span className="educate-text220">School Safety Initiatives</span>
            </Fragment>
          }
          text541={
            <Fragment>
              <span className="educate-text221">Educational Expansion</span>
            </Fragment>
          }
          text551={
            <Fragment>
              <span className="educate-text222">Transparency Envoy</span>
            </Fragment>
          }
          text561={
            <Fragment>
              <span className="educate-text223">Parent Playbook</span>
            </Fragment>
          }
          text571={
            <Fragment>
              <span className="educate-text224">Student Rights</span>
            </Fragment>
          }
          text581={
            <Fragment>
              <span className="educate-text225">Educator Resources</span>
            </Fragment>
          }
          text591={
            <Fragment>
              <span className="educate-text226">Incident Portal</span>
            </Fragment>
          }
          text610={
            <Fragment>
              <span className="educate-text227">Events</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="educate-text228">Register</span>
            </Fragment>
          }
          rootClassName="header-componentroot-class-name1"
        ></HeaderComponent>
        <section className="educate-thq-educate-elm">
          <div className="educate-container11">
            <span className="educate-text229">Education</span>
            <h1 className="educate-text230">
              <span>Educational</span>
              <br></br>
            </h1>
            <p className="educate-text232">
              Empowering students, parents, and educators with the truth.
              Knowledge is the foundation of freedom and the shield against
              bias.
            </p>
          </div>
        </section>
        <section className="educate-thq-mastering-elm">
          <div className="educate-container12">
            <div className="educate-container13">
              <span className="educate-text233">Featured Topics</span>
              <h2 className="educate-text234">Antisemitism in the Us</h2>
            </div>
            <div className="educate-container14">
              <a href="#">
                <div className="educate-container15">
                  <div className="educate-container16">
                    <AppComponent imageSrc="https://images.unsplash.com/photo-1720131578918-6bd5e0b94150?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fDEuJTIwVGhlJTIwUm9vdHMlMjBvZiUyMEFtZXJpY2FuJTIwQW50aXNlbWl0aXNtfGVufDB8fHx8MTc3MzE1MTk3NHww&amp;ixlib=rb-4.1.0&amp;w=1300"></AppComponent>
                    <span className="educate-text235">See more...</span>
                  </div>
                  <div className="educate-container17">
                    <h4 className="educate-text236">
                      The Roots of American Antisemitism
                    </h4>
                    <p className="educate-text237">
                      Understand the historical prevalence of &quot;gentlemen’s
                      agreements,&quot; university quotas, and exclusionary
                      social practices that shaped the early 20th-century Jewish
                      American experience.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="educate-container18">
                  <div className="educate-container19">
                    <img
                      alt="Debunking Myths"
                      src="https://images.unsplash.com/photo-1598363431541-49f7681be1fb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFByb3BhZ2FuZGElMjBhbmQlMjBDb25zcGlyYWN5JTIwVGhlb3JpZXN8ZW58MHx8fHwxNzczMTUyMDE1fDA&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="educate-image1"
                    />
                    <span className="educate-text238">See more...</span>
                  </div>
                  <div className="educate-container20">
                    <h4 className="educate-text239">
                      Propaganda and Conspiracy Theories
                    </h4>
                    <p className="educate-text240">
                      Examine the origins of persistent conspiracy theories like
                      the &quot;dual loyalty&quot; trope and how centuries-old
                      myths are modernized and amplified by social media
                      algorithms.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="educate-container21">
                  <div className="educate-container22">
                    <img
                      alt="Radicalism in K-12"
                      src="https://images.unsplash.com/photo-1616891723435-279716416be5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxUaGUlMjBFc2NhbGF0aW9uJTIwb2YlMjBWaW9sZW50JTIwRXh0cmVtaXNtfGVufDB8fHx8MTc3MzE1MzI3NHww&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="educate-image2"
                    />
                    <span className="educate-text241">See more...</span>
                  </div>
                  <div className="educate-container23">
                    <h4 className="educate-text242">
                      The Escalation of Violent Extremism
                    </h4>
                    <p className="educate-text243">
                      Analyze the shift from rhetorical hate to physical
                      violence, focusing on how white supremacist ideologies
                      have moved from the digital fringes into real-world
                      terrorist acts.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="educate-container24">
                  <div className="educate-container25">
                    <img
                      alt="Local Advocacy"
                      src="https://images.unsplash.com/photo-1707004404577-fba2612b0000?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fENvbnRlbXBvcmFyeSUyME1hbmlmZXN0YXRpb25zJTIwfGVufDB8fHx8MTc3MzE1MzMxNXww&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="educate-image3"
                    />
                    <span className="educate-text244">See more...</span>
                  </div>
                  <div className="educate-container26">
                    <h4 className="educate-text245">
                      Contemporary Manifestations &amp; Allyship
                    </h4>
                    <p className="educate-text246">
                      Learn to distinguish between legitimate political
                      discourse and rhetoric that uses anti-Zionist language to
                      mask and promote antisemitic discrimination.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="educate-thq-thq-mastering-elm-elm1">
          <div className="educate-thq-container12-elm1">
            <div className="educate-thq-container13-elm1">
              <span className="educate-thq-text14-elm1">Featured Topics</span>
              <h2 className="educate-thq-text15-elm1">Mastering the Fight</h2>
            </div>
            <div className="educate-thq-container14-elm1">
              <a href="#">
                <div>
                  <div className="educate-thq-container15-elm1">
                    <div className="educate-thq-container16-elm1">
                      <img
                        alt="Bias in Curriculum"
                        src="https://images.unsplash.com/photo-1758685848001-0396a85ba84f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxJZGVudGlmeWluZyUyMFN5c3RlbWljJTIwQmlhcyUyMGluJTIwQ3VycmljdWx1bXxlbnwwfHx8fDE3NzMzNDE3NjZ8MA&amp;ixlib=rb-4.1.0&amp;w=1300"
                        className="educate-thq-image1-elm1"
                      />
                      <span className="educate-thq-text16-elm1">
                        The Real Conflict
                      </span>
                    </div>
                    <div className="educate-thq-container17-elm1">
                      <h4 className="educate-thq-text17-elm1">
                        Identifying Systemic Bias in Curriculum
                      </h4>
                      <p className="educate-thq-text18-elm1">
                        Learn to identify subtle radicalization and bias
                        embedded within modern school textbooks.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container18-elm1">
                    <div className="educate-thq-container19-elm1">
                      <img
                        alt="Debunking Myths"
                        src="https://images.unsplash.com/photo-1765428393992-5ca8c9e82ece?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHVuY292ZXJpbmclMjBzZWNyZXRzfGVufDB8fHx8MTc3MzM0MTg4Nnww&amp;ixlib=rb-4.1.0&amp;w=1300"
                        className="educate-thq-image2-elm1"
                      />
                      <span className="educate-thq-text19-elm1">
                        Reality vs Media
                      </span>
                    </div>
                    <div className="educate-thq-container20-elm1">
                      <h4 className="educate-thq-text20-elm1">
                        Debunking Campus Myths
                      </h4>
                      <p className="educate-thq-text21-elm1">
                        Breaking down common misconceptions about campus life
                        and reporting of antisemitic incidents.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container21-elm1">
                    <div className="educate-thq-container22-elm1">
                      <img
                        alt="Radicalism in K-12"
                        src="https://images.unsplash.com/photo-1604524382354-7dc6f83fb725?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fFJhZGljYWxpc20lMjB8ZW58MHx8fHwxNzczMzQxOTI1fDA&amp;ixlib=rb-4.1.0&amp;w=1300"
                        className="educate-thq-image3-elm1"
                      />
                      <span className="educate-thq-text22-elm1">
                        Campus Exposure
                      </span>
                    </div>
                    <div className="educate-thq-container23-elm1">
                      <h4 className="educate-thq-text23-elm1">
                        Undercover: Radicalism in K-12
                      </h4>
                      <p className="educate-thq-text24-elm1">
                        An investigative look into how radical ideologies are
                        presented to students in schools.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container24-elm1">
                    <div className="educate-thq-container25-elm1">
                      <img
                        alt="Local Advocacy"
                        src="https://images.unsplash.com/photo-1591527292000-95f01a0d1496?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxUaGUlMjBQb3dlciUyMG9mJTIwY29tbXVuaXR5fGVufDB8fHx8MTc3MzM0MTk3MHww&amp;ixlib=rb-4.1.0&amp;w=1300"
                        className="educate-thq-image4-elm1"
                      />
                      <span className="educate-thq-text25-elm1">
                        Community Action
                      </span>
                    </div>
                    <div className="educate-thq-container26-elm1">
                      <h4 className="educate-thq-text26-elm1">
                        The Power of Local Advocacy
                      </h4>
                      <p className="educate-thq-text27-elm1">
                        Tools for community leaders and parents to lobby school
                        boards and effect real policy change.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="educate-thq-thq-mastering-elm-elm2">
          <div className="educate-thq-container12-elm2">
            <div className="educate-thq-container13-elm2">
              <span className="educate-thq-text14-elm2">Featured Topics</span>
              <h2 className="educate-thq-text15-elm2">
                {' '}
                MISCONCEPTIONS &amp; OPPOSING ARGUMENTS
              </h2>
            </div>
            <div className="educate-thq-container14-elm2">
              <a href="#">
                <div>
                  <div className="educate-thq-container15-elm2">
                    <div className="educate-thq-container16-elm2">
                      <img
                        alt="Bias in Curriculum"
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad&amp;w=1300"
                        className="educate-thq-image1-elm2"
                      />
                      <span className="educate-thq-text16-elm2">
                        The Real Conflict
                      </span>
                    </div>
                    <div className="educate-thq-container17-elm2">
                      <h4 className="educate-thq-text17-elm2">
                        Coming soon...
                      </h4>
                      <p className="educate-thq-text18-elm2">-----</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container18-elm2">
                    <div className="educate-thq-container19-elm2">
                      <img
                        alt="Debunking Myths"
                        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe&amp;w=1300"
                        className="educate-thq-image2-elm2"
                      />
                      <div className="educate-container33">
                        <div className="educate-container34">
                          <div className="educate-container35">
                            <div className="educate-thq-container17-elm3">
                              <h4 className="educate-thq-text17-elm3">
                                Coming soon...
                              </h4>
                              <p className="educate-thq-text18-elm3">-----</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="educate-thq-text19-elm2">
                        Reality vs Media
                      </span>
                    </div>
                    <div className="educate-thq-container20-elm2">
                      <h4 className="educate-thq-text20-elm2">----</h4>
                      <p className="educate-thq-text21-elm2">----</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container21-elm2">
                    <div className="educate-thq-container22-elm2">
                      <img
                        alt="Radicalism in K-12"
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655&amp;w=1300"
                        className="educate-thq-image3-elm2"
                      />
                      <span className="educate-thq-text22-elm2">
                        Campus Exposure
                      </span>
                    </div>
                    <div className="educate-thq-container23-elm2">
                      <h4 className="educate-thq-text23-elm2">
                        coming soon...
                      </h4>
                      <p className="educate-thq-text24-elm2">----</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container24-elm2">
                    <div className="educate-thq-container25-elm2">
                      <img
                        alt="Local Advocacy"
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952&amp;w=1300"
                        className="educate-thq-image4-elm2"
                      />
                      <span className="educate-thq-text25-elm2">
                        Community Action
                      </span>
                    </div>
                    <div className="educate-thq-container26-elm2">
                      <h4 className="educate-thq-text26-elm2">coming soon</h4>
                      <p className="educate-thq-text27-elm2">----</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="educate-thq-thq-mastering-elm-elm3">
          <div className="educate-thq-container12-elm3">
            <div className="educate-thq-container13-elm3">
              <span className="educate-thq-text14-elm3">Featured Topics</span>
              <h2 className="educate-thq-text15-elm3">
                {' '}
                Politics in the middle east
              </h2>
            </div>
            <div className="educate-thq-container14-elm3">
              <a href="#">
                <div>
                  <div className="educate-thq-container15-elm3">
                    <div className="educate-thq-container16-elm3">
                      <img
                        alt="Bias in Curriculum"
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad&amp;w=1300"
                        className="educate-thq-image1-elm3"
                      />
                      <span className="educate-thq-text16-elm3">
                        The Real Conflict
                      </span>
                    </div>
                    <div className="educate-thq-container17-elm4">
                      <h4 className="educate-thq-text17-elm4">
                        coming soon...
                      </h4>
                      <p className="educate-thq-text18-elm4">-----</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container18-elm3">
                    <div className="educate-thq-container19-elm3">
                      <img
                        alt="Debunking Myths"
                        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe&amp;w=1300"
                        className="educate-thq-image2-elm3"
                      />
                      <div className="educate-container40">
                        <div className="educate-container41">
                          <div className="educate-container42">
                            <div className="educate-thq-container17-elm5">
                              <h4 className="educate-thq-text17-elm5">
                                Coming soon...
                              </h4>
                              <p className="educate-thq-text18-elm5">-----</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="educate-thq-text19-elm3">
                        Reality vs Media
                      </span>
                    </div>
                    <div className="educate-thq-container20-elm3">
                      <h4 className="educate-thq-text20-elm3">----</h4>
                      <p className="educate-thq-text21-elm3">----</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container21-elm3">
                    <div className="educate-thq-container22-elm3">
                      <img
                        alt="Radicalism in K-12"
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655&amp;w=1300"
                        className="educate-thq-image3-elm3"
                      />
                      <span className="educate-thq-text22-elm3">
                        Campus Exposure
                      </span>
                    </div>
                    <div className="educate-thq-container23-elm3">
                      <h4 className="educate-thq-text23-elm3">
                        coming soon...
                      </h4>
                      <p className="educate-thq-text24-elm3">----</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div className="educate-thq-container24-elm3">
                    <div className="educate-thq-container25-elm3">
                      <img
                        alt="Local Advocacy"
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952&amp;w=1300"
                        className="educate-thq-image4-elm3"
                      />
                      <span className="educate-thq-text25-elm3">
                        Community Action
                      </span>
                    </div>
                    <div className="educate-thq-container26-elm3">
                      <h4 className="educate-thq-text26-elm3">
                        coming soon...
                      </h4>
                      <p className="educate-thq-text27-elm3">----</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer
          text={
            <Fragment>
              <span className="educate-text247">
                Fighting Antisemitism in Schools (FAIS) is a nationwide movement
                dedicated to identifying and combating bias in our educational
                systems through transparency and community action.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="educate-text248">
                &amp;copy; 2026 Fighting Antisemitism in Schools (FAIS). All
                Rights Reserved.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="educate-text249">FAIS</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="educate-text250">Home</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="educate-text251">Resources</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="educate-text252">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="educate-text253">Get Involved</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="educate-text254">Report Incident</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="educate-text255">Donate</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="educate-text256">Privacy Policy</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="educate-text257">Terms of Use</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="educate-text258">Explore</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="educate-text259">Take Action</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="educate-text260">Legal</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name2"
        ></Footer>
      </div>
      <style jsx>
        {`
          .educate-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .educate-text100 {
            display: inline-block;
          }
          .educate-text101 {
            display: inline-block;
          }
          .educate-text102 {
            display: inline-block;
          }
          .educate-text103 {
            display: inline-block;
          }
          .educate-text104 {
            display: inline-block;
          }
          .educate-text105 {
            display: inline-block;
          }
          .educate-text106 {
            display: inline-block;
          }
          .educate-text107 {
            display: inline-block;
          }
          .educate-text108 {
            display: inline-block;
          }
          .educate-text109 {
            display: inline-block;
          }
          .educate-text110 {
            display: inline-block;
          }
          .educate-text111 {
            display: inline-block;
          }
          .educate-text112 {
            display: inline-block;
          }
          .educate-text113 {
            display: inline-block;
          }
          .educate-text114 {
            display: inline-block;
          }
          .educate-text115 {
            display: inline-block;
          }
          .educate-text116 {
            display: inline-block;
          }
          .educate-text117 {
            display: inline-block;
          }
          .educate-text118 {
            display: inline-block;
          }
          .educate-text119 {
            display: inline-block;
          }
          .educate-text120 {
            display: inline-block;
          }
          .educate-text121 {
            display: inline-block;
          }
          .educate-text122 {
            display: inline-block;
          }
          .educate-text123 {
            display: inline-block;
          }
          .educate-text124 {
            display: inline-block;
          }
          .educate-text125 {
            display: inline-block;
          }
          .educate-text126 {
            display: inline-block;
          }
          .educate-text127 {
            display: inline-block;
          }
          .educate-text128 {
            display: inline-block;
          }
          .educate-text129 {
            display: inline-block;
          }
          .educate-text130 {
            display: inline-block;
          }
          .educate-text131 {
            display: inline-block;
          }
          .educate-text132 {
            display: inline-block;
          }
          .educate-text133 {
            display: inline-block;
          }
          .educate-text134 {
            display: inline-block;
          }
          .educate-text135 {
            display: inline-block;
          }
          .educate-text136 {
            display: inline-block;
          }
          .educate-text137 {
            display: inline-block;
          }
          .educate-text138 {
            display: inline-block;
          }
          .educate-text139 {
            display: inline-block;
          }
          .educate-text140 {
            display: inline-block;
          }
          .educate-text141 {
            display: inline-block;
          }
          .educate-text142 {
            display: inline-block;
          }
          .educate-text143 {
            display: inline-block;
          }
          .educate-text144 {
            display: inline-block;
          }
          .educate-text145 {
            display: inline-block;
          }
          .educate-text146 {
            display: inline-block;
          }
          .educate-text147 {
            display: inline-block;
          }
          .educate-text148 {
            display: inline-block;
          }
          .educate-text149 {
            display: inline-block;
          }
          .educate-text150 {
            display: inline-block;
          }
          .educate-text151 {
            display: inline-block;
          }
          .educate-text152 {
            display: inline-block;
          }
          .educate-text153 {
            display: inline-block;
          }
          .educate-text154 {
            display: inline-block;
          }
          .educate-text155 {
            display: inline-block;
          }
          .educate-text156 {
            display: inline-block;
          }
          .educate-text157 {
            display: inline-block;
          }
          .educate-text158 {
            display: inline-block;
          }
          .educate-text159 {
            display: inline-block;
          }
          .educate-text160 {
            display: inline-block;
          }
          .educate-text161 {
            display: inline-block;
          }
          .educate-text162 {
            display: inline-block;
          }
          .educate-text163 {
            display: inline-block;
          }
          .educate-text164 {
            display: inline-block;
          }
          .educate-text165 {
            display: inline-block;
          }
          .educate-text166 {
            display: inline-block;
          }
          .educate-text167 {
            display: inline-block;
          }
          .educate-text168 {
            display: inline-block;
          }
          .educate-text169 {
            display: inline-block;
          }
          .educate-text170 {
            display: inline-block;
          }
          .educate-text171 {
            display: inline-block;
          }
          .educate-text172 {
            display: inline-block;
          }
          .educate-text173 {
            display: inline-block;
          }
          .educate-text174 {
            display: inline-block;
          }
          .educate-text175 {
            display: inline-block;
          }
          .educate-text176 {
            display: inline-block;
          }
          .educate-text177 {
            display: inline-block;
          }
          .educate-text178 {
            display: inline-block;
          }
          .educate-text179 {
            display: inline-block;
          }
          .educate-text180 {
            display: inline-block;
          }
          .educate-text181 {
            display: inline-block;
          }
          .educate-text182 {
            display: inline-block;
          }
          .educate-text183 {
            display: inline-block;
          }
          .educate-text184 {
            display: inline-block;
          }
          .educate-text185 {
            display: inline-block;
          }
          .educate-text186 {
            display: inline-block;
          }
          .educate-text187 {
            display: inline-block;
          }
          .educate-text188 {
            display: inline-block;
          }
          .educate-text189 {
            display: inline-block;
          }
          .educate-text190 {
            display: inline-block;
          }
          .educate-text191 {
            display: inline-block;
          }
          .educate-text192 {
            display: inline-block;
          }
          .educate-text193 {
            display: inline-block;
          }
          .educate-text194 {
            display: inline-block;
          }
          .educate-text195 {
            display: inline-block;
          }
          .educate-text196 {
            display: inline-block;
          }
          .educate-text197 {
            display: inline-block;
          }
          .educate-text198 {
            display: inline-block;
          }
          .educate-text199 {
            display: inline-block;
          }
          .educate-text200 {
            display: inline-block;
          }
          .educate-text201 {
            display: inline-block;
          }
          .educate-text202 {
            display: inline-block;
          }
          .educate-text203 {
            display: inline-block;
          }
          .educate-text204 {
            display: inline-block;
          }
          .educate-text205 {
            display: inline-block;
          }
          .educate-text206 {
            display: inline-block;
          }
          .educate-text207 {
            display: inline-block;
          }
          .educate-text208 {
            display: inline-block;
          }
          .educate-text209 {
            display: inline-block;
          }
          .educate-text210 {
            display: inline-block;
          }
          .educate-text211 {
            display: inline-block;
          }
          .educate-text212 {
            display: inline-block;
          }
          .educate-text213 {
            display: inline-block;
          }
          .educate-text214 {
            display: inline-block;
          }
          .educate-text215 {
            display: inline-block;
          }
          .educate-text216 {
            display: inline-block;
          }
          .educate-text217 {
            display: inline-block;
          }
          .educate-text218 {
            display: inline-block;
          }
          .educate-text219 {
            display: inline-block;
          }
          .educate-text220 {
            display: inline-block;
          }
          .educate-text221 {
            display: inline-block;
          }
          .educate-text222 {
            display: inline-block;
          }
          .educate-text223 {
            display: inline-block;
          }
          .educate-text224 {
            display: inline-block;
          }
          .educate-text225 {
            display: inline-block;
          }
          .educate-text226 {
            display: inline-block;
          }
          .educate-text227 {
            display: inline-block;
          }
          .educate-text228 {
            display: inline-block;
          }
          .educate-thq-educate-elm {
            color: #fff;
            width: 100%;
            padding: 120px 0 90px;
            background: #000;
            margin-top: var(--dl-layout-space-fiveunits);
            text-align: center;
            font-family: "'Poppins', sans-serif";
          }
          .educate-container11 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .educate-text229 {
            color: #e31b23;
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 18px;
            letter-spacing: 3px;
            text-transform: uppercase;
          }
          .educate-text230 {
            font-size: clamp(3rem, 7vw, 5.5rem);
            font-style: italic;
            font-weight: 900;
            line-height: 0.95;
            margin-bottom: 24px;
            letter-spacing: -3px;
            text-transform: uppercase;
          }
          .educate-text232 {
            color: #c5143e;
            margin: 0 auto;
            font-size: 1rem;
            max-width: 700px;
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .educate-thq-mastering-elm {
            color: #fff;
            width: 100%;
            padding: 80px 0;
            background: #000;
            font-family: "'Poppins', sans-serif";
          }
          .educate-container12 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .educate-container13 {
            text-align: center;
            margin-bottom: 50px;
          }
          .educate-text233 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .educate-text234 {
            color: #fff;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .educate-container14 {
            gap: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .educate-container15 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-container16 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-text235 {
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
          .educate-container17 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-text236 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-text237 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-container18 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-container19 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-image1 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-text238 {
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
          .educate-container20 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-text239 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-text240 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-container21 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-container22 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-image2 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-text241 {
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
          .educate-container23 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-text242 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-text243 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-container24 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-container25 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-image3 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-text244 {
            top: 14px;
            left: 14px;
            color: #fff;
            padding: 4px 10px;
            position: absolute;
            font-size: 0.6rem;
            background: #c5143e;
            font-weight: 900;
            border-radius: 4px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .educate-container26 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-text245 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-text246 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-thq-mastering-elm-elm1 {
            color: #fff;
            width: 100%;
            padding: 80px 0;
            background: #000;
            font-family: "'Poppins', sans-serif";
          }
          .educate-thq-container12-elm1 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .educate-thq-container13-elm1 {
            text-align: center;
            margin-bottom: 50px;
          }
          .educate-thq-text14-elm1 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .educate-thq-text15-elm1 {
            color: #fff;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .educate-thq-container14-elm1 {
            gap: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .educate-thq-container15-elm1 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container16-elm1 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image1-elm1 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text16-elm1 {
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
          .educate-thq-container17-elm1 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text17-elm1 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text18-elm1 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container18-elm1 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container19-elm1 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image2-elm1 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text19-elm1 {
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
          .educate-thq-container20-elm1 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text20-elm1 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text21-elm1 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container21-elm1 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container22-elm1 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image3-elm1 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text22-elm1 {
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
          .educate-thq-container23-elm1 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text23-elm1 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text24-elm1 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container24-elm1 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container25-elm1 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image4-elm1 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text25-elm1 {
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
          .educate-thq-container26-elm1 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text26-elm1 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text27-elm1 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-thq-mastering-elm-elm2 {
            color: #fff;
            width: 100%;
            padding: 80px 0;
            background: #000;
            font-family: "'Poppins', sans-serif";
          }
          .educate-thq-container12-elm2 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .educate-thq-container13-elm2 {
            text-align: center;
            margin-bottom: 50px;
          }
          .educate-thq-text14-elm2 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .educate-thq-text15-elm2 {
            color: #fff;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .educate-thq-container14-elm2 {
            gap: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .educate-thq-container15-elm2 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container16-elm2 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image1-elm2 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text16-elm2 {
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
          .educate-thq-container17-elm2 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text17-elm2 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text18-elm2 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container18-elm2 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container19-elm2 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image2-elm2 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-container33 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .educate-container34 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .educate-container35 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .educate-thq-container17-elm3 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text17-elm3 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text18-elm3 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-text19-elm2 {
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
          .educate-thq-container20-elm2 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text20-elm2 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text21-elm2 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container21-elm2 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container22-elm2 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image3-elm2 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text22-elm2 {
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
          .educate-thq-container23-elm2 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text23-elm2 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text24-elm2 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container24-elm2 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container25-elm2 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image4-elm2 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text25-elm2 {
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
          .educate-thq-container26-elm2 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text26-elm2 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text27-elm2 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-thq-mastering-elm-elm3 {
            color: #fff;
            width: 100%;
            padding: 80px 0;
            background: #000;
            font-family: "'Poppins', sans-serif";
          }
          .educate-thq-container12-elm3 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .educate-thq-container13-elm3 {
            text-align: center;
            margin-bottom: 50px;
          }
          .educate-thq-text14-elm3 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .educate-thq-text15-elm3 {
            color: #fff;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .educate-thq-container14-elm3 {
            gap: 20px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .educate-thq-container15-elm3 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container16-elm3 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image1-elm3 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text16-elm3 {
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
          .educate-thq-container17-elm4 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text17-elm4 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text18-elm4 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container18-elm3 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container19-elm3 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image2-elm3 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-container40 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .educate-container41 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .educate-container42 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .educate-thq-container17-elm5 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text17-elm5 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text18-elm5 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-text19-elm3 {
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
          .educate-thq-container20-elm3 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text20-elm3 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text21-elm3 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container21-elm3 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container22-elm3 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image3-elm3 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text22-elm3 {
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
          .educate-thq-container23-elm3 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text23-elm3 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text24-elm3 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-thq-container24-elm3 {
            color: inherit;
            border: 1px solid #1e1e1e;
            display: flex;
            overflow: hidden;
            background: #111;
            border-radius: 14px;
            flex-direction: column;
            text-decoration: none;
          }
          .educate-thq-container25-elm3 {
            height: 180px;
            position: relative;
            background: #222;
          }
          .educate-thq-image4-elm3 {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
          .educate-thq-text25-elm3 {
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
          .educate-thq-container26-elm3 {
            padding: 24px;
            flex-grow: 1;
          }
          .educate-thq-text26-elm3 {
            color: #fff;
            font-size: 1.15rem;
            font-style: italic;
            font-weight: 900;
            line-height: 1.25;
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .educate-thq-text27-elm3 {
            color: #888;
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .educate-text247 {
            display: inline-block;
          }
          .educate-text248 {
            display: inline-block;
          }
          .educate-text249 {
            display: inline-block;
          }
          .educate-text250 {
            display: inline-block;
          }
          .educate-text251 {
            display: inline-block;
          }
          .educate-text252 {
            display: inline-block;
          }
          .educate-text253 {
            display: inline-block;
          }
          .educate-text254 {
            display: inline-block;
          }
          .educate-text255 {
            display: inline-block;
          }
          .educate-text256 {
            display: inline-block;
          }
          .educate-text257 {
            display: inline-block;
          }
          .educate-text258 {
            display: inline-block;
          }
          .educate-text259 {
            display: inline-block;
          }
          .educate-text260 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .educate-text232 {
              color: rgb(197, 20, 62);
              margin: 0 auto;
              font-size: 1rem;
              max-width: 700px;
              font-weight: 700;
              line-height: 1.6;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .educate-text234 {
              color: rgb(255, 255, 255);
              font-size: clamp(1.8rem, 48px, 2.8rem);
              font-style: italic;
              font-weight: 900;
              letter-spacing: -1px;
              text-transform: uppercase;
            }
            .educate-text235 {
              top: 14px;
              left: 14px;
              color: rgb(255, 255, 255);
              padding: 4px 10px;
              position: absolute;
              font-size: 0.6rem;
              background: rgb(227, 27, 35);
              font-weight: 900;
              border-radius: 4px;
              letter-spacing: 1px;
              text-transform: uppercase;
              background-clip: initial;
              background-image: initial;
              webkit-background-clip: initial;
            }
            .educate-text236 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-text237 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-text238 {
              top: 14px;
              left: 14px;
              color: rgb(255, 255, 255);
              padding: 4px 10px;
              position: absolute;
              font-size: 0.6rem;
              background: rgb(227, 27, 35);
              font-weight: 900;
              border-radius: 4px;
              letter-spacing: 1px;
              text-transform: uppercase;
              background-clip: initial;
              background-image: initial;
              webkit-background-clip: initial;
            }
            .educate-text239 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-text240 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-text241 {
              top: 14px;
              left: 14px;
              color: rgb(255, 255, 255);
              padding: 4px 10px;
              position: absolute;
              font-size: 0.6rem;
              background: #e31b23;
              font-weight: 900;
              border-radius: 4px;
              letter-spacing: 1px;
              text-transform: uppercase;
              background-clip: initial;
              background-image: initial;
              webkit-background-clip: initial;
            }
            .educate-text242 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-text243 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-text244 {
              top: 14px;
              left: 14px;
              color: rgb(255, 255, 255);
              padding: 4px 10px;
              position: absolute;
              font-size: 0.6rem;
              background: rgb(227, 27, 35);
              font-weight: 900;
              border-radius: 4px;
              letter-spacing: 1px;
              text-transform: uppercase;
              background-clip: initial;
              background-image: initial;
              webkit-background-clip: initial;
            }
            .educate-text245 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-text246 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text15-elm1 {
              color: rgb(255, 255, 255);
              font-size: clamp(1.8rem, 48px, 2.8rem);
              font-style: italic;
              font-weight: 900;
              letter-spacing: -1px;
              text-transform: uppercase;
            }
            .educate-thq-text17-elm1 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text20-elm1 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text23-elm1 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text26-elm1 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text15-elm2 {
              color: rgb(255, 255, 255);
              font-size: clamp(1.8rem, 48px, 2.8rem);
              font-style: italic;
              font-weight: 900;
              letter-spacing: -1px;
              text-transform: uppercase;
            }
            .educate-thq-text17-elm2 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text18-elm2 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text17-elm3 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text18-elm3 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text20-elm2 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text21-elm2 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text23-elm2 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text24-elm2 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text26-elm2 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text27-elm2 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text15-elm3 {
              color: rgb(255, 255, 255);
              font-size: clamp(1.8rem, 48px, 2.8rem);
              font-style: italic;
              font-weight: 900;
              letter-spacing: -1px;
              text-transform: uppercase;
            }
            .educate-thq-text17-elm4 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text18-elm4 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text17-elm5 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text18-elm5 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text20-elm3 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text21-elm3 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text23-elm3 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text24-elm3 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
            .educate-thq-text26-elm3 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
            .educate-thq-text27-elm3 {
              color: rgb(136, 136, 136);
              font-size: 0.82rem;
              line-height: 1.6;
            }
          }
          @media (max-width: 1200px) {
            .educate-text236 {
              color: rgb(255, 255, 255);
              font-size: 1.15rem;
              font-style: italic;
              font-weight: 900;
              line-height: 1.25;
              margin-bottom: 12px;
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .educate-container14 {
              grid-template-columns: repeat(2, 1fr);
            }
            .educate-thq-container14-elm1 {
              grid-template-columns: repeat(2, 1fr);
            }
            .educate-thq-container14-elm2 {
              grid-template-columns: repeat(2, 1fr);
            }
            .educate-thq-container14-elm3 {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 479px) {
            .educate-container14 {
              grid-template-columns: repeat(1, 1fr);
            }
            .educate-thq-container14-elm1 {
              grid-template-columns: repeat(1, 1fr);
            }
            .educate-thq-container14-elm3 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

export default Educate
