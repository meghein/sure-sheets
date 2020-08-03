// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
//This is where we set his reactivity to input speech from the user:
  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }

    if (lowerCaseMessage.includes("why")) {
      this.actionProvider.handleWhyLinkList()
    }

    

  }
}

export default MessageParser;