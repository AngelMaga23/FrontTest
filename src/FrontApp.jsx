import { TableComponent } from "./components/TableComponent";
import { useState } from "react";
import { TableProducts } from "./components/TableProducts";


export const FrontApp = () => {

    const [option, setOption] = useState([]);

    const [numberOrder, setNumberOrder] = useState('')

    const onAddItem = ( newItem ) => {
        setOption(newItem);
    }

    const onAddOrder = ( orderNumber ) => {
        setNumberOrder(orderNumber);
    }


  return (
    <>
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">

                    {
                        option.length == 0 && (<TableComponent 
                                                    onAddItems={ (value) => onAddItem(value) } 
                                                    onAddOrders={ (value) => onAddOrder(value) } 
                                                />)
                    }

                    {
                        option.length > 0 && (<TableProducts
                                                onAddItems={ (value) => onAddItem(value) } 
                                                onAddOrders={ (value) => onAddOrder(value) } 
                                                orderNum={ numberOrder } 
                                                items={ option } 
                                            />)
                    }
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>

    </>
  )
}
