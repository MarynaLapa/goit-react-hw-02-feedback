import styled from "styled-components";


const NotificationMessage = styled('p')`
    /* background: linear-gradient(to bottom, #5d326c, #350048); */
    color: #4f4fc2;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
`
const Notification = ({ message }) => {
    return <NotificationMessage>
        {message}
    </NotificationMessage>
};



//    
//     // backgroundColor: 'linear-gradient(to bottom, #5d326c, #350048)',
//   }
// })




export default Notification;

