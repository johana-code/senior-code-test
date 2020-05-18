 /**
  * 
  *  	cover placements ( left | right | top | bottom )
  * 
  * 	theming & size ( allow custom styling )
  * 	size 
*/

import { Icon } from "rsuite"

const Dropdown = ({ content, trigger, style, alignment, placement }) => {

	//determine styles
	let styleObject      = {}

	if ( style && typeof style === 'object' ) {
		styleObject =  style
	}

	//determine alignment
	let currentAlignment = 'center'

	if ( alignment && ['left','right'].includes ( alignment )){
		currentAlignment = alignment
	}

	//TODO: determine placement
	let currentPlacement = 'bottom'

	return (
		<div className="dropdown">

			<div className = "child-wrapper">{trigger}</div>
			<div className = { `dropdown-content ${currentAlignment}` } style = { styleObject }>{content}</div>

			<style jsx>{`	
				* {
					transition     : all 500ms ease
				}
				.dropdown {
					height         : 100%;
					display        : inline-block;
					cursor         : pointer;
					position:relative
				}
				.child-wrapper {
					height         : 100%;
					display        : flex;
					align-items    : center;
					justify-content: center;
				}
				.dropdown:hover .dropdown-content {  
					visibility: visible;
					margin-top: 0rem;
					opacity   : 1
				}
				.dropdown-content {
					overflow        : hidden;
					visibility      : hidden;
					opacity         : 0;
					position        : absolute;					
					min-height      : 160px;				
					width           : 160px;
					margin-top      : 5rem;
					background-color: white;
					box-shadow      : 0px 8px 16px 0px rgba(0,0,0,0.05);
					z-index         : 1;
					margin-top      : 3rem;
					overflow        : hidden;
					border-radius   : 2px;
					transition      : all 500ms ease;
				}
				
				//alignment
				.center {
					left            : 50%;
					transform       : translateX(-50%);
				}
				.left {
					left : 0px
				}
				.right {
					right : 0px
				}
 
			`}</style>
		</div>
	)

}
const MegaDropdown = ({ content, trigger, style, minimized }) => {

	//determine styles
	let styleObject = {}

	if ( style && typeof style === 'object' ) {
		styleObject =  style
	}	

	return(
		<div className="dropdown">

			<div className = "child-wrapper">{trigger}<Icon icon = { 'angle-down'} style = {{marginLeft:'.5rem'}}/></div>
			<div className = "dropdown-content"  style = { styleObject } >{content}</div>

			<style jsx>{`	
				* {
					transition     : all 500ms ease
				}
				.dropdown {
					width          : auto;
					height         : 100%;
					display        : inline-block;
					cursor         : pointer
				}
				.child-wrapper {
					height         : 100%;
					display        : flex;
					align-items    : center;
					justify-content: center;
				}
				.dropdown:hover .dropdown-content {  
					visibility: visible;
					margin-top: .04rem;
					opacity   : 1
				}
				.dropdown:hover .dropdown-content { height: 200px}
				.dropdown-content {
					position        : fixed;
					visibility      : hidden;	
					opacity         : 0;				
					top             : var(--header-height);
					width           : ${ minimized ? 'calc(100% - var(--sidebar-minimized-width))':'calc(100% - var(--sidebar-width))'};
					left            : ${ minimized ? 'var(--sidebar-minimized-width)':'var(--sidebar-width)'};
					background-color: white;
					box-shadow      : 0px 8px 16px 0px rgba(0,0,0,0.05);
					z-index         : 1;
					margin-top      : -1rem;
					border-radius   : .15rem;
					overflow        : hidden;
					transition      : all 500ms ease;
				}

			`}</style>
		</div>
	)
}

export { Dropdown, MegaDropdown }