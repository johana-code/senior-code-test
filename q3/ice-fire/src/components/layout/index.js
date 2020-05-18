import React, { useState } from 'react'
import Link      from  'next/link'
import Head      from 'next/head'
import Router    from 'next/router'
import NProgress from 'nprogress'


//react bootstrap
import { Container } from 'react-bootstrap'


//styles
import { Layout as LayoutStyle } from '@styles/layout'

//themes 
import themeDefault from '@themes/default'
let theme = themeDefault.light



// progress bars
Router.onRouteChangeStart    = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError    = () => NProgress.done()


//components
import SideNav from '@components/layout/elements/sidenav'
import NavBar  from '@components/layout/elements/navbar'
import Footer  from '@components/layout/elements/footer'
import Drawer  from '@components/layout/elements/drawer'


const Layout = ({ children, title, sidebar }) => {

	//sate with react hooks
	const [ minimized, setMinimized ]             = useState ( true )
	const [ minimizedDrawer, setMinimizedDrawer ] = useState ({
		'right-drawer': false,
		'top-drawer'  : false
	})


	//toggle the menu
	const toggleSideNav = () => {
		setMinimized (!minimized)
	}	

	//toggle drawer
	const toggleDrawer =  ( id )  => {
		minimizedDrawer[id] = !minimizedDrawer[id]
		setMinimizedDrawer ({
			...minimizedDrawer
		})
	}

	//render data
	return (	
		<div className = 'root'>

			<Head><title>Ice and Fire</title></Head>

			{/* side bar */}
			<div className= { minimized ? "sidebar-wrapper minimized": "sidebar-wrapper" } style = {{background:'linear-gradient(0deg,rgb(103, 58, 183) 0%,rgb(3, 169, 244) 100%)'}}>
				{/* <SideNav minimized = { minimized } config = { sidebar } /> */}
			</div>


			{/* content area */}
			<div className= { minimized ?  "content-area" : "content-area minimized"}>

				{/* navbar */}
				<header className = 'header'>					
					<NavBar minimized = { minimized } toggle = { toggleSideNav } toggleDrawer = { () => toggleDrawer('right-drawer') }/>
				</header>

				{/* content area */}
				<main className = 'content'>
					<Container>{children}</Container>
				</main>		
				
				{/* footer */}
				<footer className = 'footer'>
					<Footer/>
				</footer>

			</div>

			{/* right drawer */}
			<Drawer 
				size      = {'md' } 
				overlay   = { true } 
				isOpen    = { minimizedDrawer['right-drawer'] } 
				toggle    = { () => toggleDrawer('right-drawer') }
				placement = { "right" }
			>
				{/* content goes here */}
			</Drawer>

			{/* top drawer */}
			<Drawer 
				size      = {'xs' } 
				overlay   = { false } 
				isOpen    = { minimizedDrawer['top-drawer'] } 
				toggle    = { () => toggleDrawer('top-drawer') }
				placement = { "top" }
			>
				{/* content goes here */}
			</Drawer>


			{/* styles */}
			<style jsx>{LayoutStyle}</style>

			{/* theme */}
			<style jsx global>{`
				*{
					--sidebar-width          : ${theme.layout.sidebar.width};
					--sidebar-minimized-width: ${theme.layout.sidebar.minimizedWidth};
					--header-height          : ${theme.layout.header.height};
					--footer-height          : ${theme.layout.footer.height};
				}
			`}</style>

		</div>
	)

}

//redux
import { connect } from 'react-redux'
import { Actions } from '@services'

const mapStateToProps = state => {
	return {
		homeMessage: state.homeMessage,
		todos      : state.todos,
		sidebar    : state.sidebar
	}
}
export default connect( mapStateToProps)( Layout )