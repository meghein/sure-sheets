import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import NERv05BotAvatar from "./NERv05BotAvatar";

import NavOptions from "./NavOptions";

//Define bot's name:
const botName = "NERv05";

const config = {
  // Defines the chatbot name
  botName: botName,
  // Defines an array of initial messages that will be displayed on first render
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}. I'm here to help as best I can.`),
    createChatBotMessage(`Do any of these options help?`, {
      
      widget: "navOptions",
    }),
    // We can insert widgets here
  ],
  
  customComponents: {
    // Replace the default bot avatar with NERv05
    botAvatar: (props) => <NERv05BotAvatar {...props} />,
    // Here, we can redefine other elements after creating MODULES to make these effects happen:
      // // Replaces the default bot chat message container
      // botChatMessage: (props) => <CustomChatMessage {...props} />,
      // // Replaces the default user icon
      // userAvatar: (props) => <MyUserAvatar {...props} />,
      // // Replaces the default user chat message
      // userChatMessage: (props) => <MyUserChatMessage {...props} />
  },
    
  // Defines an object of custom styles if you want to override styles
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  
  // Defines an array of widgets that you want to render with a chatbot message
  widgets: [
    {
      // defines the name you will use to reference to this widget in "createChatBotMessage".
      widgetName: "navOptions",
      // Function that will be called internally to resolve the widget
      widgetFunc: (props) => <NavOptions {...props} />,
      // // Any props you want the widget to receive on render
      // props: {},
      // // Any piece of state defined in the state object that you want to pass down to this widget
      // mapStateToProps: [
      //   "selectedFlightId",
      //   "selectedFlight",
      // ],
    },
  ],


  // // Defines an object that will be injected into the chatbot state, you can use this state in widgets for example
  // state: {
  //   // airports: [],
  //   // flightType: "",
  //   // selectedFlightId: "",
  //   // selectedFlight: null,
  // },


  
};
export default config