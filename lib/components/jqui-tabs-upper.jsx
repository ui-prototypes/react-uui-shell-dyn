var React = require('react');

var Router = require('react-router');
var SideMenu = require('./side-menu');
var JquiTabsLower = require('./jqui-tabs-lower');

var JquiTabsUpper;
module.exports = JquiTabsUpper = React.createClass(
{

        onSelectTab: function(selectedDataItems)
        {
                var msg = "Tab select";
                /****for (var i = 0; i < selectedDataItems.length; i++)
                {
                        var dataItem = selectedDataItems[i];
                        var rowIndex = dataItem.rowIndex;
                        var rowData = dataItem.rowData;
                        msg += " - row " + rowIndex + " - row data: " + rowData.FirstName + " " + rowData.LastName;
                }****/
                alert(msg);
        },

        componentDidMount: function()
        {
                //var props = this.props;
                //var jquitabs = this;
                var domNode = this.getDOMNode();
                $(domNode).tabs(
                {
                        heightStyle: "fill"
                });
                /*$(domNode).on('selected', function(event)
                {
                        // event arguments
                        //var args = event.args;
                        // row data
                        //var rowData = args.row;
                        // row key
                        //var rowKey = args.key;
                        var selectedTab = event.args.item;
                        //alert('The selected tab is '+ selectedTab);
                        //jqxtabs.onSelectTab(someUsefulData);
                });*/
        },
        
        componentWillUnmount: function() { $(this.getDOMNode()).tabs("destroy"); },
        
        render: function()
        {
            var subItems =
	    [
		{
		    title: "My Services",
		    content:
		    {
			items:
			[
			    { title: "Generic Grid", content: "/grid" },
			    { title: "Kendo Grid", content: "/kgrid" },
			    { title: "Kendo Dial", content: "/dial" },
			    { title: "My JQX Grid", content: "/jqxgrid" },
			    { title: "Generic Form", content: "/form" },
			    { title: "Function 1" },
			    { title: "Function 2" },
			    { title: "Function 3" },
			    { title: "Function 4" },
			    { title: "Function 5" },
			    { title: "Function 6" },
			    { title: "Function 7" },
			    { title: "Function 8" },
			    { title: "Function 9" },
			    { title: "Function 10" },
			    { title: "Function 11" },
			    { title: "Function 12" },
			    { title: "Function 13" },
			    { title: "Function 14" },
			    { title: "Function 15" },
			    { title: "Function 16" },
			    { title: "Function 17" },
			    { title: "Function 18" },
			    { title: "Function 19" },
			    { title: "Function 20" }
			]
		    }
		},
		{
		    title: "Resources",
		    content:
		    {
			items:
			[
			    { title: "Generic Grid" },
			    { title: "Generic Form" },
			    { title: "Function 1" }
			]
		    }
		},
		{
		    title: "Emptiness"
		},
		{
		    title: "Organization",
		    content:
		    {
			items:
			[
			    { title: "Generic Grid" },
			    { title: "Generic Form" },
			    { title: "Function 1" }
			]
		    }
		}
	    ]

            return (
                <div style={{ fontSize: '105%' }} >
                    <ul style={{ marginLeft: '12px' }} >
                        {
                            this.props.navData.items.reduce(
                                function(prev,child,index)
                                {
                                    prev.push(<li><a href="#fragment-{child.id}"><span>{child.title}</span></a></li>);
                                    return prev;
                                },
                                []
                            )
                        }
                    </ul>
                    {
                        this.props.navData.items.reduce(
                            function(prev,child,index)
                            {
                                if (!child.content)
                                {
                                    prev.push(<div id="fragment-{child.id}">{child.title} content area</div>);
                                }
                                else if (child.content.type == "subtabs")
                                {
                                    prev.push(
                                        <div id="fragment-{index}" className='nested-tabs-container' style={{ width: '100%', height: '100%' }} >
                                            <JquiTabsLower navData={child.content} />
                                        </div>
                                    );
                                }
                                else
                                {
                                    var subItems = child.content.items;
                                    prev.push(
                                        <div id="fragment-{index}">
                                            <div className='side left'>
                                                <SideMenu items={subItems} />
                                            </div>
                                            <div className='content'>
                                                <Router.RouteHandler />
                                            </div>
                                            <div className='side right'>
                                                <div className='panel panel-info'>
                                                    <div className='panel-heading'>Demo summary</div>
                                                    <div className='panel-body'>
                                                        <ul>
                                                            <li>Fixed border layout using CSS</li>
                                                            <li>React based accordion menu</li>
                                                            <li>Kendo Grid Table with proper resizing</li>
                                                            <li>JQX Grid Table with proper resizing</li>
                                                            <li>Navigation and page management using React-router</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return prev;
                            },
                            []
                        )
                    }
                </div>
            );
        }
});
