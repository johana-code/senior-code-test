import {withRouter} from 'next/router'
import MainLayout from '@components/layout'

import Title from '@components/ui/general/title'
import Panel from '@components/ui/general/panel'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Post = ({ router }) => {

	// let type = router.query.type

		return (
			<MainLayout title = {`${router.query.title} Post`} >
				
					<Link href="/">Back</Link>

					<Row>
						<Col>
							<Panel 
								title       = { router.query.type }
								panelStyle = {{ borderLeft:"3px solid green"}}
							>
								<pre style = {{ color: 'grey'}}>
									{ JSON.stringify(JSON.parse(router.query.data),null, 4)}
								</pre>
							</Panel>
						</Col>
					</Row>
				
			</MainLayout>
			
		)
	}

export default withRouter(Post)