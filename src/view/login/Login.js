import React, {Component} from "react";
import {Button} from "antd";
import "../../css/login/login.css"

class  Login extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return(
            <div className="wrap">
                <div className="form-wrap">
                    <form className="form-content">
                        <Button type="primary">点击</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
