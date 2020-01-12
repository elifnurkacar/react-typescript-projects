import React from 'react';
import './App.css';
import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";
export interface IAppState {
	users: Array<any>
}
export interface IAppProps {
}
class App extends React.Component<IAppProps, IAppState> {

constructor(props: any) {
	super(props);
	this.state = {
		users: []
	};
	this.deleteUser = this.deleteUser.bind(this);
	this.addUser = this.addUser.bind(this);

}
addUser(newUser: any) {
	let updateUsers = this.state.users;
	updateUsers.push(newUser);
	this.setState({
		users: updateUsers
	});
}
deleteUser(id: number) {
	let updateUsers = this.state.users;
	updateUsers = updateUsers.filter(user => user.id !== id);
	this.setState({
			users: updateUsers
	})
}
render() {
           const title = "User App";
            return (
              <div className="container">
					 <h4>{title}</h4>
                     <hr/>
                     <AddUser
                        addUser={this.addUser}

                     />
                     <hr/>
                     <Users
                        users={this.state.users}
                        deleteUser={this.deleteUser}
                        />
              </div>
            );
}

}

export default App;
