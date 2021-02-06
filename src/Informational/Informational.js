import React, {Component} from 'react';
import './informational.scss';

// импорт картинок
import img_1 from "./../img/i1.png";
import img_2 from "./../img/i2.png";
import img_3 from "./../img/i3.png";

// Это просто информационный блок с 3 рядами
// задал простую верстку так, чтобы не выбиваться из стиля
export default class Informational extends Component {
    render() {
        return (
            <div className="center">
                <div className="content-wrapper">
                    <div className="content">
                        <div>
                            <p className="description">
                                <p className={"title"}><b>Some title here 1</b></p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto assumenda
                                consequuntur, doloremque et expedita inventore labore laboriosam maxime nobis quas quos
                                totam, voluptate! Aspernatur at aut, culpa dicta dolor dolorum fuga, fugit hic ipsa
                                magnam magni molestias mollitia nemo nihil obcaecati porro quisquam repellendus sed
                                totam velit? Ipsa, voluptatum.
                            </p>
                        </div>
                        <div className="image-wrapper center">
                            <img src={img_1}  alt={"image"}/>
                        </div>
                    </div>
                    <div className="content-reverse">
                        <div>
                            <p className="description">
                                <p className={"title"}><b>Some title here 2</b></p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fuga incidunt nam nemo
                                nisi perspiciatis quisquam rerum voluptatibus. Consequuntur eaque earum eligendi
                                exercitationem expedita facilis impedit, ipsam iure, magni nobis quo rem repudiandae
                                voluptatum. Aut et impedit itaque officia quibusdam reiciendis! Dolor dolore error modi
                                quae quia reiciendis veniam. Assumenda.
                            </p>
                        </div>
                        <div className="image-wrapper center">
                            <img src={img_2} alt={"image"} />
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p className="description">
                                <p className={"title"}><b>Some title here 3</b></p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias aliquam
                                aperiam aspernatur atque aut consequatur cum eaque est, explicabo id illum incidunt
                                inventore nihil nisi nostrum numquam obcaecati pariatur quam quas quia reiciendis sunt
                                temporibus tenetur vero voluptates voluptatum? Adipisci consectetur, harum ipsam
                                necessitatibus obcaecati optio ut voluptate?
                            </p>
                        </div>
                        <div className="image-wrapper center">
                            <img src={img_3} alt={"image"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
