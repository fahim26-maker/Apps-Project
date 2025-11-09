const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem("appList");
    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
        else {
            return [];
        }
}

const addStoreDB = (id) => {
    const storedAppData = getStoredApp();
    if (storedAppData.includes(id)) {
        console.log("Hello")
        alert("This App already installed")
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appList",data)
    }
}

export {addStoreDB, getStoredApp};