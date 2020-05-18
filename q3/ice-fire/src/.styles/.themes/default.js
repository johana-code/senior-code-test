export default {
	light : {

		//layout
		layout : {
			sidebar :{
				width         : '250px',
				minimizedWidth: '60px'
			},
			header : {
				height: '60px'
			},
			footer: {
				height: '30px'
			}
		},

		//sidebar
		sidebar                 : {
			background        : 'linear-gradient(0deg,rgb(103, 58, 183) 0%,rgb(3, 169, 244) 100%)',
	
			//sidebar scrollbar
			scrollBar               : {

				//colors
				thumbBackground: 'rgba(145, 255, 255, 0.4)',
		
				//dimensions
				width          : '4px',
				trackRadius    : '5px',
				thumbRadius    : '30px'
			},
	
			logo              : {
				height : '60px'
			},
	
			avatar                 : {
				//colors
				background     : 'linear-gradient(180deg, rgb(12, 145, 216) 0%, rgb(42, 140, 236) 100%)',
				leftBorder     : 'rgb(81, 201, 255)',
				onlineColor    : 'rgb(0, 255, 0)',
				text           : 'white',
	
				//dimensions
				height         : '150px',
				imageDimensions: '60px',
				imageWidth     : '64px'
			},
	
			body                   : {
	
				text                  : 'white',
	
				active                : {
					color                : 'rgba(7, 165, 240, 0.58)',
					minimizedColor       : 'rgba(0, 0, 0, 0.02)',
					leftBorder           : 'white',
				},
	
				rootMenu              : {
					hoverBackground      : 'rgba(0, 0, 0, 0.1)',
				},
	
				nestedMenu            : {
	
					//colors
					borderColor          : '#afd7f542',
					beforeColor          : '#91ffff',
					background           : '#0f8ae0f5',
					minimizedListColor   : 'grey',
					minimizedBackground  : 'white',
					minimizedShadow      : '1px 1px 5px -1px rgba(228, 228, 228, 0.9607843137254902)',
	
					//dimensions
					minimizedWidth       : '120px'				
				},
	
				title                 : {
					text                 : 'rgb(177, 229, 255)',
					minimizedColor       : 'transparent',
					minimizedBackground  : 'rgba(57, 57, 58, 0.09)',
					minimizedBottomBorder: '1px solid rgba(255, 255, 255, 0.13)'
				}
			},
	
			footer                 : {
				//colors
				rightBorder: '1px solid transparent',
	
				//dimensions
				height     : '42px'
			}
		},

		//content area
		navbar : {
			background:'white'
		},

		drawer : {
			xs         : '90px',
			sm         : '150px',
			md         : '280px',
			lg         : '450px',
			background : 'rgba(255,255,255,.9)',
			shadow     : 'rgba(15,15,15,.05) 0 0 0 1px, rgba(15,15,15,.1) 0 3px 6px, rgba(15,15,15,.2) 0 9px 24px'
		}
	} 
}
