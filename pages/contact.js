import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import HeaderComponent from '../components/header-component'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container10">
        <Head>
          <title>Contact - Lighthearted Stable Ant</title>
          <meta
            property="og:title"
            content="Contact - Lighthearted Stable Ant"
          />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/contact"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/contact"
          />
        </Head>
        <HeaderComponent
          text={
            <Fragment>
              <span className="contact-text100"> Press Enter to Search</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="contact-text101">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contact-text102">FAIS</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contact-text103">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contact-text104">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contact-text105">
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
              <span className="contact-text106">Community</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="contact-text107">Events</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="contact-text108">Media</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="contact-text109">Movements</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="contact-text110">News</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="contact-text111">Resources</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="contact-text112">Shop</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="contact-text113">Get Involved</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="contact-text114">Donate</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="contact-text115"> Student Network</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="contact-text116"> Programs</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="contact-text117"> Upcoming</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="contact-text118"> Shows</span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="contact-text119"> Press</span>
            </Fragment>
          }
          text19={
            <Fragment>
              <span className="contact-text120"> Our Method</span>
            </Fragment>
          }
          text20={
            <Fragment>
              <span className="contact-text121"> Latest Headlines</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="contact-text122"> Activism Toolkit</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="contact-text123"> FAIS Store</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="contact-text124"> Take Action</span>
            </Fragment>
          }
          text24={
            <Fragment>
              <span className="contact-text125">Chapters</span>
            </Fragment>
          }
          text25={
            <Fragment>
              <span className="contact-text126">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text26={
            <Fragment>
              <span className="contact-text127">Summit</span>
            </Fragment>
          }
          text27={
            <Fragment>
              <span className="contact-text128">Join a Chapter</span>
            </Fragment>
          }
          text28={
            <Fragment>
              <span className="contact-text129">High School</span>
            </Fragment>
          }
          text29={
            <Fragment>
              <span className="contact-text130">College</span>
            </Fragment>
          }
          text30={
            <Fragment>
              <span className="contact-text131">National Summit 2026</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="contact-text132">Upcoming</span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="contact-text133">Upcoming</span>
            </Fragment>
          }
          text33={
            <Fragment>
              <span className="contact-text134">Press Inquiries</span>
            </Fragment>
          }
          text34={
            <Fragment>
              <span className="contact-text135">Media Kit</span>
            </Fragment>
          }
          text35={
            <Fragment>
              <span className="contact-text136">F</span>
            </Fragment>
          }
          text36={
            <Fragment>
              <span className="contact-text137"> — Find</span>
            </Fragment>
          }
          text37={
            <Fragment>
              <span className="contact-text138">A</span>
            </Fragment>
          }
          text38={
            <Fragment>
              <span className="contact-text139"> — Assess</span>
            </Fragment>
          }
          text39={
            <Fragment>
              <span className="contact-text140">I</span>
            </Fragment>
          }
          text40={
            <Fragment>
              <span className="contact-text141"> — Initiate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="contact-text142">S</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="contact-text143"> — Solution</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="contact-text144">Parents</span>
            </Fragment>
          }
          text44={
            <Fragment>
              <span className="contact-text145">Students</span>
            </Fragment>
          }
          text45={
            <Fragment>
              <span className="contact-text146">Educators</span>
            </Fragment>
          }
          text46={
            <Fragment>
              <span className="contact-text147">Reporting</span>
            </Fragment>
          }
          text47={
            <Fragment>
              <span className="contact-text148">Apparel</span>
            </Fragment>
          }
          text48={
            <Fragment>
              <span className="contact-text149">Gear</span>
            </Fragment>
          }
          text49={
            <Fragment>
              <span className="contact-text150">Volunteer</span>
            </Fragment>
          }
          text50={
            <Fragment>
              <span className="contact-text151">Partner with Us</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="contact-text152">Culture Apothecary</span>
            </Fragment>
          }
          text52={
            <Fragment>
              <span className="contact-text153">Education Watch</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="contact-text154">School Safety Initiatives</span>
            </Fragment>
          }
          text54={
            <Fragment>
              <span className="contact-text155">Educational Expansion</span>
            </Fragment>
          }
          text55={
            <Fragment>
              <span className="contact-text156">Transparency Envoy</span>
            </Fragment>
          }
          text56={
            <Fragment>
              <span className="contact-text157">Parent Playbook</span>
            </Fragment>
          }
          text57={
            <Fragment>
              <span className="contact-text158">Student Rights</span>
            </Fragment>
          }
          text58={
            <Fragment>
              <span className="contact-text159">Educator Resources</span>
            </Fragment>
          }
          text59={
            <Fragment>
              <span className="contact-text160">Incident Portal</span>
            </Fragment>
          }
          text60={
            <Fragment>
              <span className="contact-text161">About</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="contact-text162">Features</span>
            </Fragment>
          }
          text62={
            <Fragment>
              <span className="contact-text163">Pricing</span>
            </Fragment>
          }
          text63={
            <Fragment>
              <span className="contact-text164">Team</span>
            </Fragment>
          }
          text64={
            <Fragment>
              <span className="contact-text165">Blog</span>
            </Fragment>
          }
          text65={
            <Fragment>
              <span className="contact-text166">About</span>
            </Fragment>
          }
          text66={
            <Fragment>
              <span className="contact-text167">Features</span>
            </Fragment>
          }
          text67={
            <Fragment>
              <span className="contact-text168">Pricing</span>
            </Fragment>
          }
          text68={
            <Fragment>
              <span className="contact-text169">Team</span>
            </Fragment>
          }
          text69={
            <Fragment>
              <span className="contact-text170">Blog</span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="contact-text171">Media</span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="contact-text172">Movements</span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="contact-text173">News</span>
            </Fragment>
          }
          text101={
            <Fragment>
              <span className="contact-text174">Resources</span>
            </Fragment>
          }
          text110={
            <Fragment>
              <span className="contact-text175">FAIS</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="contact-text176">Shop</span>
            </Fragment>
          }
          text121={
            <Fragment>
              <span className="contact-text177">Get Involved</span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="contact-text178">Donate</span>
            </Fragment>
          }
          text141={
            <Fragment>
              <span className="contact-text179"> Student Network</span>
            </Fragment>
          }
          text151={
            <Fragment>
              <span className="contact-text180"> Programs</span>
            </Fragment>
          }
          text161={
            <Fragment>
              <span className="contact-text181"> Upcoming</span>
            </Fragment>
          }
          text171={
            <Fragment>
              <span className="contact-text182"> Shows</span>
            </Fragment>
          }
          text181={
            <Fragment>
              <span className="contact-text183"> Press</span>
            </Fragment>
          }
          text191={
            <Fragment>
              <span className="contact-text184"> Our Method</span>
            </Fragment>
          }
          text201={
            <Fragment>
              <span className="contact-text185"> Latest Headlines</span>
            </Fragment>
          }
          text210={
            <Fragment>
              <span className="contact-text186">
                Fighting Antisemitism in Schools
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="contact-text187"> Activism Toolkit</span>
            </Fragment>
          }
          text221={
            <Fragment>
              <span className="contact-text188"> FAIS Store</span>
            </Fragment>
          }
          text231={
            <Fragment>
              <span className="contact-text189"> Take Action</span>
            </Fragment>
          }
          text241={
            <Fragment>
              <span className="contact-text190">Chapters</span>
            </Fragment>
          }
          text251={
            <Fragment>
              <span className="contact-text191">
                Join over 3,500 chapters across the nation fighting for freedom.
              </span>
            </Fragment>
          }
          text261={
            <Fragment>
              <span className="contact-text192">Summit</span>
            </Fragment>
          }
          text271={
            <Fragment>
              <span className="contact-text193">Join a Chapter</span>
            </Fragment>
          }
          text281={
            <Fragment>
              <span className="contact-text194">High School</span>
            </Fragment>
          }
          text291={
            <Fragment>
              <span className="contact-text195">College</span>
            </Fragment>
          }
          text301={
            <Fragment>
              <span className="contact-text196">National Summit 2026</span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="contact-text197">Upcoming</span>
            </Fragment>
          }
          text321={
            <Fragment>
              <span className="contact-text198">Upcoming</span>
            </Fragment>
          }
          text331={
            <Fragment>
              <span className="contact-text199">Press Inquiries</span>
            </Fragment>
          }
          text341={
            <Fragment>
              <span className="contact-text200">Media Kit</span>
            </Fragment>
          }
          text351={
            <Fragment>
              <span className="contact-text201">F</span>
            </Fragment>
          }
          text361={
            <Fragment>
              <span className="contact-text202"> — Find</span>
            </Fragment>
          }
          text371={
            <Fragment>
              <span className="contact-text203">A</span>
            </Fragment>
          }
          text381={
            <Fragment>
              <span className="contact-text204"> — Assess</span>
            </Fragment>
          }
          text391={
            <Fragment>
              <span className="contact-text205">I</span>
            </Fragment>
          }
          text401={
            <Fragment>
              <span className="contact-text206"> — Initiate</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="contact-text207">S</span>
            </Fragment>
          }
          text421={
            <Fragment>
              <span className="contact-text208"> — Solution</span>
            </Fragment>
          }
          text431={
            <Fragment>
              <span className="contact-text209">Parents</span>
            </Fragment>
          }
          text441={
            <Fragment>
              <span className="contact-text210">Students</span>
            </Fragment>
          }
          text451={
            <Fragment>
              <span className="contact-text211">Educators</span>
            </Fragment>
          }
          text461={
            <Fragment>
              <span className="contact-text212">Reporting</span>
            </Fragment>
          }
          text471={
            <Fragment>
              <span className="contact-text213">Apparel</span>
            </Fragment>
          }
          text481={
            <Fragment>
              <span className="contact-text214">Gear</span>
            </Fragment>
          }
          text491={
            <Fragment>
              <span className="contact-text215">Volunteer</span>
            </Fragment>
          }
          text501={
            <Fragment>
              <span className="contact-text216">Partner with Us</span>
            </Fragment>
          }
          text510={
            <Fragment>
              <span className="contact-text217">Community</span>
            </Fragment>
          }
          text511={
            <Fragment>
              <span className="contact-text218">Culture Apothecary</span>
            </Fragment>
          }
          text521={
            <Fragment>
              <span className="contact-text219">Education Watch</span>
            </Fragment>
          }
          text531={
            <Fragment>
              <span className="contact-text220">School Safety Initiatives</span>
            </Fragment>
          }
          text541={
            <Fragment>
              <span className="contact-text221">Educational Expansion</span>
            </Fragment>
          }
          text551={
            <Fragment>
              <span className="contact-text222">Transparency Envoy</span>
            </Fragment>
          }
          text561={
            <Fragment>
              <span className="contact-text223">Parent Playbook</span>
            </Fragment>
          }
          text571={
            <Fragment>
              <span className="contact-text224">Student Rights</span>
            </Fragment>
          }
          text581={
            <Fragment>
              <span className="contact-text225">Educator Resources</span>
            </Fragment>
          }
          text591={
            <Fragment>
              <span className="contact-text226">Incident Portal</span>
            </Fragment>
          }
          text610={
            <Fragment>
              <span className="contact-text227">Events</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="contact-text228">Register</span>
            </Fragment>
          }
          rootClassName="header-componentroot-class-name"
        ></HeaderComponent>
        <section className="contact-thq-contact-form-elm">
          <div className="contact-container11">
            <div className="contact-container12">
              <div className="contact-container13">
                <h2 className="contact-text229"> Send a Message</h2>
                <form
                  id="faisContactForm"
                  action="https://formsubmit.co/info@fais-schools.org"
                  method="POST"
                  data-form-id="b7fef771-3061-4700-9181-c38d94c4468a"
                >
                  <div className="contact-container14">
                    <div className="contact-container15">
                      <label className="contact-text230">First Name</label>
                      <input
                        type="text"
                        id="thq_first_name_-7J2"
                        name="first_name"
                        required="true"
                        placeholder="First Name"
                        className="contact-textinput1"
                      />
                    </div>
                    <div className="contact-container16">
                      <label className="contact-text231">Last Name</label>
                      <input
                        type="text"
                        id="thq_last_name_FPan"
                        name="last_name"
                        required="true"
                        placeholder="Last Name"
                        className="contact-textinput2"
                      />
                    </div>
                  </div>
                  <div className="contact-container17">
                    <label className="contact-text232">Email Address</label>
                    <input
                      type="email"
                      id="thq_email_cWmb"
                      name="email"
                      required="true"
                      placeholder="email@example.com"
                      className="contact-textinput3"
                    />
                  </div>
                  <div className="contact-container18">
                    <label className="contact-text233">How can we help?</label>
                    <select
                      id="thq_inquiry_type_GuVv"
                      name="inquiry_type"
                      className="contact-select"
                    >
                      <option>General Inquiry</option>
                      <option>Start a Chapter</option>
                      <option>Educational Resources</option>
                      <option>Media &amp; Press</option>
                    </select>
                  </div>
                  <div className="contact-container19">
                    <label className="contact-text234">Message</label>
                    <textarea
                      id="thq_message_rgBt"
                      name="message"
                      placeholder="Describe how we can support you..."
                      className="contact-textarea"
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
                    className="contact-button"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="contact-container21">
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="contact-icon1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <h5 className="contact-text235"> Direct Email</h5>
                    <p className="contact-text236">info@fais-schools.org</p>
                  </div>
                </div>
                <div className="contact-container23">
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="contact-icon4"
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
                    <h5 className="contact-text237"> Connect</h5>
                    <p className="contact-text238">@FAIS_National</p>
                  </div>
                </div>
                <div className="contact-container25">
                  <h4 className="contact-text239"> Incident Reporting</h4>
                  <p className="contact-text240">
                    Report antisemitic bias or radicalism in your local school
                    district for review by our legal team.
                  </p>
                  <a href="report-an-incident.html">
                    <div className="contact-container26">
                      <span>Report Now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer
          text={
            <Fragment>
              <span className="contact-text242">
                Fighting Antisemitism in Schools (FAIS) is a nationwide movement
                dedicated to identifying and combating bias in our educational
                systems through transparency and community action.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contact-text243">
                &amp;copy; 2026 Fighting Antisemitism in Schools (FAIS). All
                Rights Reserved.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contact-text244">FAIS</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contact-text245">Home</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contact-text246">Resources</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="contact-text247">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="contact-text248">Get Involved</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="contact-text249">Report Incident</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="contact-text250">Donate</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="contact-text251">Privacy Policy</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="contact-text252">Terms of Use</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="contact-text253">Explore</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text254">Take Action</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="contact-text255">Legal</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
      <style jsx>
        {`
          .contact-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-text100 {
            display: inline-block;
          }
          .contact-text101 {
            display: inline-block;
          }
          .contact-text102 {
            display: inline-block;
          }
          .contact-text103 {
            display: inline-block;
          }
          .contact-text104 {
            display: inline-block;
          }
          .contact-text105 {
            display: inline-block;
          }
          .contact-text106 {
            display: inline-block;
          }
          .contact-text107 {
            display: inline-block;
          }
          .contact-text108 {
            display: inline-block;
          }
          .contact-text109 {
            display: inline-block;
          }
          .contact-text110 {
            display: inline-block;
          }
          .contact-text111 {
            display: inline-block;
          }
          .contact-text112 {
            display: inline-block;
          }
          .contact-text113 {
            display: inline-block;
          }
          .contact-text114 {
            display: inline-block;
          }
          .contact-text115 {
            display: inline-block;
          }
          .contact-text116 {
            display: inline-block;
          }
          .contact-text117 {
            display: inline-block;
          }
          .contact-text118 {
            display: inline-block;
          }
          .contact-text119 {
            display: inline-block;
          }
          .contact-text120 {
            display: inline-block;
          }
          .contact-text121 {
            display: inline-block;
          }
          .contact-text122 {
            display: inline-block;
          }
          .contact-text123 {
            display: inline-block;
          }
          .contact-text124 {
            display: inline-block;
          }
          .contact-text125 {
            display: inline-block;
          }
          .contact-text126 {
            display: inline-block;
          }
          .contact-text127 {
            display: inline-block;
          }
          .contact-text128 {
            display: inline-block;
          }
          .contact-text129 {
            display: inline-block;
          }
          .contact-text130 {
            display: inline-block;
          }
          .contact-text131 {
            display: inline-block;
          }
          .contact-text132 {
            display: inline-block;
          }
          .contact-text133 {
            display: inline-block;
          }
          .contact-text134 {
            display: inline-block;
          }
          .contact-text135 {
            display: inline-block;
          }
          .contact-text136 {
            display: inline-block;
          }
          .contact-text137 {
            display: inline-block;
          }
          .contact-text138 {
            display: inline-block;
          }
          .contact-text139 {
            display: inline-block;
          }
          .contact-text140 {
            display: inline-block;
          }
          .contact-text141 {
            display: inline-block;
          }
          .contact-text142 {
            display: inline-block;
          }
          .contact-text143 {
            display: inline-block;
          }
          .contact-text144 {
            display: inline-block;
          }
          .contact-text145 {
            display: inline-block;
          }
          .contact-text146 {
            display: inline-block;
          }
          .contact-text147 {
            display: inline-block;
          }
          .contact-text148 {
            display: inline-block;
          }
          .contact-text149 {
            display: inline-block;
          }
          .contact-text150 {
            display: inline-block;
          }
          .contact-text151 {
            display: inline-block;
          }
          .contact-text152 {
            display: inline-block;
          }
          .contact-text153 {
            display: inline-block;
          }
          .contact-text154 {
            display: inline-block;
          }
          .contact-text155 {
            display: inline-block;
          }
          .contact-text156 {
            display: inline-block;
          }
          .contact-text157 {
            display: inline-block;
          }
          .contact-text158 {
            display: inline-block;
          }
          .contact-text159 {
            display: inline-block;
          }
          .contact-text160 {
            display: inline-block;
          }
          .contact-text161 {
            display: inline-block;
          }
          .contact-text162 {
            display: inline-block;
          }
          .contact-text163 {
            display: inline-block;
          }
          .contact-text164 {
            display: inline-block;
          }
          .contact-text165 {
            display: inline-block;
          }
          .contact-text166 {
            display: inline-block;
          }
          .contact-text167 {
            display: inline-block;
          }
          .contact-text168 {
            display: inline-block;
          }
          .contact-text169 {
            display: inline-block;
          }
          .contact-text170 {
            display: inline-block;
          }
          .contact-text171 {
            display: inline-block;
          }
          .contact-text172 {
            display: inline-block;
          }
          .contact-text173 {
            display: inline-block;
          }
          .contact-text174 {
            display: inline-block;
          }
          .contact-text175 {
            display: inline-block;
          }
          .contact-text176 {
            display: inline-block;
          }
          .contact-text177 {
            display: inline-block;
          }
          .contact-text178 {
            display: inline-block;
          }
          .contact-text179 {
            display: inline-block;
          }
          .contact-text180 {
            display: inline-block;
          }
          .contact-text181 {
            display: inline-block;
          }
          .contact-text182 {
            display: inline-block;
          }
          .contact-text183 {
            display: inline-block;
          }
          .contact-text184 {
            display: inline-block;
          }
          .contact-text185 {
            display: inline-block;
          }
          .contact-text186 {
            display: inline-block;
          }
          .contact-text187 {
            display: inline-block;
          }
          .contact-text188 {
            display: inline-block;
          }
          .contact-text189 {
            display: inline-block;
          }
          .contact-text190 {
            display: inline-block;
          }
          .contact-text191 {
            display: inline-block;
          }
          .contact-text192 {
            display: inline-block;
          }
          .contact-text193 {
            display: inline-block;
          }
          .contact-text194 {
            display: inline-block;
          }
          .contact-text195 {
            display: inline-block;
          }
          .contact-text196 {
            display: inline-block;
          }
          .contact-text197 {
            display: inline-block;
          }
          .contact-text198 {
            display: inline-block;
          }
          .contact-text199 {
            display: inline-block;
          }
          .contact-text200 {
            display: inline-block;
          }
          .contact-text201 {
            display: inline-block;
          }
          .contact-text202 {
            display: inline-block;
          }
          .contact-text203 {
            display: inline-block;
          }
          .contact-text204 {
            display: inline-block;
          }
          .contact-text205 {
            display: inline-block;
          }
          .contact-text206 {
            display: inline-block;
          }
          .contact-text207 {
            display: inline-block;
          }
          .contact-text208 {
            display: inline-block;
          }
          .contact-text209 {
            display: inline-block;
          }
          .contact-text210 {
            display: inline-block;
          }
          .contact-text211 {
            display: inline-block;
          }
          .contact-text212 {
            display: inline-block;
          }
          .contact-text213 {
            display: inline-block;
          }
          .contact-text214 {
            display: inline-block;
          }
          .contact-text215 {
            display: inline-block;
          }
          .contact-text216 {
            display: inline-block;
          }
          .contact-text217 {
            display: inline-block;
          }
          .contact-text218 {
            display: inline-block;
          }
          .contact-text219 {
            display: inline-block;
          }
          .contact-text220 {
            display: inline-block;
          }
          .contact-text221 {
            display: inline-block;
          }
          .contact-text222 {
            display: inline-block;
          }
          .contact-text223 {
            display: inline-block;
          }
          .contact-text224 {
            display: inline-block;
          }
          .contact-text225 {
            display: inline-block;
          }
          .contact-text226 {
            display: inline-block;
          }
          .contact-text227 {
            display: inline-block;
          }
          .contact-text228 {
            display: inline-block;
          }
          .contact-thq-contact-form-elm {
            width: 100%;
            padding: 80px 0 100px;
            background: #f9f9f9;
            margin-top: 90px;
            font-family: 'Poppins', sans-serif;
          }
          .contact-container11 {
            margin: 0 auto;
            padding: 0 24px;
            max-width: 1240px;
          }
          .contact-container12 {
            gap: 56px;
            display: grid;
            align-items: start;
            grid-template-columns: 1.6fr 1fr;
          }
          .contact-container13 {
            padding: 52px;
            background: #fff;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
            border-radius: 18px;
          }
          .contact-text229 {
            color: #000;
            font-size: 2.1rem;
            font-style: italic;
            font-weight: 900;
            margin-bottom: 32px;
            text-transform: uppercase;
          }
          .contact-container14 {
            gap: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .contact-container15 {
            margin-bottom: 22px;
          }
          .contact-text230 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .contact-textinput1 {
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
          .contact-container16 {
            margin-bottom: 22px;
          }
          .contact-text231 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .contact-textinput2 {
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
          .contact-container17 {
            margin-bottom: 22px;
          }
          .contact-text232 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .contact-textinput3 {
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
          .contact-container18 {
            margin-bottom: 22px;
          }
          .contact-text233 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .contact-select {
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
          .contact-container19 {
            margin-bottom: 22px;
          }
          .contact-text234 {
            color: #999;
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            margin-bottom: 9px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .contact-textarea {
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
          .contact-button {
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
          .contact-container21 {
            gap: 18px;
            display: flex;
            padding: 24px;
            background: #fff;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            border-left: 4px solid #e31b23;
            border-radius: 14px;
            margin-bottom: 18px;
          }
          .contact-icon1 {
            color: #e31b23;
            margin-top: 2px;
            flex-shrink: 0;
          }
          .contact-text235 {
            color: #e31b23;
            margin: 0 0 4px;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
          }
          .contact-text236 {
            color: #000;
            margin: 0;
            font-size: 0.9rem;
            font-weight: 600;
          }
          .contact-container23 {
            gap: 18px;
            display: flex;
            padding: 24px;
            background: #fff;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            border-left: 4px solid #e31b23;
            border-radius: 14px;
            margin-bottom: 18px;
          }
          .contact-icon4 {
            color: #e31b23;
            margin-top: 2px;
            flex-shrink: 0;
          }
          .contact-text237 {
            color: #e31b23;
            margin: 0 0 4px;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
          }
          .contact-text238 {
            color: #000;
            margin: 0;
            font-size: 0.9rem;
            font-weight: 600;
          }
          .contact-container25 {
            color: #fff;
            padding: 36px;
            background: #000;
            margin-top: 24px;
            border-radius: 16px;
          }
          .contact-text239 {
            color: #e31b23;
            font-size: 1.4rem;
            font-style: italic;
            font-weight: 900;
            margin-bottom: 10px;
            text-transform: uppercase;
          }
          .contact-text240 {
            color: #aaa;
            font-size: 0.88rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          .contact-container26 {
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
          .contact-text242 {
            display: inline-block;
          }
          .contact-text243 {
            display: inline-block;
          }
          .contact-text244 {
            display: inline-block;
          }
          .contact-text245 {
            display: inline-block;
          }
          .contact-text246 {
            display: inline-block;
          }
          .contact-text247 {
            display: inline-block;
          }
          .contact-text248 {
            display: inline-block;
          }
          .contact-text249 {
            display: inline-block;
          }
          .contact-text250 {
            display: inline-block;
          }
          .contact-text251 {
            display: inline-block;
          }
          .contact-text252 {
            display: inline-block;
          }
          .contact-text253 {
            display: inline-block;
          }
          .contact-text254 {
            display: inline-block;
          }
          .contact-text255 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .contact-container12 {
              display: block;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
