import React, { Component } from 'react'

//libs
import { Tooltip, Whisper } from 'rsuite';

//icons
import { Icon as Iconify } from '@iconify/react'
import bxSupport from '@iconify/icons-bx/bx-support'

export default class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return ( 
			<div className = 'footer-wrapper'>

				<div className = 'footer-left'> 
					<span>Copyright</span>
					<span style = {{ fontWeight:'bold'}}>&copy;{ new Date().getFullYear() }</span>
					<span className = 'org'>JMBUGUAH</span>
					<div className="links">
						<span>Terms of Use</span>
						<span>Privacy policy</span>
					</div>
				</div>

				<div className="footer-right">

					<Whisper 
						trigger   = "hover" 
						placement = 'top'
						speaker   = {
							<Tooltip visible style = {{fontSize:9, letterSpacing:1}}>Support</Tooltip>
						}
					>
						<div>
						
							<Iconify icon={bxSupport} />
						</div>
					</Whisper>
					
				</div>

				{/* styles */}
				<style jsx>{`
					.footer-wrapper {
						width           : 100%;
						height          : var(--footer-height);
						display         : flex;
						align-items     : center;
						justify-content : space-between;
					}

					/*-------------------
					
						Left

					  -------------------*/
					.footer-left {
						font-size       : .8rem;
						letter-spacing  : .02rem;
						font-family     : calibri;
						display         : flex;
						flex-direction  : row;
					}
					.footer-left span {
						margin          : 0 .1rem
					}
					.org {
						text-transform  : uppercase
					}
					.links {
						margin-left     : 0.5rem
					}
					.links span {
						padding         : 0 .8rem;
						text-transform  : Capitalize;
						color           : indigo
					}
					.links span: nth-child(even){
						border-left     : 1px solid rgba(0,0,0,.1)
					}


					/*-------------------
					
						Right
						
					  -------------------*/
					.footer-right {
						font-size       : 1.5rem;
						display         : flex;
						flex-direction  : row;
						margin-right    : 4rem;
						position        : fixed;
						right           : 0rem;
						bottom          : 1.6rem;
						box-shadow      : 0 2px 10px 0 rgba(0, 0, 0, 0.12);
						background      : rgba(255,255,255,.5);
						border-radius   : 5px;
						overflow        : hidden;
					}
					.footer-right div {
						width           : 40px;
						height          : 40px;						
						display         : flex;
						align-items     : center;
						justify-content : center;
						cursor          : pointer;
						margin          : 0;						
					}
					.footer-right:active{
						opacity:0
					}
					.footer-right div:hover {
						transform: scale(1.1)					
					}
					.footer-right div:nth-child(1){
						color: rgb(255, 255, 255);
    					background: var(--sidebar-background);
					}

				`}</style>

				{/* theme */}

			</div>
		)
	}
}