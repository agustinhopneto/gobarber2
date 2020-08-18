import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMAilProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
