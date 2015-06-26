var React = require('react');

module.exports =
{
    Menu: React.createClass(
    {
        getInitialState: function() { return { openIndex: 0, openHeight: 0 }; },

        componentDidMount: function()
        {
            this.resizeHandler = () => this.onResize();
            window.addEventListener('resize',this.resizeHandler,false);
            this.onResize();
        },

        componentWillUnmount: function() { window.removeEventListener(this.resizeHandler,false); },

        onResize: function()
        {
            var container = this.refs.container.getDOMNode();
            var containerHeight = container.clientHeight;
            var headingHeights = Array.prototype.slice.call(container.children).reduce((prev,child)=>
            {
                return child.className.indexOf('accordion-title') === 0 ? (prev + child.offsetHeight) : prev;
            },0);

            // subtract the heights of all headings from the menu's container
            // will give us the height to use for the list content area
            var openHeight = containerHeight - headingHeights;
            openHeight = openHeight < 0 ? 0 : openHeight;
            if (this.state.openHeight !== openHeight) { this.setState( { openHeight: openHeight } ); }
        },

        toggleOpen: function(id)
        {
            if (this.state.openIndex !== id) { this.setState( { openIndex: id } ); }
        },

        render: function()
        {
            return (<div ref='container' className='accordion-menu'>
                {this.props.children.reduce((prev,child,index) =>
                {
                    var selected = index === this.state.openIndex;
                    prev.push(
                        <div
                            className={'accordion-title'+(selected?' accordion-selected':'')}
                            key={'title'+index}
                            onClick={this.toggleOpen.bind(this,index)}>
                            <p><i className={'fa fa-caret-'+(selected?'down':'right')}></i>{child.props.title}</p>
                        </div>
                    );
                    prev.push(
                        <div
                            key={'body'+index}
                            style={{height:selected ? (this.state.openHeight+'px') : '0'}}
                            className={'accordion-section'+(selected?' accordion-selected':'')}>
                            {child}
                        </div>
                    );
                    return prev;
                },[])}
            </div>);
        }
    }),
    Section: React.createClass(
    {
        render: function()
        {
            return this.props.children.length ? (<div>{this.props.children.map((child) => child)}</div>) : this.props.children;
        }
    })
};
