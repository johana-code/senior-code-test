import { Icon } from 'rsuite'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import{ Table } from 'react-bootstrap'
class r2gTable extends React.Component {

	constructor(){
		super()
		this.state = {
			activeTab: 0
		}
	}
	render() {

		const { characters,books, houses } = this.props

		if ( books ){

			return (
				<Table striped bordered hover size ="sm" variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Author</th>
							<th>Publisher</th>
							<th>Released</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ books.map ( ( book, index ) => {
							return (
								<Link href={ `/details/?data=${JSON.stringify(book)}&type=book detail`} as ={'/details/book'} key = {index}>
									<tr style = {{ cursor:'pointer'}}>
										<th>{index+1}</th>
										<th>{book.name}</th>
										<th>{book.authors}</th>
										<th>{book.publisher}</th>
										<th>{book.mediaType}</th>
										<th><a>View</a></th>
									</tr>
								</Link>
							)
						})}
					</tbody>
				</Table>			
			)
		}

		if( characters ){
			
			return (
				<Table striped bordered hover size ="sm" variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>Alias</th>
							<th>Gender</th>
							<th>Culture</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ characters.map ( ( character, index ) => {
							return (
								<Link href={ `/details/?data=${JSON.stringify(character)}&type=character detail`} as ={'/details/character'} key = {index}>
									<tr style = {{ cursor:'pointer'}}>
										<td>{index+1}</td>
										<td>{character.aliases}</td>
										<td>{character.gender}</td>
										<td>{character.culture}</td>
										<td><a>View</a></td>
									</tr>
								</Link>
							)
						})}
					</tbody>
				</Table>			
			)
		}

		if ( houses ) {

			return (
				<Table striped bordered hover size ="sm" variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Region</th>
							<th>Coat Of Arms</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ houses.map ( ( house, index ) => {
							return (
								<Link href={ `/details/?data=${JSON.stringify(house)}&type=house detail`} as ={'/details/house'} key = {index}>
									<tr style = {{ cursor:'pointer'}}>
										<th>{index+1}</th>
										<th>{house.name}</th>
										<th>{house.region}</th>
										<th>{house.coatOfArms}</th>
										<th><a>View</a></th>
									</tr>
								</Link>
							)
						})}
					</tbody>
				</Table>			
			)
		}

		return (
			<Row>
				<Col>
					<p>Data has expired, kindly refresh the page</p>
				</Col>
			</Row>
		)

		
	}
}

export default r2gTable