import { useRef } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showList,settingShowIndex})=>{
    const headerRef=useRef(null);

    // const[showList,setShowList]=useState(false);

    const hideShowList=()=>{
        settingShowIndex();
        headerRef.current.focus();
    }

    
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4" >
        <div className="flex justify-between cursor-pointer " onClick={(hideShowList)}  ref={headerRef}
        tabIndex={0} >
        <span className="mx-2 font-bold" >{data?.title} ({data.itemCards.length})</span>
            <span>{showList?"▲":"▼"}</span>
        </div>
            {showList && <ItemList  items={data.itemCards}/>}
        </div>

    )
};

export default RestaurantCategory;