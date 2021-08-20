// import React, { Component, Fragment } from "react";
// import { Navbar } from "./Navbar";
// // import { Search } from "./Search";
// import  Search  from "./Search";
// import { Users } from "./Users";
// import Alert from "./Alert";
// import axios from "axios";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { About } from "./About";
// //import { UserDetails } from "./UserDetails";
// import  UserDetails  from "./UserDetails";

// export class Application extends Component {
//   constructor(props) {
//     super(props);
//     this.searchUsers = this.searchUsers.bind(this);
//     this.getUser = this.getUser.bind(this);
//     this.getUserRepos = this.getUserRepos.bind(this);
//     this.clearUsers = this.clearUsers.bind(this);
//     this.setAlert = this.setAlert.bind(this);
//     this.state = {
//       loading: false,
//       users: [],
//       user: {},
//       repos: [],
//       alert: null,
//     };
//   }

//   searchUsers(keyword) {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       axios
//         .get(`https://api.github.com/search/users?q=${keyword}`)
//         .then((res) =>
//           this.setState({ users: res.data.items, loading: false })
//         );
//     }, 1000);
//   }

//   getUser(username) {
//     this.setState({ loading: true });

//     setTimeout(() => {
//       axios
//         .get(`https://api.github.com/users/${username}`)
//         .then((res) => this.setState({ user: res.data, loading: false }));
//     }, 1000);
//   }
//   getUserRepos(username) {
//     this.setState({ loading: true });

//     setTimeout(() => {
//       axios
//         .get(`https://api.github.com/users/${username}/repos`)
//         .then((res) => this.setState({ repos: res.data, loading: false }));
//     }, 1000);
//   }

//   clearUsers() {
//     this.setState({
//       users: [],
//     });
//   }

//   setAlert(msg, type) {
//     this.setState({ alert: { msg, type } });
//     setTimeout(() => {
//       this.setState({ alert: null });
//     }, 2000);
//   }

//   render() {
//     return (
//       <BrowserRouter>
//         <Navbar />
//         <Alert alert={this.state.alert} />
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={(props) => (
//               <>
//                 <Search
//                   searchUsers={this.searchUsers}
//                   clearUsers={this.clearUsers}
//                   showClearButton={this.state.users.length > 0 ? true : false}
//                   setAlert={this.setAlert}
//                 />
//                 <Users users={this.state.users} loading={this.state.loading} />
//               </>
//             )}
//           />
//           <Route path="/about" component={About} />
//           <Route
//             path="/user/:login"
//             render={(props) => (
//               <UserDetails
//                 {...props}
//                 getUser={this.getUser}
//                 getUserRepos={this.getUserRepos}
//                 user={this.state.user}
//                 repos={this.state.repos}
//                 loading={this.state.loading}
//               />
//             )}
//           />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default Application;

import React, { useState } from "react";
import { Navbar } from "./Navbar";
// import { Search } from "./Search";

// import { Users } from "./Users";
import Home from "./Home";
import Alert from "./Alert";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./About";
//import { UserDetails } from "./UserDetails";
import UserDetails from "./UserDetails";
import GithubState from "../context/github/GithubState";
import AlertState from "../context/alert/AlertState";
import NotFound from "./NotFound";

export default function Application() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={UserDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}
