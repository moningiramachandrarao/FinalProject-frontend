import Car from "./images/p6.avif";
import {  Link } from 'react-router-dom';
function Shop(){
  
    return (
        <div>
        <div class="container-fluid d-flex ">
            <div class="card mx-2" style={{width:"500px"}} >
              <img class="card-img-top " src={Car} alt="car1" />
              <div class="card-body">
                <h4>Mercedes Maybach S-Class</h4>
                <p>Price:3.2crore</p>
                <Link to="/details1">
                <button class="btn btn-primary">Details</button>
                </Link>
           
              </div>
            
            </div>
            <div class="card mx-2" style={{width:"500px"}} >
              <img class="card-img-top w-100" src={Car} alt="car1" />
              <div class="card-body">
                <h4>Mercedes Maybach S-Class</h4>
                <p>Price:3.2crore</p>
                <button class="btn btn-primary">Details</button>
              </div>
            
            </div>
            <div class="card mx-2" style={{width:"500px"}} >
              <img class="card-img-top w-100" src={Car} alt="car1" />
              <div class="card-body">
                <h4>Mercedes Maybach S-Class</h4>
                <p>Price:3.2crore</p>
               <button class="btn btn-primary">Details</button>
              </div>
            
            </div>
            
        </div>
        <div class="container-fluid d-flex my-2 ">

            <div class="card mx-2" style={{width:"500px"}} >
              <img class="card-img-top " src={Car} alt="car1" />
              <div class="card-body">
                <h4>Mercedes Maybach S-Class</h4>
                <p>Price:3.2crore</p>
                <button class="btn btn-primary">Details</button>
              </div>
            
            </div>
            <div class="card mx-2" style={{width:"500px"}} >
              <img class="card-img-top w-100" src={Car} alt="car1" />
              <div class="card-body">
                <h4>Mercedes Maybach S-Class</h4>
                <p>Price:3.2crore</p>
                <button class="btn btn-primary">Details</button>
              </div>
            
            </div>
            <div class="card mx-2" style={{width:"500px"}} >
              <img class="card-img-top w-100" src={Car} alt="car1" />
              <div class="card-body">
                <h4>Mercedes Maybach S-Class</h4>
                <p>Price:3.2crore</p>
                <button class="btn btn-primary">Details</button>
              </div>
            
            </div>
            
        </div>
        </div>
        
        
    )
}
export default Shop;