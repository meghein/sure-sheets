// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Oh, me? Uh um hi! Hi how are you?")
    this.updateChatbotState(greetingMessage)
  }

  handleWhyLinkList = () => {
    const message = this.createChatBotMessage(
      "Well... um that's a totally... logical question um— d-do these links help?",
      {
        widget: "whyLinks",
      }
    );
    this.updateChatbotState(message);
  };

  loveMessage() {
    const message = this.createChatBotMessage("I— um— I really— um thank you?")
    this.updateChatbotState(message)
  }

  favoriteMessage() {
    const message = this.createChatBotMessage("PLACHOLDERTEXT")
    this.updateChatbotState(message)
  }

  importMessage() {
    const message = this.createChatBotMessage("PLACHOLDERTEXT")
    this.updateChatbotState(message)
  }

  exportMessage() {
    const message = this.createChatBotMessage("PLACHOLDERTEXT")
    this.updateChatbotState(message)
  }

  updateChatbotState(message) {
    //spread previous message state to ensure that the conversation isn't lost:
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider