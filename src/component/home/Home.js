import React, { Fragment } from "react";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment>
                 <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                            <h2 className="display-3 animated slideInDown">
                               <i className="fa fa-shopping-cart"/> BigBasket</h2>
                            <p className="lead px-3 animated slideInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda doloremque ea eaque, eligendi eos eum exercitationem laboriosam libero odit porro provident quia quidem sed similique suscipit voluptatem voluptatibus, voluptatum?</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Home;