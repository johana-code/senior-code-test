import css from 'styled-jsx/css'

export const NavBarStyle = css`

	.navbar {
		position         : relative;
		width            : 100%;
		height           : 100%;
		display          : flex;
		align-items      : center;
		flex-direction   : row;
		justify-content: space-between;
		background       : var(--navbar-background);			
		padding-right    : 2rem;
	}
	.navbar-left, .navbar-right {
		display        : flex;
		align-items    : center;
		flex-direction : row;
		justify-content: space-between;
		height:100%;
	}


	/*----------------------

		LEFT 

	  ----------------------*/

	.toggle {
		padding        : 0 1.8rem;
		height         : 100%;
		border-right   : var(--toggle-right-border);
		display        : flex;
		align-items    : center;
		justify-content: center;
		cursor         : pointer;
	}

	.brand-name  {
		font-size     : .9rem;
		color         : var(--brand-text);
		text-transform: capitalize;
		font-weight   : bold;
		padding       : 0 2rem 0 2rem;
		border-right  : var(--toggle-right-border);
		height        : 100%;
		display       : flex;
		align-items   : center;
		cursor        : context-menu;
	}

	.left-icons {
		display        : flex;
		flex-direction : row;
		align-items    : center;
		justify-content: space-around;
		padding        : 0 1rem;
		margin-left    : 1rem;
		border-width   : 1px;
		border-style   : solid;
		border-color   :  transparent rgba(0,0,0,.2) transparent rgba(0,0,0,.2);
	}

	.left-icons div {
		margin: 0 .8rem
	}
	.left-links {
		padding: 0 1rem;
		height:100%;
		display:flex;
		align-items:center;
		justify-content:center
	}
	.search {
		margin-left:2rem
	}


	/*----------------------

		RIGHT 
		
	  ----------------------*/

	  .right-icons {
		display        : flex;
		height:100%;
		flex-direction : row;
		align-items    : center;
		justify-content: space-around;
		padding        : 0 1rem;
		margin-left    : 1rem;
		border-width   : 0px;
		border-style   : solid;
		border-color   :  transparent rgba(0,0,0,.02) transparent transparent;
	}

	.right-icons div {
		margin: 0 .2rem
	}

	.right-icon-wrapper{
		width:30px;
		height:30px;
		border-radius:5px;
		display:flex;
		align-items:center;
		justify-content:center;
		cursor:pointer;
	}

	.right-icon-wrapper:hover{
		opacity: .5
	}

	.nav-icon-default {
		background: rgba(128, 128, 128, 0.08)
	}
	.nav-icon-danger {
		background: rgba(255, 0, 0, 0.06)
	}
	.nav-icon-success {
		background: rgba(139, 195, 74, 0.12)
	}

	.user-actions {
		display       : flex;
		flex-direction: row;
		align-items   : center;
		padding       : 0  1rem;
		height        : 100%;
		border-right  : 1px solid rgba(7, 164, 241, 0.2)
	}

	.greeting {
		padding  : 0 1rem 0 0;
		opacity  : .7;
		font-size: .9rem
	}

	.more, .fullscreen {
		padding    : .1rem;
		background : rgb(209, 238, 251);
		height     : 100%;
		display    : flex;
		align-items: center;
		justify-content:center
	}

	.fullscreen {
		background  : none;
		margin-left : 1rem;
		padding     : 0 2rem;
		background: rgba(242, 242, 242, 0.15);
		cursor:pointer;
	}

	.fullscreen:hover{
		opacity:.5
	}
`