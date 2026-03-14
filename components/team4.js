import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team4 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team4-thq-max-width-elm thq-section-max-width">
          <div className="team4-thq-section-title-elm">
            <span className="thq-body-small team4-thq-text-elm10">
              {props.content1 ?? (
                <Fragment>
                  <span className="team4-text11">
                    Team Member 1 Description
                  </span>
                </Fragment>
              )}
            </span>
            <div className="team4-thq-content-elm1">
              <h2 className="thq-heading-2 team4-thq-text-elm11">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team4-text26">Meet Our Team</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large team4-thq-text-elm12">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team4-text22">
                      Team Member 2 Description
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team4-thq-content-elm2">
            <div className="team4-thq-content-elm3">
              <div className="team4-thq-row-elm1">
                <div className="team4-container1">
                  <div className="team4-thq-card-elm1">
                    <img
                      alt={props.member1Alt}
                      src={props.member1Src}
                      className="team4-thq-placeholder-image-elm1 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team4-thq-content-elm4">
                      <div className="team4-thq-title-elm1">
                        <span className="team4-thq-text-elm13 thq-body-small">
                          {props.member1 ?? (
                            <Fragment>
                              <span className="team4-text13">
                                Team Member 1 Name
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team4-thq-text-elm14 thq-body-small">
                          {props.member1Job ?? (
                            <Fragment>
                              <span className="team4-text12">
                                Founder and President
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team4-thq-text-elm15 thq-body-small">
                        {props.member1Content ?? (
                          <Fragment>
                            <span className="team4-text17">
                              Team Member 1 Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team4-thq-social-icons-elm1">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team4-thq-card-elm2">
                    <img
                      alt={props.member2Alt}
                      src={props.member2Src}
                      className="team4-thq-placeholder-image-elm2 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team4-thq-content-elm5">
                      <div className="team4-thq-title-elm2">
                        <span className="team4-thq-text-elm16 thq-body-small">
                          {props.member2 ?? (
                            <Fragment>
                              <span className="team4-text14">
                                Team Member 2 Name
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team4-thq-text-elm17 thq-body-small">
                          {props.member2Job ?? (
                            <Fragment>
                              <span className="team4-text27">
                                Director of Education Programs
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team4-thq-text-elm18 thq-body-small">
                        {props.member2Content ?? (
                          <Fragment>
                            <span className="team4-text15">
                              Team Member 2 Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team4-thq-social-icons-elm2">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team4-thq-row-elm2">
                <div className="team4-container2">
                  <div className="team4-thq-card-elm3">
                    <img
                      alt={props.member3Alt}
                      src={props.member3Src}
                      className="team4-thq-placeholder-image-elm3 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team4-thq-content-elm6">
                      <div className="team4-thq-title-elm3">
                        <span className="team4-thq-text-elm19 thq-body-small">
                          {props.member3 ?? (
                            <Fragment>
                              <span className="team4-text10">
                                Team Member 3 Name
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team4-thq-text-elm20 thq-body-small">
                          {props.member3Job ?? (
                            <Fragment>
                              <span className="team4-text19">
                                Legal Advisor
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team4-thq-text-elm21 thq-body-small">
                        {props.member3Content ?? (
                          <Fragment>
                            <span className="team4-text20">
                              Team Member 3 Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team4-thq-social-icons-elm3">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team4-thq-card-elm4">
                    <img
                      alt={props.member4Alt}
                      src={props.member4Src}
                      className="team4-thq-placeholder-image-elm4 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="team4-thq-content-elm7">
                      <div className="team4-thq-title-elm4">
                        <span className="team4-thq-text-elm22 thq-body-small">
                          {props.member4 ?? (
                            <Fragment>
                              <span className="team4-text16">
                                Team Member 4 Name
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team4-thq-text-elm23 thq-body-small">
                          {props.member4Job ?? (
                            <Fragment>
                              <span className="team4-text23">
                                Communications Manager
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team4-thq-text-elm24 thq-body-small">
                        {props.member4Content ?? (
                          <Fragment>
                            <span className="team4-text25">
                              Team Member 4 Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team4-thq-social-icons-elm4">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team4-thq-content-elm8">
              <div className="team4-thq-content-elm9">
                <h2 className="thq-heading-2 team4-thq-text-elm25">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="team4-text18">Join Our Cause</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small team4-thq-text-elm26">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="team4-text24">
                        Team Member 3 Description
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button className="team4-thq-button-elm thq-button-filled">
                <span className="thq-body-small">
                  {props.actionContent ?? (
                    <Fragment>
                      <span className="team4-text21">
                        Learn more about our team&apos;s mission and values
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team4-thq-max-width-elm {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-section-title-elm {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team4-thq-content-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-content-elm2 {
            gap: var(--dl-layout-space-sixunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-content-elm3 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team4-thq-row-elm1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team4-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team4-thq-card-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team4-thq-placeholder-image-elm1 {
            width: 80px;
            height: 80px;
          }
          .team4-thq-content-elm4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-title-elm1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-text-elm13 {
            font-style: normal;
            font-weight: 600;
          }
          .team4-thq-text-elm14 {
            text-align: center;
          }
          .team4-thq-text-elm15 {
            text-align: center;
          }
          .team4-thq-social-icons-elm1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team4-thq-card-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team4-thq-placeholder-image-elm2 {
            width: 80px;
            height: 80px;
          }
          .team4-thq-content-elm5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-title-elm2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-text-elm16 {
            font-style: normal;
            font-weight: 600;
          }
          .team4-thq-text-elm17 {
            text-align: center;
          }
          .team4-thq-text-elm18 {
            text-align: center;
          }
          .team4-thq-social-icons-elm2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team4-thq-row-elm2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team4-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team4-thq-card-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team4-thq-placeholder-image-elm3 {
            width: 80px;
            height: 80px;
          }
          .team4-thq-content-elm6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-title-elm3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-text-elm19 {
            font-style: normal;
            font-weight: 600;
          }
          .team4-thq-text-elm20 {
            text-align: center;
          }
          .team4-thq-text-elm21 {
            text-align: center;
          }
          .team4-thq-social-icons-elm3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team4-thq-card-elm4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team4-thq-placeholder-image-elm4 {
            width: 80px;
            height: 80px;
          }
          .team4-thq-content-elm7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-title-elm4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-text-elm22 {
            font-style: normal;
            font-weight: 600;
          }
          .team4-thq-text-elm23 {
            text-align: center;
          }
          .team4-thq-text-elm24 {
            text-align: center;
          }
          .team4-thq-social-icons-elm4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team4-thq-content-elm8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
          }
          .team4-thq-content-elm9 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team4-thq-button-elm {
            width: 100%;
            max-width: 300px;
          }
          .team4-text10 {
            display: inline-block;
          }
          .team4-text11 {
            display: inline-block;
          }
          .team4-text12 {
            display: inline-block;
          }
          .team4-text13 {
            display: inline-block;
          }
          .team4-text14 {
            display: inline-block;
          }
          .team4-text15 {
            display: inline-block;
          }
          .team4-text16 {
            display: inline-block;
          }
          .team4-text17 {
            display: inline-block;
          }
          .team4-text18 {
            display: inline-block;
          }
          .team4-text19 {
            display: inline-block;
          }
          .team4-text20 {
            display: inline-block;
          }
          .team4-text21 {
            display: inline-block;
          }
          .team4-text22 {
            display: inline-block;
          }
          .team4-text23 {
            display: inline-block;
          }
          .team4-text24 {
            display: inline-block;
          }
          .team4-text25 {
            display: inline-block;
          }
          .team4-text26 {
            display: inline-block;
          }
          .team4-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .team4-thq-content-elm2 {
              gap: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .team4-thq-row-elm1 {
              align-items: center;
              flex-direction: column;
            }
            .team4-thq-row-elm2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team4-thq-text-elm10 {
              text-align: center;
            }
            .team4-thq-text-elm11 {
              text-align: center;
            }
            .team4-thq-text-elm12 {
              text-align: center;
            }
            .team4-container1 {
              flex-direction: column;
            }
            .team4-container2 {
              flex-direction: column;
            }
            .team4-thq-text-elm25 {
              text-align: center;
            }
            .team4-thq-text-elm26 {
              text-align: center;
            }
            .team4-thq-button-elm {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team4.defaultProps = {
  member3: undefined,
  content1: undefined,
  member1Job: undefined,
  member1: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1590735213920-68192a487bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MzE0NDczNXw&ixlib=rb-4.1.0&q=80&w=1080',
  member1Src:
    'https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MzE0NDczNXw&ixlib=rb-4.1.0&q=80&w=1080',
  member2: undefined,
  member2Content: undefined,
  member4: undefined,
  member1Content: undefined,
  heading2: undefined,
  member3Job: undefined,
  member1Alt: 'Image of Team Member 1',
  member3Src:
    'https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MzE0NDczNXw&ixlib=rb-4.1.0&q=80&w=1080',
  member4Alt: 'Image of Team Member 4',
  member3Content: undefined,
  actionContent: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1530452540414-c17a65a637fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MzE0NDczNXw&ixlib=rb-4.1.0&q=80&w=1080',
  member3Alt: 'Image of Team Member 3',
  content2: undefined,
  member4Job: undefined,
  member2Alt: 'Image of Team Member 2',
  content3: undefined,
  member4Content: undefined,
  heading1: undefined,
  member2Job: undefined,
}

Team4.propTypes = {
  member3: PropTypes.element,
  content1: PropTypes.element,
  member1Job: PropTypes.element,
  member1: PropTypes.element,
  member4Src: PropTypes.string,
  member1Src: PropTypes.string,
  member2: PropTypes.element,
  member2Content: PropTypes.element,
  member4: PropTypes.element,
  member1Content: PropTypes.element,
  heading2: PropTypes.element,
  member3Job: PropTypes.element,
  member1Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member4Alt: PropTypes.string,
  member3Content: PropTypes.element,
  actionContent: PropTypes.element,
  member2Src: PropTypes.string,
  member3Alt: PropTypes.string,
  content2: PropTypes.element,
  member4Job: PropTypes.element,
  member2Alt: PropTypes.string,
  content3: PropTypes.element,
  member4Content: PropTypes.element,
  heading1: PropTypes.element,
  member2Job: PropTypes.element,
}

export default Team4
