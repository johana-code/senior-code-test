import css from 'styled-jsx/css'

export const DrawerStyle = css`
	* {
		transition: all 500ms ease
	}
	
	//right drawer
	.drawer {
		position  : absolute;
		top       : 0;
		right     : calc(0px - var(--drawer-sm-width));
    	width     : var(--drawer-sm-width);
		height    : 100vh;
		background: var(--drawer-background);
		z-index   : 10000;
		box-shadow: var(--drawer-shadow)
	}
	.drawer.xs {
		right     : calc(0px - var(--drawer-xs-width));
    	width     : var(--drawer-xs-width);
	}
	.drawer.md {
		right     : calc(0px - var(--drawer-md-width));
    	width     : var(--drawer-md-width);
	}
	.drawer.lg {
		right     : calc(0px - var(--drawer-lg-width));
    	width     : var(--drawer-lg-width);
	}
	.drawer.open, .drawer.open.sm, .drawer.open.md,.drawer.open.lg{
		right: 0
	}
	
	//left drawer
	.drawer.left.xs {
		left     : calc(0px - var(--drawer-xs-width));
    	width     : var(--drawer-xs-width);
	}
	.drawer.left {
		position  : absolute;
		top       : 0;
		left     : calc(0px - var(--drawer-sm-width));
    	width     : var(--drawer-sm-width);
		height    : 100vh;
		background: var(--drawer-background);
		z-index   : 10000;
		box-shadow: var(--drawer-shadow)
	}
	.drawer.left.md {
		left     : calc(0px - var(--drawer-md-width));
    	width     : var(--drawer-md-width);
	}
	.drawer.left.lg {
		left     : calc(0px - var(--drawer-lg-width));
    	width     : var(--drawer-lg-width);
	}
	.drawer.left.open, .drawer.left.open.sm, .drawer.left.open.md,.drawer.left.open.lg{
		left: 0
	}	


	//top drawer
	.drawer.top.xs {
		top     : calc(0px - var(--drawer-xs-width));
    	height     : var(--drawer-xs-width);
	}
	.drawer.top {
		position  : absolute;
		left       : 0;
		top       : calc(0px - var(--drawer-sm-width));
    	height     : var(--drawer-sm-width);
		width    : 100vw;
		background: var(--drawer-background);
		z-index   : 10001;
		box-shadow: none
	}
	.drawer.top.md {
		top     : calc(0px - var(--drawer-md-width));
    	height     : var(--drawer-md-width);
	}
	.drawer.top.lg {
		top     : calc(0px - var(--drawer-lg-width));
    	height     : var(--drawer-lg-width);
	}
	.drawer.top.open, .drawer.top.open.sm, .drawer.top.open.md,.drawer.top.open.lg{
		top: 0
	}	


	//bottom drawer
	.drawer.bottom.xs {
		bottom     : calc(0px - var(--drawer-xs-width));
    	height     : var(--drawer-xs-width);
	}
	.drawer.bottom {
		position  : absolute;
		left      : 0;
		top:unset;
		bottom    : calc(0px - var(--drawer-sm-width));
    	height    : var(--drawer-sm-width);
		width     : 100vw;
		background: var(--drawer-background);
		z-index   : 10001;
		box-shadow: none
	}
	.drawer.bottom.md {
		bottom     : calc(0px - var(--drawer-md-width));
    	height     : var(--drawer-md-width);
	}
	.drawer.bottom.lg {
		bottom     : calc(0px - var(--drawer-lg-width));
    	height     : var(--drawer-lg-width);
	}
	.drawer.bottom.open, .drawer.bottom.open.sm, .drawer.bottom.open.md,.drawer.bottom.open.lg{
		bottom: 0
	}	


	//overlay
	.overlay {
		position  : absolute;
		left      : 0;
		top       : 0;
		width     : 100vw;
		height    : 100vh;
		display   : none;
		opacity   : 0;
		background: rgba(0,0,0,.05);
		z-index   : 9999
	}
	.overlay.open{
		display   : block;
		opacity   : 1
	}
`