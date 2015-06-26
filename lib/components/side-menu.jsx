var React = require('react');
var Router = require('react-router');
var Accordion = require('./accordion-menu');

module.exports = React.createClass(
{
    displayName: 'SideMenu',
    render: function()
    {
        return (<Accordion.Menu>
        {
            this.props.items.reduce(
                function(prev,child,index)
                {
                    if (!child.content)
                    {
                        prev.push(<Accordion.Section title={child.title}><ul></ul></Accordion.Section>);
                        return prev;
                    }
                    var section = <Accordion.Section title={child.title}><ul>
                    {
                        child.content.items.reduce(
                            function(subPrev,subChild,subIndex)
                            {
                                if (!subChild.content)
                                {
                                    subPrev.push(<li>{subChild.title}</li>);
                                }
                                else
                                {
                                    { /* TODO: check if content is a string, and if not, do something else */ }
                                    subPrev.push(<li><Router.Link to={subChild.content}>{subChild.title}</Router.Link></li>);
                                }
                                return subPrev;
                            },
                            []
                        )
                    }
                    </ul></Accordion.Section>;
                    prev.push(section);
                    return prev;
                },
                []
            )
        }
        </Accordion.Menu>);
    }
});
