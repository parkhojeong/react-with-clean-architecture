import { ISessionVO } from '../vos/session';
import { ITokenDTO } from "../infrastructures/httpRequest";

export interface ISessionRepository {
  login(SessionVO: ISessionVO): Promise<ITokenDTO>;
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}