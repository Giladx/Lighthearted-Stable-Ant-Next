import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="component-image"
        />
      </div>
      <style jsx>
        {`
          .component-container {
            display: contents;
          }
          .component-image {
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0.75;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  imageAlt: 'Bias in Curriculum',
  imageSrc: 'https://images.unsplash.com/photo-1543269865-cbf427effbad&w=1300',
}

AppComponent.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default AppComponent
