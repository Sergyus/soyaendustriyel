import React from 'react'
import PropTypes from 'prop-types'
import { lazyload } from 'react-lazyload'

import './Image.css'

// HELP
// @see https://github.com/Canner/react-loading-image/blob/master/src/index.js

const Placeholder = () => (
	<div className='image-container'>
		<div className='image-wrapper'>
			<div className='image'></div>
		</div>
	</div>
)

const Image = ({ id }) => {
	return (
		<div className='image-container'>
			<div className='image-wrapper'>
				<img className={`image`} src={`/${id}.jpg`} />
			</div>
		</div>
	)
}

Image.propTypes = {
	id: PropTypes.string
}

export default lazyload({
	once: true,
	offset: -200,
	placeholder: <Placeholder />
})(Image)
