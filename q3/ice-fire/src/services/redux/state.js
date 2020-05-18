const state =  {
	homeMessage : `Shared Message`,
	sidebar: {
		avatar      : {
			url        : "/avatar.jpg",
			name       : "Johana Mbuguah",
			role       : "Technical Lead"
		},
		links       : [
			{
				title     : "App"
			},
			{
				icon      : "pie-chart",
				text      : "Analytics",
				active    : true,
				children  : [
					{
						text    : "Aggregations"					
					},
					{
						text    : "Monitors",
						children: [
							{
								text  : "Channels"
							},
							{
								text  : "Transactions"
							}
						]
					}
				]
			},
			{
				icon      : "import",
				text      : "Dashboard"
			},
			{
				icon      : "setting",
				text      : "Settings",
				children  : [
					{
						text    : "Account"
					},
					{
						text    : "Theme"
					}
				]
			},
			{
				title     : "Showcase"
			},
			{
				icon      : "columns",
				text      : "Elements",
				children: [
					{
						text  : "General"
					},
					{
						text  : "Form"
					}
				]
			},
			{
				icon      : "unlink",
				text      : "Widgets"
			},
			{
				icon      : "circle-o-notch",
				text      : "Apps"
			}
		]
	},
	todos : [
		{
			id        : 0,
			completed : false,
			text      : 'Todo item one'
		}
	]
}

export default state