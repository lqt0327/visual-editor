import './style.sass'

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-wrapper-top">
                    <div className="footer-wrapper-top-left">
                        <a href="https://www.baidu.com">测试数据</a>
                        <a href="https://www.baidu.com">测试数据</a>
                        <a href="https://www.baidu.com">测试数据</a>
                        <a href="https://www.baidu.com">测试数据</a>
                        <a href="https://www.baidu.com">测试数据</a>
                        <a href="https://www.baidu.com">测试数据</a>
                    </div>
                    <div className="footer-wrapper-top-right">
                        <a href="https://www.baidu.com"><span className="icon iconfont">&#xe667;</span></a>
                        <a href="https://www.baidu.com"><span className="icon iconfont">&#xe65f;</span></a>
                    </div>
                </div>
                <div className="footer-wrapper-middle">
                    <span className="police"><a href="https://www.baidu.com">京公网安备xxxxxx00xx01号</a></span>
                    <i></i>
                    <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">京ICP备1xxxxxxx号</a>
                    <i></i>
                    <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">京ICP备1xxxxxxx号</a>
                </div>
                <div className="footer-wrapper-bottom">
                    <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">京ICP备1xxxxxxx号</a>
                    <i></i>
                    <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">京ICP备1xxxxxxx号</a>
                    <i></i>
                    <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">京ICP备1xxxxxxx号</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;