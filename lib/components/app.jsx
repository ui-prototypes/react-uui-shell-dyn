var React = require('react');
//var Router = require('react-router');

var JquiTabsUpper = require('./jqui-tabs-upper');
var JqxTabs = require('./jqx-tabs');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var BsTabsUpper = require('./bootstrap-tabs-upper');

// The main view for the application, including the header, main nav and a content area
module.exports = React.createClass(
{
    displayName: 'App',

    componentDidMount: function()
    {
        this.resizeHandler = () => this.onResize();
        window.addEventListener('resize',this.resizeHandler,false);
        this.onResize();
    },

    componentWillUnmount: function() { window.removeEventListener(this.resizeHandler,false); },

    onResize: function()
    {
        // get content child and resize it to fill the center area
        var container = this.getDOMNode();
        var contentWrapper = $(container).find('div.content');
        if (contentWrapper.length > 0)
        {
            var contentWrapperHeight = contentWrapper[0].clientHeight;
            if (contentWrapper.length > 0)
            {
                var content = contentWrapper[0].children[0];
                content.height = contentWrapperHeight; // not working
            }
        }
        /*****
        var headingHeights = Array.prototype.slice.call(container.children).reduce((prev,child)=>{
            return child.className.indexOf('accordion-title') === 0 ? (prev + child.offsetHeight) : prev; 
        },0);

        // subtract the heights of all headings from the menu's container
        // will give us the height to use for the list content area
        var openHeight = containerHeight - headingHeights;
        openHeight = openHeight < 0 ? 0 : openHeight;
        if (this.state.openHeight !== openHeight) {
            this.setState({ openHeight: openHeight });    
        }
        *****/
    },

    render: function()
    {
        var navDataNew =
        {
            items:
            [
                {
                    id: "dashboardTopTab",
                    title: "Dashboard",
                    content:
                    {
                        type: "subtabs",
                        items:
                        [
                            {
                                id: "dashboardContent1",
                                title: "Dashboard 1"
                            },
                            {
                                id: "dashboardContent2",
                                title: "Dashboard 2"
                            },
                            {
                                id: "dashboardContent3",
                                title: "Dashboard 3"
                            }
                        ]
                    }
                },
                {
                    id: "configTopTab",
                    title: "Configuration",
                    content:
                    {
                        type: "subtabs",
                        items:
                        [
                            {
                                id: "configSubTab1-system",
                                title: "System",
                                content:
                                {
                                    type: "accordion",
                                    items:
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
                                }
                            },
                            {
                                id: "configSubTab2-network",
                                title: "Network",
                                content:
                                {
                                    type: "accordion",
                                    items:
                                    [
                                        {
                                            title: "Net Services",
                                            content:
                                            {
                                                items:
                                                [
                                                    { title: "My JQX Grid", content: "/jqxgrid" },
                                                    { title: "Generic Form", content: "/form" },
                                                    { title: "Function 1" },
                                                    { title: "Function 2" },
                                                    { title: "Function 3" },
                                                    { title: "Function 4" },
                                                    { title: "Function 5" },
                                                    { title: "Function 6" },
                                                    { title: "Function 7" }
                                                ]
                                            }
                                        },
                                        {
                                            title: "Net Resources",
                                            content:
                                            {
                                                items:
                                                [
                                                    { title: "Generic Grid" },
                                                    { title: "Generic Form" },
                                                    { title: "Function 1" },
                                                    { title: "Function 2" },
                                                    { title: "Function 3" },
                                                    { title: "Function 4" }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                id: "configSubTab3-traffic",
                                title: "Traffic",
                                content:
                                {
                                    type: "accordion",
                                    items:
                                    [
                                        {
                                            title: "Servers",
                                            content:
                                            {
                                                items:
                                                [
                                                    { title: "My JQX Grid", content: "/jqxgrid" },
                                                    { title: "Function 1" },
                                                    { title: "Function 2" },
                                                ]
                                            }
                                        },
                                        {
                                            title: "Policies",
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
                                }
                            },
                            {
                                id: "configSubTab4-security",
                                title: "Security"
                            }
                        ]
                    }
                },
                {
                    id: "monitoringTopTab",
                    title: "Monitoring",
                    content:
                    {
                        type: "subtabs",
                        items:
                        [
                            {
                                id: "monitoringSubTab1",
                                title: "Monitoring 1"
                            },
                            {
                                id: "monitoringSubTab2",
                                title: "Monitoring 2"
                            },
                            {
                                id: "monitoringSubTab3",
                                title: "Monitoring 3"
                            },
                            {
                                id: "monitoringSubTab4",
                                title: "Monitoring 4"
                            }
                        ]
                    }
                },
                {
                    id: "toolTopTab",
                    title: "Tools",
                    content:
                    {
                        type: "subtabs",
                        items:
                        [
                            {
                                id: "toolSubTabA",
                                title: "Tools A"
                            },
                            {
                                id: "toolSubTabB",
                                title: "Tools B"
                            },
                            {
                                id: "toolSubTabC",
                                title: "Tools C"
                            }
                        ]
                    }
                }
            ]
        };
        var navDataOld =
        {
            items:
            [
                {
                    title: "Dashboard"
                },
                {
                    title: "Configuration",
                    content:
                    {
                        items:
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
                    }
                },
                {
                    title: "Monitoring",
                    content:
                    {
                        items:
                        [
                            {
                                title: "Monitoring 1",
                                content:
                                {
                                    items:
                                    [
                                        { title: "My JQX Grid", content: "/jqxgrid" },
                                        { title: "Generic Form", content: "/form" },
                                        { title: "Function 20" }
                                    ]
                                }
                            },
                            {
                                title: "Monitoring 2",
                                content:
                                {
                                    items:
                                    [
                                        { title: "Function 1" },
                                        { title: "Generic Form" },
                                        { title: "Generic Grid" }
                                    ]
                                }
                            },
                            {
                                title: "Monitoring 3"
                            }
                        ]
                    }
                },
                {
                    title: "Tools",
                    content:
                    {
                        items:
                        [
                            {
                                title: "Tools 1"
                            },
                            {
                                title: "Tools 2"
                            },
                            {
                                title: "Tools 3"
                            },
                            {
                                title: "Tools 4"
                            }
                        ]
                    }
                }
            ]
        };
        return (
            <div className='wrapper'>
                <div className='top-and-center header'>
                    { /* class name 'upper-tabs-container' is not used anywhere at this time */ }
                    <div className='upper-tabs-container' style={{ position: 'absolute', top: '64px', left: '10px', right: '10px', bottom: '44px' }} >
                        <BsTabsUpper navData={navDataNew} />
                    </div>
                    <h1><span className='logo'>Brocade</span> 
                    <small>Welcome to the UUI Shell - React edition</small></h1>
                </div>
                <div className='bottom footer'>
                    <p>Copyright &copy; 2015 Brocade Communication systems.</p>
                </div>
            </div>
        );
    }
});
