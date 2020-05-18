import { Icon } from 'rsuite'

class R2gTabs extends React.Component {

	constructor(){
		super()
		this.state = {
			activeTab: 0
		}
	}
	async setActive ( tab ) {
		await this.setState ({
			activeTab: tab
		})
	}
	columnTab () {

		const { activeTab } = this.state
		const { config    } = this.props
		const reverse       = config.horizontalAlignment === 'right' ? true : false
		const alignment     = config.verticalAlignment === 'bottom' ? true : false

		return (
			<div className="tabs-container">

				<div className = 'tab-list'>
					{ config.tabs.map ( (tab,index) => (
						<div 
							onClick   = { this.setActive.bind(this, index )} 
							className = { activeTab === index ? "tab-list-item active": "tab-list-item"} 
							key       = { index }
						> 
							<Icon style ={{ marginRight:8 }} icon = { tab.icon } />
							<div>{tab.title}</div>
						</div>
					))}					
				</div>
					
				<div className="tab-content">
					{ config.tabs.map ( (tab,index) => (
						<div className = { activeTab === index? "tab active": "tab"} key = { index } >{tab.content}</div>
					))}
				</div>

				<style jsx>
					{`
						.tabs-container {
							display       : flex;
							flex-direction: ${ reverse ? 'row-reverse': 'row' };
							width         : 100%;
							align-items   : stretch;
							padding       : .5rem;
						}
						.tab-content {
							padding: 0 1rem;
							width:100%;
						}
						.tab{
							display:none
						}
						.tab.active {
							display:block
						}
						.tab-list {
							display        : flex;
							flex-direction : column;
							align-items    : flex-start;
							justify-content: space-between;
							padding        : 0;
							margin         : 0;
							width          : 100px;
							${ reverse ? 'border-left :  1px solid #f9f9f9;': 'border-right   :  1px solid #f9f9f9;' }
						}
						.tab-list-item {
							width         : 101px;
							box-sizing    : border-box;
							padding       : .5rem;
							padding-left  : ${ reverse ? '1rem' : '.5rem' };
							cursor        : pointer;
							${ reverse ? 'border-left :  2px solid transparent;': 'border-right   : 2px solid transparent;' }
							transition    : all 300ms ease;
							flex-direction: row;
							align-items   : center;
							display       : flex;
						}
						.tab-list-item:hover {
							width:101px;
							box-sizing:border-box;
							padding-left  : ${ reverse ? '1.5rem' : '1rem' };
							cursor:pointer
						}
						.tab-list-item.active {
							${ reverse ? 'border-left :  2px solid indigo;': 'border-right   : 2px solid indigo;' }
						}
					`}
				</style>
			</div>
		)

	}
	rowTab() {

		const { activeTab } = this.state
		const { config    } = this.props
		const reverse       = config.verticalAlignment   === 'bottom' ? true : false
		const alignment     = config.horizontalAlignment === 'right' ? true : false

		return (
			<div className="tabs-container">

				<div className = 'tab-list'>
					{ config.tabs.map ( (tab,index) => (
						<div 
							onClick   = { this.setActive.bind(this, index )} 
							className = { activeTab === index ? "tab-list-item active": "tab-list-item"} 
							key       = { index }
						> 
							<Icon style ={{ marginRight:8 }} icon = { tab.icon } />
							<div>{tab.title}</div>
						</div>
					))}					
				</div>
					
				<div className="tab-content">
					{ config.tabs.map ( (tab, index ) => (
						<div className = { activeTab === index? "tab active": "tab"} key = { index } >{tab.content}</div>
					))}
				</div>

				<style jsx>
					{`
						.tabs-container {
							display       : flex;
							flex-direction: ${ reverse ? 'column-reverse': 'column'};
							width         : 100%;
							align-items   : stretch;
							padding       : 0.5rem;
						}
						.tab-content {
							padding: 1rem 0rem;							
							width:100%;
						}
						.tab{
							display:none
						}
						.tab.active {
							display:block
						}
						.tab-list {
							display       : flex;
							flex-direction: row;
							align-items   : flex-start;
							justify-content: ${ alignment ? 'flex-end' : 'flex-start'};
							padding       : 0;
							margin        : 0;
							width         : 100%;
							${ reverse ? 'border-top : 1px solid #f9f9f9': 'border-bottom : 1px solid #f9f9f9'};
							height        : 35px;
						}
						.tab-list-item {
							width         : auto;
							box-sizing    : border-box;
							padding       : .5rem 2rem;
							${ reverse ? 'padding: 1rem 2rem 0rem': 'padding : .5rem 2rem'};
							cursor        : pointer;
							border-bottom : 2px solid transparent;
							${ reverse ? 'border-top : 2px solid transparent': 'border-bottom : 2px solid transparent'};
							transition    : all 300ms ease;
							height        : 35px;
							flex-direction: row;
							align-items   : center;
							display       : flex;
						}
						.tab-list-item:hover {
							box-sizing:border-box;
							cursor:pointer
						}
						.tab-list-item.active {
							${ reverse ? 'border-top : 2px solid indigo': 'border-bottom : 2px solid indigo'};
						}
						.tab-list-icon {
							margin-right:8px
						}

						
					`}
				</style>
			</div>
		)
	
	}	
	render() {
		switch ( this.props.config.display ) {
			case "column":
				return this.columnTab ()
			default:
				return this.rowTab()
		}
	}
}

export default R2gTabs