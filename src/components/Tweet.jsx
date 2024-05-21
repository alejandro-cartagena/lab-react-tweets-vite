import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";



function Tweet({ tweet }) {


  return (
    <div className="tweet">
      
      <ProfileImage tweet={tweet}/>

      <div className="body">
        <div className="top">
          
          <User tweet={tweet}/>

          <Timestamp tweet={tweet}/>

        </div>

        {/*  */}
        <Message tweet={tweet}/>
        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;


