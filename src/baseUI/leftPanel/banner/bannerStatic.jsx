function BannerStatic(props) {
    const {list} = props
    return (
        <div className="schema-editor-container">
            {
                list.map((item, i) => {
                    return (
                        <div key={i}>{item()}</div>
                    )
                })
            }
        </div>
    )
}

export default BannerStatic;