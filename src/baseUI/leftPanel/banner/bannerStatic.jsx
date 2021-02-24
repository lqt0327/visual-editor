import { Upload, LinkAddress } from "components";

function BannerStatic() {
    return (
        <div className="schema-editor-container">
            <Upload 
                imgWidth={750}
                imgHeight={280}
            />
            <LinkAddress />
        </div>
    )
}

export default BannerStatic;