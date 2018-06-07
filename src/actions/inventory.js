import database from '../firebase/firebase';

//Dispatching project data to redux
export const setInventory = (inventory) => ({
    type: 'SET_INVENTORY',
    inventory
});

// Getting Project Data from Firebase
export const startSetInventory = () => {
    return (dispatch) => {

        return database.ref('inventory')
            .once('value')
            .then((snapshot) => { 

                let inventory = snapshot.val();
                dispatch(setInventory(inventory));
            });
    }
}


/*
database.ref('inventory/pvc/2/pipe/tag').push("pipe");
*/
/*
database.ref('inventory/pvc/6/pipe').push({ barcode: "*611942039388*" , cost: 0.25, description: "PVC Pipe", name: "PVC Pipe"});

database.ref('inventory/pvc/6/elbows').push({ barcode: "*005396007340*" , cost: 0.25, description: "Long Sweep 90", name: "Long Sweep 90"});
database.ref('inventory/pvc/6/elbows').push({ barcode: "*61194203359*" , cost: 0.25, description: "90", name: "90"});
database.ref('inventory/pvc/6/elbows').push({ barcode: "*61194203374*" , cost: 0.25, description: "St 90", name: "St 90"});
//database.ref('inventory/pvc/6/elbows').push({ barcode: "*61194203395*" , cost: 0.25, description: "60", name: "60"});
database.ref('inventory/pvc/6/elbows').push({ barcode: "*61194203405*" , cost: 0.25, description: "45", name: "45"});
database.ref('inventory/pvc/6/elbows').push({ barcode: "*61194203412*" , cost: 0.25, description: "St 45", name: "St 45"});
database.ref('inventory/pvc/6/elbows').push({ barcode: "*61194203420*" , cost: 0.25, description: "22 1/2", name: "22 1/2"});
database.ref('inventory/pvc/6/elbows').push({ barcode: "*61194203425*" , cost: 0.25, description: "St 22 1/2", name: "St 22 1/2"});

database.ref('inventory/pvc/6/wyes').push({ barcode: "*61194203611*" , cost: 0.25, description: "Wye", name: "Wye"});
database.ref('inventory/pvc/6/wyes').push({ barcode: "*61194203624*" , cost: 0.25, description: "Reducing Wye", name: "Reducing Wye"});
//database.ref('inventory/pvc/6/wyes').push({ barcode: "*61194203634*" , cost: 0.25, description: "Reducing St Wye", name: "Reducing St Wye"});
//database.ref('inventory/pvc/6/wyes').push({ barcode: "*61194203640*" , cost: 0.25, description: "Double Wye", name: "Double Wye"});
//database.ref('inventory/pvc/6/wyes').push({ barcode: "*61194203647*" , cost: 0.25, description: "Double Reducing Wye", name: "Double Reducing Wye"});

database.ref('inventory/pvc/6/tees').push({ barcode: "*61194203467*" , cost: 0.25, description: "Tee", name: "Tee"});
database.ref('inventory/pvc/6/tees').push({ barcode: "*61194203477*" , cost: 0.25, description: "Reducing Tee", name: "Reducing Tee"});
//database.ref('inventory/pvc/6/tees').push({ barcode: "*61194203486*" , cost: 0.25, description: "Reducing St Tee", name: "Reducing st Tee"});
database.ref('inventory/pvc/6/tees').push({ barcode: "*61194210216*" , cost: 0.25, description: "Cleanout Tee", name: "Cleanout Tee"});
//database.ref('inventory/pvc/6/tees').push({ barcode: "*61194203512*" , cost: 0.25, description: "Cross", name: "Cross"});
//database.ref('inventory/pvc/6/tees').push({ barcode: "*61194203519*" , cost: 0.25, description: "Reducing Cross", name: "Reducing Cross"});

database.ref('inventory/pvc/6/misc').push({ barcode: "*61194203193*" , cost: 0.25, description: "Coupling", name: "Coupling"});
database.ref('inventory/pvc/6/misc').push({ barcode: "*61194211074*" , cost: 0.25, description: "Reducing Coupling", name: "Reducing Coupling"});
database.ref('inventory/pvc/6/misc').push({ barcode: "*61194203268*" , cost: 0.25, description: "Bushing", name: "Bushing"});
database.ref('inventory/pvc/6/misc').push({ barcode: "*61194203243*" , cost: 0.25, description: "Male-Female Clean Out A", name: "Male-Female Clean Out A"});
//database.ref('inventory/pvc/6/misc').push({ barcode: "*61194203671*" , cost: 0.25, description: "P-Trap", name: "P-Trap"});
database.ref('inventory/pvc/6/misc').push({ barcode: "*61194203305*" , cost: 0.25, description: "Cap", name: "Cap"});
//database.ref('inventory/pvc/6/misc').push({ barcode: "*61194203430*" , cost: 0.25, description: "Closet Bend", name: "Closet Bend"});
//database.ref('inventory/pvc/6/misc').push({ barcode: "*61194203706*" , cost: 0.25, description: "Closet Collar", name: "Closet Collar"});
//database.ref('inventory/pvc/6/misc').push({ barcode: "*739236303424*" , cost: 0.25, description: "Closet Riser", name: "Closet Riser"});
//database.ref('inventory/pvc/6/misc').push({ barcode: "*005396009120*" , cost: 0.25, description: "4in. Backwater Valve", name: "4in. Backwater Valve"});
//database.ref('inventory/pvc/6/misc').push({ barcode: "*005396000800*" , cost: 0.25, description: "Clamp-All", name: "Clamp-All"});
//database.ref('inventory/pvc/6/misc').push({ barcode: "*18578000124*" , cost: 0.25, description: "Fernco", name: "Fernco"});

*/