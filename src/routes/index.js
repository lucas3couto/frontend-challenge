/* eslint-disable no-unused-expressions */
import React from 'react'
import {  Switch } from 'react-router-dom'
import Route from './Route'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Feed from '../pages/Feed'
import Events from '../pages/Events'
import EditProfile from '../pages/EditProfile'
import Notification from '../pages/Notification'
import Indications from '../pages/Indications'
import ProfileConnections from '../pages/Profile/Connections'
import Settings from '../pages/Settings'
import Account from '../pages/Account'

const Routes = () => (
  <Switch>
    <Route path="/entrar" exact component={SignIn}/>
    <Route path="/cadastrar" exact component={SignUp}/>
    <Route path="/" exact component={Dashboard} notification isPrivate/>
    <Route path="/feed" exact component={Feed} isPrivate/>
    <Route path="/eventos" exact component={Events} isPrivate/>
    <Route path="/perfil/editar" exact component={EditProfile} isPrivate back land/>
    <Route path="/minha-conta" exact component={Account} isPrivate back land/>
    <Route path="/notificacoes" exact component={Notification} isPrivate land back/>
    <Route path="/indicacoes" exact component={Indications} isPrivate land back/>
    <Route path="/configuracoes" exact component={Settings} back isPrivate land />
    <Route path="/:username" exact component={Profile} isPrivate back setting/>
    <Route path="/:username/conexoes" component={ProfileConnections} back isPrivate/>
  </Switch>
)

export default Routes
