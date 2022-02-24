/**
 *
 * @param {"left"|"right"|"center"} hAlign
 * @param {"top"|"bottom"|"center"} vAlign
 * @param {*} style
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Vertical({hAlign,vAlign,style,...props}){
    const alignItems = {left:'flex-start',right:'flex-end',center:'center'}[hAlign];
    const justifyContent = {top:'flex-start',bottom:'flex-end',center:'center'}[vAlign];
    return <div style={{display:'flex',flexDirection:'column',justifyContent,alignItems,...style}}>{props.children}</div>
}