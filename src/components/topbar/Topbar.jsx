import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./topbar.css";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">HO : Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img 
                        src="https://cdn.pixabay.com/photo/2018/08/23/22/29/girl-3626901__480.jpg" 
                        alt="" 
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
