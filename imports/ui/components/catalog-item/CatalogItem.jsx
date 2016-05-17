import React, { PropTypes } from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import classNames from 'classnames/bind'
import RetinaImage from 'react-retina-image'

import { styles } from './catalogitem.mss'


const classes = {
  img: styles.img,
}

export const CatalogItem = ({ name, cover, slug, hidden }) => {
  // Hiding pictures, until they would be loaded
  const imgState = {}
  imgState[styles.hidden] = hidden
  imgState[styles.visible] = !hidden

  classes.main = classNames(imgState,
                            'col-sm-6',
                            styles.main,
                            'masonryItem')

  return (
    <a
      className={classes.main}
      href={FlowRouter.path('gallery', { slug })}
    >
      <RetinaImage
        src={cover}
        alt={name}
        checkIfRetinaImgExists={false}
        className={classes.img}
      />
      <span>{name}</span>
    </a>
  )
}

CatalogItem.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
}