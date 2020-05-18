import React, { Component } from 'react'

//libraries
import { Icon, Badge, InputGroup, Input, Avatar } from 'rsuite'

//icons
import { Icon as Iconify }  from '@iconify/react';
import maximizeIcon 		from '@iconify/icons-feather/maximize'
import minimizeIcon 		from '@iconify/icons-feather/minimize'
import settingsIcon 		from '@iconify/icons-icons8/settings';


//internalcomponents
import { Dropdown, MegaDropdown} from '@components/ui/general/dropdown'


//styles
import { NavBarStyle } from '@styles/layout/navbar'

//themes 
import themeDefault from '@themes/default'
let theme = themeDefault.light

//component
class NavBar extends Component {

	constructor ( props ) {
		super ( props )
		this.state = {
			isFullScreen : false
		}
	}

	//full screen toggle
	componentDidMount(){
		window.addEventListener('resize', this.toggleFullScreenIcon.bind(this) )
	}
	async toggleFullScreenIcon(){
		if ( window.innerWidth == screen.width && window.innerHeight == screen.height ) {
			await this.setState ({
				isFullScreen : true
			})
		} 
		else {
			await this.setState ({
				isFullScreen : false
			})
		}
	}
	toggleFullScreen() {
		if ( !document.fullscreenElement ) {
			document.documentElement.requestFullscreen();
		} 
		else {
			if ( document.exitFullscreen ) {
				document.exitFullscreen(); 
			}
		}
	}

	render() { 

		const { toggle, toggleDrawer, minimized } = this.props
		const { isFullScreen } = this.state

		return ( 
			<div className = 'navbar'>

				{/* left navbar items */}
				<div className="navbar-left">

					{/* toogle */}
					<div className="toggle"  onClick = { toggle }>
						<Icon icon = { minimized ? 'angle-right': 'angle-left'} style = {{ fontSize: 22 }} />
					</div>

					{/* brand */}
					<div className="brand-name">
						{/* <img src = '/logo.png' style = {{width:20, marginRight: '1rem'}}/>  */}
						Ice and Fire API
					</div>

					{/* left links */}
					{/* <div className="left-links" title = 'shortcuts' >
						<MegaDropdown 
							content   = { <p></p>} 
							trigger   = {<Icon icon = "link" />}
							minimized = { minimized }
						/>
					</div> */}

					{/* search */}
					{/* <div className="search">
						<InputGroup style={{ width:200, border:'none', borderRadius: '0', borderBottom: '1px dotted rgba(0,0,0,.15)'}}>							
							<InputGroup.Addon style = {{ background:'none'}}>
								<Icon icon="search" style = {{ color: 'rgba(0,0,0,.4)'}}/>
							</InputGroup.Addon>
							<Input placeholder = {"Search..."} style = {{fontSize:'.8rem', letterSpacing: 1}}/>
						</InputGroup>
						
					</div> */}

				</div>

				{/* right navbar items */}
				<div className="navbar-right">

					<div className="right-icons">	

						{/* notifications */}
						{/* <Dropdown 
							content = { <p></p>} 
							trigger = {
								<div className = 'right-icon-wrapper nav-icon-danger'>
									<Badge>
										<Icon icon = { "bell-o"} style = {{ color : 'rgb(255, 0, 0)' }}/>
									</Badge>							
								</div>
							}
						/> */}

						{/* messages */}
						{/* <Dropdown 
							content = { <p></p>} 
							trigger = {
								<div className = 'right-icon-wrapper nav-icon-success'>
									<Icon icon = { "envelope-o"} style = {{ color : 'rgb(139, 195, 74)' }}/>									
								</div>
							}
						/> */}

						<div className = 'right-icon-wrapper nav-icon-default' onClick = { toggleDrawer }>
							<Iconify icon = { settingsIcon } style = {{ color : 'grey', fontSize: 18 }}/>
						</div>

					</div>

					<div className = "fullscreen" onClick = { this.toggleFullScreen.bind(this) } title = "Fullscreen" >
						<Iconify icon={ isFullScreen ? minimizeIcon : maximizeIcon } style = {{ fontSize:15, color:'rgb(8, 163, 241)'}} />
					</div>

					<div className = "language"></div>
					
					{/* user actions */}
					<Dropdown 
						content = { <p></p>} 
						trigger = {
							<div className = "user-actions">
								<div className="greeting">Hi, <b>Johana</b></div>
								<div className="avatar">
									<Avatar style={{ background: 'rgba(8, 164, 241, 0.18)', color: 'rgb(9, 163, 241)', fontWeight:'bold' }} size="sm">J</Avatar>
								</div>						
							</div>
						}
						alignment = { 'right' }
					/>

				</div>

				{/* styles */}
				<style jsx>{NavBarStyle}</style>

				{/* theme */}
				<style jsx global>{`
					* {
						--navbar-background : ${theme.navbar.background};
						--toggle-right-border : 1px solid rgba(0,0,0,.02);
						--brand-text: rgba(0,0,0,.6)
					}

					.400x {
						background:orange
					}
				
				`}</style>

			</div>
		)
	}
}
 
export default NavBar