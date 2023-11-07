import Item from "./Item"


const List = ({listData}) => {
    return <div>
        {
       listData.map((item) => {
           const {note, date, time} = item
           return <Item note = {note} date = {date} time = {time}/>
       })
        }
       
    </div>
}


export default List