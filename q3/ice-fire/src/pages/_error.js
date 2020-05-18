import MainLayout from '@components/layout'

export default ({ status, statusText }) => (
	<MainLayout title = { `Error ${status || 404 }` }>
		<p>
			<b>{status || 404 } |</b> { statusText || `Page not found` }
		</p>
	</MainLayout>
)