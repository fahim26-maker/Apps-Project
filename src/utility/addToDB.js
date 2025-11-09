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
export const removeAppFromDB = (id) => {
  const storedAppData = getStoredApp(); // ['2', '1', '6']
  const updatedAppList = storedAppData.filter(appId => appId !== id.toString());
  localStorage.setItem("appList", JSON.stringify(updatedAppList));
};

export {addStoreDB, getStoredApp};