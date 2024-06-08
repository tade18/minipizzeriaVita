import "./PageHeading.css";

export default function PageHeading(props){
    return(
        <>
            <div className="heading-wrap">
                <h1 className="heading-h">{props.pageH1}</h1>
            </div>
        </>
    )
}