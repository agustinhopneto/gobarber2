export default interface IMAilProvider {
  sendMail(to: string, body: string): Promise<void>;
}
