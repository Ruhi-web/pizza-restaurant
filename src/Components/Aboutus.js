import React from 'react'

const Aboutus = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="about_text col-lg-6 col-12">
                        <h3>About Us</h3>
                        <h1>WELCOME TO MEASTRO PIZZINI</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sunt ullam culpa tenetur minus, molestias ex nulla harum corporis, velit quod praesentium impedit ut! Facilis voluptate doloremque autem veritatis numquam?
                        </p>
                        <div className="about_btn">
                            <a href="#" className="btn btn-smart">READ MORE</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="abt_img">
                            <img src="../img/pizza.jpg" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutus
