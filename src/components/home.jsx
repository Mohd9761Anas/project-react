import React from "react";
import Heading from "./heading";
import OPDList from "./OPDList";
import UserHistory from "./history";
import PredictDisease from "./predictDisease";

import AllUsersHistory from "./adminhistory";
// const Home = ({ user }) => {
//     return (
//        <div>
          
//           <Heading />
//           <OPDList />
//           <PredictDisease user={user} />
//           <UserHistory user={user} />
//        </div>
//     );
// };
const Home = ({ user }) => {
   return (
       <div>
           <Heading />
            
           <OPDList />
           {user ? (
               <>
                   <PredictDisease user={user} />
                   <UserHistory user={user} />
                   {/* <NaturalInputPredictor user={user} /> */}
                   
               </>
           ) : (
               <div className="alert alert-info mt-4">
                   Please login to access disease prediction and view your history.
               </div>
           )}
       </div>
   );
};
export default Home;
