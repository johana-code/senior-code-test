import { Icon } from "rsuite"

const Paragraph = () =>(
	<div style = {{ padding:'1rem'}}>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem ipsum minima nisi, suscipit ut iste.</p>	
	</div>
)

class Accordion extends React.Component {
	constructor ( props ){
		super ( props )

		this.state = {
			a : true,
			b : false,
			c : false
		}
	}

	async setActive ( item ) {

		let keys = Object.keys ( this.state ) 
		
		for ( let key of keys ) {
			if ( key.toString() === item ) {
				console.log ( `${item} is to be set to active` )

				await this.setState({
					[`${key}`]:true
				})
			}
			else{
				await this.setState({
					[`${key}`]:false
				})
			}

		}
	}
	render(){
		const { a, b, c } = this.state
		return (
			<React.Fragment>
	
				{/* elements */}
				<div className="accordion">
					<div className="accordion-item">
						<div className = "accordion-item-header" onClick = { this.setActive.bind(this, 'a')}>
							<span>Item 1</span>
							<div><Icon icon = { a ? 'plus-square-o' : 'minus-square-o' }/></div>
						</div>
	
						<div className={ `accordion-item-body ${ a ? '': 'closed'}` }>
							<Paragraph/>
						</div>
	
					</div>
					<div className="accordion-item">
						<div className="accordion-item-header" onClick = { this.setActive.bind(this, 'b')}>
							<span>Item 2</span>
							<div><Icon icon = { b ? 'plus-square-o' : 'minus-square-o' }/></div>
						</div>
	
						<div className={ `accordion-item-body ${ b ? '': 'closed'}` }>
							<Paragraph/>
						</div>
	
					</div>
					<div className="accordion-item">
						<div className="accordion-item-header" onClick = { this.setActive.bind(this, 'c')}>
							<span>Item 3</span>
							<div><Icon icon = { c ? 'plus-square-o' : 'minus-square-o' }/></div>
						</div>
	
						<div className={ `accordion-item-body ${ c ? '': 'closed'}` }>
							<Paragraph/>
						</div>
	
					</div>
				</div>
	
				{/* styles */}
				<style jsx>{`
					.accordion {
						position       : relative;
						width          : 100%;
						height         : auto;
						display        : flex;
						flex-direction : column
					}
					.accordion-item {
						position       : relative;
						width          : 100%;
						height         : auto;
						overflow       : hidden;						
						background     : white;
					}
	
					.accordion-item-header {
						width          : 100%;
						min-height     : 40px;
						border-top     : 1px solid rgba(0,0,0,.05);
						background     : white;
						display        : flex;
						flex-direction : row;
						align-items    : center;
						justify-content: space-between;
						padding: 0 1rem;
					}
					.accordion-item-body{
						position       : relative;
						width          : 100%;
						height         : auto;
						overflow       : hidden;	
						transition     : all 500ms ease;	
						opacity        : 1;
						visibility     : visible;
						left           : 0rem;
						overflow       : hidden;
					}
	
					.accordion-item-body.closed{
						height         : 0;
						opacity        : 0;	
						visibility     : hidden;
						left           : 20rem;
						overflow       : hidden;
					}

					.accordion-item : last-child > .accordion-item-body{
						border         : none
					}
				`}</style>
	
			</React.Fragment>
		)
	}
}

export { Accordion }