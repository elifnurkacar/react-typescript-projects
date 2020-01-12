export interface IUserProps {
		id?: number;
    	name?: string;
    	email?: string;
    	deleteUser(id: number): void;
}