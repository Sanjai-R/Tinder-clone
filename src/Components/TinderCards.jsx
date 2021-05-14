import React, { useState ,useEffect} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";
export default function TinderCards() {
  const [people, setPeople] = useState([]); 

  useEffect(()=>  {
     const unsubscribe =  database.collection('people').onSnapshot(snapshot => {
       setPeople(snapshot.docs.map(doc => doc.data()))
     });
     return ()  =>{
       unsubscribe();
     }
  },[])
  
  return (
    <div>
      <div className="card-container">
        {people.map((people,index) => (
          <TinderCard className="swipe" key = {index}>
            <div
              style={{ backgroundImage: `url(${people.url})` }}
              className="card"
            >
              <h3>{[people.Name]}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
