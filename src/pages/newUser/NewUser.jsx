import "./newUser.css";

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTile">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="annie2002"/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Annie Brown"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="annie2002@nyc.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="password" placeholder="+1 234 567 89"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="password" placeholder="New York | USA"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newUserButton">Create</button>
        </div>
    );
};

export default NewUser;