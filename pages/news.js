import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import HeaderComponent from '../components/header-component'
import Footer from '../components/footer'

const News = (props) => {
  return (
    <>
      <div className="news-container10">
        <Head>
          <title>News - Lighthearted Stable Ant</title>
          <meta property="og:title" content="News - Lighthearted Stable Ant" />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/news"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/news"
          />
        </Head>
        <HeaderComponent
          text={
            <Fragment>
              <span className="news-text100"> Press Enter to Search</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="news-text101">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="news-text102">FAIS</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="news-text103">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="news-text104">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="news-text105">
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
              <span className="news-text106">Community</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="news-text107">Events</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="news-text108">Media</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="news-text109">Movements</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="news-text110">News</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="news-text111">Resources</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="news-text112">Shop</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="news-text113">Get Involved</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="news-text114">Donate</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="news-text115"> Student Network</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="news-text116"> Programs</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="news-text117"> Upcoming</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="news-text118"> Shows</span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="news-text119"> Press</span>
            </Fragment>
          }
          text19={
            <Fragment>
              <span className="news-text120"> Our Method</span>
            </Fragment>
          }
          text20={
            <Fragment>
              <span className="news-text121"> Latest Headlines</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="news-text122"> Activism Toolkit</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="news-text123"> FAIS Store</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="news-text124"> Take Action</span>
            </Fragment>
          }
          text24={
            <Fragment>
              <span className="news-text125">Chapters</span>
            </Fragment>
          }
          text25={
            <Fragment>
              <span className="news-text126">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text26={
            <Fragment>
              <span className="news-text127">Summit</span>
            </Fragment>
          }
          text27={
            <Fragment>
              <span className="news-text128">Join a Chapter</span>
            </Fragment>
          }
          text28={
            <Fragment>
              <span className="news-text129">High School</span>
            </Fragment>
          }
          text29={
            <Fragment>
              <span className="news-text130">College</span>
            </Fragment>
          }
          text30={
            <Fragment>
              <span className="news-text131">National Summit 2026</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="news-text132">Upcoming</span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="news-text133">Upcoming</span>
            </Fragment>
          }
          text33={
            <Fragment>
              <span className="news-text134">Press Inquiries</span>
            </Fragment>
          }
          text34={
            <Fragment>
              <span className="news-text135">Media Kit</span>
            </Fragment>
          }
          text35={
            <Fragment>
              <span className="news-text136">F</span>
            </Fragment>
          }
          text36={
            <Fragment>
              <span className="news-text137"> — Find</span>
            </Fragment>
          }
          text37={
            <Fragment>
              <span className="news-text138">A</span>
            </Fragment>
          }
          text38={
            <Fragment>
              <span className="news-text139"> — Assess</span>
            </Fragment>
          }
          text39={
            <Fragment>
              <span className="news-text140">I</span>
            </Fragment>
          }
          text40={
            <Fragment>
              <span className="news-text141"> — Initiate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="news-text142">S</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="news-text143"> — Solution</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="news-text144">Parents</span>
            </Fragment>
          }
          text44={
            <Fragment>
              <span className="news-text145">Students</span>
            </Fragment>
          }
          text45={
            <Fragment>
              <span className="news-text146">Educators</span>
            </Fragment>
          }
          text46={
            <Fragment>
              <span className="news-text147">Reporting</span>
            </Fragment>
          }
          text47={
            <Fragment>
              <span className="news-text148">Apparel</span>
            </Fragment>
          }
          text48={
            <Fragment>
              <span className="news-text149">Gear</span>
            </Fragment>
          }
          text49={
            <Fragment>
              <span className="news-text150">Volunteer</span>
            </Fragment>
          }
          text50={
            <Fragment>
              <span className="news-text151">Partner with Us</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="news-text152">Culture Apothecary</span>
            </Fragment>
          }
          text52={
            <Fragment>
              <span className="news-text153">Education Watch</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="news-text154">School Safety Initiatives</span>
            </Fragment>
          }
          text54={
            <Fragment>
              <span className="news-text155">Educational Expansion</span>
            </Fragment>
          }
          text55={
            <Fragment>
              <span className="news-text156">Transparency Envoy</span>
            </Fragment>
          }
          text56={
            <Fragment>
              <span className="news-text157">Parent Playbook</span>
            </Fragment>
          }
          text57={
            <Fragment>
              <span className="news-text158">Student Rights</span>
            </Fragment>
          }
          text58={
            <Fragment>
              <span className="news-text159">Educator Resources</span>
            </Fragment>
          }
          text59={
            <Fragment>
              <span className="news-text160">Incident Portal</span>
            </Fragment>
          }
          text60={
            <Fragment>
              <span className="news-text161">About</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="news-text162">Features</span>
            </Fragment>
          }
          text62={
            <Fragment>
              <span className="news-text163">Pricing</span>
            </Fragment>
          }
          text63={
            <Fragment>
              <span className="news-text164">Team</span>
            </Fragment>
          }
          text64={
            <Fragment>
              <span className="news-text165">Blog</span>
            </Fragment>
          }
          text65={
            <Fragment>
              <span className="news-text166">About</span>
            </Fragment>
          }
          text66={
            <Fragment>
              <span className="news-text167">Features</span>
            </Fragment>
          }
          text67={
            <Fragment>
              <span className="news-text168">Pricing</span>
            </Fragment>
          }
          text68={
            <Fragment>
              <span className="news-text169">Team</span>
            </Fragment>
          }
          text69={
            <Fragment>
              <span className="news-text170">Blog</span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="news-text171">Media</span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="news-text172">Movements</span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="news-text173">News</span>
            </Fragment>
          }
          text101={
            <Fragment>
              <span className="news-text174">Resources</span>
            </Fragment>
          }
          text110={
            <Fragment>
              <span className="news-text175">FAIS</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="news-text176">Shop</span>
            </Fragment>
          }
          text121={
            <Fragment>
              <span className="news-text177">Get Involved</span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="news-text178">Donate</span>
            </Fragment>
          }
          text141={
            <Fragment>
              <span className="news-text179"> Student Network</span>
            </Fragment>
          }
          text151={
            <Fragment>
              <span className="news-text180"> Programs</span>
            </Fragment>
          }
          text161={
            <Fragment>
              <span className="news-text181"> Upcoming</span>
            </Fragment>
          }
          text171={
            <Fragment>
              <span className="news-text182"> Shows</span>
            </Fragment>
          }
          text181={
            <Fragment>
              <span className="news-text183"> Press</span>
            </Fragment>
          }
          text191={
            <Fragment>
              <span className="news-text184"> Our Method</span>
            </Fragment>
          }
          text201={
            <Fragment>
              <span className="news-text185"> Latest Headlines</span>
            </Fragment>
          }
          text210={
            <Fragment>
              <span className="news-text186">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="news-text187"> Activism Toolkit</span>
            </Fragment>
          }
          text221={
            <Fragment>
              <span className="news-text188"> FAIS Store</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="news-text189"> Take Action</span>
            </Fragment>
          }
          text241={
            <Fragment>
              <span className="news-text190">Chapters</span>
            </Fragment>
          }
          text251={
            <Fragment>
              <span className="news-text191">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text261={
            <Fragment>
              <span className="news-text192">Summit</span>
            </Fragment>
          }
          text271={
            <Fragment>
              <span className="news-text193">Join a Chapter</span>
            </Fragment>
          }
          text281={
            <Fragment>
              <span className="news-text194">High School</span>
            </Fragment>
          }
          text291={
            <Fragment>
              <span className="news-text195">College</span>
            </Fragment>
          }
          text301={
            <Fragment>
              <span className="news-text196">National Summit 2026</span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="news-text197">Upcoming</span>
            </Fragment>
          }
          text321={
            <Fragment>
              <span className="news-text198">Upcoming</span>
            </Fragment>
          }
          text331={
            <Fragment>
              <span className="news-text199">Press Inquiries</span>
            </Fragment>
          }
          text341={
            <Fragment>
              <span className="news-text200">Media Kit</span>
            </Fragment>
          }
          text351={
            <Fragment>
              <span className="news-text201">F</span>
            </Fragment>
          }
          text361={
            <Fragment>
              <span className="news-text202"> — Find</span>
            </Fragment>
          }
          text371={
            <Fragment>
              <span className="news-text203">A</span>
            </Fragment>
          }
          text381={
            <Fragment>
              <span className="news-text204"> — Assess</span>
            </Fragment>
          }
          text391={
            <Fragment>
              <span className="news-text205">I</span>
            </Fragment>
          }
          text401={
            <Fragment>
              <span className="news-text206"> — Initiate</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="news-text207">S</span>
            </Fragment>
          }
          text421={
            <Fragment>
              <span className="news-text208"> — Solution</span>
            </Fragment>
          }
          text431={
            <Fragment>
              <span className="news-text209">Parents</span>
            </Fragment>
          }
          text441={
            <Fragment>
              <span className="news-text210">Students</span>
            </Fragment>
          }
          text451={
            <Fragment>
              <span className="news-text211">Educators</span>
            </Fragment>
          }
          text461={
            <Fragment>
              <span className="news-text212">Reporting</span>
            </Fragment>
          }
          text471={
            <Fragment>
              <span className="news-text213">Apparel</span>
            </Fragment>
          }
          text481={
            <Fragment>
              <span className="news-text214">Gear</span>
            </Fragment>
          }
          text491={
            <Fragment>
              <span className="news-text215">Volunteer</span>
            </Fragment>
          }
          text501={
            <Fragment>
              <span className="news-text216">Partner with Us</span>
            </Fragment>
          }
          text510={
            <Fragment>
              <span className="news-text217">Community</span>
            </Fragment>
          }
          text511={
            <Fragment>
              <span className="news-text218">Culture Apothecary</span>
            </Fragment>
          }
          text521={
            <Fragment>
              <span className="news-text219">Education Watch</span>
            </Fragment>
          }
          text531={
            <Fragment>
              <span className="news-text220">School Safety Initiatives</span>
            </Fragment>
          }
          text541={
            <Fragment>
              <span className="news-text221">Educational Expansion</span>
            </Fragment>
          }
          text551={
            <Fragment>
              <span className="news-text222">Transparency Envoy</span>
            </Fragment>
          }
          text561={
            <Fragment>
              <span className="news-text223">Parent Playbook</span>
            </Fragment>
          }
          text571={
            <Fragment>
              <span className="news-text224">Student Rights</span>
            </Fragment>
          }
          text581={
            <Fragment>
              <span className="news-text225">Educator Resources</span>
            </Fragment>
          }
          text591={
            <Fragment>
              <span className="news-text226">Incident Portal</span>
            </Fragment>
          }
          text610={
            <Fragment>
              <span className="news-text227">Events</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="news-text228">Register</span>
            </Fragment>
          }
          rootClassName="header-componentroot-class-name3"
        ></HeaderComponent>
        <section className="news-thq-news-elm">
          <div className="news-container11">
            <div className="news-container12">
              <div>
                <span className="news-text229">Latest</span>
                <h2 className="news-text230"> News</h2>
              </div>
              <a href="#" className="news-link1">
                <div className="news-container14">
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
            <div className="news-container15">
              <a href="#">
                <div className="news-container16">
                  <div className="news-container17">
                    <span className="news-text232">
                      Community — Jan 26, 2026
                    </span>
                    <img
                      alt="News 1"
                      src="https://images.unsplash.com/photo-1544531585-9837b9884657&amp;w=1300"
                      className="news-image1"
                    />
                  </div>
                  <h3 className="news-text233">
                    {' '}
                    Bilateral Support for New School Safety Initiatives
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="news-container18">
                  <div className="news-container19">
                    <span className="news-text234">
                      Education — Jan 26, 2026
                    </span>
                    <img
                      alt="News 2"
                      src="https://images.unsplash.com/photo-1761839259946-2d80f8e72e18?ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHx8fDE3NzI4MjE5MDV8&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="news-image2"
                    />
                  </div>
                  <h3 className="news-text235">
                    {' '}
                    Educational Exchange Programs Expanded for 2026
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="news-container20">
                  <div className="news-container21">
                    <span className="news-text236">
                      Advocacy — Jan 26, 2026
                    </span>
                    <img
                      alt="News 3"
                      src="https://images.unsplash.com/photo-1769745836625-4cac1ba455a4?ixid=M3w5MTMyMXwwfDF8YWxsfDN8fHx8fHx8fDE3NzI4MjE5MDV8&amp;ixlib=rb-4.1.0&amp;w=1300"
                      className="news-image3"
                    />
                  </div>
                  <h3 className="news-text237">
                    {' '}
                    Envoy Visits Jerusalem for Transparency
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="news-container22">
                  <div className="news-container23">
                    <span className="news-text238">
                      Technology — Jan 26, 2026
                    </span>
                    <img
                      alt="News 4"
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b&amp;w=1300"
                      className="news-image4"
                    />
                  </div>
                  <h3 className="news-text239">
                    {' '}
                    Tech Partnership Forged Between Tel Aviv and US Schools
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="news-container24">
                  <div className="news-container25">
                    <span className="news-text240">
                      Community — Jan 26, 2026
                    </span>
                    <img
                      alt="News 5"
                      src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620&amp;w=1300"
                      className="news-image5"
                    />
                  </div>
                  <h3 className="news-text241">
                    {' '}
                    Community Leaders Rally Against Campus Bias in NY
                  </h3>
                </div>
              </a>
              <a href="#">
                <div className="news-container26">
                  <div className="news-container27">
                    <span className="news-text242">Policy — Jan 26, 2026</span>
                    <img
                      alt="News 6"
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655&amp;w=1300"
                      className="news-image6"
                    />
                  </div>
                  <h3 className="news-text243">
                    {' '}
                    FAIS Presents Classroom Findings to Congress
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>
        <Footer
          text={
            <Fragment>
              <span className="news-text244">
                Fighting Antisemitism in Schools (FAIS) is a nationwide movement
                dedicated to identifying and combating bias in our educational
                systems through transparency and community action.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="news-text245">
                &amp;copy; 2026 Fighting Antisemitism in Schools (FAIS). All
                Rights Reserved.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="news-text246">FAIS</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="news-text247">Home</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="news-text248">Resources</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="news-text249">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="news-text250">Get Involved</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="news-text251">Report Incident</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="news-text252">Donate</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="news-text253">Privacy Policy</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="news-text254">Terms of Use</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="news-text255">Explore</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="news-text256">Take Action</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="news-text257">Legal</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name4"
        ></Footer>
      </div>
      <style jsx>
        {`
          .news-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .news-text100 {
            display: inline-block;
          }
          .news-text101 {
            display: inline-block;
          }
          .news-text102 {
            display: inline-block;
          }
          .news-text103 {
            display: inline-block;
          }
          .news-text104 {
            display: inline-block;
          }
          .news-text105 {
            display: inline-block;
          }
          .news-text106 {
            display: inline-block;
          }
          .news-text107 {
            display: inline-block;
          }
          .news-text108 {
            display: inline-block;
          }
          .news-text109 {
            display: inline-block;
          }
          .news-text110 {
            display: inline-block;
          }
          .news-text111 {
            display: inline-block;
          }
          .news-text112 {
            display: inline-block;
          }
          .news-text113 {
            display: inline-block;
          }
          .news-text114 {
            display: inline-block;
          }
          .news-text115 {
            display: inline-block;
          }
          .news-text116 {
            display: inline-block;
          }
          .news-text117 {
            display: inline-block;
          }
          .news-text118 {
            display: inline-block;
          }
          .news-text119 {
            display: inline-block;
          }
          .news-text120 {
            display: inline-block;
          }
          .news-text121 {
            display: inline-block;
          }
          .news-text122 {
            display: inline-block;
          }
          .news-text123 {
            display: inline-block;
          }
          .news-text124 {
            display: inline-block;
          }
          .news-text125 {
            display: inline-block;
          }
          .news-text126 {
            display: inline-block;
          }
          .news-text127 {
            display: inline-block;
          }
          .news-text128 {
            display: inline-block;
          }
          .news-text129 {
            display: inline-block;
          }
          .news-text130 {
            display: inline-block;
          }
          .news-text131 {
            display: inline-block;
          }
          .news-text132 {
            display: inline-block;
          }
          .news-text133 {
            display: inline-block;
          }
          .news-text134 {
            display: inline-block;
          }
          .news-text135 {
            display: inline-block;
          }
          .news-text136 {
            display: inline-block;
          }
          .news-text137 {
            display: inline-block;
          }
          .news-text138 {
            display: inline-block;
          }
          .news-text139 {
            display: inline-block;
          }
          .news-text140 {
            display: inline-block;
          }
          .news-text141 {
            display: inline-block;
          }
          .news-text142 {
            display: inline-block;
          }
          .news-text143 {
            display: inline-block;
          }
          .news-text144 {
            display: inline-block;
          }
          .news-text145 {
            display: inline-block;
          }
          .news-text146 {
            display: inline-block;
          }
          .news-text147 {
            display: inline-block;
          }
          .news-text148 {
            display: inline-block;
          }
          .news-text149 {
            display: inline-block;
          }
          .news-text150 {
            display: inline-block;
          }
          .news-text151 {
            display: inline-block;
          }
          .news-text152 {
            display: inline-block;
          }
          .news-text153 {
            display: inline-block;
          }
          .news-text154 {
            display: inline-block;
          }
          .news-text155 {
            display: inline-block;
          }
          .news-text156 {
            display: inline-block;
          }
          .news-text157 {
            display: inline-block;
          }
          .news-text158 {
            display: inline-block;
          }
          .news-text159 {
            display: inline-block;
          }
          .news-text160 {
            display: inline-block;
          }
          .news-text161 {
            display: inline-block;
          }
          .news-text162 {
            display: inline-block;
          }
          .news-text163 {
            display: inline-block;
          }
          .news-text164 {
            display: inline-block;
          }
          .news-text165 {
            display: inline-block;
          }
          .news-text166 {
            display: inline-block;
          }
          .news-text167 {
            display: inline-block;
          }
          .news-text168 {
            display: inline-block;
          }
          .news-text169 {
            display: inline-block;
          }
          .news-text170 {
            display: inline-block;
          }
          .news-text171 {
            display: inline-block;
          }
          .news-text172 {
            display: inline-block;
          }
          .news-text173 {
            display: inline-block;
          }
          .news-text174 {
            display: inline-block;
          }
          .news-text175 {
            display: inline-block;
          }
          .news-text176 {
            display: inline-block;
          }
          .news-text177 {
            display: inline-block;
          }
          .news-text178 {
            display: inline-block;
          }
          .news-text179 {
            display: inline-block;
          }
          .news-text180 {
            display: inline-block;
          }
          .news-text181 {
            display: inline-block;
          }
          .news-text182 {
            display: inline-block;
          }
          .news-text183 {
            display: inline-block;
          }
          .news-text184 {
            display: inline-block;
          }
          .news-text185 {
            display: inline-block;
          }
          .news-text186 {
            display: inline-block;
          }
          .news-text187 {
            display: inline-block;
          }
          .news-text188 {
            display: inline-block;
          }
          .news-text189 {
            display: inline-block;
          }
          .news-text190 {
            display: inline-block;
          }
          .news-text191 {
            display: inline-block;
          }
          .news-text192 {
            display: inline-block;
          }
          .news-text193 {
            display: inline-block;
          }
          .news-text194 {
            display: inline-block;
          }
          .news-text195 {
            display: inline-block;
          }
          .news-text196 {
            display: inline-block;
          }
          .news-text197 {
            display: inline-block;
          }
          .news-text198 {
            display: inline-block;
          }
          .news-text199 {
            display: inline-block;
          }
          .news-text200 {
            display: inline-block;
          }
          .news-text201 {
            display: inline-block;
          }
          .news-text202 {
            display: inline-block;
          }
          .news-text203 {
            display: inline-block;
          }
          .news-text204 {
            display: inline-block;
          }
          .news-text205 {
            display: inline-block;
          }
          .news-text206 {
            display: inline-block;
          }
          .news-text207 {
            display: inline-block;
          }
          .news-text208 {
            display: inline-block;
          }
          .news-text209 {
            display: inline-block;
          }
          .news-text210 {
            display: inline-block;
          }
          .news-text211 {
            display: inline-block;
          }
          .news-text212 {
            display: inline-block;
          }
          .news-text213 {
            display: inline-block;
          }
          .news-text214 {
            display: inline-block;
          }
          .news-text215 {
            display: inline-block;
          }
          .news-text216 {
            display: inline-block;
          }
          .news-text217 {
            display: inline-block;
          }
          .news-text218 {
            display: inline-block;
          }
          .news-text219 {
            display: inline-block;
          }
          .news-text220 {
            display: inline-block;
          }
          .news-text221 {
            display: inline-block;
          }
          .news-text222 {
            display: inline-block;
          }
          .news-text223 {
            display: inline-block;
          }
          .news-text224 {
            display: inline-block;
          }
          .news-text225 {
            display: inline-block;
          }
          .news-text226 {
            display: inline-block;
          }
          .news-text227 {
            display: inline-block;
          }
          .news-text228 {
            display: inline-block;
          }
          .news-thq-news-elm {
            width: 100%;
            padding: 80px 0;
            background: #fff;
            margin-top: var(--dl-layout-space-fiveunits);
            font-family: 'Poppins', sans-serif;
          }
          .news-container11 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .news-container12 {
            gap: 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .news-text229 {
            color: #e31b23;
            display: block;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 8px;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
          .news-text230 {
            color: #000;
            font-size: clamp(2rem, 3vw, 2.6rem);
            font-style: italic;
            font-weight: 900;
            letter-spacing: -1px;
            text-transform: uppercase;
          }
          .news-link1 {
            display: contents;
          }
          .news-container14 {
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
          .news-container15 {
            gap: 28px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .news-container16 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .news-container17 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .news-text232 {
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
          .news-image1 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .news-text233 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .news-container18 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .news-container19 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .news-text234 {
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
          .news-image2 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .news-text235 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .news-container20 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .news-container21 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .news-text236 {
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
          .news-image3 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .news-text237 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .news-container22 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .news-container23 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .news-text238 {
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
          .news-image4 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .news-text239 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .news-container24 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .news-container25 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .news-text240 {
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
          .news-image5 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .news-text241 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .news-container26 {
            color: inherit;
            display: block;
            text-decoration: none;
          }
          .news-container27 {
            overflow: hidden;
            position: relative;
            background: #eee;
            border-radius: 12px;
            margin-bottom: 18px;
            padding-bottom: 62%;
          }
          .news-text242 {
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
          .news-image6 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .news-text243 {
            color: #000;
            font-size: 1.25rem;
            font-style: italic;
            font-weight: 800;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .news-text244 {
            display: inline-block;
          }
          .news-text245 {
            display: inline-block;
          }
          .news-text246 {
            display: inline-block;
          }
          .news-text247 {
            display: inline-block;
          }
          .news-text248 {
            display: inline-block;
          }
          .news-text249 {
            display: inline-block;
          }
          .news-text250 {
            display: inline-block;
          }
          .news-text251 {
            display: inline-block;
          }
          .news-text252 {
            display: inline-block;
          }
          .news-text253 {
            display: inline-block;
          }
          .news-text254 {
            display: inline-block;
          }
          .news-text255 {
            display: inline-block;
          }
          .news-text256 {
            display: inline-block;
          }
          .news-text257 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .news-container15 {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 479px) {
            .news-container15 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

export default News
