import React,{useState,useEffect} from 'react';
import rm from './RightMiddleSec.module.css'

const RightMiddleSec = () => {
  const [userdata, setUserData]=useState([]);
  const [show, setShow] = useState(3);


  const handleShow=()=>{
    setShow(show + 3);
  }
 
  useEffect(() => {
    // fetch data from an API
    fetch("/userData.json")
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, []); 

    // console.log(userdata)

  return (
    <>
      <div className={rm.box}>
      <header className={rm.head}>
      <h3 style={{paddingLeft:"1rem"}}><h1>Who To Follow</h1></h3>
      </header>
       
<section>
        {
          userdata.slice(0,show).map((element) => (
            
            <div className={rm.main}>   
          <div className={rm.contentmain} key={element.user_id}>
            <div className={rm.content}>
              <img
                className={rm.image}
                src={element.img}
                alt=""
              />
            </div>
            <div className={rm.text}>
              <h5>{element.first_name}</h5>
              <p>@{element.email}</p>
            </div>
            <div style={{ paddingTop: "1.5em"}}>
              <button className={rm.btn}>Follow</button>
            </div>
          </div>
          </div>
        ))}
        <h1 className={rm.ShowMore} onClick={handleShow}>Show more..</h1>
        </section>
      </div>
    </>
  );
}

export default RightMiddleSec;