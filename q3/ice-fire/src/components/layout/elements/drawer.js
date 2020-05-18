import React, { Component } from 'react'

//styles
import { DrawerStyle } from '@styles/layout/drawer'

//themes 
import themeDefault from '@themes/default'
let theme = themeDefault.light


export default class Drawer extends Component {

	constructor( props ){
		super ( props )
		this.state =  {
			isOpen : false
		}
	}

	render () {

		const { children, isOpen, toggle, size, overlay, placement } = this.props

		//drawer position and width
		let position = 'right'
		let width = 'md'

		if ( placement &&  ['top','bottom', 'left'].includes ( placement ) ){
			position = placement
		}
		if ( size &&  ['xs','sm', 'lg'].includes ( size ) ){
			width = size
		}

		//render
		return (
			<React.Fragment>
				
				{/* drawer */}
				<div className = { isOpen ? `drawer ${position} open ${width} ` : `drawer ${position} ${width}` } onClick = { toggle } >

					{/* header */}
					<div className="drawer-header"></div>

					{/* body */}
					<div className="drawer-body">{children}</div>

					{/* footer */}
					<div className="drawer-footer"></div>
					
				</div>

				<div className={ overlay ? isOpen ? "overlay open" : "overlay" : "overlay" }  onClick = { toggle } ></div>

				{/* styles */}
				<style jsx>{DrawerStyle}</style>

				{/* theme */}
				<style jsx global>{`

					* {
						--drawer-xs-width  : ${theme.drawer.xs};
						--drawer-sm-width  : ${theme.drawer.sm};
						--drawer-md-width  : ${theme.drawer.md};
						--drawer-lg-width  : ${theme.drawer.lg};
						--drawer-background: ${theme.drawer.background};
						--drawer-shadow    : ${theme.drawer.shadow};
					}

				`}</style>

			</React.Fragment>
		)
	}
}