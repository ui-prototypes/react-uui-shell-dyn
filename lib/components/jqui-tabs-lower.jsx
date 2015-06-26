var React = require('react');

var Router = require('react-router');
var SideMenu = require('./side-menu');

var JquiTabsLower;
module.exports = JquiTabsLower = React.createClass(
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
            /* need parent id here */
            return (
                <div style={{ fontSize: '95%' }} >
                    <ul style={{ marginLeft: '12px' }} >
                        <li><a href="#subtab-1"><span>Sub Tab 1</span></a></li>
                        <li><a href="#subtab-2"><span>Sub Tab 2</span></a></li>
                        <li><a href="#subtab-3"><span>Sub Tab 3</span></a></li>
                    </ul>
                    <div id="subtab-1">Sub Tab 1 content</div>
                    <div id="subtab-2">Sub Tab 2 content</div>
                    <div id="subtab-3">Sub Tab 3 content</div>
                </div>
            );
        }
});
