import React, { Component } from 'react'

//import icons
import { Icon } from 'rsuite'

//import animations library
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// notification item
class NotificationItem extends Component {
	constructor( props ){

		super ( props )

		this.state = {
			isClosed : false,
			iconSize : '.7rem'
		}

		this.close = this.close.bind(this)
	}
	async close() {
		// await this.setState({
		// 	isClosed: !this.state.isClosed
		// })
	}
	render() {

		const { 
			title,
			message = 'This notification looks so perfect.',
			children, 
			bordered,
			type
		} = this.props

		const { 
			iconSize,
			isClosed
		} = this.state

		//configurable styles
		let currentIconColor   = 'rgb(216, 216, 216)'

		//icon colors
		let currentType = 'danger'
		if ( type && [ 'success', 'warning', 'info'].includes(type)){
			currentType = type
		}
		currentIconColor = { success: '#04733e', danger: '#e29090', warning:'#cba35a',info:'#0c5460'}[currentType]

		// Borders
		let currentBorderColor = 'transparent'
		if ( bordered ) {
			currentBorderColor = { success: '#04733e', danger: '#e29090', warning:'#cba35a',info:'#0c5460'}[currentType]
		}

		//icons
		let currentIcon = { success: 'check-circle', danger: 'exclamation-triangle', warning:'info',info:'info'}[currentType]

		return(
			<React.Fragment>

				{/* alert elements */}
				<div className = { `alert ${ isClosed ? 'closed' : ''} ${currentType}` }>

					{/* body */}
					<div className= { `alert-body` }>

						{/* title							 */}
						{ title && <div className="alert-title">{ title }</div> }

						{/* message */}
						<div className ='message-container'>
							<div className="alert-icon">
								<Icon icon = { currentIcon } style = {{ color: currentBorderColor,marginLeft:'.1rem' }} />
							</div>
							<div className="message">{ message }</div>
						</div>	

						{/* children */}
						{children}

					</div>

					<div className="close-icon">						
						<Icon 
							icon    = "close" 
							style   = {{ fontSize: iconSize, color: currentIconColor }}
							onClick = {this.close}
						></Icon>
					</div>

				</div>

				{/* alert style */}
				<style jsx>
					{`

						* {						
							transition     : all 200ms ease !important;
						}
						.alert {
							background     : white;
							display        : flex;
							flex-direction : row;
							position       : relative;
							width          : 100%;
							border-left    : 4px solid ${currentBorderColor};
							animation      : fade-in 500ms 1 ease;
							cursor         : pointer;
						}
						.alert.closed {					
							display   : none;
						}
						.alert-title {
							text-transform : capitalize;
							font-weight    : bold;
							font-family    : montserrat
						}
						.close-icon {
							position       : absolute;
							right          : 1rem;
							top            : .5rem;	
							cursor         : pointer;					
						}
						.alert-body {
							padding        : 0rem;
							height         : auto;
							visibility     : visible;
							overflow       : hidden;
							position       : relative;
						}
						.message-container {
							display        : flex;
							flex-direction : row
						}
						.alert-icon {
							margin-right   : 1rem
						}

						// theming
						.alert.success {
							background     : #d6f7f0;
							color          : #04733e
						}
						.alert.danger {
							background     : #fde2da;
							color          : #900f17
						}
						.alert.warning {
							background     : #fffde1;
							color          : #aa7918
						}
						.alert.info {
							background     : #d1ecf1;
							color          : #0c5460
						}
					`}
				</style>

			</React.Fragment>
		)
	}
}

//notification container
class NotificationContainer extends Component {
	constructor ( props ){
		super ( props )
		this.state = {
			alerts : []
		}
	}
	async add({ type = 'success'}){

		if ( this.state.alerts.length < 8){
			await this.setState({
				alerts : [ 
					...this.state.alerts, 
					<NotificationItem bordered type = {type}/> 
				]
			})
		}
		
	}
	async remove(i) {
		let newItems = this.state.alerts.slice();
		newItems.splice(i, 1);
		await this.setState({alerts: newItems});
	}
	render(){

		const items = this.state.alerts.map((item, i) => (
			<CSSTransition
				key        = {i}
				classNames = "notification"
				timeout    = {{ enter: 100, exit: 300 }}
			>
				<div style = {{ position:'relative'}}  onClick={() => this.remove(i)}>
					{item}
					<style jsx>{`
						.notification-enter {
							opacity:0.01;
							transform:scale(0)
						}
						.notification-enter.notification-enter-active{
							opacity:1;
							transition:all 200ms ease-in;
							transform:scale(1)
						}
						.notification-exit {
							opacity:1;
							transform:scale(1)
						}
						.notification-exit.notification-exit-active{
							opacity:0.01;
							transform:scale(0);
							transition:all 300ms ease-in
						}
					`}</style>	
				</div>
			</CSSTransition>
		));
		return (
			<React.Fragment>
				<div className = "alerts-container" >
					<TransitionGroup>
						{ items }
					</TransitionGroup>
				</div>
				<style jsx>{`
					.alerts-container {
						position  : fixed;
						right     : 1rem;
						top       : var(--header-height);
						width     : 300px;
						height    : auto;
						z-index   : 1000000;
						margin: 1rem
					}
					.notification-enter {
						opacity:0.01
					}
					.notification-enter.notification-enter-active{
						opacity:1;
						transition:opacity 500ms ease-in
					}
					.notification-exit {
						opacity:1
					}

					.notification-exit.notification-exit-active{
						opacity:0.01;
						transition:opacity 300ms ease-in
					}
				`}</style>
			</React.Fragment>
		)
	}
}

//notification wrapper
export default class Notification extends Component {
	render(){
		return(
			<NotificationContainer  ref= { ( Notifications ) =>{ window.Notifications = Notifications }} />
		)
	}
}

//notification method
const Notify = ( data ) => {
	Notifications.add( data )
}

export  { Notify }