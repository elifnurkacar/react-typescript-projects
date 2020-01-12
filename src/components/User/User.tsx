import React from "react";
import { IUserProps } from "./IUserProps";
import { IUserState } from "./IUserState";

class User extends React.Component<IUserProps,IUserState>  {
	onDeleteClick(id: number) {
	const { deleteUser } = this.props;
		console.log("ID:" + id);
		deleteUser(id);
	}
	render(){
	    const id =  this.props.id ? this.props.id : 0;
	    const name = this.props.name ? this.props.name : "";
	    const email = this.props.email ? this.props.email : "";

		return(
			<tr>
				<td>{id}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td><button
						onClick={this.onDeleteClick.bind(this, id)}
						className="btn btn-danger"
					>Delete</button></td>

			</tr>
		);
	}
}
export default User;