interface IResponse {
  statusCode: number;
  data?: any;
  uri?: string;
}

export class ResponsePayload {
  statusCode: number;
  data?: any;
  uri?: string;

  constructor({ statusCode, data, uri }: IResponse) {
    this.statusCode = statusCode;
    this.data = data;
    this.uri = uri;
  }
}
