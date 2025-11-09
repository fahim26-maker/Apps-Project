import React from 'react';
import { useEffect, useState } from "react";

const SlowNetworkLoader = ({url}) => {
   const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let slowNetworkTimer = setTimeout(() => {
      setLoading(true); // show spinner if fetch takes > 100ms
    }, 100);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        clearTimeout(slowNetworkTimer); // cancel spinner if fast
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        clearTimeout(slowNetworkTimer);
        setLoading(false);
        console.error("Fetch error:", err);
      });
  }, [url]);



    return (
        <div>
      {loading && <span className="loading loading-spinner loading-xl mx-auto block"></span>}
      {data && <div>{/* render data */}</div>}
    </div>

    );
};

export default SlowNetworkLoader;