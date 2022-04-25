import React from 'react'
import Style from './error.module.css'

function Error ()  {
  return (
    <div className={Style.background}>
		<div className={Style.space} ></div>
			<div className={Style.wrapper}>
				<div className={Style.img} class="img-wrapper">
					<span className={Style.span}>44</span>
				</div>
				<p>The page you are trying to search has been  moved to another universe.</p>
			</div>
		</div>
  )
}

export default Error