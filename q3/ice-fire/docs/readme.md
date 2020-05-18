## Zirconium Docs
#### Customizing the default theme

@themes/collections/theme-custom.js

```javascript

	//import the default theme
	import theme from '@themes/collections/theme-default'

	// clone the default theme
	let custom = { ...theme }

	// extend the default theme defaults

	//sidebar scrollbar
	custom.light.scrollBar.thumbBackground                  =  'rgba(145, 255, 255, 0.4)';
	custom.light.scrollBar.width                            =  '4px';
	custom.light.scrollBar.trackRadius                      =  '5px';
	custom.light.scrollBar.thumbRadius                      =  '30px';

	//sidebar
	custom.light.sidebar.minimizedWidth                     =  '60px';
	custom.light.sidebar.maximizedWidth                     =  '250px';
	custom.light.sidebar.logo.height                        =  '60px';
	custom.light.sidebar.avatar.background                  =  'linear-gradient(180deg, rgb(12, 145, 216) 0%, rgb(42, 140, 236) 100%)';
	custom.light.sidebar.avatar.leftBorder                  =  'rgb(81, 201, 255)';
	custom.light.sidebar.avatar.onlineColor                 =  'rgb(0, 255, 0)';
	custom.light.sidebar.avatar.text                        =  'white';
	custom.light.sidebar.avatar.height                      =  '150px';
	custom.light.sidebar.avatar.imageDimensions             =  '60px';
	custom.light.sidebar.avatar.imageWidth                  =  '64px';
	custom.light.sidebar.body.text                          =  'white';
	custom.light.sidebar.body.active.color                  =  'rgba(7, 165, 240, 0.58)';
	custom.light.sidebar.body.active.minimizedColor         =  'rgba(0, 0, 0, 0.02)';
	custom.light.sidebar.body.active.leftBorder             =  'white';
	custom.light.sidebar.body.rootMenu.hoverBackground      =  'rgba(0, 0, 0, 0.1)',      ;
	custom.light.sidebar.body.nestedMenu.borderColor        =  '#afd7f542';
	custom.light.sidebar.body.nestedMenu.beforeColor        =  '#91ffff';
	custom.light.sidebar.body.nestedMenu.background         =  '#0f8ae0f5';
	custom.light.sidebar.body.nestedMenu.minimizedListColor =  'grey';
	custom.light.sidebar.body.nestedMenu.minimizedBackground=  'white';
	custom.light.sidebar.body.nestedMenu.minimizedShadow    =  '1px 1px 5px -1px rgba(228, 228, 228, 0.9607843137254902)';
	custom.light.sidebar.body.nestedMenu.minimizedWidth     =  '120px';
	custom.light.sidebar.body.title.text                    =  'rgb(177, 229, 255)';
	custom.light.sidebar.body.title.minimizedColor          =  'transparent';
	custom.light.sidebar.body.title.minimizedBackground     =  'rgba(57, 57, 58, 0.09)', ;
	custom.light.sidebar.body.title.minimizedBottomBorder   =  '1px solid rgba(255, 255, 255, 0.13)';
	custom.light.sidebar.footer.rightBorder                 =  '1px solid transparent';
	custom.light.sidebar.footer.height                      =  '42px';

	export default custom
```