var React = require('react');

var Router = require('react-router');
var SideMenu = require('./side-menu');

var JqxTabs;
module.exports = JqxTabs = React.createClass(
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
                //var jqxtabs = this;
                var domNode = this.getDOMNode();
                $(domNode).jqxTabs(
                {
                        width: '100%',
                        height: '100%',
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
                });
        },
        
        componentWillUnmount: function() { $(this.getDOMNode()).jqxTabs("destroy"); },
        
        render: function()
        {
            return (
                <div style={{ fontSize: '105%' }} >
                    <ul style={{ marginLeft: '12px' }} >
                        {
                            this.props.navData.items.reduce(
                                function(prev,child,index)
                                {
                                    prev.push(<li>{child.title}</li>);
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
                                    prev.push(<div>{child.title} content area</div>);
                                }
                                else if (child.content.type == "subtabs")
                                {
                                    prev.push(
                                        <div className='nested-tabs-container' style={{ width: '100%', height: '100%' }} >
                                            <JqxTabs navData={child.content} />
                                        </div>
                                    );
                                }
                                else
                                {
                                    var subItems = child.content.items;
                                    prev.push(
                                        <div>
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
