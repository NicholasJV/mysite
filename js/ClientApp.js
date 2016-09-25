var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle.js')

var div = React.DOM.div
var ce = React.createElement
var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
    div({style: {color: 'blue'}},
        MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
        React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
        ce(MyTitle, {title: 'Props are the best!', color: 'peru'})
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
