import React from "react";
import { IAddUserProps } from "./IAddUserProps";
import { IAddUserState } from "./IAddUserState";

class AddUser extends React.Component<IAddUserProps, IAddUserState> {
constructor(props: any){
	super(props);
	this.state = {
		name: "",
		email: ""
	};
}

render(){
return (
<div className = "card">
    <h4 className="card-header">Add New User</h4>
    <div className = "card-body">
        <form onSubmit={(e) => this.onAddSubmit(e)}>
           <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="form-control"
                    onChange={(e) => this.onNameChange(e)}
              />
           </div>
           <div className="form-group">
                         <label htmlFor="email">Name</label>
                         <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                className="form-control"
                                onChange={(e) => this.onEmailChange(e)}

                         />
           </div>
           <button
                type="submit"
                className="btn btn-danger btn-block"
//                 onClick={this.addNewUser.bind(this)}
                >Add New User
           </button>
        </form>
    </div>
</div>
)
}
private onAddSubmit = (e: any) => {
	const addUser = this.props.addUser;
	const newUser = {
		id: Math.random(),
		name: this.state.name,
		email: this.state.email
	};
	addUser(newUser);
	e.preventDefault();

};
private onNameChange = (e: any) => {
	this.setState({
		name: e.target.value
	});
};
private onEmailChange = (e: any) => {
	this.setState({
		email: e.target.value
	});
};
}
export default AddUser;