import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh'}}>
      <PrettyChatWindow
        projectId={projectId='6368d53f-c7c0-466e-9560-5c0d706c8e3d'}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh'}}
      />
    </div>
  );
};

export default ChatsPage;