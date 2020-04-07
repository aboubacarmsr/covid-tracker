import React from 'react'
import './LastUpdate.module.css'

const LastUpdate = ({ data: { lastUpdate } }) => {
    return ( 
        <div> Dernière mise à jour : {new Date(lastUpdate).toLocaleDateString()} </div>
     );
}
 
export default LastUpdate;