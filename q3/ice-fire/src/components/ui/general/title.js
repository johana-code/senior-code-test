import { Row, Col } from 'react-bootstrap'

const Title = ({ size, style, children }) => {

	//determine styles
	let styleObject      = {}

	if ( style && typeof style === 'object' ) {
		styleObject =  style
	}

	//determine size
	let currentSize = 'sm'

	if ( size && ['md','lg'].includes ( size )){
		currentSize = size
	}



	return (
		<React.Fragment>
			<Row>
				<Col>
					<div className = { `zr-title ${currentSize}` } style = { styleObject }>{children}</div>
				</Col>
			</Row>

			<style jsx>{`
				.zr-title {
					font-family:montserrat;
					padding:  3rem 0
				}
				.sm {
					font-size: .8rem
				}
				.md {
					font-size: 1.5rem
				}
				.lg {
					font-size: 2rem
				}
			`}</style>
		</React.Fragment>
	)

}

export default Title

