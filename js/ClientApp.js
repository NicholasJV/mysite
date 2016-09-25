var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle.js')

var div = React.DOM.div
var ce = React.createElement
var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div({style: {color: 'blue'}},
    React.createElement(MyTitle, null),
    ce(MyTitle, {title: 'Props are the best!', color: 'peru'}),
    MyTitleFact({title: 'props af!', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
