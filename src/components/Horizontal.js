/**
 *
 * @param {"left"|"right"|"center"} hAlign
 * @param {"top"|"bottom"|"center"} vAlign
 * @param {*} style
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Horizontal({hAlign,vAlign,style,...props}){
    const justifyContent = {left:'flex-start',right:'flex-end',center:'center'}[hAlign];
    const alignItems = {top:'flex-start',bottom:'flex-end',center:'center'}[vAlign];
    const {children,...properties} = props;
    return <div style={{display:'flex',flexDirection:'row',justifyContent,alignItems,...style}} {...properties}>{children}</div>
}