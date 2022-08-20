import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productDate } from '../../data'
import Publish from '@mui/icons-material/Publish';


import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Apple Airpods</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productDate} dataKey="sales" title="Sales In Month" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/images/airpod.jpg" alt="" className='ProductInfoImg' />
            <span className="productName">Apple Airpods</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Name:</span>
              <span className="productInfoValue">Apple Airpods</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">$90000</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
            
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="/images/airpod.jpg" alt="profile" className="productUploadImg" />
              <label><Publish /></label>
              <input type="file" style={{display: 'none'}} />
            </div>
            <button className="productButton">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
