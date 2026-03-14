import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Footer from '../components/footer'

const HighSchoolPrograms = (props) => {
  return (
    <>
      <div className="high-school-programs-container1">
        <Head>
          <title>High-School-Programs - Lighthearted Stable Ant</title>
          <meta
            property="og:title"
            content="High-School-Programs - Lighthearted Stable Ant"
          />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/high-school-programs"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/high-school-programs"
          />
        </Head>
        <section className="page-hero-section hero-section">
          <div className="hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/7971031/7971031-hd_1280_720_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/7971031/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline="true"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="page-hero-label hero-label">
              <span>High School Leadership Program</span>
            </div>
            <h1 className="hero-title page-hero-title">
              Empowering the Next Generation of Advocates
            </h1>
            <p className="hero-subtext page-hero-subtext">
              Join our weekly Zoom meetings to discuss antisemitism in the US,
              geopolitics, and general politics. We recruit passionate high
              schoolers to lead the conversation and combat hate through
              education and action.
            </p>
            <div className="hero-cta-group">
              <a href="#apply">
                <div className="hero-button-primary">
                  <span>Apply Now</span>
                </div>
              </a>
              <a href="#program-details">
                <div className="hero-button-secondary">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </section>
        <section id="program-details" className="program-topics-section">
          <div className="page-container container">
            <div className="page-section-header">
              <h2 className="section-title">Weekly Deep-Dive Topics</h2>
              <p className="section-subtitle">
                Our curriculum is designed to give you a comprehensive
                understanding of the complex issues facing our world today.
              </p>
            </div>
            <div className="topics-grid">
              <div className="topic-card">
                <div className="topic-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="topic-name">Antisemitism in the US</h3>
                <p className="topic-description">
                  Analyzing the historical roots and modern manifestations of
                  antisemitism within domestic borders, and strategies to
                  address it.
                </p>
                <div className="topic-tag">
                  <span>Weekly Zoom</span>
                </div>
              </div>
              <div className="topic-card">
                <div className="topic-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="topic-name">Global Geopolitics</h3>
                <p className="topic-description">
                  Exploring the intersection of international relations,
                  regional conflicts, and how global events impact local
                  communities.
                </p>
                <div className="topic-tag">
                  <span>Strategic Analysis</span>
                </div>
              </div>
              <div className="topic-card">
                <div className="topic-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="topic-name">General Politics</h3>
                <p className="topic-description">
                  Understanding the political landscape, policy-making
                  processes, and how young leaders can influence the future of
                  governance.
                </p>
                <div className="topic-tag">
                  <span>Civic Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="goals-impact-section">
          <div className="page-container container">
            <div className="impact-layout">
              <div className="impact-content">
                <h2 className="impact-title">Become a Voice for Change</h2>
                <p className="impact-text">
                  Our goal is to empower you to host numerous info sessions at
                  your own school. We don&apos;t just provide information; we
                  give you the platform and the tools to lead.
                </p>
                <div className="impact-features">
                  <div className="impact-item">
                    <div className="impact-icon-small">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m3 11 18-5v12L3 14v-3z"></path>
                        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>Public Speaking Mastery</h4>
                      <p>
                        Professional training to help you speak confidently in
                        front of large audiences and peers.
                      </p>
                    </div>
                  </div>
                  <div className="impact-item">
                    <div className="impact-icon-small">
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                        <path d="M8 7h6"></path>
                        <path d="M8 11h8"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>School Info Sessions</h4>
                      <p>
                        Learn how to organize, promote, and lead educational
                        workshops within your school community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="impact-visual">
                <div className="visual-card-stack">
                  <div className="card-top visual-card">
                    <img
                      alt="Student leading a discussion"
                      src="https://images.pexels.com/photos/8617950/pexels-photo-8617950.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                  <div className="card-bottom visual-card">
                    <img
                      alt="Modern classroom environment"
                      src="https://images.pexels.com/photos/8423005/pexels-photo-8423005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="apply" className="cta-section">
          <div className="cta-background-pattern"></div>
          <div className="page-container container">
            <div className="cta-box">
              <h2 className="cta-heading">Ready to Lead the Conversation?</h2>
              <p className="cta-paragraph">
                Join our next weekly Zoom meeting and start your journey as a
                student advocate. Applications for the upcoming semester are now
                open.
              </p>
              <div className="cta-actions">
                <button className="cta-button-main">
                  Apply for the Program
                </button>
                <p className="cta-note">
                  Weekly meetings every Wednesday at 6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="high-school-programs-container4">
          <div className="high-school-programs-container5">
            <Script
              html={`<style>
        @keyframes heroFadeIn {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes scrollWheel {0% {transform: translateX(-50%) translateY(0);
opacity: 1;}
100% {transform: translateX(-50%) translateY(20px);
opacity: 0;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="high-school-programs-container6">
          <div className="high-school-programs-container7">
            <Script
              html={`<script defer data-name="high-school-programs-scripts">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    // Parallax effect for the impact section visual cards
    const impactSection = document.querySelector(".goals-impact-section")
    const cardTop = document.querySelector(".card-top")
    const cardBottom = document.querySelector(".card-bottom")

    if (impactSection && cardTop && cardBottom) {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset
        const sectionOffset = impactSection.offsetTop
        const viewportHeight = window.innerHeight

        if (scrollPosition > sectionOffset - viewportHeight && scrollPosition < sectionOffset + impactSection.offsetHeight) {
          const relativeScroll = scrollPosition - sectionOffset
          cardTop.style.transform = \`translateY(\${relativeScroll * 0.05}px)\`
          cardBottom.style.transform = \`translateY(\${relativeScroll * -0.05}px) scale(0.95)\`
        }
      })
    }

    // Smooth appearance for topic cards on scroll
    const topicCards = document.querySelectorAll(".topic-card")
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, index * 100)
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    topicCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(40px)"
      card.style.transition = "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
      observer.observe(card)
    })

    // CTA Button Interaction
    const ctaBtn = document.querySelector(".cta-button-main")
    if (ctaBtn) {
      ctaBtn.addEventListener("mouseenter", () => {
        ctaBtn.innerText = "Start Your Journey →"
      })
      ctaBtn.addEventListener("mouseleave", () => {
        ctaBtn.innerText = "Apply for the Program"
      })
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="high-school-programs-text20">
                Fighting Antisemitism in Schools (FAIS) is a nationwide movement
                dedicated to identifying and combating bias in our educational
                systems through transparency and community action.
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="high-school-programs-text21">
                &amp;copy; 2026 Fighting Antisemitism in Schools (FAIS). All
                Rights Reserved.
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="high-school-programs-text22">FAIS</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="high-school-programs-text23">Home</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="high-school-programs-text24">Resources</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="high-school-programs-text25">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="high-school-programs-text26">Get Involved</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="high-school-programs-text27">
                Report Incident
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="high-school-programs-text28">Donate</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="high-school-programs-text29">
                Privacy Policy
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="high-school-programs-text30">Terms of Use</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="high-school-programs-text31">Explore</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="high-school-programs-text32">Take Action</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="high-school-programs-text33">Legal</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .high-school-programs-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .high-school-programs-container4 {
            display: none;
          }
          .high-school-programs-container5 {
            display: contents;
          }
          .high-school-programs-container6 {
            display: none;
          }
          .high-school-programs-container7 {
            display: contents;
          }
          .high-school-programs-text20 {
            display: inline-block;
          }
          .high-school-programs-text21 {
            display: inline-block;
          }
          .high-school-programs-text22 {
            display: inline-block;
          }
          .high-school-programs-text23 {
            display: inline-block;
          }
          .high-school-programs-text24 {
            display: inline-block;
          }
          .high-school-programs-text25 {
            display: inline-block;
          }
          .high-school-programs-text26 {
            display: inline-block;
          }
          .high-school-programs-text27 {
            display: inline-block;
          }
          .high-school-programs-text28 {
            display: inline-block;
          }
          .high-school-programs-text29 {
            display: inline-block;
          }
          .high-school-programs-text30 {
            display: inline-block;
          }
          .high-school-programs-text31 {
            display: inline-block;
          }
          .high-school-programs-text32 {
            display: inline-block;
          }
          .high-school-programs-text33 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default HighSchoolPrograms
