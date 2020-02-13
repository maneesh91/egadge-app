import React from 'react'
import ItemList from '../itemList/itemlist'



class Home extends React.Component{
    render(){
        return(
            <div>
              <div>                
                <ItemList />
              </div>
            </div>
        )
    }
}

export default Home