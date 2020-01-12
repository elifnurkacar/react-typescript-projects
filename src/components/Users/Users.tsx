import React from "react";
import User from "../User/User";
import { IUsersProps } from "./IUsersProps";
class Users extends React.Component<IUsersProps> {

render() {

const users  = this.props.users ? this.props.users : [];
     return(
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">İd</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {
 				 users.map(user => {
				        const {id, name, email} = user;
						return <User
							deleteUser={this.props.deleteUser}
 					        key={id}
							id={id}
							name={name}
 					        email={email}
					/>
 				})
		  }
          </tbody>

        </table>
     );
}
}
export default Users;