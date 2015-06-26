var React = require('react');
var Griddle = require('griddle-react');

module.exports = React.createClass(
{
    displayName: 'Grid',

    getInitialState: function()
    {
        var fakeData = [];
        for (var i = 0;i < 100; ++i)
        {
            fakeData.push(
            {
                "id": i,
                "name": "Mayer Leonard",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
            });
        }
        return { data: fakeData };
    },

    render: function()
    {
        return (
            <div className='grid-wrapper'>
                <div className='content-header'>
                    <div className='pull-left'>
                        <h4>Generic Grid example</h4>
                    </div>
                    <div className='pull-right'>
                        <button className='btn btn-xs'>Add</button>
                        <button className='btn btn-xs'>Delete</button>
                        <a><i className='fa fa-refresh'></i></a>
                    </div>
                </div>
                <div className='grid-container'>
                    <Griddle results={this.state.data} />
                </div>
            </div>
        );
    }
});
