import { Component } from "react";

export default class ReactLifeCycle extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Hello world',
            isShow: true,
        };
        console.log("ReactLifeCycle init constructor");
    }

    changeText() {
        this.setState({ message: 'Hi react'})
    }

    render() {
        console.log('ReactLifeCycle init render')
        return (
            <>
                <h1>React Life Cycle</h1>
                <p>{this.state.message}</p>
                <button onClick={() => this.changeText()}>修改文字 componentDidUpdate</button>
            </>
        )
    }

    componentDidMount() {
        console.log('ReactLifeCycle componentDidMount...')
    }
    componentDidUpdate() {
        console.log('ReactLifeCycle componentDidUpdate...')
    }
    componentWillUnmount() {
        // 卸載的瞬間執行 (before change router link)
        console.log('ReactLifeCycle componentWillUnmount...')
    }
}