import MainLayout from '@components/layout'
import fetch from 'isomorphic-fetch'
import Error from './_error'


//components
import Title from '@components/ui/general/title'
import Panel from '@components/ui/general/panel'
import Table from '@components/ui/general/table'

import { Row, Col } from 'react-bootstrap'

class Index extends React.Component {

	//fetch characters, books and houses
	static async getInitialProps ( ctx ) {

		let data = {}, status = 500, statusText = 'Internal Server Error'

		//characters
		try {
			let response = await fetch ( 'https://anapioficeandfire.com/api/characters',{ mode:'no-cors'})
			status       = response.status
			statusText   = response.statusText
			data.characters         = await response.json()
		}

		catch (e){
			console.log ( e.message )
			data.characters = null
		}

		//books
		try {
			let response = await fetch ( 'https://anapioficeandfire.com/api/books',{ mode:'no-cors'})
			status       = response.status
			statusText   = response.statusText
			data.books         = await response.json()
		}

		catch (e){
			console.log ( e.message )
			data.books = null
		}

		//houses
		try {
			let response = await fetch ( 'https://anapioficeandfire.com/api/houses')
			status       = response.status
			statusText   = response.statusText
			data.houses        = await response.json()
		}

		catch (e){
			console.log ( e.message )
			data.houses = null
		}

		return {
			status,
			statusText,
			data
		}

	}
	
	render() {
		const { data, status, statusText } = this.props 

		//change the name intentionally

		if ( status !== 200 && status !== 201 ) {
			return <Error status = { status } statusText = { statusText } />
		}
		else {
			return (
				<MainLayout title = "Home" >
					
					<Row>
						<Col>
							<Panel 
								title       = "Characters"
								panelStyle = {{ borderLeft:"3px solid green", background:"transparent"}}
							>
								<Table characters = { data.characters}/>
							</Panel>
						</Col>
					</Row>
					
					<Row>

						<Col>
							<Panel 
								title      = "Books"
								panelStyle = {{ borderLeft:"3px solid orange", background:"transparent"}}
							>
								<Table books = { data.books}/>
							</Panel>
						</Col>
					</Row>

					<Row>

						<Col>
							<Panel 
								title      = "Houses"
								panelStyle = {{ borderLeft:"3px solid rgb(255, 0, 0,.5)", background:"transparent"}}
							>
								<Table houses = { data.houses}/>
							</Panel>
						</Col>
					</Row>

				</MainLayout>	
			)
		}

	}

}
//redux
const mapStateToProps = state => {
	return {
		homeMessage: state.homeMessage,
		todos      : state.todos
	}
}
import { connect } from 'react-redux'
export default connect( mapStateToProps )(Index)