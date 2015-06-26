var React = require('react');

var Router = require('react-router');
var SideMenu = require('./side-menu');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;

var BsTabsLower;
module.exports = BsTabsLower = React.createClass(
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
                /*var domNode = this.getDOMNode();
                $(domNode).tabs(
                {
                        heightStyle: "fill"
                });
                $(domNode).on('selected', function(event)
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
        
        componentWillUnmount: function() { /*$(this.getDOMNode()).tabs("destroy");*/ },
        
        render: function()
        {
            /* need parent id here */
            return (
                <TabbedArea defaultActiveKey={0} style={{ fontSize: '95%', paddingTop: '5px' }} >
                    {
                        this.props.navData.items.reduce(
                            function(prev,child,index)
                            {
                                if (!child.content)
                                {
                                    prev.push(
                                        <TabPane eventKey={index} tab={child.title}>Sub Item {child.title} content</TabPane>
                                    );
                                }
                                else if (child.content.type == "subtabs")
                                {
                                    prev.push(
                                        <TabPane eventKey={index} tab={child.title}>Do you really want more tabs here?</TabPane>
                                    );
                                }
                                else
                                {
                                    var subItems = child.content.items;
                                    prev.push(
                                        <TabPane eventKey={index} tab={child.title}>
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
                                        </TabPane>
                                    );
                                }
                                return prev;
                            },
                            []
                        )
                    }
		</TabbedArea>
            );
        }
});
