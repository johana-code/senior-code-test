//styles
import { SideNavStyle } from '@styles/layout/sidenav'

//themes 
import themeDefault from '@themes/default'
let theme = themeDefault.light

//icons
import { Icon } from 'rsuite'


//sidenav components
class Logo   extends React.Component {
	render(){
		const { minimized } = this.props
		return(
			<React.Fragment>
				<div className="sidebar-brand"></div>
				<style jsx>{SideNavStyle}</style>
			</React.Fragment>
		)
	}
}
class Avatar extends React.Component {
	render(){
		const { minimized, avatar } = this.props
		return(
			<div className={ minimized ? "sidebar-avatar minimized": "sidebar-avatar"  }>
				<div className="wrapper">
					<div className="user-image">
					<img src= { avatar.url} className="cover" alt="cover"/>
					</div>
					<div className="user-name">{avatar.name}</div>
					<div className="user-role">{avatar.role}</div>
				</div>
				<style jsx>{SideNavStyle}</style>
			</div>
		)
	}
}
class Body   extends React.Component {

	constructor(){

		super()

		//click tracking state
		this.state = {

		}
	}
	async componentDidMount(){

		//recurse through our links to get refs
		const { links } = this.props
		let refs        = []
		let active      = ""
		let recurse     = ( link ) => {

			if ( link.text ) {
				refs.push ( this.formatRef ( link.text ) ) 

				if ( link.active ) active = this.formatRef ( link.text )
			}
			if ( link.children ) {
				for ( let child of link.children ){
					recurse ( child ) 
				}				
			}
		}

		for ( let link of links ) {
			if( link.text ){
				recurse ( link )
			}			
		}

		//consider a default active item
		refs.map ( async ( ref ) => {
			await this.setState ({
				[`${ ref }`]: ref === active ? true : false
			})			
		})
	}

	formatRef ( ref ){
		return ref.replace(/\s/g,'').toLowerCase()
	}
	
	async toggle( ref ){
		console.log ( {toggled: ref })		
		await this.setState ({
			[`${ ref }`]: !this.state[ref]
		})

	}	

	async toggleRoot ( ref ){
		console.log ({ toggled: ref, state:this.state })
		
		let keys = Object.keys ( this.state )

		//set all menus to hidden
		for ( let key of keys ){
			await this.setState ({
				[`${ key }`]: false
			})
	
		}

		//show this menu
		await this.setState ({
			[`${ ref }`]: !this.state[ref]
		})

	}	

	//title element
	Title( title ) {
		return (
			<React.Fragment>
				<li className="title">{title}</li>
				<style jsx>{SideNavStyle}</style>
			</React.Fragment>
		)
	}

	//menu element
	RootMenu ( entry ) {

		const { minimized } = this.props
		const ref  = this.formatRef ( entry.text )
		let isOpen = this.state [ `${ ref}` ]

		//check whether it is active and activate it
		//onclick, hide all other root menus and only show this root menu expanded

		//root menu with no children
		if ( entry.text && !entry.children ){
			return (
				<li className= { this.state [`${ref}`] ? "root-menu active" : "root-menu" } key = { entry.text } >
					<div className= 'root-menu-wrapper'   onClick = { this.toggleRoot.bind(this, ref )}>
						<div>
							<Icon icon= { entry.icon }/>
							<div className = "menu-text">{entry.text}</div>
						</div>
					</div>
					<ul className={ minimized ? "nested-menu minimized": "hidden-menu"  }> {/* add minimized className to minimize */}
						<li>
							<div className= 'link-wrapper'>{entry.text}</div>
						</li>
					</ul>
					<style jsx>{SideNavStyle}</style>
				</li>
			)
		}

		//root menu with children
		if ( entry.text && entry.children ){
			return (
				<li className= { this.state [`${ref}`] ? "root-menu active" : "root-menu" } key = { entry.text }> {/* active style is root-menu active */}
						{/* root menu wrapper */}
						<div className= 'root-menu-wrapper'  onClick = { this.toggleRoot.bind(this, ref )}>
							<div>
								<Icon icon= { entry.icon }/>
								<div className = "menu-text">{ entry.text }</div>
							</div>
							{ !minimized &&  <Icon icon= { isOpen ? 'angle-up' : 'angle-right'}/> }
						</div>

						{/* nested menus */}
						<ul className= {   minimized ? "nested-menu minimized": isOpen ? "nested-menu" : "hidden-menu"  }>
							{ 
								entry.children.map ( child => {
									return this.NestedMenu ( child )
								}) 
							}
						</ul>
						
						<style jsx>{SideNavStyle}</style>
					</li>
			)
		}

	}

	//nested menu element - recursive
	NestedMenu ( child ) {

		const ref           = this.formatRef ( child.text )
		const { minimized } = this.props
		let isOpen           = this.state [ `${ ref}` ]

		//has no children
		if ( !child.children ) {
			return (
				<li key = { child.text }>
					<div className= 'link-wrapper'>{child.text}</div>
					<style jsx>{ SideNavStyle }</style>
				</li>
			)
		}

		//has children
		if ( child.children ) {
			return (
				<li key = { child.text }>
					<div className= 'link-wrapper' onClick = { this.toggle.bind(this, ref )}>
						<div>
							<div className = "menu-text">{child.text}</div>
						</div>
						<Icon icon= {  minimized ? 'angle-right' : isOpen ? 'angle-up' : "angle-right"}/>
					</div>
					
					<ul className= { minimized ? "nested-menu minimized": isOpen ? "nested-menu" : "hidden-menu" }>
						{ 
							child.children.map ( child => {
								return this.NestedMenu ( child )
							}) 
						}
					</ul>

					<style jsx>{ SideNavStyle }</style>
				</li>
			)		
		}

	}

