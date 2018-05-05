import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Klasse extends Component {
    render() {
        return (
            <div>
                <Header text="Cách sử dụng class trong ES 6"/>

                        Class được khai báo chuẩn theo OOP, bằng cách sử dụng từ khóa class.
                Class trong ES6 còn sử dụng được constructor-phương thức khởi tạo. Nó có thể sử dụng extend để thừa kế các phương thức.<br/>
                    Đây là 2 Ví dụ sử dụng trong ES 5 và 6
                <pre>
                    {`function Person(name){
    this.name= name;
}
Person.prototype.describe = funtion(){
    return 'Person called' + this.name;
}`}
                    </pre>

                Đây là ví dụ trong ES6
                <pre>
                    {`class Person{
    constructor(name){
        this.name=name;
    }
    describe(){
        return 'Person called' + this.name;
    }
}`}
                </pre>

                <Footer/>
            </div>
        )
    }
}

export default Klasse;
