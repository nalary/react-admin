import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img 
                        src="https://images.pexels.com/photos/654693/pexels-photo-654693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="widgetSmImg" 
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">UX Designer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://images.pexels.com/photos/2805050/pexels-photo-2805050.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="widgetSmImg" 
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Christina Hagan</span>
                        <span className="widgetSmUserTitle">UI Designer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://images.pexels.com/photos/9132079/pexels-photo-9132079.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="widgetSmImg" 
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ivy Cullen</span>
                        <span className="widgetSmUserTitle">HR Manager</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://images.pexels.com/photos/7562076/pexels-photo-7562076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Finnlay Macleod</span>
                        <span className="widgetSmUserTitle">CEO & Founder</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                        src="https://images.pexels.com/photos/9576519/pexels-photo-9576519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="widgetSmImg" 
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Marco Lake</span>
                        <span className="widgetSmUserTitle">Software QA</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;