	render (){

		const { minimized } = this.props

		//holds rendered items
		let menus = []
		
		// process data 
		for ( let entry of this.props.links ) {

			//is a title
			if ( entry.title ) {
				menus.push ( 
					<React.Fragment key = { entry.title }>{this.Title( entry.title )}</React.Fragment>
				)
			}
		
			//is a menu
			if ( entry.text ) {
				menus.push (
					<React.Fragment key = { entry.text }>{this.RootMenu ( entry )}</React.Fragment>
				)
			}

		}

		//return the sidebar body
		return (
			<ul className={ minimized ? "sidebar-body minimized": "sidebar-body" }>
				{ menus }
				<style jsx>{ SideNavStyle }</style>
			</ul>
		)

	}
	
}
class Footer extends React.Component {
	render(){
		const { minimized } = this.props
		
		return(
			<React.Fragment>
				<div className="sidebar-footer">
					<Icon icon = { "comments-o" } style = {{ color : "rgba(255,255,255,.5)", fontSize: '1rem', display: minimized ? "none" : "block" }}/>
					<Icon icon = { "support" }    style = {{ color : "rgba(255,255,255,.5)", fontSize: '1rem', display: minimized ? "none" : "block" }}/>
					<Icon icon = { "phone" }      style = {{ color : "rgba(255,255,255,.5)", fontSize: '1rem', display: minimized ? "none" : "block" }}/>
				</div>
				<style jsx>{SideNavStyle}</style>
			</React.Fragment>
		)
	}
}
 
//sidenav
class SideNav extends React.Component {

	render(){							

		const { config } = this.props

		const { minimized } = this.props

		return ( 
			<div className="sidebar">

				{/* components */}
				<Logo/>
				<Avatar avatar = { config.avatar } minimized = { minimized }/>
				<Body   links  = { config.links  } minimized = { minimized } />
				<Footer minimized = { minimized } />

				{/* core styles */}
				<style jsx>{SideNavStyle}</style>

				{/* theme */}
				<style jsx global>{`
					/* ---------------------
										
						CSS VARIABLES

					---------------------*/
					* {


						/* ---------------------
									
							COLORS

						---------------------*/

						--sidebar-background              : ${theme.sidebar.background};

						// scroll bar
						--thumb-bg                        : ${theme.sidebar.scrollBar.thumbBackground};		

						// avatar
						--avatar-bg                       : ${theme.sidebar.avatar.background};
						--avatar-left-border              : ${theme.sidebar.avatar.leftBorder};
						--avatar-online                   : ${theme.sidebar.avatar.onlineColor};
						--avatar-text                     : ${theme.sidebar.avatar.text};

						// sidebar body
						--active-item-color               : ${theme.sidebar.body.active.color};
						--active-item-minimized-color     : ${theme.sidebar.body.active.minimizedColor};
						--active-item-left-border         : ${theme.sidebar.body.active.leftBorder};
						--root-menu-hover-bg-color        : ${theme.sidebar.body.rootMenu.hoverBackground};
						--sidebar-text-color              : ${theme.sidebar.body.text};
						--nested-menu-border-color        : ${theme.sidebar.body.nestedMenu.borderColor};
						--nested-menu-before-color        : ${theme.sidebar.body.nestedMenu.beforeColor};		
						--nested-menu-bg-color            : ${theme.sidebar.body.nestedMenu.background};
						--nested-menu-minimized-list-color: ${theme.sidebar.body.nestedMenu.minimizedListColor};
						--nested-menu-minimized-bg        : ${theme.sidebar.body.nestedMenu.minimizedBackground};
						--nested-menu-minimized-shadow    : ${theme.sidebar.body.nestedMenu.minimizedShadow};
						
						// title
						--title-color                     : ${theme.sidebar.body.title.text};
						--title-minimized-color           : ${theme.sidebar.body.title.minimizedColor};
						--title-minimized-bg              : ${theme.sidebar.body.title.minimizedBackground};
						--title-minimized-bottom-border   : ${theme.sidebar.body.title.minimizedBottomBorder};

						// footer
						--footer-right-border             : ${theme.sidebar.footer.rightBorder};
								

						/* ---------------------
									
							DIMENSIONS

						---------------------*/

						// scrollbar
						--scrollbar-width            : ${theme.sidebar.scrollBar.width};
						--scrollbar-track-radius     : ${theme.sidebar.scrollBar.trackRadius};
						--scrollbar-thumb-radius     : ${theme.sidebar.scrollBar.thumbRadius};


						// sidebar
						--sidebar-minimized-width    : ${theme.layout.sidebar.minimizedWidth};
						--sidebar-maximized-width    : ${theme.layout.sidebar.width};
						--nested-menu-minimized-width: ${theme.sidebar.body.nestedMenu.minimizedWidth};

						//logo
						--logo-height                : ${theme.sidebar.logo.height};

						//avatar
						--avatar-height              : ${theme.sidebar.avatar.height};
						--avatar-image-dimensions    : ${theme.sidebar.avatar.imageDimensions};
						--avatar-image-width         : ${theme.sidebar.avatar.imageWidth};

						//footer
						--sidebar-footer-height              : ${theme.sidebar.footer.height};
					}
				`}</style>

			</div>
		)
	}
}
 
export default SideNav