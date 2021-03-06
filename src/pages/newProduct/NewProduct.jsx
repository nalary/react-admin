import "./newProduct.css";
import { Publish } from '@material-ui/icons';

const NewProduct = () => {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductUpload">
                    <img 
                        src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="addProductUploadImg" 
                    />
                    <label htmlFor="imgFile">
                        <Publish className="addProductIcon"/>
                    </label>
                    <input type="file" id="imgFile" style={{ display: "none" }}/>
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
};

export default NewProduct;
