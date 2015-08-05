import React from 'react'
import LikeButton from '../like-button'

const target = document.querySelector('.js-app')
React.render(<LikeButton liked={ false } />, target)
