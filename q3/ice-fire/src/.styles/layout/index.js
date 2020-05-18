import css from 'styled-jsx/css'

export const Layout = css`
	* {
		transition: all 200ms ease;
	}

	::-webkit-scrollbar {
		width: 5px;
		margin-right:5px
	}	
	::-webkit-scrollbar-track {
		border-radius: var(--scrollbar-track-radius);
	}	
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background   : rgb(16, 145, 219);
	}


	.root {
		// display        : flex;
		// flex-direction : row;
		// align-items    : stretch;
		position:relative;
		justify-content: flex-start;
		height         : 100vh;
		width          : 100vw;
		overflow       : hidden
	}
	.sidebar-wrapper {
		position:relative;
		float:left;
		display   : flex;
		height    : 100%;
		width     : var(--sidebar-width);
		transition: all 200ms  ease;
	}
	.sidebar-wrapper.minimized {
		width:var(--sidebar-minimized-width);
	}
	

	.content-area {
		display        : flex;
		flex-direction : column;
		align-items    : flex-start;
		justify-content: flex-start;
		height         : 100%;
		width          : calc(100vw - var(--sidebar-minimized-width));		
	}

	.content-area.minimized {
		position:relative;
		float:left;
		display        : flex;
		flex-direction : column;
		align-items    : flex-start;
		justify-content: flex-start;
		height         : 100%;
		width          : calc(100vw - var(--sidebar-width));
	}
	.header {
		width          : 100%;
		font-size      : 1rem;		
		height         : var(--header-height);		
		box-sizing     : border-box;
	}
	.content {
		height        : calc(100vh -  var(--header-height) - var(--footer-height));
		background    : rgba(0,0,0,.05);
		width         : 100%;
		display       : flex;
		align-items   : flex-start;
		flex-direction: column;
		padding       : 2rem 4rem;
		box-sizing    : border-box;
		overflow      : hidden;
		overflow-y    : scroll
	}
	
	.footer {
		height     : var(--footer-height);
		display    : flex;
		align-items: center;
		padding    : 1.5rem 2rem;
		box-sizing : border-box;
		width      : 100%;
	}
	
`