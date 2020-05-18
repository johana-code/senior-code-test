import css from 'styled-jsx/css'

export const SideNavStyle = css`

	/* ---------------------
				
		SCROLLBAR

	---------------------*/

	::-webkit-scrollbar {
		width: var(--scrollbar-width);
	}	
	::-webkit-scrollbar-track {
		border-radius: var(--scrollbar-track-radius);
	}	
	::-webkit-scrollbar-thumb {
		border-radius: var(--scrollbar-thumb-radius);
		background   : var(--thumb-bg)
	}



	/* ---------------------
				
		SIDEBAR

	---------------------*/
	.sidebar {
		width     : 100%;
		height    : 100%;
		margin    : 0;
		padding   : 0;
		position  : relative;
		background: var(--sidebar-background);

		scrollbar-color: var(--thumb-bg) transparent;
  		scrollbar-width: var(--scrollbar-width);
	}


	/* ---------------------
				
		LOGO

	---------------------*/
	.sidebar-brand {
		height: var(--logo-height);
	}


	/* ---------------------
				
		AVATAR

	---------------------*/
	.sidebar-avatar {
		height     : var(--avatar-height);
		background : var(--avatar-bg);
		border-left: 3px solid var(--avatar-left-border);
		overflow   : hidden;
		position   : relative;
	}
	.sidebar-avatar .wrapper {
		position       : absolute;
		width          : 100%;
		height         : 100%;
		display        : flex;
		align-items    : center;
		flex-direction : column;
		justify-content: center
	}
	.sidebar-avatar .wrapper::after {
		content      : '';
		position     : absolute;
		width        : 8px;
		height       : 8px;
		background   : var(--avatar-online);
		right        : 31%;
		border-radius: 50%;
		top          : 20%;
		z-index      : 100;
	}
	.sidebar-avatar .wrapper .user-image{
		width        : var(--avatar-image-dimensions);
		height       : var(--avatar-image-dimensions);
		border-radius: 50%;
		overflow     : hidden;
		margin-bottom:1rem;
	}
	.sidebar-avatar .wrapper .user-name{
		font-weight: bold;
		font-size  : .8rem;
		color      : var(--avatar-text)
	}
	.sidebar-avatar .wrapper .user-role{
		font-size     : .7rem;
		color         : var(--avatar-text);
		letter-spacing: 1px;
	}
	.sidebar-avatar .wrapper .user-image img{
		width: var(--avatar-image-width)
	}
	.sidebar-avatar.minimized {
		display:none
	}


	/* ---------------------
				
		FOOTER

	---------------------*/
	.sidebar-footer{
		width           : 100%;
		height          : var(--sidebar-footer-height);
		bottom          : 0;
		position        : absolute;
		border-right    : var(--footer-right-border);
		display         : flex;
		flex-direction  : row;
		align-items     : center;
		justify-content : space-around;
		padding         : 0 2rem
	}

	

	/* ---------------------
				
		SIDEBAR BODY

	---------------------*/
	.sidebar-body{
		height  : calc(100vh - var(--logo-height) - var(--avatar-height) - var(--sidebar-footer-height) - 1rem) !important;
		overflow: hidden;	
	}
	.sidebar-body:hover{
		height      : calc(100vh - var(--logo-height) - var(--avatar-height) - var(--sidebar-footer-height) - 1rem) !important;
		overflow    : scroll;
		overflow-x  : hidden;
		margin-right: var(--scrollbar-width) !important;
	}
	.sidebar-body.minimized{
		height  : calc(100vh - var(--logo-height) - var(--sidebar-footer-height)) !important;
		overflow: unset;
		margin  : 0 !important
	}	
	.sidebar-body, .sidebar-body > li, .nested-menu, .nested-menu > li {
		padding         : 0;
		margin          : 0;
		list-style-type : none;			
		box-sizing      : border-box;
		color           : var(--sidebar-text-color);
	}
	.nested-menu {
		position: relative;
	}
	.nested-menu:not(.minimized) > li {
		padding-left: 1.5rem;
		border-left : 1px solid var(--nested-menu-border-color);
		font-size   : .8rem;
	}
	.nested-menu:not(.minimized) > li::before {
		content         : '';
		width           : 5px;
		height          : 5px;
		background      : var(--nested-menu-before-color);
		position        : absolute;
		left            : -2px;
		margin-top      : 5px;
	}			
	.sidebar-body .root-menu {
		padding: 0;
		cursor : pointer
	}
	.nested-menu  li {
		padding   : .5rem 1.5rem;
		cursor    : pointer;	
		transition: all 500ms ease;
	}
	.nested-menu  li {		
		animation: fade-in-nested 500ms 1 ease;
	}
	.sidebar-body .root-menu{		
		animation: fade-in-root 500ms 1 ease;
	}


	/* root menu hover style */
	.sidebar-body:not(.minimized) .root-menu:hover .root-menu-wrapper {
		padding-left:2.5rem
	}
	.sidebar-body.minimized .root-menu:hover {
		background: var(--root-menu-hover-bg-color)
	}
	.sidebar-body.minimized .root-menu.active {
		padding: 0
	}
	.sidebar-body.minimized .root-menu.active .root-menu-wrapper {
		padding: 0.75rem 1.3rem;
	}
	.sidebar-body.minimized .root-menu.active:hover {
		padding: 0
	}
	

	//active style
	.sidebar-body .root-menu.active {
		background:var(--root-menu-hover-bg-color)
	}
	.sidebar-body .root-menu.active .root-menu-wrapper {
		border-left: 3px solid var(--active-item-left-border);
		background : var(--active-item-color);
	}
	.sidebar-body.minimized .root-menu.active .root-menu-wrapper {
		background: var(--active-item-minimized-color)
	}
	.sidebar-body:not(.minimized) .root-menu.active .root-menu-wrapper {
		border-left : 3px solid var(--active-item-left-border);
		background  : var(--active-item-color);
		padding-left: 1.6rem;
	}
	 
	.nested-menu{
		margin-top : .0;
		margin-left: 2rem;
	}
	.nested-menu  li:hover {
		padding-left:2rem
	}


	/* sidebar minimized style */
	.sidebar-body.minimized, .sidebar-body.minimized > li, .nested-menu.minimized, .nested-menu.minimized > li {
		position       : relative;
		float          : left;
		padding        : 0;
		margin         : 0;
		list-style-type: none;			
		box-sizing     : border-box;
		color          : var(--sidebar-text-color);
		animation      : root-slide-in 200ms 1 ease-out;
	}

	.nested-menu.minimized > li {
		color:var(--nested-menu-minimized-list-color)
	}

	/* list styles */
	.sidebar-body.minimized .root-menu, .nested-menu.minimized  li {
		padding   : .75rem 1rem;
		cursor    : pointer;
		transition: all 500ms ease;
	}
	.nested-menu.minimized  li:hover {
		padding-left:1.5rem
	}

	/* root list element styles */
	.sidebar-body.minimized .root-menu {
		width  : var(--sidebar-minimized-width);
		padding: .85rem 1.5rem
	}
	.sidebar-body.minimized .root-menu:hover {
		padding-left: 1rem;
		color       : var(--sidebar-text-color);
	}		
	.sidebar-body.minimized .root-menu > ul {
		left : var(--sidebar-minimized-width);
	}

	/* display the nested menu on hovering the list */
	li:hover > .nested-menu.minimized {
		display:block
	}

	/* nested menu styles */
	.nested-menu.minimized {
		position     : absolute;
		left         : 100%;
		top          : 0;
		display      : none;
		background   : var(--nested-menu-minimized-bg);
		box-shadow   : var(--nested-menu-minimized-shadow);
		border-radius: 3px;
	}
	.nested-menu.minimized, .nested-menu.minimized > li {
		width : var(--nested-menu-minimized-width);
	}

	/* nested menu animation */
	.nested-menu.minimized{			
		animation: nested-slide-in 200ms 1 ease-out;
	}

	// @keyframes fade-in-nested {
	// 	0%   {opacity: 0;padding-left: 0rem}
	// 	50%  {opacity: 1;padding-left: 2.5rem}
	// 	100% {opacity: 1;padding-left: 1rem}
	// }
	// @keyframes fade-in-root {
	// 	0%   {opacity: 0;padding-left: -10rem}
	// 	50%  {opacity: 1;padding-left: 2.5rem}
	// 	100% {opacity: 1;padding-left: 1.5rem}
	// }
	// @keyframes nested-slide-in {
	// 	0%   {left:  0px; width :     0;opacity: 0}
	// 	100% {left: 100%; width : 120px;opacity: 1}
	// }
	.hidden-menu {
		display:none
	}


	/* Root menu wrapper - maximized */
	.sidebar-body:not(.minimized) .root-menu .root-menu-wrapper {
		padding  : 0.75rem 1.8rem;
		font-size: 0.8rem;
	}


	/* ---------------------
				
		TITLE

	---------------------*/
	.sidebar-body .title {
		padding       : 1.2rem .8rem;
		font-weight   : bold;
		font-size     : 0.8rem;
		color         : var(--title-color);
		letter-spacing: 1px;

	}
	.sidebar-body.minimized .title {
       padding       : 1rem 0.8rem;
       height        : 2px;							
       font-weight   : bold;
       font-size     : 0.8rem;
       color         : var(--title-minimized-color);
       letter-spacing: 1px;
	}
	.sidebar-body.minimized .title::after {
		content       : '';
		position      : absolute;
		width         : 100%;
		height        : 2px;
		left          : 0px;
		width         : 60px;
		background    : var(--title-minimized-bg);
    	border-bottom : var(--title-minimized-bottom-border);
	}
	.sidebar-body.minimized .title:nth-child(1){
		display:none
	}


	/* ---------------------
				
		ICONS

	---------------------*/
	.root-menu-wrapper, .root-menu-wrapper > div {
		display         : flex;
		flex-direction  : row;
		align-items     : center;
		justify-content : space-between
	}
	.root-menu-wrapper > div > .menu-text {
		margin-left : 20px
	}
	.link-wrapper, .link-wrapper > div {
		display         : flex;
		flex-direction  : row;
		align-items     : center;
		justify-content : space-between
	}
	.sidebar-body.minimized .root-menu .root-menu-wrapper > div  .menu-text {
		display:none
	}
	.sidebar-body.minimized .root-menu .root-menu-wrapper  > i.rs-icon {
		opacity:0
	}
`