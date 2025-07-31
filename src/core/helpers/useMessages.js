import {MessagesAgent} from "../modules/messages/MessagesAgent.js";

export function useMessages() {
  return new MessagesAgent();
}
