// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Oh, me? Uh um hi! Hi how are you?"
      );
    this.updateChatbotState(greetingMessage)
  }

  screenshots = () => {
    const message = this.createChatBotMessage(
      "Oh! I know this one! If you want to add in your stuff—images or text!—All the way on the left, there's a picture of TESS. Click on her and she'll help you through!"
      );
    this.updateChatbotState(message)
  }

  presentation = () => {
    const message = this.createChatBotMessage(
      "Thank yo—wait. What presentation—? Is—is there an audien... ce.... .... ... hi._."
    );
    this.updateChatbotState(message)
  }

  jobs = () => {
    const message = this.createChatBotMessage(
      "Oh, um, I already have a job, but I think Meg and Bryan would like to find a home for their brains to do jobs."
    );
    this.updateChatbotState(message)
  }

  edits = () => {
    const message = this.createChatBotMessage(
      "Hmm... I can't help with artistic choices, but I can definitely say that you can edit by clicking some of the things you've added on the right, then moving them around on the big glowy box in the middle!"
      );
    this.updateChatbotState(message)
  }

  delete() {
    const message = this.createChatBotMessage(
      "Oh yeah! Getting rid of things is pretty easy. Click the thing you want to get rid of, and then, click on Mr. Can. (He's not really a robot or anything, but I painted a face on him so he'd fit in with me and TESS.)"
      );
    this.updateChatbotState(message)
  } 

  exports = () => {
    const message = this.createChatBotMessage(
      "I'm pretty sure we have a button for that around here somewhere... Does it say 'export' somewhere? Like down by the bottom? Errr maybe it was the top? Wait! It's the printer on the left side! That does it! Click that!"
      );
    this.updateChatbotState(message)
  }

  creators = () => {
    const message = this.createChatBotMessage(
      "Oh! That's one of the people who made this website! Charlie did the artsy stuff, Bryan hooked everything up, and Meg is the wizard that made this whole thing work!"
    );
    this.updateChatbotState(message)
  }

  handleWhyLinkList = () => {
    const message = this.createChatBotMessage(
      "Well... um that's a totally... logical thing to say um— d-do these links help?",
      {
        widget: "whyLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleHowLinkList = () => {
    const message = this.createChatBotMessage(
      "Well... um that's a totally... logical thing to say um— d-do these links help?",
      {
        widget: "howLinks",
      }
    );
    this.updateChatbotState(message);
  };

  no = () => {
    const message = this.createChatBotMessage(
      "Oh goodness. I knew this day would come. I'm so sorry I couldn't help! Oh I'm going to need an extra long charge when this is all over...",
    );
    this.updateChatbotState(message);
  };

  loveMessage() {
    const message = this.createChatBotMessage("I— um— I really— um thank you?")
    this.updateChatbotState(message)
  }

  favoriteMessage() {
    const message = this.createChatBotMessage("I'm glad you asked. I like a lot of things, but nobody ever asks--my favorite template is the third one because it looks like a robot and my favorite people are my programmers Meg and Bryan and Charlie and my favorite color is blue and my favorite book is Do Androids Dream of Electric Sheep (they do) and my favorite...")
    this.updateChatbotState(message)
  }


  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider