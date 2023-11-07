


const Item = ({ note,date,time}) => {
    
    return <div>
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        
        <button>刪除</button>
    </div>
}


export default Item