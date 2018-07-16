import React from 'react'
import Api from './Api'
import Intro from './Intro.md'
import cn from 'classnames'
import { render } from 'react-dom'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

localizer(globalize)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import 'react-big-calendar/lib/less/styles.less'
import './styles.less'
import './prism.less'
import Basic from './demos/basic'
import Selectable from './demos/selectable'
import Cultures from './demos/cultures'
import Popup from './demos/popup'
import Rendering from './demos/rendering'
import CustomView from './demos/customView'
import Resource from './demos/resource'
import DndResource from './demos/dndresource'
import Timeslots from './demos/timeslots'
import Dnd from './demos/dnd'

class Example extends React.Component {
  state = { selected: 'basic' }

  render() {

    return (
      
    )
  }
}

render(<Example />, document.getElementById('app'))
