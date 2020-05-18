import React, { Component } from 'react'

//import icons
import { Icon } from 'rsuite'
import { Spinner } from 'react-bootstrap'

export default class Panel extends Component {

	constructor( props ){

		super ( props )

		this.state = {
			iconSize  : '.7rem',
			panelOpen : true,
			isClosed  : false,
			isLoading : false
		}

		this.toggleBody             = this.toggleBody.bind(this)
		this.close                  = this.close.bind(this)
		this.simulateNetworkRequest = this.simulateNetworkRequest.bind(this)
	}

	async simulateNetworkRequest (){

		const self = this //preserve context
		await this.setState({
			isLoading: !this.state.isLoading
		})
		setTimeout ( async function () {
			await self.setState({
				isLoading: !self.state.isLoading
			})
		}, 2000)
	}

	async toggleBody() {
		await this.setState({
			panelOpen: !this.state.panelOpen
		})
	}

	async close() {
		await this.setState({
			isClosed: !this.state.isClosed
		})
	}

	render() {

		const { 
			title, 
			children, 
			panelStyle, 
			headerStyle, 
			bodyStyle, 
			iconColor, 
			noIcons, 
			noHeader 
		} = this.props

		const { 
			iconSize, 
			panelOpen, 
			isClosed,
			isLoading
		} = this.state

		//configurable styles
		let 
			currentPanelStyle  = {},
			currentHeaderStyle = {},
			currentBodyStyle   = {},
			currentFooterStyle = {},
			hideIcons          = false,
			hideHeader         = false,
			currentIconColor   = 'rgb(216, 216, 216)'

		if ( typeof panelStyle  === 'object' ) {
			currentPanelStyle = panelStyle
		}
		if ( typeof headerStyle === 'object' ) {
			currentHeaderStyle = headerStyle
		}	
		if ( typeof bodyStyle   === 'object' ) {
			currentBodyStyle = bodyStyle
		}
		if ( typeof footerStyle === 'object' ) {
			currentFooterStyle = footerStyle
		}
		if  (typeof iconColor   === 'string' ) {
			currentIconColor = iconColor
		}		
		if ( noIcons ) {
			hideIcons = true
		} 
		if( noHeader ){
			hideHeader = true
		}
	
		return(
			<React.Fragment>

				{/* panel elements */}
				<div className={ `panel ${ isClosed ? 'closed' : '' }` } style = {currentPanelStyle}>
					{/* loading */}
					{ 
						isLoading && <div className="activity-indicator">
							<Spinner animation="grow" variant="primary" />
						</div> 
						}

					{/* panelheader */}
					{
						!hideHeader && <div className="panel-header" style = {currentHeaderStyle}>
						
						{/* title */}
						<div className="panel-title">{title}</div>

						{/* panel icons */}
						{ 
							!hideIcons && <div className="panel-icons">

								{/* toggle body */}
								<div className="icon-wrapper">
									<Icon 
										icon    = { panelOpen ? "angle-up" : 'angle-down' }
										style   = {{ fontSize: '.9rem', color: currentIconColor }}
										onClick = { this.toggleBody}
									>
									</Icon>
								</div>

								{/* show loading spinner */}
								<div className="icon-wrapper">
									<Icon 
										icon="circle-o" 
										style = {{ fontSize: iconSize, color: currentIconColor }}
										onClick = { this.simulateNetworkRequest }
									>										
									</Icon>
								</div>

								{/* close panel */}
								<div className="icon-wrapper">
									<Icon 
										icon    = "close" 
										style   = {{ fontSize: iconSize, color: currentIconColor }}
										onClick = {this.close}
									></Icon>
								</div>
								
							</div>
						}
						</div>
					}

					{/* panel body */}
					<div className= { `panel-body ${ panelOpen ? '': 'closed' }` } style = {currentBodyStyle}>						
						{children}
					</div>
				</div>

				{/* panel style */}
				<style jsx>
					{`
						* {						
							transition     : all 200ms ease !important;
						}
						.panel {
							background     : white;
							display        : flex;
							flex-direction : column;
							position       : relative;
						}
						.panel.closed {
							display        : none
						}
						.panel-header {
							display        : flex;
							padding        : 1rem 1.5rem;
							align-items    : center;
							justify-content: space-between;
							font-size      : .8rem
						}
						.panel-title {
							text-transform : uppercase;
							font-family    : montserrat
						}
						.panel-icons {
							display        : flex;
							flex-direction : row;
						}
						.icon-wrapper {
							margin         : 0 .5rem;
							color          : rgb(216, 216, 216);
							cursor         : pointer;						
						}
						.icon-wrapper:active {
							opacity        : 0						
						}
						.panel-body {
							padding        : 1rem 1.5rem 2rem;
							height         : auto;
							visibility     : visible;
							overflow       : hidden;
							min-height     : 160px;
							position       : relative;
						}
						.panel-body.closed {
							min-height     : unset;
							height         : 0 !important;
							visibility     : hidden;
							padding        : 0 1.5rem
						}

						.activity-indicator {
							position       : absolute;
							left           : 0;
							width          : 100%;
							height         : 100%;
							background     : rgba(255,255,255,.9);
							z-index        : 2;
							display        : flex;
							align-items    : center;
							justify-content: center;
						}
					`}
				</style>

			</React.Fragment>
		)
	}

}