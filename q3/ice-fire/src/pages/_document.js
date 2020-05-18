import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render(){
		return (
			<html lang = "en">
				<Head>
					<meta name    = "description" content = "A site for my programming portfolio"/>
					<meta charSet = "utf-8"/>
					<meta name    = "robots" content = "noindex, nofollow"/>
					<meta name    = "viewport" content = "width=device-width,initial-scale=1"/>

					{/* nprogress */}
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>

					{/* fonts */}
					<link href='https://fonts.googleapis.com/css?family=Montserrat'    rel='stylesheet' type='text/css'/>
					<link href='https://fonts.googleapis.com/css?family=Nunito'        rel='stylesheet' type='text/css'/>
					<link href='https://fonts.googleapis.com/css?family=Raleway'       rel='stylesheet' type='text/css'/>
					<link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'></link>
					<link href='https://fonts.googleapis.com/css?family=Work+Sans'     rel='stylesheet' type='text/css'></link>

					
				</Head>

				<body>
					<Main/>
					<NextScript/>
				</body>

				<style global jsx>{`
						* {
							transition: all 500ms ease
						}
						html {
							font-size  : 14px !important;
							overflow   : hidden;
						}
						body {
							font-family: century gothic;
							font-weight: normal;
							padding    : 0;
							margin     : 0;
							overflow   : hidden;
							font-size  : 12px !important;
						}
				`}</style>

			</html>
		)
	}
}